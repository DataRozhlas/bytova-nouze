/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/breaks.js":
/*!**********************!*\
  !*** ./js/breaks.js ***!
  \**********************/
/*! exports provided: breaks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breaks\", function() { return breaks; });\nvar breaks = {\n  \"Rodiny v bytové nouzi\": [0.003, 0.0058, 0.0097, 0.0152, 0.0225],\n  \"Rodiny na ubytovnách\": [0.0006, 0.0021, 0.0041, 0.0062, 0.0109],\n  \"Rodiny v azylových domech\": [0.0002, 0.0009, 0.0016, 0.0028, 0.0041],\n  \"Osoby bez přístřeší\": [0.0006, 0.0011, 0.0017, 0.003, 0.0047]\n};\n\n//# sourceURL=webpack:///./js/breaks.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _breaks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breaks */ \"./js/breaks.js\");\n\nvar host = 'https://data.irozhlas.cz';\n\nif (window.location.hostname == 'localhost') {\n  host = 'http://localhost';\n}\n\nvar map = new mapboxgl.Map({\n  container: \"map\",\n  style: \"https://data.irozhlas.cz/mapa-domu/map_styl/style.json\",\n  zoom: 6.85,\n  maxZoom: 11,\n  attributionControl: false,\n  center: [15.3350758, 49.7417517]\n});\nmap.getCanvas().style.cursor = 'default';\nmap.fitBounds([[12.09, 51.06], [18.87, 48.55]]);\nmap.addControl(new mapboxgl.NavigationControl());\nmap.addControl(new mapboxgl.AttributionControl({\n  compact: true,\n  customAttribution: 'obrazový podkres <a target=\"_blank\" href=\"https://samizdat.cz\">Samizdat</a>, data <a target=\"_blank\" href=\"http://vdp.cuzk.cz/\">ČÚZK</a>, <a target=\"_blank\" href=\"https://www.czso.cz/\">ČSÚ</a>, <a target=\"_blank\" href=\"https://socialnibydleni.org/\">Platforma pro sociální bydlení</a> a <a target=\"_blank\" href=\"https://socialnibydleni.org/\">Lumos</a>'\n}));\nmap.scrollZoom.disable(); // zoom myší teprve až po interakci s mapou\n\nmap.on(\"click\", function (e) {\n  map.scrollZoom.enable();\n});\nvar cuts = {\n  'Rodiny v bytové nouzi': ['nouze_rodiny', 'rodin', 'nouze_deti', 'nouze_osoby'],\n  'Rodiny na ubytovnách': ['ubyt_rodiny', 'rodin', 'ubyt_deti', 'ubyt_osoby'],\n  'Rodiny v azylových domech': ['azyl_rodiny', 'rodin', 'azyl_deti', 'azyl_osoby'],\n  'Osoby bez přístřeší': ['bezdom', 'POCET_OBYV']\n};\nvar colors = {\n  'Rodiny v bytové nouzi': ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15'],\n  'Rodiny na ubytovnách': ['#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f'],\n  'Rodiny v azylových domech': ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],\n  'Osoby bez přístřeší': ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c']\n};\nvar topic = 'Rodiny v bytové nouzi';\nmap.on('load', function () {\n  map.addLayer({\n    id: 'data',\n    type: 'fill',\n    source: {\n      type: 'vector',\n      tiles: [host + \"/bytova-nouze/tiles/{z}/{x}/{y}.pbf\"]\n    },\n    'source-layer': 'orp_data',\n    paint: {\n      'fill-color': ['case', ['has', 'nouze_rodiny'], ['interpolate', ['linear'], ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][0], colors[topic][0], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][1], colors[topic][1], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][2], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][3], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][4], colors[topic][4]], 'white'],\n      \"fill-opacity\": 0.8,\n      \"fill-outline-color\": \"hsla(0, 0%, 52%, 0.4)\"\n    }\n  });\n  map.addLayer({\n    id: \"lbls\",\n    type: \"raster\",\n    source: {\n      tiles: [\"https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png\"],\n      type: \"raster\",\n      tileSize: 256\n    }\n  });\n  map.on('mousemove', function (e) {\n    var d = map.queryRenderedFeatures(e.point, {\n      layers: ['data']\n    });\n\n    if (d.length > 0) {\n      var txt = 'Obec s rozšířenou působností <b>' + d[0].properties.NAZ_ORP + '</b></br>' + topic + ': ' + d[0].properties[cuts[topic][0]];\n\n      if (topic != 'Osoby bez přístřeší') {\n        txt += ', tedy ' + d[0].properties[cuts[topic][3]] + ' osob včetně ' + d[0].properties[cuts[topic][2]] + ' dětí';\n      }\n\n      document.getElementById('legend').innerHTML = txt;\n    } else {\n      document.getElementById('legend').innerHTML = '<b>Vyberte oblast v mapě.</b>';\n    }\n  });\n  document.getElementById('topic_select').addEventListener(\"change\", function (e) {\n    var sel_topic = e.target.selectedOptions[0].value;\n    topic = sel_topic;\n    var stl = ['case', ['has', cuts[topic][0]], ['interpolate', ['linear'], ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][0], colors[topic][0], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][1], colors[topic][1], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][2], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][3], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][4], colors[topic][4]], 'white'];\n    map.setPaintProperty('data', 'fill-color', stl);\n  });\n\n  if (window.location.href.includes(\"latlng\")) {\n    //posunuti mapy dle url\n    var ll = window.location.href.split(\"latlng=\")[1].split('&')[0];\n    map.setCenter([parseFloat(ll.split('|')[1]), parseFloat(ll.split('|')[0])]);\n    map.setZoom(parseInt(ll.split('|')[2]));\n  }\n\n  ;\n});\nmap.on('moveend', function (e) {\n  // poloha do url pro sdileni\n  var cen = map.getCenter().wrap();\n  window.history.pushState('', '', window.location.pathname + '?latlng=' + cen.lat + '|' + cen.lng + '|' + map.getZoom());\n});\n$(\"#inp-geocode\").on(\"focus input\", function () {\n  return $(\"#inp-geocode\").css(\"border-color\", \"black\");\n}); // geocoder\n\nvar form = document.getElementById(\"frm-geocode\");\n\nform.onsubmit = function submitForm(event) {\n  event.preventDefault();\n  var text = document.getElementById(\"inp-geocode\").value;\n\n  if (text === \"\") {\n    map.flyTo({\n      center: [15.3350758, 49.7417517],\n      zoom: 7\n    });\n  } else {\n    $.get(\"https://api.mapy.cz/geocode?query=\".concat(text), function (data) {\n      if (typeof $(data).find(\"item\").attr(\"x\") === \"undefined\") {\n        $(\"#inp-geocode\").css(\"border-color\", \"red\");\n        return;\n      }\n\n      var x = parseFloat($(data).find(\"item\").attr(\"x\"));\n      var y = parseFloat($(data).find(\"item\").attr(\"y\"));\n\n      if (x < 12 || x > 19 || y < 48 || y > 52) {\n        // omezení geosearche na česko, plus mínus\n        $(\"#inp-geocode\").css(\"border-color\", \"red\");\n        return;\n      }\n\n      map.flyTo({\n        center: [x, y],\n        zoom: 14\n      });\n    }, \"xml\");\n  }\n};\n\nvar databyty = [[\"Ostrava\", 12800, 44, null, 1000, null, 350, null], [\"Brno\", 28550, 75, 18, 570, 500, 270, 200], [\"Praha<sup><a href='#note'>*</a></sup>\", 34000, 26, null, 540, null, 200, null], [\"Ústí nad Labem\", 630, 7, null, 310, null, 130, null], [\"Karviná\", 770, 14, 0, 230, null, 80, 50], [\"Havířov\", 7670, 106, null, 200, null, 20, 20], [\"Kladno\", 1970, 29, null, 220, null, 120, null], [\"Most\", 250, 4, 3, 170, null, 10, 10], [\"Olomouc\", 1520, 15, 4, 170, null, 70, null], [\"Příbram\", 610, 18, 10, 160, null, 140, null], [\"Chomutov\", 280, 6, 0, 130, 1020, 30, 20], [\"Liberec\", 1220, 12, 3, 130, 90, 40, 20], [\"Kolín\", 1850, 59, 2, 140, null, 100, 40], [\"Plzeň\", 2980, 17, null, 130, null, 80, 50], [\"Hradec Králové\", 1240, 13, 3, 130, 70, 60, 60], [\"Teplice\", 350, 7, 0, 110, null, 10, null], [\"Prostějov\", 1150, 26, 3, 120, null, 30, 40], [\"Přerov\", 1430, 33, 5, 110, 60, 40, 40], [\"Děčín\", 650, 13, 0, 100, 80, 10, 10], [\"České Budějovice\", 1820, 9, null, 100, null, 60, 80], [\"Louny\", 150, 8, 0, 90, null, 40, null], [\"Karlovy Vary\", 200, 4, 0, 90, null, 50, 50], [\"Česká Lípa\", 440, 12, 7, 80, null, 40, null], [\"Chrudim\", 470, 20, 0, 70, 120, 40, 60], [\"Litoměřice\", 220, 9, null, 50, null, 30, 50]];\nvar datamesta = [[\"Ostrava\", 1000, 7070, 2190, 2410, 950, 870], [\"Praha\", 540, 12100, 1110, 1950, 510, 7350], [\"Brno-město\", 570, 3550, 1230, 1340, 430, 220], [\"Ústí nad Labem\", 310, 1890, 630, 760, 250, 60], [\"Karviná\", 230, 1510, 520, 450, 220, 180], [\"Kladno\", 220, 1440, 540, 420, 140, 210], [\"Havířov\", 200, 1250, 430, 290, 290, 120], [\"Olomouc\", 170, 1590, 390, 640, 140, 280], [\"Most\", 170, 1250, 360, 490, 230, 60], [\"Příbram\", 160, 930, 330, 370, 40, 100], [\"Liberec\", 130, 960, 280, 270, 130, 200], [\"Chomutov\", 130, 890, 260, 320, 140, 90], [\"Plzeň\", 130, 860, 300, 330, 90, 70], [\"Hradec Králové\", 130, 830, 260, 290, 100, 100], [\"Přerov\", 110, 720, 220, 310, 90, 30], [\"Karlovy Vary\", 90, 740, 190, 280, 60, 140], [\"Frýdek-Místek\", 90, 680, 200, 160, 120, 140], [\"Sokolov\", 60, 610, 130, 160, 80, 190]];\nvar chartcolors = ['#EA614A', '#ECA038', '#A38456', '#008836', '#20649B', '#6B96CA', '#A87A93', '#D19C95'];\nvar datadoplatky = [53.2, 58.3, 61.5, 66.1, 67, 62.5, 66.4, 66.4, 64.4, 69.8, 67.6, 77.8, 70.7, 73.4, 74.8, 74.5, 75.5, 71.8, 71.8, 69, 69.2, 72.1, 70.1, 76.3, 66.1, 68.8, 81.8, 76.5, 73.4, 69.2, 71.1, 64.3, 65.9, 66.7, 67.4, 73.9, 64.3, 67.7, 69, 68.7, 69, 63.8, 61, 59.6, 59.6, 60.9, 62.5, 64.9, 58.1, 55.3, 64.4, 56.8, 58.9, 51.7, 48.5, 50.4, 44.4, 51.1, 49.3, 50, 45.2, 44, 44.9, 43.5, 42.6, 39.1, 37.2, 36.8, 33.2, 39.3, 37.5, 44.3];\nvar mesice = [\"01/2013\", \"02/2013\", \"03/2013\", \"04/2013\", \"05/2013\", \"06/2013\", \"07/2013\", \"08/2013\", \"09/2013\", \"10/2013\", \"11/2013\", \"12/2013\", \"01/2014\", \"02/2014\", \"03/2014\", \"04/2014\", \"05/2014\", \"06/2014\", \"07/2014\", \"08/2014\", \"09/2014\", \"10/2014\", \"11/2014\", \"12/2014\", \"01/2015\", \"02/2015\", \"03/2015\", \"04/2015\", \"05/2015\", \"06/2015\", \"07/2015\", \"08/2015\", \"09/2015\", \"10/2015\", \"11/2015\", \"12/2015\", \"01/2016\", \"02/2016\", \"03/2016\", \"04/2016\", \"05/2016\", \"06/2016\", \"07/2016\", \"08/2016\", \"09/2016\", \"10/2016\", \"11/2016\", \"12/2016\", \"01/2017\", \"02/2017\", \"03/2017\", \"04/2017\", \"05/2017\", \"06/2017\", \"07/2017\", \"08/2017\", \"09/2017\", \"10/2017\", \"11/2017\", \"12/2017\", \"01/2018\", \"02/2018\", \"03/2018\", \"04/2018\", \"05/2018\", \"06/2018\", \"07/2018\", \"08/2018\", \"09/2018\", \"10/2018\", \"11/2018\", \"12/2018\"];\n$(document).ready(function () {\n  $('#byty').DataTable({\n    data: databyty,\n    columns: [{\n      title: \"Město\"\n    }, {\n      title: \"Městské byty\"\n    }, {\n      title: \"Městské byty/1000 obyv.\"\n    }, {\n      title: \"Byty přidělené rodinám z azyl.dom./ubyt. (2017)\"\n    }, {\n      title: \"Rodiny s dětmi v byt. nouzi, odhad Platformy\"\n    }, {\n      title: \"Rodiny s dětmi v byt. nouzi, údaje města\"\n    }, {\n      title: \"Rodiny s dětmi v azyl. dom./ubyt., odhad Platformy\"\n    }, {\n      title: \"Rodiny s dětmi v azyl. dom./ubyt., údaje města\"\n    }],\n    \"order\": [[3, \"desc\"]],\n    \"responsive\": true,\n    \"ordering\": true,\n    \"searching\": false,\n    \"paging\": true,\n    \"bInfo\": false,\n    \"language\": {\n      \"url\": \"https://interaktivni.rozhlas.cz/tools/datatables/Czech.json\"\n    }\n  });\n});\n$(document).ready(function () {\n  $('#mesta').DataTable({\n    data: datamesta,\n    columns: [{\n      title: \"Město\"\n    }, {\n      title: \"Rodiny v bytové nouzi\"\n    }, {\n      title: \"Osoby v bytové nouzi\"\n    }, {\n      title: \"Děti v bytové nouzi\"\n    }, {\n      title: \"Domácnosti v ubyt./azyl. domech\"\n    }, {\n      title: \"Domácnosti v nevhodných bytech\"\n    }, {\n      title: \"Domácnosti bez přístřeší\"\n    }],\n    \"order\": [[1, \"desc\"]],\n    \"responsive\": true,\n    \"ordering\": true,\n    \"searching\": false,\n    \"paging\": true,\n    \"bInfo\": false,\n    \"language\": {\n      \"url\": \"https://interaktivni.rozhlas.cz/tools/datatables/Czech.json\"\n    }\n  });\n});\n$(document).ready(function () {\n  Highcharts.chart('doplatky', {\n    chart: {\n      type: 'column'\n    },\n    title: {\n      text: 'Vyplacené doplatky na bydlení'\n    },\n    xAxis: {\n      categories: mesice\n    },\n    yAxis: {\n      title: {\n        text: 'Počet doplatků'\n      },\n      labels: {\n        formatter: function formatter() {\n          return this.value + ' tisíc';\n        }\n      },\n      max: 90,\n      endOnTick: false\n    },\n    tooltip: {\n      pointFormat: '<b>{point.y} tisíc</b> vyplacených doplatků na bydlení'\n    },\n    legend: {\n      enabled: false\n    },\n    exporting: {\n      enabled: false\n    },\n    credits: {\n      href: 'https://www.mpsv.cz/cs/15912',\n      text: 'Zdroj: MPSV'\n    },\n    series: [{\n      name: 'doplatky',\n      data: datadoplatky,\n      color: chartcolors[4]\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });