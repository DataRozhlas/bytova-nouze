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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _breaks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breaks */ \"./js/breaks.js\");\n\nvar host = 'https://data.irozhlas.cz';\n\nif (window.location.hostname == 'localhost') {\n  host = 'http://localhost';\n}\n\nvar map = new mapboxgl.Map({\n  container: \"map\",\n  style: \"https://data.irozhlas.cz/mapa-domu/map_styl/style.json\",\n  zoom: 6.85,\n  maxZoom: 11,\n  attributionControl: false,\n  center: [15.3350758, 49.7417517]\n});\nmap.getCanvas().style.cursor = 'default';\nmap.fitBounds([[12.09, 51.06], [18.87, 48.55]]);\nmap.addControl(new mapboxgl.NavigationControl());\nmap.addControl(new mapboxgl.AttributionControl({\n  compact: true,\n  customAttribution: 'obrazový podkres <a target=\"_blank\" href=\"https://samizdat.cz\">Samizdat</a>, data <a target=\"_blank\" href=\"http://vdp.cuzk.cz/\">ČÚZK</a>, <a target=\"_blank\" href=\"https://www.czso.cz/\">ČSÚ</a>, <a target=\"_blank\" href=\"https://socialnibydleni.org/\">Platforma pro sociální bydlení</a> a <a target=\"_blank\" href=\"https://socialnibydleni.org/\">Lumos</a>'\n}));\nmap.scrollZoom.disable(); // zoom myší teprve až po interakci s mapou\n\nmap.on(\"click\", function (e) {\n  map.scrollZoom.enable();\n});\nvar cuts = {\n  'Rodiny v bytové nouzi': ['nouze_rodiny', 'rodin', 'nouze_deti', 'nouze_osoby'],\n  'Rodiny na ubytovnách': ['ubyt_rodiny', 'rodin', 'ubyt_deti', 'ubyt_osoby'],\n  'Rodiny v azylových domech': ['azyl_rodiny', 'rodin', 'azyl_deti', 'azyl_osoby'],\n  'Osoby bez přístřeší': ['bezdom', 'POCET_OBYV']\n};\nvar colors = {\n  'Rodiny v bytové nouzi': ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15'],\n  'Rodiny na ubytovnách': ['#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f'],\n  'Rodiny v azylových domech': ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],\n  'Osoby bez přístřeší': ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c']\n};\nvar topic = 'Rodiny v bytové nouzi';\nmap.on('load', function () {\n  map.addLayer({\n    id: 'data',\n    type: 'fill',\n    source: {\n      type: 'vector',\n      tiles: [host + \"/bytova-nouze/tiles/{z}/{x}/{y}.pbf\"]\n    },\n    'source-layer': 'orp_data',\n    paint: {\n      'fill-color': ['case', ['has', 'nouze_rodiny'], ['interpolate', ['linear'], ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][0], colors[topic][0], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][1], colors[topic][1], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][2], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][3], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][4], colors[topic][4]], 'white'],\n      \"fill-opacity\": 0.8,\n      \"fill-outline-color\": \"hsla(0, 0%, 52%, 0.4)\"\n    }\n  });\n  map.addLayer({\n    id: \"lbls\",\n    type: \"raster\",\n    source: {\n      tiles: [\"https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png\"],\n      type: \"raster\",\n      tileSize: 256\n    }\n  });\n  map.on('mousemove', function (e) {\n    var d = map.queryRenderedFeatures(e.point, {\n      layers: ['data']\n    });\n\n    if (d.length > 0) {\n      var txt = 'Obec s rozšířenou působností <b>' + d[0].properties.NAZ_ORP + '</b></br>' + topic + ': ' + d[0].properties[cuts[topic][0]];\n\n      if (topic != 'Osoby bez přístřeší') {\n        txt += ', tedy ' + d[0].properties[cuts[topic][3]] + ' osob včetně ' + d[0].properties[cuts[topic][2]] + ' dětí';\n      }\n\n      document.getElementById('legend').innerHTML = txt;\n    } else {\n      document.getElementById('legend').innerHTML = '<b>Vyberte oblast v mapě.</b>';\n    }\n  });\n  document.getElementById('topic_select').addEventListener(\"change\", function (e) {\n    var sel_topic = e.target.selectedOptions[0].value;\n    topic = sel_topic;\n    var stl = ['case', ['has', cuts[topic][0]], ['interpolate', ['linear'], ['/', ['get', cuts[topic][0]], ['get', cuts[topic][1]]], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][0], colors[topic][0], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][1], colors[topic][1], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][2], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][3], colors[topic][3], _breaks__WEBPACK_IMPORTED_MODULE_0__[\"breaks\"][topic][4], colors[topic][4]], 'white'];\n    map.setPaintProperty('data', 'fill-color', stl);\n  });\n\n  if (window.location.href.includes(\"latlng\")) {\n    //posunuti mapy dle url\n    var ll = window.location.href.split(\"latlng=\")[1].split('&')[0];\n    map.setCenter([parseFloat(ll.split('|')[1]), parseFloat(ll.split('|')[0])]);\n    map.setZoom(parseInt(ll.split('|')[2]));\n  }\n\n  ;\n});\nmap.on('moveend', function (e) {\n  // poloha do url pro sdileni\n  var cen = map.getCenter().wrap();\n  window.history.pushState('', '', window.location.pathname + '?latlng=' + cen.lat + '|' + cen.lng + '|' + map.getZoom());\n});\n$(\"#inp-geocode\").on(\"focus input\", function () {\n  return $(\"#inp-geocode\").css(\"border-color\", \"black\");\n}); // geocoder\n\nvar form = document.getElementById(\"frm-geocode\");\n\nform.onsubmit = function submitForm(event) {\n  event.preventDefault();\n  var text = document.getElementById(\"inp-geocode\").value;\n\n  if (text === \"\") {\n    map.flyTo({\n      center: [15.3350758, 49.7417517],\n      zoom: 7\n    });\n  } else {\n    $.get(\"https://api.mapy.cz/geocode?query=\".concat(text), function (data) {\n      if (typeof $(data).find(\"item\").attr(\"x\") === \"undefined\") {\n        $(\"#inp-geocode\").css(\"border-color\", \"red\");\n        return;\n      }\n\n      var x = parseFloat($(data).find(\"item\").attr(\"x\"));\n      var y = parseFloat($(data).find(\"item\").attr(\"y\"));\n\n      if (x < 12 || x > 19 || y < 48 || y > 52) {\n        // omezení geosearche na česko, plus mínus\n        $(\"#inp-geocode\").css(\"border-color\", \"red\");\n        return;\n      }\n\n      map.flyTo({\n        center: [x, y],\n        zoom: 14\n      });\n    }, \"xml\");\n  }\n};\n\nvar databyty = [[\"Ostrava\", 12803, 44, 82, \"995/-\", \"350/-\"], [\"Brno\", 28551, 75, 48, \"571/499\", \"274/199\"], [\"Praha<sup><a href='#note1'>1</a></sup>\", \"34000 (8126)\", 26, \"- (27)\", \"536/-\", \"203/-\"], [\"Ústí nad Labem\", 628, 7, \"-\", \"307/-\", \"131/-\"], [\"Karviná\", 767, 14, 0, \"231/-\", \"83/48\"], [\"Havířov\", 7667, 106, 0, \"202/-\", \"19/22\"], [\"Kladno\", 1970, 29, 13, \"219/-\", \"124/-\"], [\"Most\", 252, 4, 8, \"174/-\", \"14/6\"], [\"Olomouc\", 1520, 15, 5, \"165/-\", \"74/-\"], [\"Příbram\", 606, 18, 12, \"158/-\", \"135/-\"], [\"Chomutov\", 283, 6, 10, \"125/1022\", \"29/22\"], [\"Liberec\", 1219, 12, 98, \"127/87\", \"39/22\"], [\"Kolín\", 1851, 59, 12, \"139/-\", \"98/43\"], [\"Plzeň\", 2979, 17, 7, \"133/-\", \"76/48\"], [\"Hradec Králové\", 1240, 13, 7, \"126/72\", \"58/57\"], [\"Teplice\", 353, 7, 0, \"111/-\", \"6/-\"], [\"Prostějov\", 1146, 26, 24, \"115/-\", \"34/42\"], [\"Přerov\", 1427, 33, 10, \"107/58\", \"43/35\"], [\"Děčín\", 645, 13, 0, \"97/83\", \"7/9\"], [\"České Budějovice\", 1818, 9, 87, \"103/-\", \"56/75\"], [\"Louny\", 145, 8, 0, \"89/-\", \"42/-\"], [\"Karlovy Vary\", 203, 4, 0, \"88/-\", \"48/51\"], [\"Česká Lípa\", 443, 12, 0, \"84/-\", \"42/-\"], [\"Chrudim\", 467, 20, 60, \"74/121\", \"43/60\"], [\"Litoměřice\", 217, 9, 0, \"52/-\", \"31/49\"]];\nvar datamesta = [[\"Ostrava\", 1000, 7070, 2190, 2410, 950, 870], [\"Brno-město\", 570, 3550, 1230, 1340, 430, 220], [\"Ústí nad Labem\", 310, 1890, 630, 760, 250, 60], [\"Karviná\", 230, 1510, 520, 450, 220, 180], [\"Kladno\", 220, 1440, 540, 420, 140, 210], [\"Havířov\", 200, 1250, 430, 290, 290, 120], [\"Olomouc\", 170, 1590, 390, 640, 140, 280], [\"Most\", 170, 1250, 360, 490, 230, 60], [\"Příbram\", 160, 930, 330, 370, 40, 100], [\"Liberec\", 130, 960, 280, 270, 130, 200], [\"Chomutov\", 130, 890, 260, 320, 140, 90], [\"Plzeň\", 130, 860, 300, 330, 90, 70], [\"Hradec Králové\", 130, 830, 260, 290, 100, 100], [\"Praha 10\", 110, 1760, 240, 350, 80, 930], [\"Přerov\", 110, 720, 220, 310, 90, 30], [\"Karlovy Vary\", 90, 740, 190, 280, 60, 140], [\"Frýdek-Místek\", 90, 680, 200, 160, 120, 140], [\"Sokolov\", 60, 610, 130, 160, 80, 190], [\"Praha 8\", 50, 1370, 100, 210, 50, 880], [\"Praha 4\", 50, 1120, 90, 100, 60, 760], [\"Praha 5\", 50, 980, 100, 160, 40, 590], [\"Praha 3\", 40, 1660, 80, 170, 40, 1210], [\"Praha 2\", 30, 990, 80, 160, 40, 620], [\"Praha 6\", 30, 860, 60, 130, 40, 550], [\"Praha 4 (Praha 11)\", 30, 590, 50, 90, 30, 360], [\"Praha 5 (Praha 13)\", 30, 540, 60, 120, 20, 290], [\"Praha 8 (Praha 7)\", 20, 550, 40, 110, 20, 320]];\n$(document).ready(function () {\n  $('#byty').DataTable({\n    data: databyty,\n    columns: [{\n      title: \"Město\"\n    }, {\n      title: \"Městské byty\"\n    }, {\n      title: \"Městské byty/1000 obyv.\"\n    }, {\n      title: \"Přidělené soc. byty (2017)\"\n    }, {\n      title: \"Rodiny s dětmi v byt. nouzi<sup><a href='#note2'>2</a></sup>\"\n    }, {\n      title: \"Rodiny s dětmi v azyl. dom./ubyt.<sup><a href='#note2'>2</a></sup>\"\n    }],\n    \"order\": [[3, \"desc\"]],\n    \"responsive\": true,\n    \"ordering\": true,\n    \"searching\": false,\n    \"paging\": false,\n    \"bInfo\": false,\n    \"language\": {\n      \"url\": \"https://interaktivni.rozhlas.cz/tools/datatables/Czech.json\"\n    }\n  });\n});\n$(document).ready(function () {\n  $('#mesta').DataTable({\n    data: datamesta,\n    columns: [{\n      title: \"Úřad práce\"\n    }, {\n      title: \"Rodiny v bytové nouzi\"\n    }, {\n      title: \"Osoby v bytové nouzi\"\n    }, {\n      title: \"Děti v bytové nouzi\"\n    }, {\n      title: \"Domácnosti v ubyt./azyl. domech\"\n    }, {\n      title: \"Domácnosti v nevhodných bytech\"\n    }, {\n      title: \"Domácnosti bez přístřeší\"\n    }],\n    \"order\": [[1, \"desc\"]],\n    \"responsive\": true,\n    \"ordering\": true,\n    \"searching\": false,\n    \"paging\": false,\n    \"bInfo\": false,\n    \"language\": {\n      \"url\": \"https://interaktivni.rozhlas.cz/tools/datatables/Czech.json\"\n    }\n  });\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });