
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

var databyty = [
  ["Ostrava",12803,44,82,"995/-","350/-"],
  ["Brno",28551,75,48,"571/499","274/199"],
  ["Praha<sup><a href='#note1'>1</a></sup>","34000 (8126)",26,"- (27)","536/-","203/-"],
  ["Ústí nad Labem",628,7,"-","307/-","131/-"],
  ["Karviná",767,14,0,"231/-","83/48"],
  ["Havířov",7667,106,0,"202/-","19/22"],
  ["Kladno",1970,29,13,"219/-","124/-"],
  ["Most",252,4,8,"174/-","14/6"],
  ["Olomouc",1520,15,5,"165/-","74/-"],
  ["Příbram",606,18,12,"158/-","135/-"],
  ["Chomutov",283,6,10,"125/1022","29/22"],
  ["Liberec",1219,12,98,"127/87","39/22"],
  ["Kolín",1851,59,12,"139/-","98/43"],
  ["Plzeň",2979,17,7,"133/-","76/48"],
  ["Hradec Králové",1240,13,7,"126/72","58/57"],
  ["Teplice",353,7,0,"111/-","6/-"],
  ["Prostějov",1146,26,24,"115/-","34/42"],
  ["Přerov",1427,33,10,"107/58","43/35"],
  ["Děčín",645,13,0,"97/83","7/9"],
  ["České Budějovice",1818,9,87,"103/-","56/75"],
  ["Louny",145,8,0,"89/-","42/-"],
  ["Karlovy Vary",203,4,0,"88/-","48/51"],
  ["Česká Lípa",443,12,0,"84/-","42/-"],
  ["Chrudim",467,20,60,"74/121","43/60"],
  ["Litoměřice",217,9,0,"52/-","31/49"]
]

var datamesta = [
  ["Ostrava",1000,7070,2190,2410,950,870],
  ["Brno-město",570,3550,1230,1340,430,220],
  ["Ústí nad Labem",310,1890,630,760,250,60],
  ["Karviná",230,1510,520,450,220,180],
  ["Kladno",220,1440,540,420,140,210],
  ["Havířov",200,1250,430,290,290,120],
  ["Olomouc",170,1590,390,640,140,280],
  ["Most",170,1250,360,490,230,60],
  ["Příbram",160,930,330,370,40,100],
  ["Liberec",130,960,280,270,130,200],
  ["Chomutov",130,890,260,320,140,90],
  ["Plzeň",130,860,300,330,90,70],
  ["Hradec Králové",130,830,260,290,100,100],
  ["Praha 10",110,1760,240,350,80,930],
  ["Přerov",110,720,220,310,90,30],
  ["Karlovy Vary",90,740,190,280,60,140],
  ["Frýdek-Místek",90,680,200,160,120,140],
  ["Sokolov",60,610,130,160,80,190],
  ["Praha 8",50,1370,100,210,50,880],
  ["Praha 4",50,1120,90,100,60,760],
  ["Praha 5",50,980,100,160,40,590],
  ["Praha 3",40,1660,80,170,40,1210],
  ["Praha 2",30,990,80,160,40,620],
  ["Praha 6",30,860,60,130,40,550],
  ["Praha 4 (Praha 11)",30,590,50,90,30,360],
  ["Praha 5 (Praha 13)",30,540,60,120,20,290],
  ["Praha 8 (Praha 7)",20,550,40,110,20,320]
]

$(document).ready(function() {
  $('#byty').DataTable({
    data: databyty,
    columns: [
      { title: "Město" },
      { title: "Městské byty" },
      { title: "Městské byty/1000 obyv." },
      { title: "Přidělené soc. byty (2017)" },
      { title: "Rodiny s dětmi v byt. nouzi<sup><a href='#note2'>2</a></sup>" },
      { title: "Rodiny s dětmi v azyl. dom./ubyt.<sup><a href='#note2'>2</a></sup>" }
    ],
    "order": [[ 3, "desc" ]],
    "responsive": true,
    "ordering": true,
    "searching": false,
    "paging": false,
    "bInfo": false,
    "language": {
      "url": "https://interaktivni.rozhlas.cz/tools/datatables/Czech.json"
    }
  });
});

$(document).ready(function() {
  $('#mesta').DataTable({
    data: datamesta,
    columns: [
      { title: "Úřad práce" },
      { title: "Rodiny v bytové nouzi" },
      { title: "Osoby v bytové nouzi" },
      { title: "Děti v bytové nouzi" },
      { title: "Domácnosti v ubyt./azyl. domech" },
      { title: "Domácnosti v nevhodných bytech" },
      { title: "Domácnosti bez přístřeší" }
    ],
    "order": [[ 1, "desc" ]],
    "responsive": true,
    "ordering": true,
    "searching": false,
    "paging": false,
    "bInfo": false,
    "language": {
      "url": "https://interaktivni.rozhlas.cz/tools/datatables/Czech.json"
    }
  });
});
