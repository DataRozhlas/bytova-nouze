
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
    customAttribution: 'obrazový podkres <a target="_blank" href="https://samizdat.cz">Samizdat</a>, data <a target="_blank" href="http://vdp.cuzk.cz/">ČÚZK</a>, <a target="_blank" href="https://www.czso.cz/">ČSÚ</a>, <a target="_blank" href="https://socialnibydleni.org/">Platforma pro sociální bydlení</a> a <a target="_blank" href="https://socialnibydleni.org/">Lumos</a>',
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
  ["Ostrava",12800,44,null,1000,null,350,null],
  ["Brno",28550,75,18,570,500,270,200],
  ["Praha<sup><a href='#note'>*</a></sup>",34000,26,null,540,null,200,null],
  ["Ústí nad Labem",630,7,null,310,null,130,null],
  ["Karviná",770,14,0,230,null,80,50],
  ["Havířov",7670,106,null,200,null,20,20],
  ["Kladno",1970,29,null,220,null,120,null],
  ["Most",250,4,3,170,null,10,10],
  ["Olomouc",1520,15,4,170,null,70,null],
  ["Příbram",610,18,10,160,null,140,null],
  ["Chomutov",280,6,0,130,1020,30,20],
  ["Liberec",1220,12,3,130,90,40,20],
  ["Kolín",1850,59,2,140,null,100,40],
  ["Plzeň",2980,17,null,130,null,80,50],
  ["Hradec Králové",1240,13,3,130,70,60,60],
  ["Teplice",350,7,0,110,null,10,null],
  ["Prostějov",1150,26,3,120,null,30,40],
  ["Přerov",1430,33,5,110,60,40,40],
  ["Děčín",650,13,0,100,80,10,10],
  ["České Budějovice",1820,9,null,100,null,60,80],
  ["Louny",150,8,0,90,null,40,null],
  ["Karlovy Vary",200,4,0,90,null,50,50],
  ["Česká Lípa",440,12,7,80,null,40,null],
  ["Chrudim",470,20,0,70,120,40,60],
  ["Litoměřice",220,9,null,50,null,30,50]
]

var datamesta = [
  ["Ostrava",1000,7070,2190,2410,950,870],
  ["Praha",540,12100,1110,1950,510,7350],
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
  ["Přerov",110,720,220,310,90,30],
  ["Karlovy Vary",90,740,190,280,60,140],
  ["Frýdek-Místek",90,680,200,160,120,140],
  ["Sokolov",60,610,130,160,80,190]
];

var chartcolors = ['#EA614A','#ECA038','#A38456','#008836','#20649B','#6B96CA','#A87A93','#D19C95'];

var datadoplatky = [53.2,58.3,61.5,66.1,67,62.5,66.4,66.4,64.4,69.8,67.6,77.8,70.7,73.4,74.8,74.5,75.5,71.8,71.8,69,69.2,72.1,70.1,76.3,66.1,68.8,81.8,76.5,73.4,69.2,71.1,64.3,65.9,66.7,67.4,73.9,64.3,67.7,69,68.7,69,63.8,61,59.6,59.6,60.9,62.5,64.9,58.1,55.3,64.4,56.8,58.9,51.7,48.5,50.4,44.4,51.1,49.3,50,45.2,44,44.9,43.5,42.6,39.1,37.2,36.8,33.2,39.3,37.5,44.3];

var mesice = ["01/2013","02/2013","03/2013","04/2013","05/2013","06/2013","07/2013","08/2013","09/2013","10/2013","11/2013","12/2013","01/2014","02/2014","03/2014","04/2014","05/2014","06/2014","07/2014","08/2014","09/2014","10/2014","11/2014","12/2014","01/2015","02/2015","03/2015","04/2015","05/2015","06/2015","07/2015","08/2015","09/2015","10/2015","11/2015","12/2015","01/2016","02/2016","03/2016","04/2016","05/2016","06/2016","07/2016","08/2016","09/2016","10/2016","11/2016","12/2016","01/2017","02/2017","03/2017","04/2017","05/2017","06/2017","07/2017","08/2017","09/2017","10/2017","11/2017","12/2017","01/2018","02/2018","03/2018","04/2018","05/2018","06/2018","07/2018","08/2018","09/2018","10/2018","11/2018","12/2018"];

$(document).ready(function() {
  $('#byty').DataTable({
    data: databyty,
    columns: [
      { title: "Město" },
      { title: "Městské byty" },
      { title: "Městské byty/1000 obyv." },
      { title: "Byty přidělené rodinám z azyl.dom./ubyt. (2017)" },
      { title: "Rodiny s dětmi v byt. nouzi, odhad Platformy" },
      { title: "Rodiny s dětmi v byt. nouzi, údaje města" },
      { title: "Rodiny s dětmi v azyl. dom./ubyt., odhad Platformy" },
      { title: "Rodiny s dětmi v azyl. dom./ubyt., údaje města" },
    ],
    "order": [[ 3, "desc" ]],
    "responsive": true,
    "ordering": true,
    "searching": false,
    "paging": true,
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
      { title: "Město" },
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
    "paging": true,
    "bInfo": false,
    "language": {
      "url": "https://interaktivni.rozhlas.cz/tools/datatables/Czech.json"
    }
  });
});

$(document).ready(function() {

Highcharts.chart('doplatky', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Vyplacené doplatky na bydlení'
    },

    xAxis: {
        categories: mesice
    },

    yAxis: {
        title: {
            text: 'Počet doplatků'
        },
        labels: {
            formatter: function () {
                return this.value + ' tisíc';
            }
        },
        max: 90,
        endOnTick: false
    },

    tooltip: {
        pointFormat: '<b>{point.y} tisíc</b> vyplacených doplatků na bydlení',
    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.mpsv.cz/cs/15912',
        text: 'Zdroj: MPSV'
    },

    series: [{
        name: 'doplatky',
        data: datadoplatky,
        color: chartcolors[4]
    }]
});


})