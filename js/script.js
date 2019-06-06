import { breaks } from "./breaks";

var host = 'https://data.irozhlas.cz'
if (window.location.hostname == 'localhost') {
    host = 'http://localhost'
}

var map = new mapboxgl.Map({
    container: "map",
    style: "https://data.irozhlas.cz/mapa-domu/map_styl/style.json",
    zoom: 6.85,
    maxZoom: 11,
    attributionControl: false,
    center: [15.3350758, 49.7417517],
});

map.getCanvas().style.cursor = 'default';
map.fitBounds([[12.09,51.06],[18.87,48.55]]);

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.AttributionControl({
    compact: true,
    customAttribution: 'obrazový podkres <a target="_blank" href="https://samizdat.cz">Samizdat</a>, data <a target="_blank" href="http://vdp.cuzk.cz/">ČÚZK</a> a <a target="_blank" href="http://volby.cz/">ČSÚ</a>',
}));

map.scrollZoom.disable(); // zoom myší teprve až po interakci s mapou
map.on("click", function(e) {
    map.scrollZoom.enable();
});

const cuts = {
    'Rodiny v bytové nouzi': ['nouze_rodiny', 'rodin', 'nouze_deti', 'nouze_osoby'],
    'Rodiny na ubytovnách': ['ubyt_rodiny', 'rodin', 'ubyt_deti', 'ubyt_osoby'],
    'Rodiny v azylových domech': ['azyl_rodiny', 'rodin', 'azyl_deti', 'azyl_osoby'],
    'Osoby bez přístřeší': ['bezdom', 'POCET_OBYV'],
}

const colors = {
    'Rodiny v bytové nouzi': ['#fee5d9','#fcae91','#fb6a4a','#de2d26','#a50f15'],
    'Rodiny na ubytovnách': ['#f2f0f7','#cbc9e2','#9e9ac8','#756bb1','#54278f'],
    'Rodiny v azylových domech': ['#feebe2','#fbb4b9','#f768a1','#c51b8a','#7a0177'],
    'Osoby bez přístřeší': ['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c'],
}

let topic = 'Rodiny v bytové nouzi'

map.on('load', function() {
    map.addLayer({
        id: 'data',
        type: 'fill',
        source: {
            type: 'vector',
            tiles: [host + "/bytova-nouze/tiles/{z}/{x}/{y}.pbf"],
        },
        'source-layer': 'orp_data',
        paint: {
            'fill-color': [
                'case', 
                ['has', 'nouze_rodiny'],
                [
                    'interpolate', 
                    ['linear'], 
                    ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]],
                    breaks[topic][0], colors[topic][0],
                    breaks[topic][1], colors[topic][1],
                    breaks[topic][2], colors[topic][3],
                    breaks[topic][3], colors[topic][3],
                    breaks[topic][4], colors[topic][4],
                ],
                'white',
            ], 
            "fill-opacity": 0.8,
            "fill-outline-color": "hsla(0, 0%, 52%, 0.4)",
        }
    });
    map.addLayer({
        id: "lbls",
        type: "raster",
        source: {
            tiles: [
                "https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png",
            ],
            type: "raster",
            tileSize: 256,
        },
    });
    map.on('mousemove', function(e) {
        var d = map.queryRenderedFeatures(e.point, {
            layers: ['data']
        });
        if (d.length > 0) {
            let txt = 'Obec s rozšířenou působností <b>' + d[0].properties.NAZ_ORP + '</b></br>'
                + topic + ': ' + d[0].properties[cuts[topic][0]]
                if (topic != 'Osoby bez přístřeší') {
                    txt += ', tedy ' + d[0].properties[cuts[topic][3]] + ' osob včetně ' + d[0].properties[cuts[topic][2]] + ' dětí'
                }
                            
            document.getElementById('legend').innerHTML = txt
            
        } else {
            document.getElementById('legend').innerHTML = '<b>Vyberte oblast v mapě.</b>'
        }
    });
    document.getElementById('topic_select').addEventListener("change", function(e) {
        var sel_topic = e.target.selectedOptions[0].value;
        topic = sel_topic;
        var stl = [
            'case', 
            ['has', cuts[topic][0]],
                [
                    'interpolate', 
                    ['linear'], 
                    ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]],
                    breaks[topic][0], colors[topic][0],
                    breaks[topic][1], colors[topic][1],
                    breaks[topic][2], colors[topic][3],
                    breaks[topic][3], colors[topic][3],
                    breaks[topic][4], colors[topic][4],
                ],
            'white',
        ]
        map.setPaintProperty('data', 'fill-color', stl);
    });
    if (window.location.href.includes("latlng")){ //posunuti mapy dle url
        var ll = window.location.href.split("latlng=")[1].split('&')[0];
        map.setCenter([parseFloat(ll.split('|')[1]), parseFloat(ll.split('|')[0])]);
        map.setZoom(parseInt(ll.split('|')[2]));
    };
});

map.on('moveend', function(e) { // poloha do url pro sdileni
  var cen = map.getCenter().wrap();
  window.history.pushState('', '', window.location.pathname + '?latlng=' + cen.lat + '|' + cen.lng + '|' + map.getZoom());
});
  
$("#inp-geocode").on("focus input", () => $("#inp-geocode").css("border-color", "black"));
  // geocoder
  const form = document.getElementById("frm-geocode");
  form.onsubmit = function submitForm(event) {
    event.preventDefault();
    const text = document.getElementById("inp-geocode").value;
    if (text === "") {
      map.flyTo({
        center: [15.3350758, 49.7417517],
        zoom: 7,
      });
    } else {
      $.get(`https://api.mapy.cz/geocode?query=${text}`, (data) => {
        if (typeof $(data).find("item").attr("x") === "undefined") {
          $("#inp-geocode").css("border-color", "red");
          return;
        }
        const x = parseFloat($(data).find("item").attr("x"));
        const y = parseFloat($(data).find("item").attr("y"));
        if (x < 12 || x > 19 || y < 48 || y > 52) { // omezení geosearche na česko, plus mínus
          $("#inp-geocode").css("border-color", "red");
          return;
        }
        map.flyTo({
          center: [x, y],
          zoom: 14,
        });
      }, "xml");
    }
  };
