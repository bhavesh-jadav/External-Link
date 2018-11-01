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
/******/ 	__webpack_require__.p = "assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.tmp/precompile/visualPlugin.ts":
/*!*****************************************!*\
  !*** ./.tmp/precompile/visualPlugin.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/visual */ "./src/visual.ts");

powerbi.visuals = powerbi.visuals || {};
powerbi.visuals.plugins = powerbi.visuals.plugins || {};
powerbi.visuals.plugins["externalLinkC315CFE8D1E9496582BCD9F3B9E20D91_DEBUG"] = {
    name: 'externalLinkC315CFE8D1E9496582BCD9F3B9E20D91_DEBUG',
    displayName: 'External Link',
    class: 'ExternalLinkVisual',
    version: '1.0.0',
    apiVersion: '2.1.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__["ExternalLinkVisual"]) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__["ExternalLinkVisual"](options);
        }
        console.error('Visual instance not found');
    },
    custom: true
};
/* harmony default export */ __webpack_exports__["default"] = (powerbi);


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),

/***/ "./node_modules/d3-dispatch/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-dispatch/src/index.js ***!
  \***********************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleIn", function() { return circleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleOut", function() { return circleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleInOut", function() { return circleInOut; });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expIn", function() { return expIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expOut", function() { return expOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expInOut", function() { return expInOut; });
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad */ "./node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _cubic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic */ "./node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _poly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly */ "./node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _sin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin */ "./node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp */ "./node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle */ "./node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce */ "./node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back */ "./node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _elastic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic */ "./node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinIn", function() { return sinIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinOut", function() { return sinOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete */ "./node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue */ "./node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./round */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _transform_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform/index */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zoom */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["rgbBasisClosed"]; });

/* harmony import */ var _hsl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hsl */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__["hslLong"]; });

/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lab */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _hcl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hcl */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__["hclLong"]; });

/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cubehelix */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__["cubehelixLong"]; });

/* harmony import */ var _piecewise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./piecewise */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quantize */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_19__["default"]; });























/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");









/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Array.isArray(b) ? _array__WEBPACK_IMPORTED_MODULE_2__["default"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/create.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");



/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return Object(_select__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(document.documentElement));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"] && document.documentElement.namespaceURI === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/d3-selection/src/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _creator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./node_modules/d3-selection/src/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _local__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher */ "./node_modules/d3-selection/src/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse */ "./node_modules/d3-selection/src/mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return _mouse__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _namespace__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _namespaces__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return _point__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selectAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectAll__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector */ "./node_modules/d3-selection/src/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _selector__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _selectorAll__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _selection_style__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./touch */ "./node_modules/d3-selection/src/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touches */ "./node_modules/d3-selection/src/touches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return _touches__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./window */ "./node_modules/d3-selection/src/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["customEvent"]; });





















/***/ }),

/***/ "./node_modules/d3-selection/src/local.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return local; });
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (matcher);


/***/ }),

/***/ "./node_modules/d3-selection/src/mouse.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  var event = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, event);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/*! exports provided: xhtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["default"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/point.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[selector]], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([selector == null ? [] : selector], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ __webpack_exports__["default"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-selection/src/constant.js");




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return !this.node();
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/*! exports provided: default, EnterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNode", function() { return EnterNode; });
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._enter || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._exit || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/*! exports provided: root, Selection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exit */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sort */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./call */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nodes */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./size */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./empty */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./each */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./attr */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./property */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./classed */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./text */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./html */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./raise */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lower */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./append */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./insert */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./remove */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./clone */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./datum */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dispatch */ "./node_modules/d3-selection/src/selection/dispatch.js");































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: _data__WEBPACK_IMPORTED_MODULE_3__["default"],
  enter: _enter__WEBPACK_IMPORTED_MODULE_4__["default"],
  exit: _exit__WEBPACK_IMPORTED_MODULE_5__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_6__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_7__["default"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_8__["default"],
  call: _call__WEBPACK_IMPORTED_MODULE_9__["default"],
  nodes: _nodes__WEBPACK_IMPORTED_MODULE_10__["default"],
  node: _node__WEBPACK_IMPORTED_MODULE_11__["default"],
  size: _size__WEBPACK_IMPORTED_MODULE_12__["default"],
  empty: _empty__WEBPACK_IMPORTED_MODULE_13__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_14__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_15__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_16__["default"],
  property: _property__WEBPACK_IMPORTED_MODULE_17__["default"],
  classed: _classed__WEBPACK_IMPORTED_MODULE_18__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_19__["default"],
  html: _html__WEBPACK_IMPORTED_MODULE_20__["default"],
  raise: _raise__WEBPACK_IMPORTED_MODULE_21__["default"],
  lower: _lower__WEBPACK_IMPORTED_MODULE_22__["default"],
  append: _append__WEBPACK_IMPORTED_MODULE_23__["default"],
  insert: _insert__WEBPACK_IMPORTED_MODULE_24__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_25__["default"],
  clone: _clone__WEBPACK_IMPORTED_MODULE_26__["default"],
  datum: _datum__WEBPACK_IMPORTED_MODULE_27__["default"],
  on: _on__WEBPACK_IMPORTED_MODULE_28__["default"],
  dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_29__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(lower);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](merges, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/*! exports provided: event, default, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return customEvent; });
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(raise);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(remove);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(update) {
  return new Array(update.length);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/*! exports provided: default, styleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return styleValue; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function none() {}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__["event"], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touch.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touch);
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touches.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches) {
  if (touches == null) touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touches[i]);
  }

  return points;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js");



var root = [null];

/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule__WEBPACK_IMPORTED_MODULE_1__["SCHEDULED"] && schedule.name === name) {
        return new _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/*! exports provided: transition, active, interrupt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active */ "./node_modules/d3-transition/src/active.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "active", function() { return _active__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt */ "./node_modules/d3-transition/src/interrupt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return _interrupt__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["STARTING"] && schedule.state < _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["ENDING"];
    schedule.state = _transition_schedule__WEBPACK_IMPORTED_MODULE_0__["ENDED"];
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition */ "./node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.interrupt = _interrupt__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.transition = _transition__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interrupt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt */ "./node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return this.each(function() {
    Object(_interrupt__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
});


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/schedule */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubicInOut"]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var id,
      timing;

  if (name instanceof _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"]) {
    id = name._id, name = name._name;
  } else {
    id = Object(_transition_index__WEBPACK_IMPORTED_MODULE_0__["newId"])(), (timing = defaultTiming).time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(_transition_schedule__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate */ "./node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["namespace"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformSvg"] : _interpolate__WEBPACK_IMPORTED_MODULE_3__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(_tween__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).delay;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).duration;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).ease;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/*! exports provided: Transition, default, newId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newId", function() { return newId; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attr */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attrTween */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delay */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ease */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selection */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styleTween */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./text */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transition */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js");



















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select__WEBPACK_IMPORTED_MODULE_10__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_11__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_7__["default"],
  selection: _selection__WEBPACK_IMPORTED_MODULE_12__["default"],
  transition: _transition__WEBPACK_IMPORTED_MODULE_16__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on__WEBPACK_IMPORTED_MODULE_8__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_1__["default"],
  attrTween: _attrTween__WEBPACK_IMPORTED_MODULE_2__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_13__["default"],
  styleTween: _styleTween__WEBPACK_IMPORTED_MODULE_14__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_15__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_9__["default"],
  tween: _tween__WEBPACK_IMPORTED_MODULE_17__["default"],
  delay: _delay__WEBPACK_IMPORTED_MODULE_3__["default"],
  duration: _duration__WEBPACK_IMPORTED_MODULE_4__["default"],
  ease: _ease__WEBPACK_IMPORTED_MODULE_5__["default"]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"]
      : (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateString"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Transition"](merges, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule__WEBPACK_IMPORTED_MODULE_0__["init"] : _schedule__WEBPACK_IMPORTED_MODULE_0__["set"];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/*! exports provided: CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED, default, init, set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULED", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING", function() { return STARTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTED", function() { return STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNNING", function() { return RUNNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDING", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDED", function() { return ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");



var emptyOn = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["default"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["default"])(subgroup[i], name, id, i, subgroup, Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id));
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(_schedule__WEBPACK_IMPORTED_MODULE_2__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate */ "./node_modules/d3-transition/src/transition/interpolate.js");





function styleRemove(name, interpolate) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformCss"] : _interpolate__WEBPACK_IMPORTED_MODULE_3__["default"];
  return value == null ? this
          .styleTween(name, styleRemove(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction(name, i, Object(_tween__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(this, "style." + name, value))
          : styleConstant(name, i, value + ""), priority);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ "./node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(_tween__WEBPACK_IMPORTED_MODULE_0__["tweenValue"])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(_index__WEBPACK_IMPORTED_MODULE_0__["newId"])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(_schedule__WEBPACK_IMPORTED_MODULE_1__["get"])(node, id0);
        Object(_schedule__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id1);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/*! exports provided: default, tweenValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweenValue", function() { return tweenValue; });
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ "./node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(_schedule__WEBPACK_IMPORTED_MODULE_0__["get"])(node, id).value[name];
  };
}


/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/converterHelper.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/converterHelper.js ***!
  \*********************************************************************************/
/*! exports provided: converterHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converterHelper", function() { return converterHelper; });
/* harmony import */ var _dataRoleHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataRoleHelper */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataRoleHelper.js");
// powerbi.extensibility.utils.dataview

var converterHelper;
(function (converterHelper) {
    function categoryIsAlsoSeriesRole(dataView, seriesRoleName, categoryRoleName) {
        if (dataView.categories && dataView.categories.length > 0) {
            // Need to pivot data if our category soure is a series role
            let category = dataView.categories[0];
            return category.source &&
                _dataRoleHelper__WEBPACK_IMPORTED_MODULE_0__["DataRoleHelper"].hasRole(category.source, seriesRoleName) &&
                _dataRoleHelper__WEBPACK_IMPORTED_MODULE_0__["DataRoleHelper"].hasRole(category.source, categoryRoleName);
        }
        return false;
    }
    converterHelper.categoryIsAlsoSeriesRole = categoryIsAlsoSeriesRole;
    function getSeriesName(source) {
        return (source.groupName !== undefined)
            ? source.groupName
            : source.queryName;
    }
    converterHelper.getSeriesName = getSeriesName;
    function isImageUrlColumn(column) {
        let misc = getMiscellaneousTypeDescriptor(column);
        return misc != null && misc.imageUrl === true;
    }
    converterHelper.isImageUrlColumn = isImageUrlColumn;
    function isWebUrlColumn(column) {
        let misc = getMiscellaneousTypeDescriptor(column);
        return misc != null && misc.webUrl === true;
    }
    converterHelper.isWebUrlColumn = isWebUrlColumn;
    function getMiscellaneousTypeDescriptor(column) {
        return column
            && column.type
            && column.type.misc;
    }
    converterHelper.getMiscellaneousTypeDescriptor = getMiscellaneousTypeDescriptor;
    function hasImageUrlColumn(dataView) {
        if (!dataView || !dataView.metadata || !dataView.metadata.columns || !dataView.metadata.columns.length) {
            return false;
        }
        return dataView.metadata.columns.some((column) => isImageUrlColumn(column) === true);
    }
    converterHelper.hasImageUrlColumn = hasImageUrlColumn;
})(converterHelper || (converterHelper = {}));
//# sourceMappingURL=converterHelper.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataRoleHelper.js":
/*!********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataRoleHelper.js ***!
  \********************************************************************************/
/*! exports provided: DataRoleHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRoleHelper", function() { return DataRoleHelper; });
var DataRoleHelper;
(function (DataRoleHelper) {
    function getMeasureIndexOfRole(grouped, roleName) {
        if (!grouped || !grouped.length) {
            return -1;
        }
        let firstGroup = grouped[0];
        if (firstGroup.values && firstGroup.values.length > 0) {
            for (let i = 0, len = firstGroup.values.length; i < len; ++i) {
                let value = firstGroup.values[i];
                if (value && value.source) {
                    if (hasRole(value.source, roleName)) {
                        return i;
                    }
                }
            }
        }
        return -1;
    }
    DataRoleHelper.getMeasureIndexOfRole = getMeasureIndexOfRole;
    function getCategoryIndexOfRole(categories, roleName) {
        if (categories && categories.length) {
            for (let i = 0, ilen = categories.length; i < ilen; i++) {
                if (hasRole(categories[i].source, roleName)) {
                    return i;
                }
            }
        }
        return -1;
    }
    DataRoleHelper.getCategoryIndexOfRole = getCategoryIndexOfRole;
    function hasRole(column, name) {
        let roles = column.roles;
        return roles && roles[name];
    }
    DataRoleHelper.hasRole = hasRole;
    function hasRoleInDataView(dataView, name) {
        return dataView != null
            && dataView.metadata != null
            && dataView.metadata.columns
            && dataView.metadata.columns.some((c) => c.roles && c.roles[name] !== undefined); // any is an alias of some
    }
    DataRoleHelper.hasRoleInDataView = hasRoleInDataView;
    function hasRoleInValueColumn(valueColumn, name) {
        return valueColumn
            && valueColumn.source
            && valueColumn.source.roles
            && (valueColumn.source.roles[name] === true);
    }
    DataRoleHelper.hasRoleInValueColumn = hasRoleInValueColumn;
})(DataRoleHelper || (DataRoleHelper = {}));
//# sourceMappingURL=dataRoleHelper.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js":
/*!********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js ***!
  \********************************************************************************/
/*! exports provided: DataViewObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewObject", function() { return DataViewObject; });
var DataViewObject;
(function (DataViewObject) {
    function getValue(object, propertyName, defaultValue) {
        if (!object) {
            return defaultValue;
        }
        let propertyValue = object[propertyName];
        if (propertyValue === undefined) {
            return defaultValue;
        }
        return propertyValue;
    }
    DataViewObject.getValue = getValue;
    /** Gets the solid color from a fill property using only a propertyName */
    function getFillColorByPropertyName(object, propertyName, defaultColor) {
        let value = getValue(object, propertyName);
        if (!value || !value.solid) {
            return defaultColor;
        }
        return value.solid.color;
    }
    DataViewObject.getFillColorByPropertyName = getFillColorByPropertyName;
})(DataViewObject || (DataViewObject = {}));
//# sourceMappingURL=dataViewObject.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js ***!
  \*********************************************************************************/
/*! exports provided: DataViewObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewObjects", function() { return DataViewObjects; });
/* harmony import */ var _dataViewObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataViewObject */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js");

var DataViewObjects;
(function (DataViewObjects) {
    /** Gets the value of the given object/property pair. */
    function getValue(objects, propertyId, defaultValue) {
        if (!objects) {
            return defaultValue;
        }
        return _dataViewObject__WEBPACK_IMPORTED_MODULE_0__["DataViewObject"].getValue(objects[propertyId.objectName], propertyId.propertyName, defaultValue);
    }
    DataViewObjects.getValue = getValue;
    /** Gets an object from objects. */
    function getObject(objects, objectName, defaultValue) {
        if (objects && objects[objectName]) {
            return objects[objectName];
        }
        return defaultValue;
    }
    DataViewObjects.getObject = getObject;
    /** Gets the solid color from a fill property. */
    function getFillColor(objects, propertyId, defaultColor) {
        const value = getValue(objects, propertyId);
        if (!value || !value.solid) {
            return defaultColor;
        }
        return value.solid.color;
    }
    DataViewObjects.getFillColor = getFillColor;
    function getCommonValue(objects, propertyId, defaultValue) {
        const value = getValue(objects, propertyId, defaultValue);
        if (value && value.solid) {
            return value.solid.color;
        }
        if (value === undefined
            || value === null
            || (typeof value === "object" && !value.solid)) {
            return defaultValue;
        }
        return value;
    }
    DataViewObjects.getCommonValue = getCommonValue;
})(DataViewObjects || (DataViewObjects = {}));
//# sourceMappingURL=dataViewObjects.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjectsParser.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjectsParser.js ***!
  \***************************************************************************************/
/*! exports provided: DataViewObjectsParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewObjectsParser", function() { return DataViewObjectsParser; });
/* harmony import */ var _dataViewObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataViewObjects */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js");

class DataViewObjectsParser {
    static getDefault() {
        return new this();
    }
    static createPropertyIdentifier(objectName, propertyName) {
        return {
            objectName,
            propertyName
        };
    }
    static parse(dataView) {
        let dataViewObjectParser = this.getDefault(), properties;
        if (!dataView || !dataView.metadata || !dataView.metadata.objects) {
            return dataViewObjectParser;
        }
        properties = dataViewObjectParser.getProperties();
        for (let objectName in properties) {
            for (let propertyName in properties[objectName]) {
                const defaultValue = dataViewObjectParser[objectName][propertyName];
                dataViewObjectParser[objectName][propertyName] = _dataViewObjects__WEBPACK_IMPORTED_MODULE_0__["DataViewObjects"].getCommonValue(dataView.metadata.objects, properties[objectName][propertyName], defaultValue);
            }
        }
        return dataViewObjectParser;
    }
    static isPropertyEnumerable(propertyName) {
        return !DataViewObjectsParser.InnumerablePropertyPrefix.test(propertyName);
    }
    static enumerateObjectInstances(dataViewObjectParser, options) {
        let dataViewProperties = dataViewObjectParser && dataViewObjectParser[options.objectName];
        if (!dataViewProperties) {
            return [];
        }
        let instance = {
            objectName: options.objectName,
            selector: null,
            properties: {}
        };
        for (let key in dataViewProperties) {
            if (dataViewProperties.hasOwnProperty(key)) {
                instance.properties[key] = dataViewProperties[key];
            }
        }
        return {
            instances: [instance]
        };
    }
    getProperties() {
        let properties = {}, objectNames = Object.keys(this);
        objectNames.forEach((objectName) => {
            if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                let propertyNames = Object.keys(this[objectName]);
                properties[objectName] = {};
                propertyNames.forEach((propertyName) => {
                    if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                        properties[objectName][propertyName] =
                            DataViewObjectsParser.createPropertyIdentifier(objectName, propertyName);
                    }
                });
            }
        });
        return properties;
    }
}
DataViewObjectsParser.InnumerablePropertyPrefix = /^_/;
//# sourceMappingURL=dataViewObjectsParser.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewTransform.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewTransform.js ***!
  \***********************************************************************************/
/*! exports provided: DataViewTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewTransform", function() { return DataViewTransform; });
// TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
var DataViewTransform;
(function (DataViewTransform) {
    // TODO: refactor this, setGrouped, and groupValues to a test helper to stop using it in the product
    function createValueColumns(values = [], valueIdentityFields, source) {
        let result = values;
        setGrouped(result);
        if (valueIdentityFields) {
            result.identityFields = valueIdentityFields;
        }
        if (source) {
            result.source = source;
        }
        return result;
    }
    DataViewTransform.createValueColumns = createValueColumns;
    function setGrouped(values, groupedResult) {
        values.grouped = groupedResult
            ? () => groupedResult
            : () => groupValues(values);
    }
    DataViewTransform.setGrouped = setGrouped;
    /** Group together the values with a common identity. */
    function groupValues(values) {
        let groups = [], currentGroup;
        for (let i = 0, len = values.length; i < len; i++) {
            let value = values[i];
            if (!currentGroup || currentGroup.identity !== value.identity) {
                currentGroup = {
                    values: []
                };
                if (value.identity) {
                    currentGroup.identity = value.identity;
                    let source = value.source;
                    // allow null, which will be formatted as (Blank).
                    if (source.groupName !== undefined) {
                        currentGroup.name = source.groupName;
                    }
                    else if (source.displayName) {
                        currentGroup.name = source.displayName;
                    }
                }
                groups.push(currentGroup);
            }
            currentGroup.values.push(value);
        }
        return groups;
    }
    DataViewTransform.groupValues = groupValues;
})(DataViewTransform || (DataViewTransform = {}));
//# sourceMappingURL=dataViewTransform.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/index.js ***!
  \***********************************************************************/
/*! exports provided: converterHelper, dataRoleHelper, dataViewObject, dataViewObjects, dataViewObjectsParser, dataViewTransform, validationHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _converterHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converterHelper */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/converterHelper.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "converterHelper", function() { return _converterHelper__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _dataRoleHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataRoleHelper */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataRoleHelper.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dataRoleHelper", function() { return _dataRoleHelper__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _dataViewObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataViewObject */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dataViewObject", function() { return _dataViewObject__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _dataViewObjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataViewObjects */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dataViewObjects", function() { return _dataViewObjects__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _dataViewObjectsParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataViewObjectsParser */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjectsParser.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dataViewObjectsParser", function() { return _dataViewObjectsParser__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _dataViewTransform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataViewTransform */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewTransform.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dataViewTransform", function() { return _dataViewTransform__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _validationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validationHelper */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/validationHelper.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "validationHelper", function() { return _validationHelper__WEBPACK_IMPORTED_MODULE_6__; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/validationHelper.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/validationHelper.js ***!
  \**********************************************************************************/
/*! exports provided: validationHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationHelper", function() { return validationHelper; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var validationHelper;
(function (validationHelper) {
    function isImageUrlAllowed(url) {
        // Excludes all URLs that don't contain .gif .jpg .png or .svg extensions and don't start from "http(s)://".
        // Base64 incoded images are allowable too.
        return (/^https?:\/\/.+\.(gif|jpg|png|svg)$/i).test(url) || (/^data:image\/(gif|jpeg|png|svg\+xml);base64,/i).test(url);
    }
    validationHelper.isImageUrlAllowed = isImageUrlAllowed;
    function isFileImage(url, imageCheckResultCallBack) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState !== this.HEADERS_RECEIVED) {
                return;
            }
            let contentType = request.getResponseHeader("Content-Type"), supportedTypes = ["image/png", "image/jpeg", "image/gif", "image/svg+xml"];
            if (supportedTypes.indexOf(contentType) > -1) {
                return imageCheckResultCallBack(true, contentType);
            }
            return imageCheckResultCallBack(false, contentType);
        };
        request.open("HEAD", url, true);
        request.send();
    }
    validationHelper.isFileImage = isFileImage;
})(validationHelper || (validationHelper = {}));
//# sourceMappingURL=validationHelper.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateFormatter.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateFormatter.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateFormatter; });
class DateFormatter {
    static pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len)
            val = "0" + val;
        return val;
    }
    // Regexes and supporting functions are cached through closure
    static format(date, mask, utc) {
        let dF = DateFormatter;
        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length === 1 && Object.prototype.toString.call(date) === "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }
        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date))
            throw SyntaxError("invalid date");
        mask = String(DateFormatter.masks[mask] || mask || DateFormatter.masks["default"]);
        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) === "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }
        let _ = utc ? "getUTC" : "get", d = date[_ + "Date"](), D = date[_ + "Day"](), M = date[_ + "Month"](), y = date[_ + "FullYear"](), H = date[_ + "Hours"](), m = date[_ + "Minutes"](), s = date[_ + "Seconds"](), L = date[_ + "Milliseconds"](), o = utc ? 0 : date.getTimezoneOffset(), flags = {
            d: d,
            dd: DateFormatter.pad(d),
            ddd: dF.i18n.dayNames[D],
            dddd: dF.i18n.dayNames[D + 7],
            m: m,
            mm: DateFormatter.pad(m),
            mmm: dF.i18n.monthNames[m],
            mmmm: dF.i18n.monthNames[m + 12],
            MMM: dF.i18n.monthNames[M],
            yy: String(y).slice(2),
            yyyy: y,
            h: H % 12 || 12,
            hh: DateFormatter.pad(H % 12 || 12),
            H: H,
            HH: DateFormatter.pad(H),
            M: M + 1,
            MM: DateFormatter.pad(M + 1),
            s: s,
            ss: DateFormatter.pad(s),
            l: DateFormatter.pad(L, 3),
            L: DateFormatter.pad(L > 99 ? Math.round(L / 10) : L),
            t: H < 12 ? "a" : "p",
            tt: H < 12 ? "AM" : "PM",
            T: H < 12 ? "A" : "P",
            TT: H < 12 ? "AM" : "PM",
            Z: utc ? "UTC" : (String(date).match(DateFormatter.timezone) || [""]).pop().replace(DateFormatter.timezoneClip, ""),
            o: (o > 0 ? "-" : "+") + DateFormatter.pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
            S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
        };
        return mask.replace(DateFormatter.token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    }
}
DateFormatter.token = /d{1,4}|m{1,4}|M{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
DateFormatter.timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
DateFormatter.timezoneClip = /[^-+\dA-Z]/g;
// Some common format strings
DateFormatter.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
// Internationalization strings
DateFormatter.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};
//# sourceMappingURL=dateFormatter.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateTimeSequence.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateTimeSequence.js ***!
  \*****************************************************************************************/
/*! exports provided: DateTimeSequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeSequence", function() { return DateTimeSequence; });
/* harmony import */ var _dateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateUtils */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateUtils.js");
/* harmony import */ var powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-utils-typeutils */ "./node_modules/powerbi-visuals-utils-typeutils/lib/index.js");
/* harmony import */ var _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../formattingService/iFormattingService */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/iFormattingService.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

// powerbi.extensibility.utils.type

var NumericSequence = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["numericSequence"].NumericSequence;
var NumericSequenceRange = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["numericSequenceRange"].NumericSequenceRange;
// powerbi.extensibility.utils.formatting

/** Repreasents the sequence of the dates/times */
class DateTimeSequence {
    // Constructors
    /** Creates new instance of the DateTimeSequence */
    constructor(unit) {
        this.unit = unit;
        this.sequence = [];
        this.min = new Date("9999-12-31T23:59:59.999");
        this.max = new Date("0001-01-01T00:00:00.000");
    }
    // Methods
    /**
     * Add a new Date to a sequence.
     * @param date - date to add
     */
    add(date) {
        if (date < this.min) {
            this.min = date;
        }
        if (date > this.max) {
            this.max = date;
        }
        this.sequence.push(date);
    }
    // Methods
    /**
     * Extends the sequence to cover new date range
     * @param min - new min to be covered by sequence
     * @param max - new max to be covered by sequence
     */
    extendToCover(min, max) {
        let x = this.min;
        while (min < x) {
            x = DateTimeSequence.addInterval(x, -this.interval, this.unit);
            this.sequence.splice(0, 0, x);
        }
        this.min = x;
        x = this.max;
        while (x < max) {
            x = DateTimeSequence.addInterval(x, this.interval, this.unit);
            this.sequence.push(x);
        }
        this.max = x;
    }
    /**
     * Move the sequence to cover new date range
     * @param min - new min to be covered by sequence
     * @param max - new max to be covered by sequence
     */
    moveToCover(min, max) {
        let delta = DateTimeSequence.getDelta(min, max, this.unit);
        let count = Math.floor(delta / this.interval);
        this.min = DateTimeSequence.addInterval(this.min, count * this.interval, this.unit);
        this.sequence = [];
        this.sequence.push(this.min);
        this.max = this.min;
        while (this.max < max) {
            this.max = DateTimeSequence.addInterval(this.max, this.interval, this.unit);
            this.sequence.push(this.max);
        }
    }
    // Static
    /**
     * Calculate a new DateTimeSequence
     * @param dataMin - Date representing min of the data range
     * @param dataMax - Date representing max of the data range
     * @param expectedCount - expected number of intervals in the sequence
     * @param unit - of the intervals in the sequence
     */
    static calculate(dataMin, dataMax, expectedCount, unit) {
        if (!unit) {
            unit = DateTimeSequence.getIntervalUnit(dataMin, dataMax, expectedCount);
        }
        switch (unit) {
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Year:
                return DateTimeSequence.calculateYears(dataMin, dataMax, expectedCount);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Month:
                return DateTimeSequence.calculateMonths(dataMin, dataMax, expectedCount);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Week:
                return DateTimeSequence.calculateWeeks(dataMin, dataMax, expectedCount);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Day:
                return DateTimeSequence.calculateDays(dataMin, dataMax, expectedCount);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour:
                return DateTimeSequence.calculateHours(dataMin, dataMax, expectedCount);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute:
                return DateTimeSequence.calculateMinutes(dataMin, dataMax, expectedCount);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second:
                return DateTimeSequence.calculateSeconds(dataMin, dataMax, expectedCount);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond:
                return DateTimeSequence.calculateMilliseconds(dataMin, dataMax, expectedCount);
        }
    }
    static calculateYears(dataMin, dataMax, expectedCount) {
        // Calculate range and sequence
        let yearsRange = NumericSequenceRange.calculateDataRange(dataMin.getFullYear(), dataMax.getFullYear(), false);
        // Calculate year sequence
        let sequence = NumericSequence.calculate(NumericSequenceRange.calculate(0, yearsRange.max - yearsRange.min), expectedCount, 0, null, null, [1, 2, 5]);
        let newMinYear = Math.floor(yearsRange.min / sequence.interval) * sequence.interval;
        let date = new Date(newMinYear, 0, 1);
        // Convert to date sequence
        let result = DateTimeSequence.fromNumericSequence(date, sequence, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Year);
        return result;
    }
    static calculateMonths(dataMin, dataMax, expectedCount) {
        // Calculate range
        let minYear = dataMin.getFullYear();
        let maxYear = dataMax.getFullYear();
        let minMonth = dataMin.getMonth();
        let maxMonth = (maxYear - minYear) * 12 + dataMax.getMonth();
        let date = new Date(minYear, 0, 1);
        // Calculate month sequence
        let sequence = NumericSequence.calculateUnits(minMonth, maxMonth, expectedCount, [1, 2, 3, 6, 12]);
        // Convert to date sequence
        let result = DateTimeSequence.fromNumericSequence(date, sequence, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Month);
        return result;
    }
    static calculateWeeks(dataMin, dataMax, expectedCount) {
        let firstDayOfWeek = 0;
        let minDayOfWeek = dataMin.getDay();
        let dayOffset = (minDayOfWeek - firstDayOfWeek + 7) % 7;
        let minDay = dataMin.getDate() - dayOffset;
        // Calculate range
        let date = new Date(dataMin.getFullYear(), dataMin.getMonth(), minDay);
        let min = 0;
        let max = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Week));
        // Calculate week sequence
        let sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 4, 8]);
        // Convert to date sequence
        let result = DateTimeSequence.fromNumericSequence(date, sequence, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Week);
        return result;
    }
    static calculateDays(dataMin, dataMax, expectedCount) {
        // Calculate range
        let date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
        let min = 0;
        let max = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].ceilWithPrecision(DateTimeSequence.getDelta(dataMin, dataMax, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Day));
        // Calculate day sequence
        let sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 7, 14]);
        // Convert to date sequence
        let result = DateTimeSequence.fromNumericSequence(date, sequence, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Day);
        return result;
    }
    static calculateHours(dataMin, dataMax, expectedCount) {
        // Calculate range
        let date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
        let min = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour));
        let max = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour));
        // Calculate hour sequence
        let sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 3, 6, 12, 24]);
        // Convert to date sequence
        let result = DateTimeSequence.fromNumericSequence(date, sequence, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour);
        return result;
    }
    static calculateMinutes(dataMin, dataMax, expectedCount) {
        // Calculate range
        let date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours());
        let min = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute));
        let max = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute));
        // Calculate minutes numeric sequence
        let sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 3, 60 * 6, 60 * 12, 60 * 24]);
        // Convert to date sequence
        let result = DateTimeSequence.fromNumericSequence(date, sequence, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute);
        return result;
    }
    static calculateSeconds(dataMin, dataMax, expectedCount) {
        // Calculate range
        let date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes());
        let min = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second));
        let max = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second));
        // Calculate minutes numeric sequence
        let sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 5, 60 * 10, 60 * 15, 60 * 30, 60 * 60]);
        // Convert to date sequence
        let result = DateTimeSequence.fromNumericSequence(date, sequence, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second);
        return result;
    }
    static calculateMilliseconds(dataMin, dataMax, expectedCount) {
        // Calculate range
        let date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes(), dataMin.getSeconds());
        let min = DateTimeSequence.getDelta(date, dataMin, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond);
        let max = DateTimeSequence.getDelta(date, dataMax, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond);
        // Calculate milliseconds numeric sequence
        let sequence = NumericSequence.calculate(NumericSequenceRange.calculate(min, max), expectedCount, 0);
        // Convert to date sequence
        let result = DateTimeSequence.fromNumericSequence(date, sequence, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond);
        return result;
    }
    static addInterval(value, interval, unit) {
        interval = Math.round(interval);
        switch (unit) {
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Year:
                return _dateUtils__WEBPACK_IMPORTED_MODULE_0__["dateUtils"].addYears(value, interval);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Month:
                return _dateUtils__WEBPACK_IMPORTED_MODULE_0__["dateUtils"].addMonths(value, interval);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Week:
                return _dateUtils__WEBPACK_IMPORTED_MODULE_0__["dateUtils"].addWeeks(value, interval);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Day:
                return _dateUtils__WEBPACK_IMPORTED_MODULE_0__["dateUtils"].addDays(value, interval);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour:
                return _dateUtils__WEBPACK_IMPORTED_MODULE_0__["dateUtils"].addHours(value, interval);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute:
                return _dateUtils__WEBPACK_IMPORTED_MODULE_0__["dateUtils"].addMinutes(value, interval);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second:
                return _dateUtils__WEBPACK_IMPORTED_MODULE_0__["dateUtils"].addSeconds(value, interval);
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond:
                return _dateUtils__WEBPACK_IMPORTED_MODULE_0__["dateUtils"].addMilliseconds(value, interval);
        }
    }
    static fromNumericSequence(date, sequence, unit) {
        let result = new DateTimeSequence(unit);
        for (let i = 0; i < sequence.sequence.length; i++) {
            let x = sequence.sequence[i];
            let d = DateTimeSequence.addInterval(date, x, unit);
            result.add(d);
        }
        result.interval = sequence.interval;
        result.intervalOffset = sequence.intervalOffset;
        return result;
    }
    static getDelta(min, max, unit) {
        let delta = 0;
        switch (unit) {
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Year:
                delta = max.getFullYear() - min.getFullYear();
                break;
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Month:
                delta = (max.getFullYear() - min.getFullYear()) * 12 + max.getMonth() - min.getMonth();
                break;
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Week:
                delta = (max.getTime() - min.getTime()) / (7 * 24 * 3600000);
                break;
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Day:
                delta = (max.getTime() - min.getTime()) / (24 * 3600000);
                break;
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour:
                delta = (max.getTime() - min.getTime()) / 3600000;
                break;
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute:
                delta = (max.getTime() - min.getTime()) / 60000;
                break;
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second:
                delta = (max.getTime() - min.getTime()) / 1000;
                break;
            case _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond:
                delta = max.getTime() - min.getTime();
                break;
        }
        return delta;
    }
    static getIntervalUnit(min, max, maxCount) {
        maxCount = Math.max(maxCount, 2);
        let totalDays = DateTimeSequence.getDelta(min, max, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Day);
        if (totalDays > 356 && totalDays >= 30 * 6 * maxCount)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Year;
        if (totalDays > 60 && totalDays > 7 * maxCount)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Month;
        if (totalDays > 14 && totalDays > 2 * maxCount)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Week;
        let totalHours = DateTimeSequence.getDelta(min, max, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour);
        if (totalDays > 2 && totalHours > 12 * maxCount)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Day;
        if (totalHours >= 24 && totalHours >= maxCount)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour;
        let totalMinutes = DateTimeSequence.getDelta(min, max, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute);
        if (totalMinutes > 2 && totalMinutes >= maxCount)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute;
        let totalSeconds = DateTimeSequence.getDelta(min, max, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second);
        if (totalSeconds > 2 && totalSeconds >= 0.8 * maxCount)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second;
        let totalMilliseconds = DateTimeSequence.getDelta(min, max, _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond);
        if (totalMilliseconds > 0)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond;
        // If the size of the range is 0 we need to guess the unit based on the date's non-zero values starting with milliseconds
        let date = min;
        if (date.getMilliseconds() !== 0)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Millisecond;
        if (date.getSeconds() !== 0)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Second;
        if (date.getMinutes() !== 0)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Minute;
        if (date.getHours() !== 0)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Hour;
        if (date.getDate() !== 1)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Day;
        if (date.getMonth() !== 0)
            return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Month;
        return _formattingService_iFormattingService__WEBPACK_IMPORTED_MODULE_2__["DateTimeUnit"].Year;
    }
}
// Constants
DateTimeSequence.MIN_COUNT = 1;
DateTimeSequence.MAX_COUNT = 1000;
//# sourceMappingURL=dateTimeSequence.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateUtils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateUtils.js ***!
  \**********************************************************************************/
/*! exports provided: dateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateUtils", function() { return dateUtils; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/** dateUtils module provides DateTimeSequence with set of additional date manipulation routines */
var dateUtils;
(function (dateUtils) {
    let MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let MonthDaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /**
     * Returns bool indicating weither the provided year is a leap year.
     * @param year - year value
     */
    function isLeap(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }
    /**
     * Returns number of days in the provided year/month.
     * @param year - year value
     * @param month - month value
     */
    function getMonthDays(year, month) {
        return isLeap(year) ? MonthDaysLeap[month] : MonthDays[month];
    }
    /**
     * Adds a specified number of years to the provided date.
     * @param date - date value
     * @param yearDelta - number of years to add
     */
    function addYears(date, yearDelta) {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let isLeapDay = month === 2 && day === 29;
        let result = new Date(date.getTime());
        year = year + yearDelta;
        if (isLeapDay && !isLeap(year)) {
            day = 28;
        }
        result.setFullYear(year, month, day);
        return result;
    }
    dateUtils.addYears = addYears;
    /**
     * Adds a specified number of months to the provided date.
     * @param date - date value
     * @param monthDelta - number of months to add
     */
    function addMonths(date, monthDelta) {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let result = new Date(date.getTime());
        year += (monthDelta - (monthDelta % 12)) / 12;
        month += monthDelta % 12;
        // VSTS 1325771: Certain column charts don't display any data
        // Wrap arround the month if is after december (value 11)
        if (month > 11) {
            month = month % 12;
            year++;
        }
        day = Math.min(day, getMonthDays(year, month));
        result.setFullYear(year, month, day);
        return result;
    }
    dateUtils.addMonths = addMonths;
    /**
     * Adds a specified number of weeks to the provided date.
     * @param date - date value
     * @param weeks - number of weeks to add
     */
    function addWeeks(date, weeks) {
        return addDays(date, weeks * 7);
    }
    dateUtils.addWeeks = addWeeks;
    /**
     * Adds a specified number of days to the provided date.
     * @param date - date value
     * @param days - number of days to add
     */
    function addDays(date, days) {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let result = new Date(date.getTime());
        result.setFullYear(year, month, day + days);
        return result;
    }
    dateUtils.addDays = addDays;
    /**
     * Adds a specified number of hours to the provided date.
     * @param date - date value
     * @param hours - number of hours to add
     */
    function addHours(date, hours) {
        return new Date(date.getTime() + hours * 3600000);
    }
    dateUtils.addHours = addHours;
    /**
     * Adds a specified number of minutes to the provided date.
     * @param date - date value
     * @param minutes - number of minutes to add
     */
    function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
    }
    dateUtils.addMinutes = addMinutes;
    /**
     * Adds a specified number of seconds to the provided date.
     * @param date - date value
     * @param seconds - number of seconds to add
     */
    function addSeconds(date, seconds) {
        return new Date(date.getTime() + seconds * 1000);
    }
    dateUtils.addSeconds = addSeconds;
    /**
     * Adds a specified number of milliseconds to the provided date.
     * @param date - date value
     * @param milliseconds - number of milliseconds to add
     */
    function addMilliseconds(date, milliseconds) {
        return new Date(date.getTime() + milliseconds);
    }
    dateUtils.addMilliseconds = addMilliseconds;
})(dateUtils || (dateUtils = {}));
//# sourceMappingURL=dateUtils.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/displayUnitSystem/displayUnitSystem.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/displayUnitSystem/displayUnitSystem.js ***!
  \*******************************************************************************************************/
/*! exports provided: DisplayUnit, DisplayUnitSystem, NoDisplayUnitSystem, DefaultDisplayUnitSystem, WholeUnitsDisplayUnitSystem, DataLabelsDisplayUnitSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayUnit", function() { return DisplayUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayUnitSystem", function() { return DisplayUnitSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDisplayUnitSystem", function() { return NoDisplayUnitSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDisplayUnitSystem", function() { return DefaultDisplayUnitSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WholeUnitsDisplayUnitSystem", function() { return WholeUnitsDisplayUnitSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLabelsDisplayUnitSystem", function() { return DataLabelsDisplayUnitSystem; });
/* harmony import */ var _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../formattingService/formattingService */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/formattingService.js");
/* harmony import */ var powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-utils-typeutils */ "./node_modules/powerbi-visuals-utils-typeutils/lib/index.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */


// Constants
const maxExponent = 24;
const defaultScientificBigNumbersBoundary = 1E15;
const scientificSmallNumbersBoundary = 1E-4;
const PERCENTAGE_FORMAT = "%";
const SCIENTIFIC_FORMAT = "E+0";
const DEFAULT_SCIENTIFIC_FORMAT = "0.##" + SCIENTIFIC_FORMAT;
// Regular expressions
/**
 * This regex looks for strings that match one of the following conditions:
 *   - Optionally contain "0", "#", followed by a period, followed by at least one "0" or "#" (Ex. ###,000.###)
 *   - Contains at least one of "0", "#", or "," (Ex. ###,000)
 *   - Contain a "g" (indicates to use the general .NET numeric format string)
 * The entire string (start to end) must match, and the match is not case-sensitive.
 */
const SUPPORTED_SCIENTIFIC_FORMATS = /^([0\#,]*\.[0\#]+|[0\#,]+|g)$/i;
class DisplayUnit {
    // Methods
    project(value) {
        if (this.value) {
            return powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].removeDecimalNoise(value / this.value);
        }
        else {
            return value;
        }
    }
    reverseProject(value) {
        if (this.value) {
            return value * this.value;
        }
        else {
            return value;
        }
    }
    isApplicableTo(value) {
        value = Math.abs(value);
        let precision = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].getPrecision(value, 3);
        return powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].greaterOrEqualWithPrecision(value, this.applicableRangeMin, precision) && powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].lessWithPrecision(value, this.applicableRangeMax, precision);
    }
    isScaling() {
        return this.value > 1;
    }
}
class DisplayUnitSystem {
    // Constructor
    constructor(units) {
        this.units = units ? units : [];
    }
    // Properties
    get title() {
        return this.displayUnit ? this.displayUnit.title : undefined;
    }
    // Methods
    update(value) {
        if (value === undefined)
            return;
        this.unitBaseValue = value;
        this.displayUnit = this.findApplicableDisplayUnit(value);
    }
    findApplicableDisplayUnit(value) {
        for (let unit of this.units) {
            if (unit.isApplicableTo(value))
                return unit;
        }
        return undefined;
    }
    format(value, format, decimals, trailingZeros, cultureSelector) {
        decimals = this.getNumberOfDecimalsForFormatting(format, decimals);
        let nonScientificFormat = "";
        if (this.isFormatSupported(format)
            && !this.hasScientitifcFormat(format)
            && this.isScalingUnit()
            && this.shouldRespectScalingUnit(format)) {
            value = this.displayUnit.project(value);
            nonScientificFormat = this.displayUnit.labelFormat;
        }
        return this.formatHelper({
            value,
            nonScientificFormat,
            format,
            decimals,
            trailingZeros,
            cultureSelector
        });
    }
    isFormatSupported(format) {
        return !DisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
    }
    isPercentageFormat(format) {
        return format && format.indexOf(PERCENTAGE_FORMAT) >= 0;
    }
    shouldRespectScalingUnit(format) {
        return true;
    }
    getNumberOfDecimalsForFormatting(format, decimals) {
        return decimals;
    }
    isScalingUnit() {
        return this.displayUnit && this.displayUnit.isScaling();
    }
    formatHelper(options) {
        let { value, nonScientificFormat, cultureSelector, format, decimals, trailingZeros } = options;
        // If the format is "general" and we want to override the number of decimal places then use the default numeric format string.
        if ((format === "g" || format === "G") && decimals != null) {
            format = "#,0.00";
        }
        format = _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_0__["numberFormat"].addDecimalsToFormat(format, decimals, trailingZeros);
        if (format && !_formattingService_formattingService__WEBPACK_IMPORTED_MODULE_0__["formattingService"].isStandardNumberFormat(format))
            return _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_0__["formattingService"].formatNumberWithCustomOverride(value, format, nonScientificFormat, cultureSelector);
        if (!format) {
            format = "G";
        }
        if (!nonScientificFormat) {
            nonScientificFormat = "{0}";
        }
        let text = _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_0__["formattingService"].formatValue(value, format, cultureSelector);
        return _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_0__["formattingService"].format(nonScientificFormat, [text]);
    }
    /** Formats a single value by choosing an appropriate base for the DisplayUnitSystem before formatting. */
    formatSingleValue(value, format, decimals, trailingZeros, cultureSelector) {
        // Change unit base to a value appropriate for this value
        this.update(this.shouldUseValuePrecision(value) ? powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].getPrecision(value, 8) : value);
        return this.format(value, format, decimals, trailingZeros, cultureSelector);
    }
    shouldUseValuePrecision(value) {
        if (this.units.length === 0)
            return true;
        // Check if the value is big enough to have a valid unit by checking against the smallest unit (that it's value bigger than 1).
        let applicableRangeMin = 0;
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].isScaling()) {
                applicableRangeMin = this.units[i].applicableRangeMin;
                break;
            }
        }
        return Math.abs(value) < applicableRangeMin;
    }
    isScientific(value) {
        return value < -defaultScientificBigNumbersBoundary || value > defaultScientificBigNumbersBoundary ||
            (-scientificSmallNumbersBoundary < value && value < scientificSmallNumbersBoundary && value !== 0);
    }
    hasScientitifcFormat(format) {
        return format && format.toUpperCase().indexOf("E") !== -1;
    }
    supportsScientificFormat(format) {
        if (format)
            return SUPPORTED_SCIENTIFIC_FORMATS.test(format);
        return true;
    }
    shouldFallbackToScientific(value, format) {
        return !this.hasScientitifcFormat(format)
            && this.supportsScientificFormat(format)
            && this.isScientific(value);
    }
    getScientificFormat(data, format, decimals, trailingZeros) {
        // Use scientific format outside of the range
        if (this.isFormatSupported(format) && this.shouldFallbackToScientific(data, format)) {
            let numericFormat = _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_0__["numberFormat"].getNumericFormat(data, format);
            if (decimals)
                numericFormat = _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_0__["numberFormat"].addDecimalsToFormat(numericFormat ? numericFormat : "0", Math.abs(decimals), trailingZeros);
            if (numericFormat)
                return numericFormat + SCIENTIFIC_FORMAT;
            else
                return DEFAULT_SCIENTIFIC_FORMAT;
        }
        return format;
    }
}
DisplayUnitSystem.UNSUPPORTED_FORMATS = /^(p\d*)|(e\d*)$/i;
/** Provides a unit system that is defined by formatting in the model, and is suitable for visualizations shown in single number visuals in explore mode. */
class NoDisplayUnitSystem extends DisplayUnitSystem {
    // Constructor
    constructor() {
        super([]);
    }
}
/** Provides a unit system that creates a more concise format for displaying values. This is suitable for most of the cases where
    we are showing values (chart axes) and as such it is the default unit system. */
class DefaultDisplayUnitSystem extends DisplayUnitSystem {
    // Constructor
    constructor(unitLookup) {
        super(DefaultDisplayUnitSystem.getUnits(unitLookup));
    }
    // Methods
    format(data, format, decimals, trailingZeros, cultureSelector) {
        format = this.getScientificFormat(data, format, decimals, trailingZeros);
        return super.format(data, format, decimals, trailingZeros, cultureSelector);
    }
    static reset() {
        DefaultDisplayUnitSystem.units = null;
    }
    static getUnits(unitLookup) {
        if (!DefaultDisplayUnitSystem.units) {
            DefaultDisplayUnitSystem.units = createDisplayUnits(unitLookup, (value, previousUnitValue, min) => {
                // When dealing with millions/billions/trillions we need to switch to millions earlier: for example instead of showing 100K 200K 300K we should show 0.1M 0.2M 0.3M etc
                if (value - previousUnitValue >= 1000) {
                    return value / 10;
                }
                return min;
            });
            // Ensure last unit has max of infinity
            DefaultDisplayUnitSystem.units[DefaultDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
        }
        return DefaultDisplayUnitSystem.units;
    }
}
/** Provides a unit system that creates a more concise format for displaying values, but only allows showing a unit if we have at least
    one of those units (e.g. 0.9M is not allowed since it's less than 1 million). This is suitable for cases such as dashboard tiles
    where we have restricted space but do not want to show partial units. */
class WholeUnitsDisplayUnitSystem extends DisplayUnitSystem {
    // Constructor
    constructor(unitLookup) {
        super(WholeUnitsDisplayUnitSystem.getUnits(unitLookup));
    }
    static reset() {
        WholeUnitsDisplayUnitSystem.units = null;
    }
    static getUnits(unitLookup) {
        if (!WholeUnitsDisplayUnitSystem.units) {
            WholeUnitsDisplayUnitSystem.units = createDisplayUnits(unitLookup);
            // Ensure last unit has max of infinity
            WholeUnitsDisplayUnitSystem.units[WholeUnitsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
        }
        return WholeUnitsDisplayUnitSystem.units;
    }
    format(data, format, decimals, trailingZeros, cultureSelector) {
        format = this.getScientificFormat(data, format, decimals, trailingZeros);
        return super.format(data, format, decimals, trailingZeros, cultureSelector);
    }
}
class DataLabelsDisplayUnitSystem extends DisplayUnitSystem {
    constructor(unitLookup) {
        super(DataLabelsDisplayUnitSystem.getUnits(unitLookup));
    }
    isFormatSupported(format) {
        return !DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
    }
    static getUnits(unitLookup) {
        if (!DataLabelsDisplayUnitSystem.units) {
            let units = [];
            let adjustMinBasedOnPreviousUnit = (value, previousUnitValue, min) => {
                // Never returns true, we are always ignoring
                // We do not early switch (e.g. 100K instead of 0.1M)
                // Intended? If so, remove this function, otherwise, remove if statement
                if (value === -1)
                    if (value - previousUnitValue >= 1000) {
                        return value / 10;
                    }
                return min;
            };
            // Add Auto & None
            let names = unitLookup(-1);
            addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
            names = unitLookup(0);
            addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
            // Add normal units
            DataLabelsDisplayUnitSystem.units = units.concat(createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit));
            // Ensure last unit has max of infinity
            DataLabelsDisplayUnitSystem.units[DataLabelsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
        }
        return DataLabelsDisplayUnitSystem.units;
    }
    format(data, format, decimals, trailingZeros, cultureSelector) {
        format = this.getScientificFormat(data, format, decimals, trailingZeros);
        return super.format(data, format, decimals, trailingZeros, cultureSelector);
    }
}
// Constants
DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE = 0;
DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE = 1;
DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS = /^(e\d*)$/i;
function createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit) {
    let units = [];
    for (let i = 3; i < maxExponent; i++) {
        let names = unitLookup(i);
        if (names)
            addUnitIfNonEmpty(units, powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_1__["double"].pow10(i), names.title, names.format, adjustMinBasedOnPreviousUnit);
    }
    return units;
}
function addUnitIfNonEmpty(units, value, title, labelFormat, adjustMinBasedOnPreviousUnit) {
    if (title || labelFormat) {
        let min = value;
        if (units.length > 0) {
            let previousUnit = units[units.length - 1];
            if (adjustMinBasedOnPreviousUnit)
                min = adjustMinBasedOnPreviousUnit(value, previousUnit.value, min);
            previousUnit.applicableRangeMax = min;
        }
        let unit = new DisplayUnit();
        unit.value = value;
        unit.applicableRangeMin = min;
        unit.applicableRangeMax = min * 1000;
        unit.title = title;
        unit.labelFormat = labelFormat;
        units.push(unit);
    }
}
//# sourceMappingURL=displayUnitSystem.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/displayUnitSystem/displayUnitSystemType.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/displayUnitSystem/displayUnitSystemType.js ***!
  \***********************************************************************************************************/
/*! exports provided: DisplayUnitSystemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayUnitSystemType", function() { return DisplayUnitSystemType; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/** The system used to determine display units used during formatting */
var DisplayUnitSystemType;
(function (DisplayUnitSystemType) {
    /** Default display unit system, which saves space by using units such as K, M, bn with PowerView rules for when to pick a unit. Suitable for chart axes. */
    DisplayUnitSystemType[DisplayUnitSystemType["Default"] = 0] = "Default";
    /** A verbose display unit system that will only respect the formatting defined in the model. Suitable for explore mode single-value cards. */
    DisplayUnitSystemType[DisplayUnitSystemType["Verbose"] = 1] = "Verbose";
    /**
     * A display unit system that uses units such as K, M, bn if we have at least one of those units (e.g. 0.9M is not valid as it's less than 1 million).
     * Suitable for dashboard tile cards
     */
    DisplayUnitSystemType[DisplayUnitSystemType["WholeUnits"] = 2] = "WholeUnits";
    /**A display unit system that also contains Auto and None units for data labels*/
    DisplayUnitSystemType[DisplayUnitSystemType["DataLabels"] = 3] = "DataLabels";
})(DisplayUnitSystemType || (DisplayUnitSystemType = {}));
//# sourceMappingURL=displayUnitSystemType.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/font/family.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/font/family.js ***!
  \*******************************************************************************/
/*! exports provided: fallbackFonts, Family */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackFonts", function() { return fallbackFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Family", function() { return Family; });
/* harmony import */ var _familyInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./familyInfo */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/font/familyInfo.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

const fallbackFonts = ["helvetica", "arial", "sans-serif"];
const Family = {
    light: new _familyInfo__WEBPACK_IMPORTED_MODULE_0__["FamilyInfo"](fallbackFonts),
    semilight: new _familyInfo__WEBPACK_IMPORTED_MODULE_0__["FamilyInfo"](fallbackFonts),
    regular: new _familyInfo__WEBPACK_IMPORTED_MODULE_0__["FamilyInfo"](fallbackFonts),
    semibold: new _familyInfo__WEBPACK_IMPORTED_MODULE_0__["FamilyInfo"](fallbackFonts),
    bold: new _familyInfo__WEBPACK_IMPORTED_MODULE_0__["FamilyInfo"](fallbackFonts),
    lightSecondary: new _familyInfo__WEBPACK_IMPORTED_MODULE_0__["FamilyInfo"](fallbackFonts),
    regularSecondary: new _familyInfo__WEBPACK_IMPORTED_MODULE_0__["FamilyInfo"](fallbackFonts),
    boldSecondary: new _familyInfo__WEBPACK_IMPORTED_MODULE_0__["FamilyInfo"](fallbackFonts)
};
//# sourceMappingURL=family.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/font/familyInfo.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/font/familyInfo.js ***!
  \***********************************************************************************/
/*! exports provided: FamilyInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyInfo", function() { return FamilyInfo; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
class FamilyInfo {
    constructor(families) {
        this.families = families;
    }
    /**
     * Gets the first font "wf_" font family since it will always be loaded.
     */
    get family() {
        return this.getFamily();
    }
    /**
    * Gets the first font family that matches regex (if provided).
    * Default regex looks for "wf_" fonts which are always loaded.
    */
    getFamily(regex = /^wf_/) {
        if (!this.families) {
            return null;
        }
        if (regex) {
            for (let fontFamily of this.families) {
                if (regex.test(fontFamily)) {
                    return fontFamily;
                }
            }
        }
        return this.families[0];
    }
    /**
     * Gets the CSS string for the "font-family" CSS attribute.
     */
    get css() {
        return this.getCSS();
    }
    /**
     * Gets the CSS string for the "font-family" CSS attribute.
     */
    getCSS() {
        return this.families ? this.families.map((font => font.indexOf(" ") > 0 ? `'` + font + `'` : font)).join(", ") : null;
    }
}
//# sourceMappingURL=familyInfo.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formatting.js":
/*!******************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/formatting.js ***!
  \******************************************************************************/
/*! exports provided: findDateFormat, fixDateTimeFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDateFormat", function() { return findDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixDateTimeFormat", function() { return fixDateTimeFormat; });
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
let regexCache;
/**
 * Translate .NET format into something supported by jQuery.Globalize.
 */
function findDateFormat(value, format, cultureName) {
    switch (format) {
        case "m":
            // Month + day
            format = "M";
            break;
        case "O":
        case "o":
            // Roundtrip
            format = "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'0000'";
            break;
        case "R":
        case "r":
            // RFC1123 pattern - - time must be converted to UTC before formatting
            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
            format = "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'";
            break;
        case "s":
            // Sortable - should use invariant culture
            format = "S";
            break;
        case "u":
            // Universal sortable - should convert to UTC before applying the "yyyy'-'MM'-'dd HH':'mm':'ss'Z' format.
            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
            format = "yyyy'-'MM'-'dd HH':'mm':'ss'Z'";
            break;
        case "U":
            // Universal full - the pattern is same as F but the time must be converted to UTC before formatting
            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
            format = "F";
            break;
        case "y":
        case "Y":
            // Year and month
            switch (cultureName) {
                case "default":
                case "en":
                case "en-US":
                    format = "MMMM, yyyy"; // Fix the default year-month pattern for english
                    break;
                default:
                    format = "Y"; // For other cultures - use the localized pattern
            }
            break;
    }
    return { value: value, format: format };
}
/**
 * Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize.
 */
function fixDateTimeFormat(format) {
    // Fix for the "K" format (timezone):
    // T he js dates don't have a kind property so we'll support only local kind which is equavalent to zzz format.
    format = format.replace(/%K/g, "zzz");
    format = format.replace(/K/g, "zzz");
    format = format.replace(/fffffff/g, "fff0000");
    format = format.replace(/ffffff/g, "fff000");
    format = format.replace(/fffff/g, "fff00");
    format = format.replace(/ffff/g, "fff0");
    // Fix for the 5 digit year: "yyyyy" format.
    // The Globalize doesn't support dates greater than 9999 so we replace the "yyyyy" with "0yyyy".
    format = format.replace(/yyyyy/g, "0yyyy");
    // Fix for the 3 digit year: "yyy" format.
    // The Globalize doesn't support this formatting so we need to replace it with the 4 digit year "yyyy" format.
    format = format.replace(/(^y|^)yyy(^y|$)/g, "yyyy");
    if (!regexCache) {
        // Creating Regexes for cases "Using single format specifier"
        // - http://msdn.microsoft.com/en-us/library/8kb3ddd4.aspx#UsingSingleSpecifiers
        // This is not supported from The Globalize.
        // The case covers all single "%" lead specifier (like "%d" but not %dd)
        // The cases as single "%d" are filtered in if the bellow.
        // (?!S) where S is the specifier make sure that we only one symbol for specifier.
        regexCache = ["d", "f", "F", "g", "h", "H", "K", "m", "M", "s", "t", "y", "z", ":", "/"].map((s) => {
            return { r: new RegExp("\%" + s + "(?!" + s + ")", "g"), s: s };
        });
    }
    if (format.indexOf("%") !== -1 && format.length > 2) {
        for (let i = 0; i < regexCache.length; i++) {
            format = format.replace(regexCache[i].r, regexCache[i].s);
        }
    }
    return format;
}
//# sourceMappingURL=formatting.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/formattingService.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/formattingService.js ***!
  \*******************************************************************************************************/
/*! exports provided: FormattingService, numberFormat, formattingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingService", function() { return FormattingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormat", function() { return numberFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattingService", function() { return formattingService; });
/* harmony import */ var powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-typeutils */ "./node_modules/powerbi-visuals-utils-typeutils/lib/index.js");
/* harmony import */ var _stringExtensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../stringExtensions */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/stringExtensions.js");
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../formatting */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formatting.js");
/* harmony import */ var _iFormattingService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iFormattingService */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/iFormattingService.js");
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! powerbi-visuals-api */ "powerbi-visuals-api");
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _date_dateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../date/dateFormatter */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateFormatter.js");
/* harmony import */ var _number_numberFormatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../number/numberFormatter */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/number/numberFormatter.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// powerbi.extensibility.utils.type

var RegExpExtensions = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_0__["regExpExtensions"].RegExpExtensions;
// powerbi.extensibility.utils.formatting






/** Formatting Encoder */
var formattingEncoder;
(function (formattingEncoder) {
    // quoted and escaped literal patterns
    // NOTE: the final three cases match .NET behavior
    const literalPatterns = [
        "'[^']*'",
        `"[^"]*"`,
        "\\\\.",
        "'[^']*$",
        `"[^"]*$`,
        "\\\\$",
    ];
    const literalMatcher = new RegExp(literalPatterns.join("|"), "g");
    // Unicode U+E000 - U+F8FF is a private area and so we can use the chars from the range to encode the escaped sequences
    function removeLiterals(format) {
        literalMatcher.lastIndex = 0;
        // just in case consecutive non-literals have some meaning
        return format.replace(literalMatcher, "\uE100");
    }
    formattingEncoder.removeLiterals = removeLiterals;
    function preserveLiterals(format, literals) {
        literalMatcher.lastIndex = 0;
        for (;;) {
            let match = literalMatcher.exec(format);
            if (!match)
                break;
            let literal = match[0];
            let literalOffset = literalMatcher.lastIndex - literal.length;
            let token = String.fromCharCode(0xE100 + literals.length);
            literals.push(literal);
            format = format.substr(0, literalOffset) + token + format.substr(literalMatcher.lastIndex);
            // back to avoid skipping due to removed literal substring
            literalMatcher.lastIndex = literalOffset + 1;
        }
        return format;
    }
    formattingEncoder.preserveLiterals = preserveLiterals;
    function restoreLiterals(format, literals, quoted = true) {
        let count = literals.length;
        for (let i = 0; i < count; i++) {
            let token = String.fromCharCode(0xE100 + i);
            let literal = literals[i];
            if (!quoted) {
                // caller wants literals to be re-inserted without escaping
                let firstChar = literal[0];
                if (firstChar === "\\" || literal.length === 1 || literal[literal.length - 1] !== firstChar) {
                    // either escaped literal OR quoted literal that's missing the trailing quote
                    // in either case we only remove the leading character
                    literal = literal.substring(1);
                }
                else {
                    // so must be a quoted literal with both starting and ending quote
                    literal = literal.substring(1, literal.length - 1);
                }
            }
            format = format.replace(token, literal);
        }
        return format;
    }
    formattingEncoder.restoreLiterals = restoreLiterals;
})(formattingEncoder || (formattingEncoder = {}));
const IndexedTokensRegex = /({{)|(}})|{(\d+[^}]*)}/g;
const ZeroPlaceholder = "0";
const DigitPlaceholder = "#";
const ExponentialFormatChar = "E";
const NumericPlaceholders = [ZeroPlaceholder, DigitPlaceholder];
const NumericPlaceholderRegex = new RegExp(NumericPlaceholders.join("|"), "g");
class Globalize {
    static format(value, format, culture = null) {
        if (!culture) {
            culture = Globalize.enUSCulture;
        }
        if (value instanceof Date) {
            if (typeof format === "undefined") {
                value = Intl.DateTimeFormat(culture.name).format(value);
            }
            else {
                value = _date_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["default"].format(value, format, false);
            }
        }
        else if (typeof value === "number") {
            if (typeof format === "undefined") {
                value = value.toLocaleString("en-US");
            }
            else {
                value = _number_numberFormatter__WEBPACK_IMPORTED_MODULE_6__["default"].formatNumber(value, format, {
                    numberFormat: _number_numberFormatter__WEBPACK_IMPORTED_MODULE_6__["default"].numberFormat
                });
            }
        }
        return value;
    }
}
Globalize.enUSCulture = {
    name: "en",
    numberFormat: {
        negativeInfinity: "",
        positiveInfinity: "",
        pattern: ["-n"],
        decimals: 2,
        ",": ",",
        ".": ".",
        groupSizes: [3],
        "+": "+",
        "-": "-",
        percent: {
            pattern: ["-n %", "n %"],
            decimals: 2,
            groupSizes: [3],
            ",": ",",
            ".": ".",
            symbol: "%"
        },
        currency: {
            pattern: ["($n)", "$n"],
            decimals: 2,
            groupSizes: [3],
            ",": ",",
            ".": ".",
            symbol: "$"
        }
    },
    calendar: {
        ":": ":",
        days: {
            // full day names
            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            // abbreviated day names
            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            // shortest day names
            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        },
        months: {
            // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
            // abbreviated month names
            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
        },
        // AM and PM designators in one of these forms:
        // The usual view, and the upper and lower case versions
        //   [ standard, lowercase, uppercase ]
        // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
        //   null
        AM: ["AM", "am", "AM"],
        PM: ["PM", "pm", "PM"],
        eras: [
            // eras in reverse chronological order.
            // name: the name of the era in this culture (e.g. A.D., C.E.)
            // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
            // offset: offset in years from gregorian calendar
            {
                "name": "A.D.",
                "start": null,
                "offset": 0
            }
        ],
        firstDay: 0,
        patterns: {
            d: "M/d/yyyy",
            D: "dddd, MMMM dd, yyyy",
            t: "h:mm tt",
            T: "h:mm:ss tt",
            f: "dddd, MMMM dd, yyyy h:mm tt",
            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
            M: "MMMM dd",
            Y: "yyyy MMMM",
            S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
        }
    },
    calendars: {
        standard: {
            firstDay: 0,
            patterns: {
                d: "M/d/yyyy",
                D: "dddd, MMMM dd, yyyy",
                t: "h:mm tt",
                T: "h:mm:ss tt",
                f: "dddd, MMMM dd, yyyy h:mm tt",
                F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                M: "MMMM dd",
                Y: "yyyy MMMM",
                S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
            }
        }
    }
};
/** Formatting Service */
class FormattingService {
    formatValue(value, format, cultureSelector) {
        // Handle special cases
        if (value === undefined || value === null) {
            return "";
        }
        const gculture = this.getCulture(cultureSelector);
        if (dateTimeFormat.canFormat(value)) {
            // Dates
            return dateTimeFormat.format(value, format, gculture);
        }
        else if (numberFormat.canFormat(value)) {
            // Numbers
            return numberFormat.format(value, format, gculture);
        }
        // Other data types - return as string
        return value.toString();
    }
    format(formatWithIndexedTokens, args, culture) {
        if (!formatWithIndexedTokens) {
            return "";
        }
        let result = formatWithIndexedTokens.replace(IndexedTokensRegex, (match, left, right, argToken) => {
            if (left) {
                return "{";
            }
            else if (right) {
                return "}";
            }
            else {
                let parts = argToken.split(":");
                let argIndex = parseInt(parts[0], 10);
                let argFormat = parts[1];
                return this.formatValue(args[argIndex], argFormat, culture);
            }
        });
        return result;
    }
    isStandardNumberFormat(format) {
        return numberFormat.isStandardFormat(format);
    }
    formatNumberWithCustomOverride(value, format, nonScientificOverrideFormat, culture) {
        let gculture = this.getCulture(culture);
        return numberFormat.formatWithCustomOverride(value, format, nonScientificOverrideFormat, gculture);
    }
    dateFormatString(unit) {
        if (!this._dateTimeScaleFormatInfo)
            this.initialize();
        return this._dateTimeScaleFormatInfo.getFormatString(unit);
    }
    /**
     * Sets the current localization culture
     * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
     */
    setCurrentCulture(cultureSelector) {
        if (this._currentCultureSelector !== cultureSelector) {
            this._currentCulture = this.getCulture(cultureSelector);
            this._currentCultureSelector = cultureSelector;
            this._dateTimeScaleFormatInfo = new DateTimeScaleFormatInfo(this._currentCulture);
        }
    }
    /**
     * Gets the culture assotiated with the specified cultureSelector ("en", "en-US", "fr-FR" etc).
     * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
     * Exposing this function for testability of unsupported cultures
     */
    getCulture(cultureSelector) {
        return Globalize.enUSCulture;
    }
    /** By default the Globalization module initializes to the culture/calendar provided in the language/culture URL params */
    initialize() {
        let cultureName = this.getCurrentCulture();
        this.setCurrentCulture(cultureName);
        let calendarName = this.getUrlParam("calendar");
        if (calendarName) {
            let culture = this._currentCulture;
            let c = culture.calendars[calendarName];
            if (c) {
                culture.calendar = c;
            }
        }
    }
    /**
     *  Exposing this function for testability
     */
    getCurrentCulture() {
        let urlParam = this.getUrlParam("language");
        if (urlParam) {
            return urlParam;
        }
        if (powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_4___default.a && powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_4___default.a.common && powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_4___default.a.common.cultureInfo) {
            // Get cultureInfo set in powerbi
            return powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_4___default.a.common.cultureInfo;
        }
        return window.navigator.userLanguage || window.navigator["language"] || "en-US";
    }
    /**
     *  Exposing this function for testability
     *  @param name: queryString name
     */
    getUrlParam(name) {
        let param = window.location.search.match(RegExp("[?&]" + name + "=([^&]*)"));
        return param ? param[1] : undefined;
    }
}
/**
 * DateTimeFormat module contains the static methods for formatting the DateTimes.
 * It extends the JQuery.Globalize functionality to support complete set of .NET
 * formatting expressions for dates.
 */
var dateTimeFormat;
(function (dateTimeFormat) {
    let _currentCachedFormat;
    let _currentCachedProcessedFormat;
    /** Evaluates if the value can be formatted using the NumberFormat */
    function canFormat(value) {
        let result = value instanceof Date;
        return result;
    }
    dateTimeFormat.canFormat = canFormat;
    /** Formats the date using provided format and culture */
    function format(value, format, culture) {
        format = format || "G";
        let isStandard = format.length === 1;
        try {
            if (isStandard) {
                return formatDateStandard(value, format, culture);
            }
            else {
                return formatDateCustom(value, format, culture);
            }
        }
        catch (e) {
            return formatDateStandard(value, "G", culture);
        }
    }
    dateTimeFormat.format = format;
    /** Formats the date using standard format expression */
    function formatDateStandard(value, format, culture) {
        // In order to provide parity with .NET we have to support additional set of DateTime patterns.
        let patterns = culture.calendar.patterns;
        // Extend supported set of patterns
        ensurePatterns(culture.calendar);
        // Handle extended set of formats
        let output = Object(_formatting__WEBPACK_IMPORTED_MODULE_2__["findDateFormat"])(value, format, culture.name);
        if (output.format.length === 1)
            format = patterns[output.format];
        else
            format = output.format;
        // need to revisit when globalization is enabled
        if (!culture) {
            culture = this.getCurrentCulture();
        }
        return Globalize.format(output.value, format, culture);
    }
    /** Formats the date using custom format expression */
    function formatDateCustom(value, format, culture) {
        let result;
        let literals = [];
        format = formattingEncoder.preserveLiterals(format, literals);
        if (format.indexOf("F") > -1) {
            // F is not supported so we need to replace the F with f based on the milliseconds
            // Replace all sequences of F longer than 3 with "FFF"
            format = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["replaceAll"](format, "FFFF", "FFF");
            // Based on milliseconds update the format to use fff
            let milliseconds = value.getMilliseconds();
            if (milliseconds % 10 >= 1) {
                format = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["replaceAll"](format, "FFF", "fff");
            }
            format = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["replaceAll"](format, "FFF", "FF");
            if ((milliseconds % 100) / 10 >= 1) {
                format = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["replaceAll"](format, "FF", "ff");
            }
            format = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["replaceAll"](format, "FF", "F");
            if ((milliseconds % 1000) / 100 >= 1) {
                format = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["replaceAll"](format, "F", "f");
            }
            format = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["replaceAll"](format, "F", "");
            if (format === "" || format === "%")
                return "";
        }
        format = processCustomDateTimeFormat(format);
        result = Globalize.format(value, format, culture);
        result = localize(result, culture.calendar);
        result = formattingEncoder.restoreLiterals(result, literals, false);
        return result;
    }
    /** Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize */
    function processCustomDateTimeFormat(format) {
        if (format === _currentCachedFormat) {
            return _currentCachedProcessedFormat;
        }
        _currentCachedFormat = format;
        format = Object(_formatting__WEBPACK_IMPORTED_MODULE_2__["fixDateTimeFormat"])(format);
        _currentCachedProcessedFormat = format;
        return format;
    }
    /** Localizes the time separator symbol */
    function localize(value, dictionary) {
        let timeSeparator = dictionary[":"];
        if (timeSeparator === ":") {
            return value;
        }
        let result = "";
        let count = value.length;
        for (let i = 0; i < count; i++) {
            let char = value.charAt(i);
            switch (char) {
                case ":":
                    result += timeSeparator;
                    break;
                default:
                    result += char;
                    break;
            }
        }
        return result;
    }
    function ensurePatterns(calendar) {
        let patterns = calendar.patterns;
        if (patterns["g"] === undefined) {
            patterns["g"] = patterns["f"].replace(patterns["D"], patterns["d"]); // Generic: Short date, short time
            patterns["G"] = patterns["F"].replace(patterns["D"], patterns["d"]); // Generic: Short date, long time
        }
    }
})(dateTimeFormat || (dateTimeFormat = {}));
/**
 * NumberFormat module contains the static methods for formatting the numbers.
 * It extends the JQuery.Globalize functionality to support complete set of .NET
 * formatting expressions for numeric types including custom formats.
 */
var numberFormat;
(function (numberFormat) {
    const NonScientificFormatRegex = /^\{.+\}.*/;
    const NumericalPlaceHolderRegex = /\{.+\}/;
    const ScientificFormatRegex = /e[+-]*[0#]+/i;
    const StandardFormatRegex = /^[a-z]\d{0,2}$/i; // a letter + up to 2 digits for precision specifier
    const TrailingZerosRegex = /0+$/;
    const DecimalFormatRegex = /\.([0#]*)/g;
    const NumericFormatRegex = /[0#,\.]+[0,#]*/g;
    // (?=...) is a positive lookahead assertion. The RE is asking for the last digit placeholder, [0#],
    // which is followed by non-digit placeholders and the end of string, [^0#]*$. But it only matches
    // the last digit placeholder, not anything that follows because the positive lookahead isn"t included
    // in the match - it is only a condition.
    const LastNumericPlaceholderRegex = /([0#])(?=[^0#]*$)/;
    const DecimalFormatCharacter = ".";
    numberFormat.NumberFormatComponentsDelimeter = ";";
    function getNonScientificFormatWithPrecision(baseFormat, numericFormat) {
        if (!numericFormat || baseFormat === undefined)
            return baseFormat;
        let newFormat = "{0:" + numericFormat + "}";
        return baseFormat.replace("{0}", newFormat);
    }
    function getNumericFormat(value, baseFormat) {
        if (baseFormat == null)
            return baseFormat;
        if (hasFormatComponents(baseFormat)) {
            let { positive, negative, zero } = numberFormat.getComponents(baseFormat);
            if (value > 0)
                return getNumericFormatFromComponent(value, positive);
            else if (value === 0)
                return getNumericFormatFromComponent(value, zero);
            return getNumericFormatFromComponent(value, negative);
        }
        return getNumericFormatFromComponent(value, baseFormat);
    }
    numberFormat.getNumericFormat = getNumericFormat;
    function getNumericFormatFromComponent(value, format) {
        let match = RegExpExtensions.run(NumericFormatRegex, format);
        if (match)
            return match[0];
        return format;
    }
    function addDecimalsToFormat(baseFormat, decimals, trailingZeros) {
        if (decimals == null)
            return baseFormat;
        // Default format string
        if (baseFormat == null)
            baseFormat = ZeroPlaceholder;
        if (hasFormatComponents(baseFormat)) {
            let { positive, negative, zero } = numberFormat.getComponents(baseFormat);
            let formats = [positive, negative, zero];
            for (let i = 0; i < formats.length; i++) {
                // Update format in formats array
                formats[i] = addDecimalsToFormatComponent(formats[i], decimals, trailingZeros);
            }
            return formats.join(numberFormat.NumberFormatComponentsDelimeter);
        }
        return addDecimalsToFormatComponent(baseFormat, decimals, trailingZeros);
    }
    numberFormat.addDecimalsToFormat = addDecimalsToFormat;
    function addDecimalsToFormatComponent(format, decimals, trailingZeros) {
        decimals = Math.abs(decimals);
        if (decimals >= 0) {
            let literals = [];
            format = formattingEncoder.preserveLiterals(format, literals);
            let placeholder = trailingZeros ? ZeroPlaceholder : DigitPlaceholder;
            let decimalPlaceholders = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["repeat"](placeholder, Math.abs(decimals));
            let match = RegExpExtensions.run(DecimalFormatRegex, format);
            if (match) {
                let beforeDecimal = format.substr(0, match.index);
                let formatDecimal = format.substr(match.index + 1, match[1].length);
                let afterDecimal = format.substr(match.index + match[0].length);
                if (trailingZeros)
                    // Use explicit decimals argument as placeholders
                    formatDecimal = decimalPlaceholders;
                else {
                    let decimalChange = decimalPlaceholders.length - formatDecimal.length;
                    if (decimalChange > 0)
                        // Append decimalPlaceholders to existing decimal portion of format string
                        formatDecimal = formatDecimal + decimalPlaceholders.slice(-decimalChange);
                    else if (decimalChange < 0)
                        // Remove decimals from formatDecimal
                        formatDecimal = formatDecimal.slice(0, decimalChange);
                }
                if (formatDecimal.length > 0)
                    formatDecimal = DecimalFormatCharacter + formatDecimal;
                format = beforeDecimal + formatDecimal + afterDecimal;
            }
            else if (decimalPlaceholders.length > 0) {
                // Replace last numeric placeholder with decimal portion
                format = format.replace(LastNumericPlaceholderRegex, "$1" + DecimalFormatCharacter + decimalPlaceholders);
            }
            if (literals.length !== 0)
                format = formattingEncoder.restoreLiterals(format, literals);
        }
        return format;
    }
    function hasFormatComponents(format) {
        return formattingEncoder.removeLiterals(format).indexOf(numberFormat.NumberFormatComponentsDelimeter) !== -1;
    }
    numberFormat.hasFormatComponents = hasFormatComponents;
    function getComponents(format) {
        let signFormat = {
            hasNegative: false,
            positive: format,
            negative: format,
            zero: format,
        };
        // escape literals so semi-colon in a literal isn't interpreted as a delimiter
        // NOTE: OK to use the literals extracted here for all three components before since the literals are indexed.
        // For example, "'pos-lit';'neg-lit'" will get preserved as "\uE000;\uE001" and the literal array will be
        // ['pos-lit', 'neg-lit']. When the negative components is restored, its \uE001 will select the second
        // literal.
        let literals = [];
        format = formattingEncoder.preserveLiterals(format, literals);
        let signSpecificFormats = format.split(numberFormat.NumberFormatComponentsDelimeter);
        let formatCount = signSpecificFormats.length;
        if (formatCount > 1) {
            if (literals.length !== 0)
                signSpecificFormats = signSpecificFormats.map((signSpecificFormat) => formattingEncoder.restoreLiterals(signSpecificFormat, literals));
            signFormat.hasNegative = true;
            signFormat.positive = signFormat.zero = signSpecificFormats[0];
            signFormat.negative = signSpecificFormats[1];
            if (formatCount > 2)
                signFormat.zero = signSpecificFormats[2];
        }
        return signFormat;
    }
    numberFormat.getComponents = getComponents;
    let _lastCustomFormatMeta;
    /** Evaluates if the value can be formatted using the NumberFormat */
    function canFormat(value) {
        let result = typeof (value) === "number";
        return result;
    }
    numberFormat.canFormat = canFormat;
    function isStandardFormat(format) {
        return StandardFormatRegex.test(format);
    }
    numberFormat.isStandardFormat = isStandardFormat;
    /** Formats the number using specified format expression and culture */
    function format(value, format, culture) {
        format = format || "G";
        try {
            if (isStandardFormat(format))
                return formatNumberStandard(value, format, culture);
            return formatNumberCustom(value, format, culture);
        }
        catch (e) {
            return Globalize.format(value, undefined, culture);
        }
    }
    numberFormat.format = format;
    /** Performs a custom format with a value override.  Typically used for custom formats showing scaled values. */
    function formatWithCustomOverride(value, format, nonScientificOverrideFormat, culture) {
        return formatNumberCustom(value, format, culture, nonScientificOverrideFormat);
    }
    numberFormat.formatWithCustomOverride = formatWithCustomOverride;
    /** Formats the number using standard format expression */
    function formatNumberStandard(value, format, culture) {
        let result;
        let precision = (format.length > 1 ? parseInt(format.substr(1, format.length - 1), 10) : undefined);
        let numberFormatInfo = Globalize.enUSCulture.numberFormat;
        let formatChar = format.charAt(0);
        switch (formatChar) {
            case "e":
            case "E":
                if (precision === undefined) {
                    precision = 6;
                }
                let mantissaDecimalDigits = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["repeat"]("0", precision);
                format = "0." + mantissaDecimalDigits + formatChar + "+000";
                result = formatNumberCustom(value, format, culture);
                break;
            case "f":
            case "F":
                result = precision !== undefined ? value.toFixed(precision) : value.toFixed(numberFormatInfo.decimals);
                result = localize(result, numberFormatInfo);
                break;
            case "g":
            case "G":
                let abs = Math.abs(value);
                if (abs === 0 || (1E-4 <= abs && abs < 1E15)) {
                    // For the range of 0.0001 to 1,000,000,000,000,000 - use the normal form
                    result = precision !== undefined ? value.toPrecision(precision) : value.toString();
                }
                else {
                    // Otherwise use exponential
                    // Assert that value is a number and fall back on returning value if it is not
                    if (typeof (value) !== "number")
                        return String(value);
                    result = precision !== undefined ? value.toExponential(precision) : value.toExponential();
                    result = result.replace("e", "E");
                }
                result = localize(result, numberFormatInfo);
                break;
            case "r":
            case "R":
                result = value.toString();
                result = localize(result, numberFormatInfo);
                break;
            case "x":
            case "X":
                result = value.toString(16);
                if (formatChar === "X") {
                    result = result.toUpperCase();
                }
                if (precision !== undefined) {
                    let actualPrecision = result.length;
                    let isNegative = value < 0;
                    if (isNegative) {
                        actualPrecision--;
                    }
                    let paddingZerosCount = precision - actualPrecision;
                    let paddingZeros = undefined;
                    if (paddingZerosCount > 0) {
                        paddingZeros = _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["repeat"]("0", paddingZerosCount);
                    }
                    if (isNegative) {
                        result = "-" + paddingZeros + result.substr(1);
                    }
                    else {
                        result = paddingZeros + result;
                    }
                }
                result = localize(result, numberFormatInfo);
                break;
            default:
                result = Globalize.format(value, format, culture);
        }
        return result;
    }
    /** Formats the number using custom format expression */
    function formatNumberCustom(value, format, culture, nonScientificOverrideFormat) {
        let result;
        let numberFormatInfo = {
            negativeInfinity: "",
            positiveInfinity: "",
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSizes: [3],
            "+": "+",
            "-": "-",
            percent: {
                pattern: ["-n %", "n %"],
                decimals: 2,
                groupSizes: [3],
                ",": ",",
                ".": ".",
                symbol: "%"
            },
            currency: {
                pattern: ["($n)", "$n"],
                decimals: 2,
                groupSizes: [3],
                ",": ",",
                ".": ".",
                symbol: "$"
            }
        };
        if (isFinite(value)) {
            // Split format by positive[;negative;zero] pattern
            let formatComponents = getComponents(format);
            // Pick a format based on the sign of value
            if (value > 0) {
                format = formatComponents.positive;
            }
            else if (value === 0) {
                format = formatComponents.zero;
            }
            else {
                format = formatComponents.negative;
            }
            // Normalize value if we have an explicit negative format
            if (formatComponents.hasNegative)
                value = Math.abs(value);
            // Get format metadata
            let formatMeta = getCustomFormatMetadata(format, true /*calculatePrecision*/);
            // Preserve literals and escaped chars
            let literals = [];
            if (formatMeta.hasLiterals) {
                format = formattingEncoder.preserveLiterals(format, literals);
            }
            // Scientific format
            if (formatMeta.hasE && !nonScientificOverrideFormat) {
                let scientificMatch = RegExpExtensions.run(ScientificFormatRegex, format);
                if (scientificMatch) {
                    // Case 2.1. Scientific custom format
                    let formatM = format.substr(0, scientificMatch.index);
                    let formatE = format.substr(scientificMatch.index + 2); // E(+|-)
                    let precision = getCustomFormatPrecision(formatM, formatMeta);
                    let scale = getCustomFormatScale(formatM, formatMeta);
                    if (scale !== 1) {
                        value = value * scale;
                    }
                    // Assert that value is a number and fall back on returning value if it is not
                    if (typeof (value) !== "number")
                        return String(value);
                    let s = value.toExponential(precision);
                    let indexOfE = s.indexOf("e");
                    let mantissa = s.substr(0, indexOfE);
                    let exp = s.substr(indexOfE + 1);
                    let resultM = fuseNumberWithCustomFormat(mantissa, formatM, numberFormatInfo);
                    let resultE = fuseNumberWithCustomFormat(exp, formatE, numberFormatInfo);
                    if (resultE.charAt(0) === "+" && scientificMatch[0].charAt(1) !== "+") {
                        resultE = resultE.substr(1);
                    }
                    let e = scientificMatch[0].charAt(0);
                    result = resultM + e + resultE;
                }
            }
            // Non scientific format
            if (result === undefined) {
                let valueFormatted;
                let isValueGlobalized = false;
                let precision = getCustomFormatPrecision(format, formatMeta);
                let scale = getCustomFormatScale(format, formatMeta);
                if (scale !== 1)
                    value = value * scale;
                // Rounding
                value = parseFloat(toNonScientific(value, precision));
                if (!isFinite(value)) {
                    // very large and small finite values can become infinite by parseFloat(toNonScientific())
                    return Globalize.format(value, undefined);
                }
                if (nonScientificOverrideFormat) {
                    // Get numeric format from format string
                    let numericFormat = numberFormat.getNumericFormat(value, format);
                    // Add separators and decimalFormat to nonScientificFormat
                    nonScientificOverrideFormat = getNonScientificFormatWithPrecision(nonScientificOverrideFormat, numericFormat);
                    // Format the value
                    valueFormatted = formattingService.format(nonScientificOverrideFormat, [value], culture.name);
                    isValueGlobalized = true;
                }
                else
                    valueFormatted = toNonScientific(value, precision);
                result = fuseNumberWithCustomFormat(valueFormatted, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized);
            }
            if (formatMeta.hasLiterals) {
                result = formattingEncoder.restoreLiterals(result, literals, false);
            }
            _lastCustomFormatMeta = formatMeta;
        }
        else {
            return Globalize.format(value, undefined);
        }
        return result;
    }
    /** Returns string with the fixed point respresentation of the number */
    function toNonScientific(value, precision) {
        let result = "";
        let precisionZeros = 0;
        // Double precision numbers support actual 15-16 decimal digits of precision.
        if (precision > 16) {
            precisionZeros = precision - 16;
            precision = 16;
        }
        let digitsBeforeDecimalPoint = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_0__["double"].log10(Math.abs(value));
        if (digitsBeforeDecimalPoint < 16) {
            if (digitsBeforeDecimalPoint > 0) {
                let maxPrecision = 16 - digitsBeforeDecimalPoint;
                if (precision > maxPrecision) {
                    precisionZeros += precision - maxPrecision;
                    precision = maxPrecision;
                }
            }
            result = value.toFixed(precision);
        }
        else if (digitsBeforeDecimalPoint === 16) {
            result = value.toFixed(0);
            precisionZeros += precision;
            if (precisionZeros > 0) {
                result += ".";
            }
        }
        else { // digitsBeforeDecimalPoint > 16
            // Different browsers have different implementations of the toFixed().
            // In IE it returns fixed format no matter what's the number. In FF and Chrome the method returns exponential format for numbers greater than 1E21.
            // So we need to check for range and convert the to exponential with the max precision.
            // Then we convert exponential string to fixed by removing the dot and padding with "power" zeros.
            // Assert that value is a number and fall back on returning value if it is not
            if (typeof (value) !== "number")
                return String(value);
            result = value.toExponential(15);
            let indexOfE = result.indexOf("e");
            if (indexOfE > 0) {
                let indexOfDot = result.indexOf(".");
                let mantissa = result.substr(0, indexOfE);
                let exp = result.substr(indexOfE + 1);
                let powerZeros = parseInt(exp, 10) - (mantissa.length - indexOfDot - 1);
                result = mantissa.replace(".", "") + _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["repeat"]("0", powerZeros);
                if (precision > 0) {
                    result = result + "." + _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["repeat"]("0", precision);
                }
            }
        }
        if (precisionZeros > 0) {
            result = result + _stringExtensions__WEBPACK_IMPORTED_MODULE_1__["repeat"]("0", precisionZeros);
        }
        return result;
    }
    /**
     * Returns the formatMetadata of the format
     * When calculating precision and scale, if format string of
     * positive[;negative;zero] => positive format will be used
     * @param (required) format - format string
     * @param (optional) calculatePrecision - calculate precision of positive format
     * @param (optional) calculateScale - calculate scale of positive format
     */
    function getCustomFormatMetadata(format, calculatePrecision, calculateScale, calculatePartsPerScale) {
        if (_lastCustomFormatMeta !== undefined && format === _lastCustomFormatMeta.format) {
            return _lastCustomFormatMeta;
        }
        let literals = [];
        let escaped = formattingEncoder.preserveLiterals(format, literals);
        let result = {
            format: format,
            hasLiterals: literals.length !== 0,
            hasE: false,
            hasCommas: false,
            hasDots: false,
            hasPercent: false,
            hasPermile: false,
            precision: undefined,
            scale: undefined,
            partsPerScale: undefined,
        };
        for (let i = 0, length = escaped.length; i < length; i++) {
            let c = escaped.charAt(i);
            switch (c) {
                case "e":
                case "E":
                    result.hasE = true;
                    break;
                case ",":
                    result.hasCommas = true;
                    break;
                case ".":
                    result.hasDots = true;
                    break;
                case "%":
                    result.hasPercent = true;
                    break;
                case "\u2030": // ‰
                    result.hasPermile = true;
                    break;
            }
        }
        // Use positive format for calculating these values
        let formatComponents = getComponents(format);
        if (calculatePrecision)
            result.precision = getCustomFormatPrecision(formatComponents.positive, result);
        if (calculatePartsPerScale)
            result.partsPerScale = getCustomFormatPartsPerScale(formatComponents.positive, result);
        if (calculateScale)
            result.scale = getCustomFormatScale(formatComponents.positive, result);
        return result;
    }
    numberFormat.getCustomFormatMetadata = getCustomFormatMetadata;
    /** Returns the decimal precision of format based on the number of # and 0 chars after the decimal point
      * Important: The input format string needs to be split to the appropriate pos/neg/zero portion to work correctly */
    function getCustomFormatPrecision(format, formatMeta) {
        if (formatMeta.precision > -1) {
            return formatMeta.precision;
        }
        let result = 0;
        if (formatMeta.hasDots) {
            if (formatMeta.hasLiterals) {
                format = formattingEncoder.removeLiterals(format);
            }
            let dotIndex = format.indexOf(".");
            if (dotIndex > -1) {
                let count = format.length;
                for (let i = dotIndex; i < count; i++) {
                    let char = format.charAt(i);
                    if (char.match(NumericPlaceholderRegex))
                        result++;
                    // 0.00E+0 :: Break before counting 0 in
                    // exponential portion of format string
                    if (char === ExponentialFormatChar)
                        break;
                }
                result = Math.min(19, result);
            }
        }
        formatMeta.precision = result;
        return result;
    }
    function getCustomFormatPartsPerScale(format, formatMeta) {
        if (formatMeta.partsPerScale != null)
            return formatMeta.partsPerScale;
        let result = 1;
        if (formatMeta.hasPercent && format.indexOf("%") > -1) {
            result = result * 100;
        }
        if (formatMeta.hasPermile && format.indexOf(/* ‰ */ "\u2030") > -1) {
            result = result * 1000;
        }
        formatMeta.partsPerScale = result;
        return result;
    }
    /** Returns the scale factor of the format based on the "%" and scaling "," chars in the format */
    function getCustomFormatScale(format, formatMeta) {
        if (formatMeta.scale > -1) {
            return formatMeta.scale;
        }
        let result = getCustomFormatPartsPerScale(format, formatMeta);
        if (formatMeta.hasCommas) {
            let dotIndex = format.indexOf(".");
            if (dotIndex === -1) {
                dotIndex = format.length;
            }
            for (let i = dotIndex - 1; i > -1; i--) {
                let char = format.charAt(i);
                if (char === ",") {
                    result = result / 1000;
                }
                else {
                    break;
                }
            }
        }
        formatMeta.scale = result;
        return result;
    }
    function fuseNumberWithCustomFormat(value, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized) {
        let suppressModifyValue = !!nonScientificOverrideFormat;
        let formatParts = format.split(".", 2);
        if (formatParts.length === 2) {
            let wholeFormat = formatParts[0];
            let fractionFormat = formatParts[1];
            let displayUnit = "";
            // Remove display unit from value before splitting on "." as localized display units sometimes end with "."
            if (nonScientificOverrideFormat) {
                displayUnit = nonScientificOverrideFormat.replace(NumericalPlaceHolderRegex, "");
                value = value.replace(displayUnit, "");
            }
            let globalizedDecimalSeparator = numberFormatInfo["."];
            let decimalSeparator = isValueGlobalized ? globalizedDecimalSeparator : ".";
            let valueParts = value.split(decimalSeparator, 2);
            let wholeValue = valueParts.length === 1 ? valueParts[0] + displayUnit : valueParts[0];
            let fractionValue = valueParts.length === 2 ? valueParts[1] + displayUnit : "";
            fractionValue = fractionValue.replace(TrailingZerosRegex, "");
            let wholeFormattedValue = fuseNumberWithCustomFormatLeft(wholeValue, wholeFormat, numberFormatInfo, suppressModifyValue);
            let fractionFormattedValue = fuseNumberWithCustomFormatRight(fractionValue, fractionFormat, suppressModifyValue);
            if (fractionFormattedValue.fmtOnly || fractionFormattedValue.value === "")
                return wholeFormattedValue + fractionFormattedValue.value;
            return wholeFormattedValue + globalizedDecimalSeparator + fractionFormattedValue.value;
        }
        return fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue);
    }
    function fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue) {
        let groupSymbolIndex = format.indexOf(",");
        let enableGroups = groupSymbolIndex > -1 && groupSymbolIndex < Math.max(format.lastIndexOf("0"), format.lastIndexOf("#")) && numberFormatInfo[","];
        let groupDigitCount = 0;
        let groupIndex = 0;
        let groupSizes = numberFormatInfo.groupSizes || [3];
        let groupSize = groupSizes[0];
        let groupSeparator = numberFormatInfo[","];
        let sign = "";
        let firstChar = value.charAt(0);
        if (firstChar === "+" || firstChar === "-") {
            sign = numberFormatInfo[firstChar];
            value = value.substr(1);
        }
        let isZero = value === "0";
        let result = "";
        let leftBuffer = "";
        let vi = value.length - 1;
        let fmtOnly = true;
        // Iterate through format chars and replace 0 and # with the digits from the value string
        for (let fi = format.length - 1; fi > -1; fi--) {
            let formatChar = format.charAt(fi);
            switch (formatChar) {
                case ZeroPlaceholder:
                case DigitPlaceholder:
                    fmtOnly = false;
                    if (leftBuffer !== "") {
                        result = leftBuffer + result;
                        leftBuffer = "";
                    }
                    if (!suppressModifyValue) {
                        if (vi > -1 || formatChar === ZeroPlaceholder) {
                            if (enableGroups) {
                                // If the groups are enabled we'll need to keep track of the current group index and periodically insert group separator,
                                if (groupDigitCount === groupSize) {
                                    result = groupSeparator + result;
                                    groupIndex++;
                                    if (groupIndex < groupSizes.length) {
                                        groupSize = groupSizes[groupIndex];
                                    }
                                    groupDigitCount = 1;
                                }
                                else {
                                    groupDigitCount++;
                                }
                            }
                        }
                        if (vi > -1) {
                            if (isZero && formatChar === DigitPlaceholder) {
                                // Special case - if we need to format a zero value and the # symbol is used - we don't copy it into the result)
                            }
                            else {
                                result = value.charAt(vi) + result;
                            }
                            vi--;
                        }
                        else if (formatChar !== DigitPlaceholder) {
                            result = formatChar + result;
                        }
                    }
                    break;
                case ",":
                    // We should skip all the , chars
                    break;
                default:
                    leftBuffer = formatChar + leftBuffer;
                    break;
            }
        }
        // If the value didn't fit into the number of zeros provided in the format then we should insert the missing part of the value into the result
        if (!suppressModifyValue) {
            if (vi > -1 && result !== "") {
                if (enableGroups) {
                    while (vi > -1) {
                        if (groupDigitCount === groupSize) {
                            result = groupSeparator + result;
                            groupIndex++;
                            if (groupIndex < groupSizes.length) {
                                groupSize = groupSizes[groupIndex];
                            }
                            groupDigitCount = 1;
                        }
                        else {
                            groupDigitCount++;
                        }
                        result = value.charAt(vi) + result;
                        vi--;
                    }
                }
                else {
                    result = value.substr(0, vi + 1) + result;
                }
            }
            // Insert sign in front of the leftBuffer and result
            return sign + leftBuffer + result;
        }
        if (fmtOnly)
            // If the format doesn't specify any digits to be displayed, then just return the format we've parsed up until now.
            return sign + leftBuffer + result;
        return sign + leftBuffer + value + result;
    }
    function fuseNumberWithCustomFormatRight(value, format, suppressModifyValue) {
        let vi = 0;
        let fCount = format.length;
        let vCount = value.length;
        if (suppressModifyValue) {
            let lastChar = format.charAt(fCount - 1);
            if (!lastChar.match(NumericPlaceholderRegex))
                return {
                    value: value + lastChar,
                    fmtOnly: value === "",
                };
            return {
                value: value,
                fmtOnly: value === "",
            };
        }
        let result = "", fmtOnly = true;
        for (let fi = 0; fi < fCount; fi++) {
            let formatChar = format.charAt(fi);
            if (vi < vCount) {
                switch (formatChar) {
                    case ZeroPlaceholder:
                    case DigitPlaceholder:
                        result += value[vi++];
                        fmtOnly = false;
                        break;
                    default:
                        result += formatChar;
                }
            }
            else {
                if (formatChar !== DigitPlaceholder) {
                    result += formatChar;
                    fmtOnly = fmtOnly && (formatChar !== ZeroPlaceholder);
                }
            }
        }
        return {
            value: result,
            fmtOnly: fmtOnly,
        };
    }
    function localize(value, dictionary) {
        let plus = dictionary["+"];
        let minus = dictionary["-"];
        let dot = dictionary["."];
        let comma = dictionary[","];
        if (plus === "+" && minus === "-" && dot === "." && comma === ",") {
            return value;
        }
        let count = value.length;
        let result = "";
        for (let i = 0; i < count; i++) {
            let char = value.charAt(i);
            switch (char) {
                case "+":
                    result = result + plus;
                    break;
                case "-":
                    result = result + minus;
                    break;
                case ".":
                    result = result + dot;
                    break;
                case ",":
                    result = result + comma;
                    break;
                default:
                    result = result + char;
                    break;
            }
        }
        return result;
    }
})(numberFormat || (numberFormat = {}));
/** DateTimeScaleFormatInfo is used to calculate and keep the Date formats used for different units supported by the DateTimeScaleModel */
class DateTimeScaleFormatInfo {
    // Constructor
    /**
     * Creates new instance of the DateTimeScaleFormatInfo class.
     * @param culture - culture which calendar info is going to be used to derive the formats.
     */
    constructor(culture) {
        let calendar = culture.calendar;
        let patterns = calendar.patterns;
        let monthAbbreviations = calendar["months"]["namesAbbr"];
        let cultureHasMonthAbbr = monthAbbreviations && monthAbbreviations[0];
        let yearMonthPattern = patterns["Y"];
        let monthDayPattern = patterns["M"];
        let fullPattern = patterns["f"];
        let longTimePattern = patterns["T"];
        let shortTimePattern = patterns["t"];
        let separator = fullPattern.indexOf(",") > -1 ? ", " : " ";
        let hasYearSymbol = yearMonthPattern.indexOf("yyyy'") === 0 && yearMonthPattern.length > 6 && yearMonthPattern[6] === "\'";
        this.YearPattern = hasYearSymbol ? yearMonthPattern.substr(0, 7) : "yyyy";
        let yearPos = fullPattern.indexOf("yy");
        let monthPos = fullPattern.indexOf("MMMM");
        this.MonthPattern = cultureHasMonthAbbr && monthPos > -1 ? (yearPos > monthPos ? "MMM yyyy" : "yyyy MMM") : yearMonthPattern;
        this.DayPattern = cultureHasMonthAbbr ? monthDayPattern.replace("MMMM", "MMM") : monthDayPattern;
        let minutePos = fullPattern.indexOf("mm");
        let pmPos = fullPattern.indexOf("tt");
        let shortHourPattern = pmPos > -1 ? shortTimePattern.replace(":mm ", "") : shortTimePattern;
        this.HourPattern = yearPos < minutePos ? this.DayPattern + separator + shortHourPattern : shortHourPattern + separator + this.DayPattern;
        this.MinutePattern = shortTimePattern;
        this.SecondPattern = longTimePattern;
        this.MillisecondPattern = longTimePattern.replace("ss", "ss.fff");
        // Special cases
        switch (culture.name) {
            case "fi-FI":
                this.DayPattern = this.DayPattern.replace("'ta'", ""); // Fix for finish 'ta' suffix for month names.
                this.HourPattern = this.HourPattern.replace("'ta'", "");
                break;
        }
    }
    // Methods
    /**
     * Returns the format string of the provided DateTimeUnit.
     * @param unit - date or time unit
     */
    getFormatString(unit) {
        switch (unit) {
            case _iFormattingService__WEBPACK_IMPORTED_MODULE_3__["DateTimeUnit"].Year:
                return this.YearPattern;
            case _iFormattingService__WEBPACK_IMPORTED_MODULE_3__["DateTimeUnit"].Month:
                return this.MonthPattern;
            case _iFormattingService__WEBPACK_IMPORTED_MODULE_3__["DateTimeUnit"].Week:
            case _iFormattingService__WEBPACK_IMPORTED_MODULE_3__["DateTimeUnit"].Day:
                return this.DayPattern;
            case _iFormattingService__WEBPACK_IMPORTED_MODULE_3__["DateTimeUnit"].Hour:
                return this.HourPattern;
            case _iFormattingService__WEBPACK_IMPORTED_MODULE_3__["DateTimeUnit"].Minute:
                return this.MinutePattern;
            case _iFormattingService__WEBPACK_IMPORTED_MODULE_3__["DateTimeUnit"].Second:
                return this.SecondPattern;
            case _iFormattingService__WEBPACK_IMPORTED_MODULE_3__["DateTimeUnit"].Millisecond:
                return this.MillisecondPattern;
        }
    }
}
const formattingService = new FormattingService();
//# sourceMappingURL=formattingService.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/iFormattingService.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/iFormattingService.js ***!
  \********************************************************************************************************/
/*! exports provided: DateTimeUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeUnit", function() { return DateTimeUnit; });
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/** Enumeration of DateTimeUnits */
var DateTimeUnit;
(function (DateTimeUnit) {
    DateTimeUnit[DateTimeUnit["Year"] = 0] = "Year";
    DateTimeUnit[DateTimeUnit["Month"] = 1] = "Month";
    DateTimeUnit[DateTimeUnit["Week"] = 2] = "Week";
    DateTimeUnit[DateTimeUnit["Day"] = 3] = "Day";
    DateTimeUnit[DateTimeUnit["Hour"] = 4] = "Hour";
    DateTimeUnit[DateTimeUnit["Minute"] = 5] = "Minute";
    DateTimeUnit[DateTimeUnit["Second"] = 6] = "Second";
    DateTimeUnit[DateTimeUnit["Millisecond"] = 7] = "Millisecond";
})(DateTimeUnit || (DateTimeUnit = {}));
//# sourceMappingURL=iFormattingService.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/index.js ***!
  \*************************************************************************/
/*! exports provided: formatting, valueFormatter, stringExtensions, textMeasurementService, textUtil, wordBreaker, dateUtils, displayUnitSystem, dateTimeSequence, displayUnitSystemType, formattingService, font, familyInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formatting.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "formatting", function() { return _formatting__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _valueFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valueFormatter */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/valueFormatter.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "valueFormatter", function() { return _valueFormatter__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _stringExtensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringExtensions */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/stringExtensions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "stringExtensions", function() { return _stringExtensions__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _textMeasurementService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textMeasurementService */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/textMeasurementService.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "textMeasurementService", function() { return _textMeasurementService__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _font_family__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font/family */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/font/family.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "font", function() { return _font_family__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _font_familyInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./font/familyInfo */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/font/familyInfo.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "familyInfo", function() { return _font_familyInfo__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _textUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textUtil */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/textUtil.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "textUtil", function() { return _textUtil__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _date_dateUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date/dateUtils */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateUtils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dateUtils", function() { return _date_dateUtils__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _date_dateTimeSequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date/dateTimeSequence */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateTimeSequence.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dateTimeSequence", function() { return _date_dateTimeSequence__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./displayUnitSystem/displayUnitSystem */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/displayUnitSystem/displayUnitSystem.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "displayUnitSystem", function() { return _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var _displayUnitSystem_displayUnitSystemType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./displayUnitSystem/displayUnitSystemType */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/displayUnitSystem/displayUnitSystemType.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "displayUnitSystemType", function() { return _displayUnitSystem_displayUnitSystemType__WEBPACK_IMPORTED_MODULE_10__; });
/* harmony import */ var _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formattingService/formattingService */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/formattingService.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "formattingService", function() { return _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _wordBreaker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wordBreaker */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/wordBreaker.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "wordBreaker", function() { return _wordBreaker__WEBPACK_IMPORTED_MODULE_12__; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/number/numberFormatter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/number/numberFormatter.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberFormatter; });
class NumberFormatter {
    static expandNumber(number_, precision, formatInfo) {
        let groupSizes = formatInfo.groupSizes, curSize = groupSizes[0], curGroupIndex = 1, factor = Math.pow(10, precision), rounded = Math.round(number_ * factor) / factor;
        if (!isFinite(rounded)) {
            rounded = number_;
        }
        number_ = rounded;
        let numberString = number_ + "", right = "", split = numberString.split(/e/i), exponent = split.length > 1 ? parseInt(split[1], 10) : 0;
        numberString = split[0];
        split = numberString.split(".");
        numberString = split[0];
        right = split.length > 1 ? split[1] : "";
        let l;
        if (exponent > 0) {
            right = NumberFormatter.zeroPad(right, exponent, false);
            numberString += right.slice(0, exponent);
            right = right.substr(exponent);
        }
        else if (exponent < 0) {
            exponent = -exponent;
            numberString = NumberFormatter.zeroPad(numberString, exponent + 1);
            right = numberString.slice(-exponent, numberString.length) + right;
            numberString = numberString.slice(0, -exponent);
        }
        if (precision > 0) {
            right = formatInfo["."] +
                ((right.length > precision) ? right.slice(0, precision) : NumberFormatter.zeroPad(right, precision));
        }
        else {
            right = "";
        }
        let stringIndex = numberString.length - 1, sep = formatInfo[","], ret = "";
        while (stringIndex >= 0) {
            if (curSize === 0 || curSize > stringIndex) {
                return numberString.slice(0, stringIndex + 1) + (ret.length ? (sep + ret + right) : right);
            }
            ret = numberString.slice(stringIndex - curSize + 1, stringIndex + 1) + (ret.length ? (sep + ret) : "");
            stringIndex -= curSize;
            if (curGroupIndex < groupSizes.length) {
                curSize = groupSizes[curGroupIndex];
                curGroupIndex++;
            }
        }
        return numberString.slice(0, stringIndex + 1) + sep + ret + right;
    }
    static zeroPad(str, count, left) {
        let l;
        for (l = str.length; l < count; l += 1) {
            str = (left ? ("0" + str) : (str + "0"));
        }
        return str;
    }
    static formatNumber(value, format, culture) {
        if (!format || format === "i") {
            return culture.name.length ? value.toLocaleString() : value.toString();
        }
        format = format || "D";
        let nf = NumberFormatter.numberFormat, number_ = Math.abs(value), precision = -1, pattern;
        if (format.length > 1)
            precision = parseInt(format.slice(1), 10);
        let current = format.charAt(0).toUpperCase(), formatInfo;
        switch (current) {
            case "D":
                pattern = "n";
                if (precision !== -1) {
                    number_ = NumberFormatter.zeroPad("" + number_, precision, true);
                }
                if (value < 0)
                    number_ = -number_;
                break;
            case "N":
                formatInfo = nf;
            // fall through
            case "C":
                formatInfo = formatInfo || nf.currency;
            // fall through
            case "P":
                formatInfo = formatInfo || nf.percent;
                pattern = value < 0 ? formatInfo.pattern[0] : (formatInfo.pattern[1] || "n");
                if (precision === -1)
                    precision = formatInfo.decimals;
                number_ = NumberFormatter.expandNumber(number_ * (current === "P" ? 100 : 1), precision, formatInfo);
                break;
            default:
                throw "Bad number format specifier: " + current;
        }
        let patternParts = /n|\$|-|%/g, ret = "";
        for (;;) {
            let index = patternParts.lastIndex, ar = patternParts.exec(pattern);
            ret += pattern.slice(index, ar ? ar.index : pattern.length);
            if (!ar) {
                break;
            }
            switch (ar[0]) {
                case "n":
                    ret += number_;
                    break;
                case "$":
                    ret += nf.currency.symbl;
                    break;
                case "-":
                    // don't make 0 negative
                    if (/[1-9]/.test(number_.toString())) {
                        ret += nf["-"];
                    }
                    break;
                case "%":
                    ret += nf.percent.symbl;
                    break;
            }
        }
        return ret;
    }
}
//# sourceMappingURL=numberFormatter.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/storageService/ephemeralStorageService.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/storageService/ephemeralStorageService.js ***!
  \**********************************************************************************************************/
/*! exports provided: EphemeralStorageService, ephemeralStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EphemeralStorageService", function() { return EphemeralStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ephemeralStorageService", function() { return ephemeralStorageService; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
class EphemeralStorageService {
    constructor(clearCacheInterval) {
        this.cache = {};
        this.clearCacheInterval = (clearCacheInterval != null)
            ? clearCacheInterval
            : EphemeralStorageService.defaultClearCacheInterval;
        this.clearCache();
    }
    getData(key) {
        return this.cache[key];
    }
    setData(key, data) {
        this.cache[key] = data;
        if (this.clearCacheTimerId == null) {
            this.clearCacheTimerId = setTimeout(() => this.clearCache(), this.clearCacheInterval);
        }
    }
    clearCache() {
        this.cache = {};
        this.clearCacheTimerId = undefined;
    }
}
EphemeralStorageService.defaultClearCacheInterval = (1000 * 60 * 60 * 24); // 1 day
const ephemeralStorageService = new EphemeralStorageService();
//# sourceMappingURL=ephemeralStorageService.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/stringExtensions.js":
/*!************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/stringExtensions.js ***!
  \************************************************************************************/
/*! exports provided: endsWith, format, equalIgnoreCase, startsWithIgnoreCase, startsWith, contains, containsIgnoreCase, normalizeCase, stringToArrayBuffer, isNullOrEmpty, isNullOrUndefinedOrWhiteSpaceString, containsWhitespace, isWhitespace, trimTrailingWhitespace, trimWhitespace, getLengthDifference, repeat, replaceAll, ensureUniqueNames, findUniqueName, constructNameFromList, escapeStringForRegex, normalizeFileName, stringifyAsPrettyJSON, deriveClsCompliantName, stripTagDelimiters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalIgnoreCase", function() { return equalIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWithIgnoreCase", function() { return startsWithIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsIgnoreCase", function() { return containsIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeCase", function() { return normalizeCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToArrayBuffer", function() { return stringToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return isNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefinedOrWhiteSpaceString", function() { return isNullOrUndefinedOrWhiteSpaceString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsWhitespace", function() { return containsWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWhitespace", function() { return isWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimTrailingWhitespace", function() { return trimTrailingWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimWhitespace", function() { return trimWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLengthDifference", function() { return getLengthDifference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureUniqueNames", function() { return ensureUniqueNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUniqueName", function() { return findUniqueName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructNameFromList", function() { return constructNameFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeStringForRegex", function() { return escapeStringForRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeFileName", function() { return normalizeFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyAsPrettyJSON", function() { return stringifyAsPrettyJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deriveClsCompliantName", function() { return deriveClsCompliantName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripTagDelimiters", function() { return stripTagDelimiters; });
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
const HtmlTagRegex = new RegExp("[<>]", "g");
/**
 * Checks if a string ends with a sub-string.
 */
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
function format(...args) {
    let s = args[0];
    if (isNullOrUndefinedOrWhiteSpaceString(s))
        return s;
    for (let i = 0; i < args.length - 1; i++) {
        let reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, args[i + 1]);
    }
    return s;
}
/**
 * Compares two strings for equality, ignoring case.
 */
function equalIgnoreCase(a, b) {
    return normalizeCase(a) === normalizeCase(b);
}
function startsWithIgnoreCase(a, b) {
    let normalizedSearchString = normalizeCase(b);
    return normalizeCase(a).indexOf(normalizedSearchString) === 0;
}
function startsWith(a, b) {
    return a.indexOf(b) === 0;
}
/** Determines whether a string contains a specified substring (by case-sensitive comparison). */
function contains(source, substring) {
    if (source == null)
        return false;
    return source.indexOf(substring) !== -1;
}
/** Determines whether a string contains a specified substring (while ignoring case). */
function containsIgnoreCase(source, substring) {
    if (source == null)
        return false;
    return contains(normalizeCase(source), normalizeCase(substring));
}
/**
 * Normalizes case for a string.
 * Used by equalIgnoreCase method.
 */
function normalizeCase(value) {
    return value.toUpperCase();
}
/**
 * Receives a string and returns an ArrayBuffer of its characters.
 * @return An ArrayBuffer of the string's characters.
 * If the string is empty or null or undefined - returns null.
 */
function stringToArrayBuffer(str) {
    if (isNullOrEmpty(str)) {
        return null;
    }
    let buffer = new ArrayBuffer(str.length);
    let bufferView = new Uint8Array(buffer);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufferView[i] = str.charCodeAt(i);
    }
    return bufferView;
}
/**
 * Is string null or empty or undefined?
 * @return True if the value is null or undefined or empty string,
 * otherwise false.
 */
function isNullOrEmpty(value) {
    return (value == null) || (value.length === 0);
}
/**
 * Returns true if the string is null, undefined, empty, or only includes white spaces.
 * @return True if the str is null, undefined, empty, or only includes white spaces,
 * otherwise false.
 */
function isNullOrUndefinedOrWhiteSpaceString(str) {
    return isNullOrEmpty(str) || isNullOrEmpty(str.trim());
}
/**
 * Returns a value indicating whether the str contains any whitespace.
 */
function containsWhitespace(str) {
    let expr = /\s/;
    return expr.test(str);
}
/**
 * Returns a value indicating whether the str is a whitespace string.
 */
function isWhitespace(str) {
    return str.trim() === "";
}
/**
 * Returns the string with any trailing whitespace from str removed.
 */
function trimTrailingWhitespace(str) {
    return str.replace(/\s+$/, "");
}
/**
 * Returns the string with any leading and trailing whitespace from str removed.
 */
function trimWhitespace(str) {
    return str.replace(/^\s+/, "").replace(/\s+$/, "");
}
/**
 * Returns length difference between the two provided strings.
 */
function getLengthDifference(left, right) {
    return Math.abs(left.length - right.length);
}
/**
 * Repeat char or string several times.
 * @param char The string to repeat.
 * @param count How many times to repeat the string.
 */
function repeat(char, count) {
    let result = "";
    for (let i = 0; i < count; i++) {
        result += char;
    }
    return result;
}
/**
 * Replace all the occurrences of the textToFind in the text with the textToReplace.
 * @param text The original string.
 * @param textToFind Text to find in the original string.
 * @param textToReplace New text replacing the textToFind.
 */
function replaceAll(text, textToFind, textToReplace) {
    if (!textToFind)
        return text;
    let pattern = escapeStringForRegex(textToFind);
    return text.replace(new RegExp(pattern, "gi"), textToReplace);
}
function ensureUniqueNames(names) {
    let usedNames = {};
    // Make sure we are giving fair chance for all columns to stay with their original name
    // First we fill the used names map to contain all the original unique names from the list.
    for (let name of names) {
        usedNames[name] = false;
    }
    let uniqueNames = [];
    // Now we go over all names and find a unique name for each
    for (let name of names) {
        let uniqueName = name;
        // If the (original) column name is already taken lets try to find another name
        if (usedNames[uniqueName]) {
            let counter = 0;
            // Find a name that is not already in the map
            while (usedNames[uniqueName] !== undefined) {
                uniqueName = name + "." + (++counter);
            }
        }
        uniqueNames.push(uniqueName);
        usedNames[uniqueName] = true;
    }
    return uniqueNames;
}
/**
 * Returns a name that is not specified in the values.
 */
function findUniqueName(usedNames, baseName) {
    // Find a unique name
    let i = 0, uniqueName = baseName;
    while (usedNames[uniqueName]) {
        uniqueName = baseName + (++i);
    }
    return uniqueName;
}
function constructNameFromList(list, separator, maxCharacter) {
    let labels = [];
    let exceeded;
    let length = 0;
    for (let item of list) {
        if (length + item.length > maxCharacter && labels.length > 0) {
            exceeded = true;
            break;
        }
        labels.push(item);
        length += item.length;
    }
    let separatorWithSpace = " " + separator + " ";
    let name = labels.join(separatorWithSpace);
    if (exceeded)
        name += separatorWithSpace + "...";
    return name;
}
function escapeStringForRegex(s) {
    return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
}
/**
 * Remove file name reserved characters <>:"/\|?* from input string.
 */
function normalizeFileName(fileName) {
    return fileName.replace(/[\<\>\:"\/\\\|\?*]/g, "");
}
/**
 * Similar to JSON.stringify, but strips away escape sequences so that the resulting
 * string is human-readable (and parsable by JSON formatting/validating tools).
 */
function stringifyAsPrettyJSON(object) {
    // let specialCharacterRemover = (key: string, value: string) => value.replace(/[^\w\s]/gi, "");
    return JSON.stringify(object /*, specialCharacterRemover*/);
}
/**
 * Derive a CLS-compliant name from a specified string.  If no allowed characters are present, return a fallback string instead.
 * TODO (6708134): this should have a fully Unicode-aware implementation
 */
function deriveClsCompliantName(input, fallback) {
    let result = input.replace(/^[^A-Za-z]*/g, "").replace(/[ :\.\/\\\-\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]/g, "_").replace(/[\W]/g, "");
    return result.length > 0 ? result : fallback;
}
/** Performs cheap sanitization by stripping away HTML tag (<>) characters. */
function stripTagDelimiters(s) {
    return s.replace(HtmlTagRegex, "");
}
//# sourceMappingURL=stringExtensions.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/textMeasurementService.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/textMeasurementService.js ***!
  \******************************************************************************************/
/*! exports provided: textMeasurementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textMeasurementService", function() { return textMeasurementService; });
/* harmony import */ var powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-typeutils */ "./node_modules/powerbi-visuals-utils-typeutils/lib/index.js");
/* harmony import */ var _wordBreaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordBreaker */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/wordBreaker.js");
/* harmony import */ var _storageService_ephemeralStorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageService/ephemeralStorageService */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/storageService/ephemeralStorageService.js");
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
// powerbi.extensibility.utils.type

// powerbi.extensibility.utils.formatting


var textMeasurementService;
(function (textMeasurementService) {
    const ellipsis = "...";
    let spanElement;
    let svgTextElement;
    let canvasCtx;
    let fallbackFontFamily;
    /**
     * Idempotent function for adding the elements to the DOM.
     */
    function ensureDOM() {
        if (spanElement) {
            return;
        }
        spanElement = document.createElement("span");
        document.body.appendChild(spanElement);
        // The style hides the svg element from the canvas, preventing canvas from scrolling down to show svg black square.
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("height", "0");
        svgElement.setAttribute("width", "0");
        svgElement.setAttribute("position", "absolute");
        svgTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
        svgElement.appendChild(svgTextElement);
        document.body.appendChild(svgElement);
        let canvasElement = document.createElement("canvas");
        canvasCtx = canvasElement.getContext("2d");
        let style = window.getComputedStyle(svgTextElement);
        if (style) {
            fallbackFontFamily = style.fontFamily;
        }
        else {
            fallbackFontFamily = "";
        }
    }
    /**
     * Removes spanElement from DOM.
     */
    function removeSpanElement() {
        if (spanElement && spanElement.remove) {
            spanElement.remove();
        }
        spanElement = null;
    }
    textMeasurementService.removeSpanElement = removeSpanElement;
    /**
     * This method measures the width of the text with the given SVG text properties.
     * @param textProperties The text properties to use for text measurement.
     * @param text The text to measure.
     */
    function measureSvgTextWidth(textProperties, text) {
        ensureDOM();
        canvasCtx.font =
            (textProperties.fontStyle || "") + " " +
                (textProperties.fontVariant || "") + " " +
                (textProperties.fontWeight || "") + " " +
                textProperties.fontSize + " " +
                (textProperties.fontFamily || fallbackFontFamily);
        return canvasCtx.measureText(text || textProperties.text).width;
    }
    textMeasurementService.measureSvgTextWidth = measureSvgTextWidth;
    /**
     * This method return the rect with the given SVG text properties.
     * @param textProperties The text properties to use for text measurement.
     * @param text The text to measure.
     */
    function measureSvgTextRect(textProperties, text) {
        ensureDOM();
        // Removes DOM elements faster than innerHTML
        while (svgTextElement.firstChild) {
            svgTextElement.removeChild(svgTextElement.firstChild);
        }
        svgTextElement.setAttribute("style", null);
        svgTextElement.style.visibility = "hidden";
        svgTextElement.style.fontFamily = textProperties.fontFamily || fallbackFontFamily;
        svgTextElement.style.fontVariant = textProperties.fontVariant;
        svgTextElement.style.fontSize = textProperties.fontSize;
        svgTextElement.style.fontWeight = textProperties.fontWeight;
        svgTextElement.style.fontStyle = textProperties.fontStyle;
        svgTextElement.style.whiteSpace = textProperties.whiteSpace || "nowrap";
        svgTextElement.appendChild(document.createTextNode(text || textProperties.text));
        // We're expecting the browser to give a synchronous measurement here
        // We're using SVGTextElement because it works across all browsers
        return svgTextElement.getBBox();
    }
    textMeasurementService.measureSvgTextRect = measureSvgTextRect;
    /**
     * This method measures the height of the text with the given SVG text properties.
     * @param textProperties The text properties to use for text measurement.
     * @param text The text to measure.
     */
    function measureSvgTextHeight(textProperties, text) {
        return measureSvgTextRect(textProperties, text).height;
    }
    textMeasurementService.measureSvgTextHeight = measureSvgTextHeight;
    /**
     * This method returns the text Rect with the given SVG text properties.
     * Does NOT return text width; obliterates text value
     * @param {TextProperties} textProperties - The text properties to use for text measurement
     */
    function estimateSvgTextRect(textProperties) {
        let propertiesKey = textProperties.fontFamily + textProperties.fontSize;
        let rect = _storageService_ephemeralStorageService__WEBPACK_IMPORTED_MODULE_2__["ephemeralStorageService"].getData(propertiesKey);
        if (rect == null) {
            // To estimate we check the height of a particular character, once it is cached, subsequent
            // calls should always get the height from the cache (regardless of the text).
            let estimatedTextProperties = {
                fontFamily: textProperties.fontFamily,
                fontSize: textProperties.fontSize,
                text: "M",
            };
            rect = textMeasurementService.measureSvgTextRect(estimatedTextProperties);
            // NOTE: In some cases (disconnected/hidden DOM) we may provide incorrect measurement results (zero sized bounding-box), so
            // we only store values in the cache if we are confident they are correct.
            if (rect.height > 0)
                _storageService_ephemeralStorageService__WEBPACK_IMPORTED_MODULE_2__["ephemeralStorageService"].setData(propertiesKey, rect);
        }
        return rect;
    }
    /**
     * This method returns the text Rect with the given SVG text properties.
     * @param {TextProperties} textProperties - The text properties to use for text measurement
     */
    function estimateSvgTextBaselineDelta(textProperties) {
        let rect = estimateSvgTextRect(textProperties);
        return rect.y + rect.height;
    }
    textMeasurementService.estimateSvgTextBaselineDelta = estimateSvgTextBaselineDelta;
    /**
     * This method estimates the height of the text with the given SVG text properties.
     * @param {TextProperties} textProperties - The text properties to use for text measurement
     */
    function estimateSvgTextHeight(textProperties, tightFightForNumeric = false) {
        let height = estimateSvgTextRect(textProperties).height;
        // TODO: replace it with new baseline calculation
        if (tightFightForNumeric)
            height *= 0.7;
        return height;
    }
    textMeasurementService.estimateSvgTextHeight = estimateSvgTextHeight;
    /**
     * This method measures the width of the svgElement.
     * @param svgElement The SVGTextElement to be measured.
     */
    function measureSvgTextElementWidth(svgElement) {
        return measureSvgTextWidth(getSvgMeasurementProperties(svgElement));
    }
    textMeasurementService.measureSvgTextElementWidth = measureSvgTextElementWidth;
    /**
     * This method fetches the text measurement properties of the given DOM element.
     * @param element The selector for the DOM Element.
     */
    function getMeasurementProperties(element) {
        const style = window.getComputedStyle(element);
        return {
            text: element.value || element.textContent,
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            fontStyle: style.fontStyle,
            fontVariant: style.fontVariant,
            whiteSpace: style.whiteSpace
        };
    }
    textMeasurementService.getMeasurementProperties = getMeasurementProperties;
    /**
     * This method fetches the text measurement properties of the given SVG text element.
     * @param element The SVGTextElement to be measured.
     */
    function getSvgMeasurementProperties(element) {
        let style = window.getComputedStyle(element);
        if (style) {
            return {
                text: element.textContent,
                fontFamily: style.fontFamily,
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                fontStyle: style.fontStyle,
                fontVariant: style.fontVariant,
                whiteSpace: style.whiteSpace
            };
        }
        else {
            return {
                text: element.textContent,
                fontFamily: "",
                fontSize: "0",
            };
        }
    }
    textMeasurementService.getSvgMeasurementProperties = getSvgMeasurementProperties;
    /**
     * This method returns the width of a div element.
     * @param element The div element.
     */
    function getDivElementWidth(element) {
        const style = window.getComputedStyle(element);
        if (style)
            return style.width;
        else
            return "0";
    }
    textMeasurementService.getDivElementWidth = getDivElementWidth;
    /**
     * Compares labels text size to the available size and renders ellipses when the available size is smaller.
     * @param textProperties The text properties (including text content) to use for text measurement.
     * @param maxWidth The maximum width available for rendering the text.
     */
    function getTailoredTextOrDefault(textProperties, maxWidth) {
        ensureDOM();
        let strLength = textProperties.text.length;
        if (strLength === 0) {
            return textProperties.text;
        }
        let width = measureSvgTextWidth(textProperties);
        if (width < maxWidth) {
            return textProperties.text;
        }
        // Create a copy of the textProperties so we don't modify the one that's passed in.
        let copiedTextProperties = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_0__["prototype"].inherit(textProperties);
        // Take the properties and apply them to svgTextElement
        // Then, do the binary search to figure out the substring we want
        // Set the substring on textElement argument
        let text = copiedTextProperties.text = ellipsis + copiedTextProperties.text;
        let min = 1;
        let max = text.length;
        let i = ellipsis.length;
        while (min <= max) {
            // num | 0 prefered to Math.floor(num) for performance benefits
            i = (min + max) / 2 | 0;
            copiedTextProperties.text = text.substr(0, i);
            width = measureSvgTextWidth(copiedTextProperties);
            if (maxWidth > width) {
                min = i + 1;
            }
            else if (maxWidth < width) {
                max = i - 1;
            }
            else {
                break;
            }
        }
        // Since the search algorithm almost never finds an exact match,
        // it will pick one of the closest two, which could result in a
        // value bigger with than 'maxWidth' thus we need to go back by
        // one to guarantee a smaller width than 'maxWidth'.
        copiedTextProperties.text = text.substr(0, i);
        width = measureSvgTextWidth(copiedTextProperties);
        if (width > maxWidth) {
            i--;
        }
        return text.substr(ellipsis.length, i - ellipsis.length) + ellipsis;
    }
    textMeasurementService.getTailoredTextOrDefault = getTailoredTextOrDefault;
    /**
     * Compares labels text size to the available size and renders ellipses when the available size is smaller.
     * @param textElement The SVGTextElement containing the text to render.
     * @param maxWidth The maximum width available for rendering the text.
     */
    function svgEllipsis(textElement, maxWidth) {
        let properties = getSvgMeasurementProperties(textElement);
        let originalText = properties.text;
        let tailoredText = getTailoredTextOrDefault(properties, maxWidth);
        if (originalText !== tailoredText) {
            textElement.textContent = tailoredText;
        }
    }
    textMeasurementService.svgEllipsis = svgEllipsis;
    /**
     * Word break textContent of <text> SVG element into <tspan>s
     * Each tspan will be the height of a single line of text
     * @param textElement - the SVGTextElement containing the text to wrap
     * @param maxWidth - the maximum width available
     * @param maxHeight - the maximum height available (defaults to single line)
     * @param linePadding - (optional) padding to add to line height
     */
    function wordBreak(textElement, maxWidth, maxHeight, linePadding = 0) {
        let properties = getSvgMeasurementProperties(textElement);
        let height = estimateSvgTextHeight(properties) + linePadding;
        let maxNumLines = Math.max(1, Math.floor(maxHeight / height));
        // Save y of parent textElement to apply as first tspan dy
        let firstDY = textElement ? textElement.getAttribute("y") : null;
        // Store and clear text content
        let labelText = textElement ? textElement.textContent : null;
        textElement.textContent = null;
        // Append a tspan for each word broken section
        let words = _wordBreaker__WEBPACK_IMPORTED_MODULE_1__["splitByWidth"](labelText, properties, measureSvgTextWidth, maxWidth, maxNumLines);
        const fragment = document.createDocumentFragment();
        for (let i = 0, ilen = words.length; i < ilen; i++) {
            const dy = i === 0 ? firstDY : height;
            properties.text = words[i];
            const textElement = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            textElement.setAttribute("x", "0");
            textElement.setAttribute("dy", dy ? dy.toString() : null);
            textElement.appendChild(document.createTextNode(getTailoredTextOrDefault(properties, maxWidth)));
            fragment.appendChild(textElement);
        }
        textElement.appendChild(fragment);
    }
    textMeasurementService.wordBreak = wordBreak;
    /**
     * Word break textContent of span element into <span>s
     * Each span will be the height of a single line of text
     * @param textElement - the element containing the text to wrap
     * @param maxWidth - the maximum width available
     * @param maxHeight - the maximum height available (defaults to single line)
     * @param linePadding - (optional) padding to add to line height
     */
    function wordBreakOverflowingText(textElement, maxWidth, maxHeight, linePadding = 0) {
        const properties = getSvgMeasurementProperties(textElement);
        let height = estimateSvgTextHeight(properties) + linePadding;
        let maxNumLines = Math.max(1, Math.floor(maxHeight / height));
        // Store and clear text content
        const labelText = textElement.textContent;
        textElement.textContent = null;
        // Append a span for each word broken section
        const words = _wordBreaker__WEBPACK_IMPORTED_MODULE_1__["splitByWidth"](labelText, properties, measureSvgTextWidth, maxWidth, maxNumLines);
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < words.length; i++) {
            const span = document.createElement("span");
            span.classList.add("overflowingText");
            span.style.overflow = "hidden";
            span.style.whiteSpace = "nowrap";
            span.style.textOverflow = "ellipsis";
            span.style.display = "block";
            span.style.width = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_0__["pixelConverter"].toString(maxWidth);
            span.appendChild(document.createTextNode(words[i]));
            span.appendChild(document.createTextNode(getTailoredTextOrDefault(properties, maxWidth)));
            fragment.appendChild(span);
        }
        textElement.appendChild(fragment);
    }
    textMeasurementService.wordBreakOverflowingText = wordBreakOverflowingText;
})(textMeasurementService || (textMeasurementService = {}));
//# sourceMappingURL=textMeasurementService.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/textUtil.js":
/*!****************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/textUtil.js ***!
  \****************************************************************************/
/*! exports provided: removeBreakingSpaces, removeEllipses, replaceSpaceWithNBSP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBreakingSpaces", function() { return removeBreakingSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEllipses", function() { return removeEllipses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceSpaceWithNBSP", function() { return replaceSpaceWithNBSP; });
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/**
 * Contains functions/constants to aid in text manupilation.
 */
/**
 * Remove breaking spaces from given string and replace by none breaking space (&nbsp).
 */
function removeBreakingSpaces(str) {
    return str.toString().replace(new RegExp(" ", "g"), "&nbsp");
}
/**
 * Remove ellipses from a given string
 */
function removeEllipses(str) {
    return str.replace(/(…)|(\.\.\.)/g, "");
}
/**
* Replace every whitespace (0x20) with Non-Breaking Space (0xA0)
    * @param {string} txt String to replace White spaces
    * @returns Text after replcing white spaces
    */
function replaceSpaceWithNBSP(txt) {
    if (txt != null) {
        return txt.replace(/ /g, "\xA0");
    }
}
//# sourceMappingURL=textUtil.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/valueFormatter.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/valueFormatter.js ***!
  \**********************************************************************************/
/*! exports provided: valueFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFormatter", function() { return valueFormatter; });
/* harmony import */ var _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayUnitSystem/displayUnitSystem */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/displayUnitSystem/displayUnitSystem.js");
/* harmony import */ var _displayUnitSystem_displayUnitSystemType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayUnitSystem/displayUnitSystemType */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/displayUnitSystem/displayUnitSystemType.js");
/* harmony import */ var _stringExtensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringExtensions */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/stringExtensions.js");
/* harmony import */ var _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formattingService/formattingService */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/formattingService/formattingService.js");
/* harmony import */ var _date_dateTimeSequence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date/dateTimeSequence */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/date/dateTimeSequence.js");
/* harmony import */ var powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! powerbi-visuals-utils-typeutils */ "./node_modules/powerbi-visuals-utils-typeutils/lib/index.js");
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/index.js");
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/







var DataViewObjects = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_6__["dataViewObjects"].DataViewObjects;
// powerbi.extensibility.utils.type
var ValueType = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_5__["valueType"].ValueType;
var PrimitiveType = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_5__["valueType"].PrimitiveType;
var valueFormatter;
(function (valueFormatter) {
    var StringExtensions = _stringExtensions__WEBPACK_IMPORTED_MODULE_2__;
    const BeautifiedFormat = {
        "0.00 %;-0.00 %;0.00 %": "Percentage",
        "0.0 %;-0.0 %;0.0 %": "Percentage1",
    };
    valueFormatter.DefaultIntegerFormat = "g";
    valueFormatter.DefaultNumericFormat = "#,0.00";
    valueFormatter.DefaultDateFormat = "d";
    const defaultLocalizedStrings = {
        "NullValue": "(Blank)",
        "BooleanTrue": "True",
        "BooleanFalse": "False",
        "NaNValue": "NaN",
        "InfinityValue": "+Infinity",
        "NegativeInfinityValue": "-Infinity",
        "RestatementComma": "{0}, {1}",
        "RestatementCompoundAnd": "{0} and {1}",
        "RestatementCompoundOr": "{0} or {1}",
        "DisplayUnitSystem_EAuto_Title": "Auto",
        "DisplayUnitSystem_E0_Title": "None",
        "DisplayUnitSystem_E3_LabelFormat": "{0}K",
        "DisplayUnitSystem_E3_Title": "Thousands",
        "DisplayUnitSystem_E6_LabelFormat": "{0}M",
        "DisplayUnitSystem_E6_Title": "Millions",
        "DisplayUnitSystem_E9_LabelFormat": "{0}bn",
        "DisplayUnitSystem_E9_Title": "Billions",
        "DisplayUnitSystem_E12_LabelFormat": "{0}T",
        "DisplayUnitSystem_E12_Title": "Trillions",
        "Percentage": "#,0.##%",
        "Percentage1": "#,0.#%",
        "TableTotalLabel": "Total",
        "Tooltip_HighlightedValueDisplayName": "Highlighted",
        "Funnel_PercentOfFirst": "Percent of first",
        "Funnel_PercentOfPrevious": "Percent of previous",
        "Funnel_PercentOfFirst_Highlight": "Percent of first (highlighted)",
        "Funnel_PercentOfPrevious_Highlight": "Percent of previous (highlighted)",
        // Geotagging strings
        "GeotaggingString_Continent": "continent",
        "GeotaggingString_Continents": "continents",
        "GeotaggingString_Country": "country",
        "GeotaggingString_Countries": "countries",
        "GeotaggingString_State": "state",
        "GeotaggingString_States": "states",
        "GeotaggingString_City": "city",
        "GeotaggingString_Cities": "cities",
        "GeotaggingString_Town": "town",
        "GeotaggingString_Towns": "towns",
        "GeotaggingString_Province": "province",
        "GeotaggingString_Provinces": "provinces",
        "GeotaggingString_County": "county",
        "GeotaggingString_Counties": "counties",
        "GeotaggingString_Village": "village",
        "GeotaggingString_Villages": "villages",
        "GeotaggingString_Post": "post",
        "GeotaggingString_Zip": "zip",
        "GeotaggingString_Code": "code",
        "GeotaggingString_Place": "place",
        "GeotaggingString_Places": "places",
        "GeotaggingString_Address": "address",
        "GeotaggingString_Addresses": "addresses",
        "GeotaggingString_Street": "street",
        "GeotaggingString_Streets": "streets",
        "GeotaggingString_Longitude": "longitude",
        "GeotaggingString_Longitude_Short": "lon",
        "GeotaggingString_Longitude_Short2": "long",
        "GeotaggingString_Latitude": "latitude",
        "GeotaggingString_Latitude_Short": "lat",
        "GeotaggingString_PostalCode": "postal code",
        "GeotaggingString_PostalCodes": "postal codes",
        "GeotaggingString_ZipCode": "zip code",
        "GeotaggingString_ZipCodes": "zip codes",
        "GeotaggingString_Territory": "territory",
        "GeotaggingString_Territories": "territories",
    };
    function beautify(format) {
        let key = BeautifiedFormat[format];
        if (key)
            return defaultLocalizedStrings[key] || format;
        return format;
    }
    function describeUnit(exponent) {
        let exponentLookup = (exponent === -1) ? "Auto" : exponent.toString();
        let title = defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_Title"];
        let format = (exponent <= 0) ? "{0}" : defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_LabelFormat"];
        if (title || format)
            return { title: title, format: format };
    }
    function getLocalizedString(stringId) {
        return defaultLocalizedStrings[stringId];
    }
    valueFormatter.getLocalizedString = getLocalizedString;
    // NOTE: Define default locale options, but these can be overriden by setLocaleOptions.
    let localizationOptions = {
        nullValue: defaultLocalizedStrings["NullValue"],
        trueValue: defaultLocalizedStrings["BooleanTrue"],
        falseValue: defaultLocalizedStrings["BooleanFalse"],
        NaN: defaultLocalizedStrings["NaNValue"],
        infinity: defaultLocalizedStrings["InfinityValue"],
        negativeInfinity: defaultLocalizedStrings["NegativeInfinityValue"],
        beautify: format => beautify(format),
        describe: exponent => describeUnit(exponent),
        restatementComma: defaultLocalizedStrings["RestatementComma"],
        restatementCompoundAnd: defaultLocalizedStrings["RestatementCompoundAnd"],
        restatementCompoundOr: defaultLocalizedStrings["RestatementCompoundOr"],
    };
    const MaxScaledDecimalPlaces = 2;
    const MaxValueForDisplayUnitRounding = 1000;
    const MinIntegerValueForDisplayUnits = 10000;
    const MinPrecisionForDisplayUnits = 2;
    const DateTimeMetadataColumn = {
        displayName: "",
        type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.DateTime),
    };
    function getFormatMetadata(format) {
        return _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_3__["numberFormat"].getCustomFormatMetadata(format);
    }
    valueFormatter.getFormatMetadata = getFormatMetadata;
    function setLocaleOptions(options) {
        localizationOptions = options;
        _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__["DefaultDisplayUnitSystem"].reset();
        _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__["WholeUnitsDisplayUnitSystem"].reset();
    }
    valueFormatter.setLocaleOptions = setLocaleOptions;
    function createDefaultFormatter(formatString, allowFormatBeautification, cultureSelector) {
        const formatBeautified = allowFormatBeautification
            ? localizationOptions.beautify(formatString)
            : formatString;
        return {
            format: function (value) {
                if (value == null) {
                    return localizationOptions.nullValue;
                }
                return formatCore({
                    value,
                    cultureSelector,
                    format: formatBeautified
                });
            }
        };
    }
    valueFormatter.createDefaultFormatter = createDefaultFormatter;
    /** Creates an IValueFormatter to be used for a range of values. */
    function create(options) {
        const format = !!options.allowFormatBeautification
            ? localizationOptions.beautify(options.format)
            : options.format;
        const { cultureSelector } = options;
        if (shouldUseNumericDisplayUnits(options)) {
            let displayUnitSystem = createDisplayUnitSystem(options.displayUnitSystemType);
            let singleValueFormattingMode = !!options.formatSingleValues;
            displayUnitSystem.update(Math.max(Math.abs(options.value || 0), Math.abs(options.value2 || 0)));
            let forcePrecision = options.precision != null;
            let decimals;
            if (forcePrecision)
                decimals = -options.precision;
            else if (displayUnitSystem.displayUnit && displayUnitSystem.displayUnit.value > 1)
                decimals = -MaxScaledDecimalPlaces;
            return {
                format: function (value) {
                    let formattedValue = getStringFormat(value, true /*nullsAreBlank*/);
                    if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue)) {
                        return formattedValue;
                    }
                    // Round to Double.DEFAULT_PRECISION
                    if (value
                        && !displayUnitSystem.isScalingUnit()
                        && Math.abs(value) < MaxValueForDisplayUnitRounding
                        && !forcePrecision) {
                        value = powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_5__["double"].roundToPrecision(value);
                    }
                    return singleValueFormattingMode
                        ? displayUnitSystem.formatSingleValue(value, format, decimals, forcePrecision, cultureSelector)
                        : displayUnitSystem.format(value, format, decimals, forcePrecision, cultureSelector);
                },
                displayUnit: displayUnitSystem.displayUnit,
                options: options
            };
        }
        if (shouldUseDateUnits(options.value, options.value2, options.tickCount)) {
            const unit = _date_dateTimeSequence__WEBPACK_IMPORTED_MODULE_4__["DateTimeSequence"].getIntervalUnit(options.value /* minDate */, options.value2 /* maxDate */, options.tickCount);
            return {
                format: function (value) {
                    if (value == null) {
                        return localizationOptions.nullValue;
                    }
                    let formatString = _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_3__["formattingService"].dateFormatString(unit);
                    return formatCore({
                        value,
                        cultureSelector,
                        format: formatString,
                    });
                },
                options: options
            };
        }
        return createDefaultFormatter(format, false, cultureSelector);
    }
    valueFormatter.create = create;
    function format(value, format, allowFormatBeautification, cultureSelector) {
        if (value == null) {
            return localizationOptions.nullValue;
        }
        const formatString = !!allowFormatBeautification
            ? localizationOptions.beautify(format)
            : format;
        return formatCore({
            value,
            cultureSelector,
            format: formatString
        });
    }
    valueFormatter.format = format;
    /**
     * Value formatting function to handle variant measures.
     * For a Date/Time value within a non-date/time field, it's formatted with the default date/time formatString instead of as a number
     * @param {any} value Value to be formatted
     * @param {DataViewMetadataColumn} column Field which the value belongs to
     * @param {DataViewObjectPropertyIdentifier} formatStringProp formatString Property ID
     * @param {boolean} nullsAreBlank? Whether to show "(Blank)" instead of empty string for null values
     * @returns Formatted value
     */
    function formatVariantMeasureValue(value, column, formatStringProp, nullsAreBlank, cultureSelector) {
        // If column type is not datetime, but the value is of time datetime,
        // then use the default date format string
        if (!(column && column.type && column.type.dateTime) && value instanceof Date) {
            const valueFormat = getFormatString(DateTimeMetadataColumn, null, false);
            return formatCore({
                value,
                nullsAreBlank,
                cultureSelector,
                format: valueFormat
            });
        }
        else {
            const valueFormat = getFormatString(column, formatStringProp);
            return formatCore({
                value,
                nullsAreBlank,
                cultureSelector,
                format: valueFormat
            });
        }
    }
    valueFormatter.formatVariantMeasureValue = formatVariantMeasureValue;
    function createDisplayUnitSystem(displayUnitSystemType) {
        if (displayUnitSystemType == null)
            return new _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__["DefaultDisplayUnitSystem"](localizationOptions.describe);
        switch (displayUnitSystemType) {
            case _displayUnitSystem_displayUnitSystemType__WEBPACK_IMPORTED_MODULE_1__["DisplayUnitSystemType"].Default:
                return new _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__["DefaultDisplayUnitSystem"](localizationOptions.describe);
            case _displayUnitSystem_displayUnitSystemType__WEBPACK_IMPORTED_MODULE_1__["DisplayUnitSystemType"].WholeUnits:
                return new _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__["WholeUnitsDisplayUnitSystem"](localizationOptions.describe);
            case _displayUnitSystem_displayUnitSystemType__WEBPACK_IMPORTED_MODULE_1__["DisplayUnitSystemType"].Verbose:
                return new _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__["NoDisplayUnitSystem"]();
            case _displayUnitSystem_displayUnitSystemType__WEBPACK_IMPORTED_MODULE_1__["DisplayUnitSystemType"].DataLabels:
                return new _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__["DataLabelsDisplayUnitSystem"](localizationOptions.describe);
            default:
                return new _displayUnitSystem_displayUnitSystem__WEBPACK_IMPORTED_MODULE_0__["DefaultDisplayUnitSystem"](localizationOptions.describe);
        }
    }
    valueFormatter.createDisplayUnitSystem = createDisplayUnitSystem;
    function shouldUseNumericDisplayUnits(options) {
        let value = options.value;
        let value2 = options.value2;
        let format = options.format;
        // For singleValue visuals like card, gauge we don't want to roundoff data to the nearest thousands so format the whole number / integers below 10K to not use display units
        if (options.formatSingleValues && format) {
            if (Math.abs(value) < MinIntegerValueForDisplayUnits) {
                let isCustomFormat = !_formattingService_formattingService__WEBPACK_IMPORTED_MODULE_3__["numberFormat"].isStandardFormat(format);
                if (isCustomFormat) {
                    let precision = _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_3__["numberFormat"].getCustomFormatMetadata(format, true /*calculatePrecision*/).precision;
                    if (precision < MinPrecisionForDisplayUnits)
                        return false;
                }
                else if (powerbi_visuals_utils_typeutils__WEBPACK_IMPORTED_MODULE_5__["double"].isInteger(value))
                    return false;
            }
        }
        if ((typeof value === "number") || (typeof value2 === "number")) {
            return true;
        }
    }
    function shouldUseDateUnits(value, value2, tickCount) {
        // must check both value and value2 because we'll need to get an interval for date units
        return (value instanceof Date) && (value2 instanceof Date) && (tickCount !== undefined && tickCount !== null);
    }
    /*
        * Get the column format. Order of precendence is:
        *  1. Column format
        *  2. Default PowerView policy for column type
        */
    function getFormatString(column, formatStringProperty, suppressTypeFallback) {
        if (column) {
            if (formatStringProperty) {
                let propertyValue = DataViewObjects.getValue(column.objects, formatStringProperty);
                if (propertyValue)
                    return propertyValue;
            }
            if (!suppressTypeFallback) {
                let columnType = column.type;
                if (columnType) {
                    if (columnType.dateTime)
                        return valueFormatter.DefaultDateFormat;
                    if (columnType.integer) {
                        if (columnType.temporal && columnType.temporal.year)
                            return "0";
                        return valueFormatter.DefaultIntegerFormat;
                    }
                    if (columnType.numeric)
                        return valueFormatter.DefaultNumericFormat;
                }
            }
        }
    }
    valueFormatter.getFormatString = getFormatString;
    function getFormatStringByColumn(column, suppressTypeFallback) {
        if (column) {
            if (column.format) {
                return column.format;
            }
            if (!suppressTypeFallback) {
                let columnType = column.type;
                if (columnType) {
                    if (columnType.dateTime) {
                        return valueFormatter.DefaultDateFormat;
                    }
                    if (columnType.integer) {
                        if (columnType.temporal && columnType.temporal.year) {
                            return "0";
                        }
                        return valueFormatter.DefaultIntegerFormat;
                    }
                    if (columnType.numeric) {
                        return valueFormatter.DefaultNumericFormat;
                    }
                }
            }
        }
        return undefined;
    }
    valueFormatter.getFormatStringByColumn = getFormatStringByColumn;
    function formatListCompound(strings, conjunction) {
        let result;
        if (!strings) {
            return null;
        }
        let length = strings.length;
        if (length > 0) {
            result = strings[0];
            let lastIndex = length - 1;
            for (let i = 1, len = lastIndex; i < len; i++) {
                let value = strings[i];
                result = StringExtensions.format(localizationOptions.restatementComma, result, value);
            }
            if (length > 1) {
                let value = strings[lastIndex];
                result = StringExtensions.format(conjunction, result, value);
            }
        }
        else {
            result = null;
        }
        return result;
    }
    /** The returned string will look like 'A, B, ..., and C'  */
    function formatListAnd(strings) {
        return formatListCompound(strings, localizationOptions.restatementCompoundAnd);
    }
    valueFormatter.formatListAnd = formatListAnd;
    /** The returned string will look like 'A, B, ..., or C' */
    function formatListOr(strings) {
        return formatListCompound(strings, localizationOptions.restatementCompoundOr);
    }
    valueFormatter.formatListOr = formatListOr;
    function formatCore(options) {
        const { value, format, nullsAreBlank, cultureSelector } = options;
        let formattedValue = getStringFormat(value, nullsAreBlank ? nullsAreBlank : false);
        if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue)) {
            return formattedValue;
        }
        return _formattingService_formattingService__WEBPACK_IMPORTED_MODULE_3__["formattingService"].formatValue(value, format, cultureSelector);
    }
    function getStringFormat(value, nullsAreBlank) {
        if (value == null && nullsAreBlank) {
            return localizationOptions.nullValue;
        }
        if (value === true) {
            return localizationOptions.trueValue;
        }
        if (value === false) {
            return localizationOptions.falseValue;
        }
        if (typeof value === "number" && isNaN(value)) {
            return localizationOptions.NaN;
        }
        if (value === Number.NEGATIVE_INFINITY) {
            return localizationOptions.negativeInfinity;
        }
        if (value === Number.POSITIVE_INFINITY) {
            return localizationOptions.infinity;
        }
        return "";
    }
    function getDisplayUnits(displayUnitSystemType) {
        let displayUnitSystem = createDisplayUnitSystem(displayUnitSystemType);
        return displayUnitSystem.units;
    }
    valueFormatter.getDisplayUnits = getDisplayUnits;
})(valueFormatter || (valueFormatter = {}));
//# sourceMappingURL=valueFormatter.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingutils/lib/wordBreaker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingutils/lib/wordBreaker.js ***!
  \*******************************************************************************/
/*! exports provided: find, hasBreakers, wordCount, getMaxWordWidth, splitByWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBreakers", function() { return hasBreakers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordCount", function() { return wordCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxWordWidth", function() { return getMaxWordWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitByWidth", function() { return splitByWidth; });
const SPACE = " ";
const BREAKERS_REGEX = /[\s\n]+/g;
function search(index, content, backward) {
    if (backward) {
        for (let i = index - 1; i > -1; i--) {
            if (hasBreakers(content[i]))
                return i + 1;
        }
    }
    else {
        for (let i = index, ilen = content.length; i < ilen; i++) {
            if (hasBreakers(content[i]))
                return i;
        }
    }
    return backward ? 0 : content.length;
}
/**
 * Find the word nearest the cursor specified within content
 * @param index - point within content to search forward/backward from
 * @param content - string to search
*/
function find(index, content) {
    let result = { start: 0, end: 0 };
    if (content.length === 0) {
        return result;
    }
    result.start = search(index, content, true);
    result.end = search(index, content, false);
    return result;
}
/**
 * Test for presence of breakers within content
 * @param content - string to test
*/
function hasBreakers(content) {
    BREAKERS_REGEX.lastIndex = 0;
    return BREAKERS_REGEX.test(content);
}
/**
 * Count the number of pieces when broken by BREAKERS_REGEX
 * ~2.7x faster than WordBreaker.split(content).length
 * @param content - string to break and count
*/
function wordCount(content) {
    let count = 1;
    BREAKERS_REGEX.lastIndex = 0;
    BREAKERS_REGEX.exec(content);
    while (BREAKERS_REGEX.lastIndex !== 0) {
        count++;
        BREAKERS_REGEX.exec(content);
    }
    return count;
}
function getMaxWordWidth(content, textWidthMeasurer, properties) {
    let words = split(content);
    let maxWidth = 0;
    for (let w of words) {
        properties.text = w;
        maxWidth = Math.max(maxWidth, textWidthMeasurer(properties));
    }
    return maxWidth;
}
function split(content) {
    return content.split(BREAKERS_REGEX);
}
function getWidth(content, properties, textWidthMeasurer) {
    properties.text = content;
    return textWidthMeasurer(properties);
}
function truncate(content, properties, truncator, maxWidth) {
    properties.text = content;
    return truncator(properties, maxWidth);
}
/**
 * Split content by breakers (words) and greedy fit as many words
 * into each index in the result based on max width and number of lines
 * e.g. Each index in result corresponds to a line of content
 *      when used by AxisHelper.LabelLayoutStrategy.wordBreak
 * @param content - string to split
 * @param properties - text properties to be used by @param:textWidthMeasurer
 * @param textWidthMeasurer - function to calculate width of given text content
 * @param maxWidth - maximum allowed width of text content in each result
 * @param maxNumLines - maximum number of results we will allow, valid values must be greater than 0
 * @param truncator - (optional) if specified, used as a function to truncate content to a given width
*/
function splitByWidth(content, properties, textWidthMeasurer, maxWidth, maxNumLines, truncator) {
    // Default truncator returns string as-is
    truncator = truncator ? truncator : (properties, maxWidth) => properties.text;
    let result = [];
    let words = split(content);
    let usedWidth = 0;
    let wordsInLine = [];
    for (let word of words) {
        // Last line? Just add whatever is left
        if ((maxNumLines > 0) && (result.length >= maxNumLines - 1)) {
            wordsInLine.push(word);
            continue;
        }
        // Determine width if we add this word
        // Account for SPACE we will add when joining...
        let wordWidth = wordsInLine.length === 0
            ? getWidth(word, properties, textWidthMeasurer)
            : getWidth(SPACE + word, properties, textWidthMeasurer);
        // If width would exceed max width,
        // then push used words and start new split result
        if (usedWidth + wordWidth > maxWidth) {
            // Word alone exceeds max width, just add it.
            if (wordsInLine.length === 0) {
                result.push(truncate(word, properties, truncator, maxWidth));
                usedWidth = 0;
                wordsInLine = [];
                continue;
            }
            result.push(truncate(wordsInLine.join(SPACE), properties, truncator, maxWidth));
            usedWidth = 0;
            wordsInLine = [];
        }
        // ...otherwise, add word and continue
        wordsInLine.push(word);
        usedWidth += wordWidth;
    }
    // Push remaining words onto result (if any)
    if (wordsInLine && wordsInLine.length) {
        result.push(truncate(wordsInLine.join(SPACE), properties, truncator, maxWidth));
    }
    return result;
}
//# sourceMappingURL=wordBreaker.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/double.js":
/*!********************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/double.js ***!
  \********************************************************************/
/*! exports provided: MIN_VALUE, MAX_VALUE, MIN_EXP, MAX_EXP, EPSILON, DEFAULT_PRECISION, DEFAULT_PRECISION_IN_DECIMAL_DIGITS, LOG_E_10, POSITIVE_POWERS, NEGATIVE_POWERS, pow10, log10, getPrecision, equalWithPrecision, lessWithPrecision, lessOrEqualWithPrecision, greaterWithPrecision, greaterOrEqualWithPrecision, floorWithPrecision, ceilWithPrecision, floorToPrecision, ceilToPrecision, roundToPrecision, ensureInRange, round, project, removeDecimalNoise, isInteger, toIncrement, detectPrecision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_VALUE", function() { return MIN_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_VALUE", function() { return MAX_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_EXP", function() { return MIN_EXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_EXP", function() { return MAX_EXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRECISION", function() { return DEFAULT_PRECISION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRECISION_IN_DECIMAL_DIGITS", function() { return DEFAULT_PRECISION_IN_DECIMAL_DIGITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_E_10", function() { return LOG_E_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITIVE_POWERS", function() { return POSITIVE_POWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEGATIVE_POWERS", function() { return NEGATIVE_POWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow10", function() { return pow10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log10", function() { return log10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrecision", function() { return getPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalWithPrecision", function() { return equalWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessWithPrecision", function() { return lessWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessOrEqualWithPrecision", function() { return lessOrEqualWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterWithPrecision", function() { return greaterWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterOrEqualWithPrecision", function() { return greaterOrEqualWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorWithPrecision", function() { return floorWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceilWithPrecision", function() { return ceilWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorToPrecision", function() { return floorToPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceilToPrecision", function() { return ceilToPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToPrecision", function() { return roundToPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureInRange", function() { return ensureInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDecimalNoise", function() { return removeDecimalNoise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIncrement", function() { return toIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectPrecision", function() { return detectPrecision; });
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/**
 * Module Double contains a set of constants and precision based utility methods
 * for dealing with doubles and their decimal garbage in the javascript.
 */
// Constants.
const MIN_VALUE = -Number.MAX_VALUE;
const MAX_VALUE = Number.MAX_VALUE;
const MIN_EXP = -308;
const MAX_EXP = 308;
const EPSILON = 1E-323;
const DEFAULT_PRECISION = 0.0001;
const DEFAULT_PRECISION_IN_DECIMAL_DIGITS = 12;
const LOG_E_10 = Math.log(10);
const POSITIVE_POWERS = [
    1E0, 1E1, 1E2, 1E3, 1E4, 1E5, 1E6, 1E7, 1E8, 1E9, 1E10, 1E11, 1E12, 1E13, 1E14, 1E15, 1E16, 1E17, 1E18, 1E19, 1E20, 1E21, 1E22, 1E23, 1E24, 1E25, 1E26, 1E27, 1E28, 1E29, 1E30, 1E31, 1E32, 1E33, 1E34, 1E35, 1E36, 1E37, 1E38, 1E39, 1E40, 1E41, 1E42, 1E43, 1E44, 1E45, 1E46, 1E47, 1E48, 1E49, 1E50, 1E51, 1E52, 1E53, 1E54, 1E55, 1E56, 1E57, 1E58, 1E59, 1E60, 1E61, 1E62, 1E63, 1E64, 1E65, 1E66, 1E67, 1E68, 1E69, 1E70, 1E71, 1E72, 1E73, 1E74, 1E75, 1E76, 1E77, 1E78, 1E79, 1E80, 1E81, 1E82, 1E83, 1E84, 1E85, 1E86, 1E87, 1E88, 1E89, 1E90, 1E91, 1E92, 1E93, 1E94, 1E95, 1E96, 1E97, 1E98, 1E99,
    1E100, 1E101, 1E102, 1E103, 1E104, 1E105, 1E106, 1E107, 1E108, 1E109, 1E110, 1E111, 1E112, 1E113, 1E114, 1E115, 1E116, 1E117, 1E118, 1E119, 1E120, 1E121, 1E122, 1E123, 1E124, 1E125, 1E126, 1E127, 1E128, 1E129, 1E130, 1E131, 1E132, 1E133, 1E134, 1E135, 1E136, 1E137, 1E138, 1E139, 1E140, 1E141, 1E142, 1E143, 1E144, 1E145, 1E146, 1E147, 1E148, 1E149, 1E150, 1E151, 1E152, 1E153, 1E154, 1E155, 1E156, 1E157, 1E158, 1E159, 1E160, 1E161, 1E162, 1E163, 1E164, 1E165, 1E166, 1E167, 1E168, 1E169, 1E170, 1E171, 1E172, 1E173, 1E174, 1E175, 1E176, 1E177, 1E178, 1E179, 1E180, 1E181, 1E182, 1E183, 1E184, 1E185, 1E186, 1E187, 1E188, 1E189, 1E190, 1E191, 1E192, 1E193, 1E194, 1E195, 1E196, 1E197, 1E198, 1E199,
    1E200, 1E201, 1E202, 1E203, 1E204, 1E205, 1E206, 1E207, 1E208, 1E209, 1E210, 1E211, 1E212, 1E213, 1E214, 1E215, 1E216, 1E217, 1E218, 1E219, 1E220, 1E221, 1E222, 1E223, 1E224, 1E225, 1E226, 1E227, 1E228, 1E229, 1E230, 1E231, 1E232, 1E233, 1E234, 1E235, 1E236, 1E237, 1E238, 1E239, 1E240, 1E241, 1E242, 1E243, 1E244, 1E245, 1E246, 1E247, 1E248, 1E249, 1E250, 1E251, 1E252, 1E253, 1E254, 1E255, 1E256, 1E257, 1E258, 1E259, 1E260, 1E261, 1E262, 1E263, 1E264, 1E265, 1E266, 1E267, 1E268, 1E269, 1E270, 1E271, 1E272, 1E273, 1E274, 1E275, 1E276, 1E277, 1E278, 1E279, 1E280, 1E281, 1E282, 1E283, 1E284, 1E285, 1E286, 1E287, 1E288, 1E289, 1E290, 1E291, 1E292, 1E293, 1E294, 1E295, 1E296, 1E297, 1E298, 1E299,
    1E300, 1E301, 1E302, 1E303, 1E304, 1E305, 1E306, 1E307, 1E308
];
const NEGATIVE_POWERS = [
    1E0, 1E-1, 1E-2, 1E-3, 1E-4, 1E-5, 1E-6, 1E-7, 1E-8, 1E-9, 1E-10, 1E-11, 1E-12, 1E-13, 1E-14, 1E-15, 1E-16, 1E-17, 1E-18, 1E-19, 1E-20, 1E-21, 1E-22, 1E-23, 1E-24, 1E-25, 1E-26, 1E-27, 1E-28, 1E-29, 1E-30, 1E-31, 1E-32, 1E-33, 1E-34, 1E-35, 1E-36, 1E-37, 1E-38, 1E-39, 1E-40, 1E-41, 1E-42, 1E-43, 1E-44, 1E-45, 1E-46, 1E-47, 1E-48, 1E-49, 1E-50, 1E-51, 1E-52, 1E-53, 1E-54, 1E-55, 1E-56, 1E-57, 1E-58, 1E-59, 1E-60, 1E-61, 1E-62, 1E-63, 1E-64, 1E-65, 1E-66, 1E-67, 1E-68, 1E-69, 1E-70, 1E-71, 1E-72, 1E-73, 1E-74, 1E-75, 1E-76, 1E-77, 1E-78, 1E-79, 1E-80, 1E-81, 1E-82, 1E-83, 1E-84, 1E-85, 1E-86, 1E-87, 1E-88, 1E-89, 1E-90, 1E-91, 1E-92, 1E-93, 1E-94, 1E-95, 1E-96, 1E-97, 1E-98, 1E-99,
    1E-100, 1E-101, 1E-102, 1E-103, 1E-104, 1E-105, 1E-106, 1E-107, 1E-108, 1E-109, 1E-110, 1E-111, 1E-112, 1E-113, 1E-114, 1E-115, 1E-116, 1E-117, 1E-118, 1E-119, 1E-120, 1E-121, 1E-122, 1E-123, 1E-124, 1E-125, 1E-126, 1E-127, 1E-128, 1E-129, 1E-130, 1E-131, 1E-132, 1E-133, 1E-134, 1E-135, 1E-136, 1E-137, 1E-138, 1E-139, 1E-140, 1E-141, 1E-142, 1E-143, 1E-144, 1E-145, 1E-146, 1E-147, 1E-148, 1E-149, 1E-150, 1E-151, 1E-152, 1E-153, 1E-154, 1E-155, 1E-156, 1E-157, 1E-158, 1E-159, 1E-160, 1E-161, 1E-162, 1E-163, 1E-164, 1E-165, 1E-166, 1E-167, 1E-168, 1E-169, 1E-170, 1E-171, 1E-172, 1E-173, 1E-174, 1E-175, 1E-176, 1E-177, 1E-178, 1E-179, 1E-180, 1E-181, 1E-182, 1E-183, 1E-184, 1E-185, 1E-186, 1E-187, 1E-188, 1E-189, 1E-190, 1E-191, 1E-192, 1E-193, 1E-194, 1E-195, 1E-196, 1E-197, 1E-198, 1E-199,
    1E-200, 1E-201, 1E-202, 1E-203, 1E-204, 1E-205, 1E-206, 1E-207, 1E-208, 1E-209, 1E-210, 1E-211, 1E-212, 1E-213, 1E-214, 1E-215, 1E-216, 1E-217, 1E-218, 1E-219, 1E-220, 1E-221, 1E-222, 1E-223, 1E-224, 1E-225, 1E-226, 1E-227, 1E-228, 1E-229, 1E-230, 1E-231, 1E-232, 1E-233, 1E-234, 1E-235, 1E-236, 1E-237, 1E-238, 1E-239, 1E-240, 1E-241, 1E-242, 1E-243, 1E-244, 1E-245, 1E-246, 1E-247, 1E-248, 1E-249, 1E-250, 1E-251, 1E-252, 1E-253, 1E-254, 1E-255, 1E-256, 1E-257, 1E-258, 1E-259, 1E-260, 1E-261, 1E-262, 1E-263, 1E-264, 1E-265, 1E-266, 1E-267, 1E-268, 1E-269, 1E-270, 1E-271, 1E-272, 1E-273, 1E-274, 1E-275, 1E-276, 1E-277, 1E-278, 1E-279, 1E-280, 1E-281, 1E-282, 1E-283, 1E-284, 1E-285, 1E-286, 1E-287, 1E-288, 1E-289, 1E-290, 1E-291, 1E-292, 1E-293, 1E-294, 1E-295, 1E-296, 1E-297, 1E-298, 1E-299,
    1E-300, 1E-301, 1E-302, 1E-303, 1E-304, 1E-305, 1E-306, 1E-307, 1E-308, 1E-309, 1E-310, 1E-311, 1E-312, 1E-313, 1E-314, 1E-315, 1E-316, 1E-317, 1E-318, 1E-319, 1E-320, 1E-321, 1E-322, 1E-323, 1E-324
];
/**
 * Returns powers of 10.
 * Unlike the Math.pow this function produces no decimal garbage.
 * @param exp Exponent.
 */
function pow10(exp) {
    // Positive & zero
    if (exp >= 0) {
        if (exp < POSITIVE_POWERS.length) {
            return POSITIVE_POWERS[exp];
        }
        else {
            return Infinity;
        }
    }
    // Negative
    exp = -exp;
    if (exp > 0 && exp < NEGATIVE_POWERS.length) { // if exp==int.MIN_VALUE then changing the sign will overflow and keep the number negative - we need to check for exp > 0 to filter out this corner case
        return NEGATIVE_POWERS[exp];
    }
    else {
        return 0;
    }
}
/**
 * Returns the 10 base logarithm of the number.
 * Unlike Math.log function this produces integer results with no decimal garbage.
 * @param val Positive value or zero.
 */
function log10(val) {
    // Fast Log10() algorithm
    if (val > 1 && val < 1E16) {
        if (val < 1E8) {
            if (val < 1E4) {
                if (val < 1E2) {
                    if (val < 1E1) {
                        return 0;
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    if (val < 1E3) {
                        return 2;
                    }
                    else {
                        return 3;
                    }
                }
            }
            else {
                if (val < 1E6) {
                    if (val < 1E5) {
                        return 4;
                    }
                    else {
                        return 5;
                    }
                }
                else {
                    if (val < 1E7) {
                        return 6;
                    }
                    else {
                        return 7;
                    }
                }
            }
        }
        else {
            if (val < 1E12) {
                if (val < 1E10) {
                    if (val < 1E9) {
                        return 8;
                    }
                    else {
                        return 9;
                    }
                }
                else {
                    if (val < 1E11) {
                        return 10;
                    }
                    else {
                        return 11;
                    }
                }
            }
            else {
                if (val < 1E14) {
                    if (val < 1E13) {
                        return 12;
                    }
                    else {
                        return 13;
                    }
                }
                else {
                    if (val < 1E15) {
                        return 14;
                    }
                    else {
                        return 15;
                    }
                }
            }
        }
    }
    if (val > 1E-16 && val < 1) {
        if (val < 1E-8) {
            if (val < 1E-12) {
                if (val < 1E-14) {
                    if (val < 1E-15) {
                        return -16;
                    }
                    else {
                        return -15;
                    }
                }
                else {
                    if (val < 1E-13) {
                        return -14;
                    }
                    else {
                        return -13;
                    }
                }
            }
            else {
                if (val < 1E-10) {
                    if (val < 1E-11) {
                        return -12;
                    }
                    else {
                        return -11;
                    }
                }
                else {
                    if (val < 1E-9) {
                        return -10;
                    }
                    else {
                        return -9;
                    }
                }
            }
        }
        else {
            if (val < 1E-4) {
                if (val < 1E-6) {
                    if (val < 1E-7) {
                        return -8;
                    }
                    else {
                        return -7;
                    }
                }
                else {
                    if (val < 1E-5) {
                        return -6;
                    }
                    else {
                        return -5;
                    }
                }
            }
            else {
                if (val < 1E-2) {
                    if (val < 1E-3) {
                        return -4;
                    }
                    else {
                        return -3;
                    }
                }
                else {
                    if (val < 1E-1) {
                        return -2;
                    }
                    else {
                        return -1;
                    }
                }
            }
        }
    }
    // JS Math provides only natural log function so we need to calc the 10 base logarithm:
    // logb(x) = logk(x)/logk(b);
    let log10 = Math.log(val) / LOG_E_10;
    return floorWithPrecision(log10);
}
/**
 * Returns a power of 10 representing precision of the number based on the number of meaningful decimal digits.
 * For example the precision of 56,263.3767 with the 6 meaningful decimal digit is 0.1.
 * @param x Value.
 * @param decimalDigits How many decimal digits are meaningfull.
 */
function getPrecision(x, decimalDigits) {
    if (decimalDigits === undefined) {
        decimalDigits = DEFAULT_PRECISION_IN_DECIMAL_DIGITS;
    }
    if (!x || !isFinite(x)) {
        return undefined;
    }
    let exp = log10(Math.abs(x));
    if (exp < MIN_EXP) {
        return 0;
    }
    let precisionExp = Math.max(exp - decimalDigits, -NEGATIVE_POWERS.length + 1);
    return pow10(precisionExp);
}
/**
 * Checks if a delta between 2 numbers is less than provided precision.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function equalWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x === y || Math.abs(x - y) < precision;
}
/**
 * Checks if a first value is less than another taking
 * into account the loose precision based equality.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function lessWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x < y && Math.abs(x - y) > precision;
}
/**
 * Checks if a first value is less or equal than another taking
 * into account the loose precision based equality.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function lessOrEqualWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x < y || Math.abs(x - y) < precision;
}
/**
 * Checks if a first value is greater than another taking
 * into account the loose precision based equality.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function greaterWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x > y && Math.abs(x - y) > precision;
}
/**
 * Checks if a first value is greater or equal to another taking
 * into account the loose precision based equality.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function greaterOrEqualWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x > y || Math.abs(x - y) < precision;
}
/**
 * Floors the number unless it's withing the precision distance from the higher int.
 * @param x One value.
 * @param precision Precision value.
 */
function floorWithPrecision(x, precision) {
    precision = precision != null ? precision : DEFAULT_PRECISION;
    let roundX = Math.round(x);
    if (Math.abs(x - roundX) < precision) {
        return roundX;
    }
    else {
        return Math.floor(x);
    }
}
/**
 * Ceils the number unless it's withing the precision distance from the lower int.
 * @param x One value.
 * @param precision Precision value.
 */
function ceilWithPrecision(x, precision) {
    precision = detectPrecision(precision, DEFAULT_PRECISION);
    let roundX = Math.round(x);
    if (Math.abs(x - roundX) < precision) {
        return roundX;
    }
    else {
        return Math.ceil(x);
    }
}
/**
 * Floors the number to the provided precision.
 * For example 234,578 floored to 1,000 precision is 234,000.
 * @param x One value.
 * @param precision Precision value.
 */
function floorToPrecision(x, precision) {
    precision = detectPrecision(precision, DEFAULT_PRECISION);
    if (precision === 0 || x === 0) {
        return x;
    }
    // Precision must be a Power of 10
    return Math.floor(x / precision) * precision;
}
/**
 * Ceils the number to the provided precision.
 * For example 234,578 floored to 1,000 precision is 235,000.
 * @param x One value.
 * @param precision Precision value.
 */
function ceilToPrecision(x, precision) {
    precision = detectPrecision(precision, DEFAULT_PRECISION);
    if (precision === 0 || x === 0) {
        return x;
    }
    // Precision must be a Power of 10
    return Math.ceil(x / precision) * precision;
}
/**
 * Rounds the number to the provided precision.
 * For example 234,578 floored to 1,000 precision is 235,000.
 * @param x One value.
 * @param precision Precision value.
 */
function roundToPrecision(x, precision) {
    precision = detectPrecision(precision, DEFAULT_PRECISION);
    if (precision === 0 || x === 0) {
        return x;
    }
    // Precision must be a Power of 10
    let result = Math.round(x / precision) * precision;
    let decimalDigits = Math.round(log10(Math.abs(x)) - log10(precision)) + 1;
    if (decimalDigits > 0 && decimalDigits < 16) {
        result = parseFloat(result.toPrecision(decimalDigits));
    }
    return result;
}
/**
 * Returns the value making sure that it's restricted to the provided range.
 * @param x One value.
 * @param min Range min boundary.
 * @param max Range max boundary.
 */
function ensureInRange(x, min, max) {
    if (x === undefined || x === null) {
        return x;
    }
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}
/**
 * Rounds the value - this method is actually faster than Math.round - used in the graphics utils.
 * @param x Value to round.
 */
function round(x) {
    return (0.5 + x) << 0;
}
/**
 * Projects the value from the source range into the target range.
 * @param value Value to project.
 * @param fromMin Minimum of the source range.
 * @param toMin Minimum of the target range.
 * @param toMax Maximum of the target range.
 */
function project(value, fromMin, fromSize, toMin, toSize) {
    if (fromSize === 0 || toSize === 0) {
        if (fromMin <= value && value <= fromMin + fromSize) {
            return toMin;
        }
        else {
            return NaN;
        }
    }
    let relativeX = (value - fromMin) / fromSize;
    let projectedX = toMin + relativeX * toSize;
    return projectedX;
}
/**
 * Removes decimal noise.
 * @param value Value to be processed.
 */
function removeDecimalNoise(value) {
    return roundToPrecision(value, getPrecision(value));
}
/**
 * Checks whether the number is integer.
 * @param value Value to be checked.
 */
function isInteger(value) {
    return value !== null && value % 1 === 0;
}
/**
 * Dividing by increment will give us count of increments
 * Round out the rough edges into even integer
 * Multiply back by increment to get rounded value
 * e.g. Rounder.toIncrement(0.647291, 0.05) => 0.65
 * @param value - value to round to nearest increment
 * @param increment - smallest increment to round toward
 */
function toIncrement(value, increment) {
    return Math.round(value / increment) * increment;
}
/**
 * Overrides the given precision with defaults if necessary. Exported only for tests
 *
 * precision defined returns precision
 * x defined with y undefined returns twelve digits of precision based on x
 * x defined but zero with y defined; returns twelve digits of precision based on y
 * x and y defined retursn twelve digits of precision based on the minimum of the two
 * if no applicable precision is found based on those (such as x and y being zero), the default precision is used
 */
function detectPrecision(precision, x, y) {
    if (precision !== undefined) {
        return precision;
    }
    let calculatedPrecision;
    if (!y) {
        calculatedPrecision = getPrecision(x);
    }
    else if (!x) {
        calculatedPrecision = getPrecision(y);
    }
    else {
        calculatedPrecision = getPrecision(Math.min(Math.abs(x), Math.abs(y)));
    }
    return calculatedPrecision || DEFAULT_PRECISION;
}
//# sourceMappingURL=double.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/arrayExtensions.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/arrayExtensions.js ***!
  \****************************************************************************************/
/*! exports provided: ArrayExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayExtensions", function() { return ArrayExtensions; });
var ArrayExtensions;
(function (ArrayExtensions) {
    /**
     * Returns items that exist in target and other.
     */
    function intersect(target, other) {
        let result = [];
        for (let i = target.length - 1; i >= 0; --i) {
            if (other.indexOf(target[i]) !== -1) {
                result.push(target[i]);
            }
        }
        return result;
    }
    ArrayExtensions.intersect = intersect;
    /**
     * Return elements exists in target but not exists in other.
     */
    function diff(target, other) {
        let result = [];
        for (let i = target.length - 1; i >= 0; --i) {
            let value = target[i];
            if (other.indexOf(value) === -1) {
                result.push(value);
            }
        }
        return result;
    }
    ArrayExtensions.diff = diff;
    /**
     * Return an array with only the distinct items in the source.
     */
    function distinct(source) {
        let result = [];
        for (let i = 0, len = source.length; i < len; i++) {
            let value = source[i];
            if (result.indexOf(value) === -1) {
                result.push(value);
            }
        }
        return result;
    }
    ArrayExtensions.distinct = distinct;
    /**
     * Pushes content of source onto target,
     * for parts of course that do not already exist in target.
     */
    function union(target, source) {
        for (let i = 0, len = source.length; i < len; ++i) {
            unionSingle(target, source[i]);
        }
    }
    ArrayExtensions.union = union;
    /**
     * Pushes value onto target, if value does not already exist in target.
     */
    function unionSingle(target, value) {
        if (target.indexOf(value) < 0) {
            target.push(value);
        }
    }
    ArrayExtensions.unionSingle = unionSingle;
    /**
     * Returns an array with a range of items from source,
     * including the startIndex & endIndex.
     */
    function range(source, startIndex, endIndex) {
        let result = [];
        for (let i = startIndex; i <= endIndex; ++i) {
            result.push(source[i]);
        }
        return result;
    }
    ArrayExtensions.range = range;
    /**
     * Returns an array that includes items from source, up to the specified count.
     */
    function take(source, count) {
        let result = [];
        for (let i = 0; i < count; ++i) {
            result.push(source[i]);
        }
        return result;
    }
    ArrayExtensions.take = take;
    function copy(source) {
        return take(source, source.length);
    }
    ArrayExtensions.copy = copy;
    /**
      * Returns a value indicating whether the arrays have the same values in the same sequence.
      */
    function sequenceEqual(left, right, comparison) {
        // Normalize falsy to null
        if (!left) {
            left = null;
        }
        if (!right) {
            right = null;
        }
        // T can be same as U, and it is possible for left and right to be the same array object...
        if (left === right) {
            return true;
        }
        if (!!left !== !!right) {
            return false;
        }
        let len = left.length;
        if (len !== right.length) {
            return false;
        }
        let i = 0;
        while (i < len && comparison(left[i], right[i])) {
            ++i;
        }
        return i === len;
    }
    ArrayExtensions.sequenceEqual = sequenceEqual;
    /**
     * Returns null if the specified array is empty.
     * Otherwise returns the specified array.
     */
    function emptyToNull(array) {
        if (array && array.length === 0) {
            return null;
        }
        return array;
    }
    ArrayExtensions.emptyToNull = emptyToNull;
    function indexOf(array, predicate) {
        for (let i = 0, len = array.length; i < len; ++i) {
            if (predicate(array[i])) {
                return i;
            }
        }
        return -1;
    }
    ArrayExtensions.indexOf = indexOf;
    /**
     * Returns a copy of the array rotated by the specified offset.
     */
    function rotate(array, offset) {
        if (offset === 0)
            return array.slice();
        let rotated = array.slice(offset);
        Array.prototype.push.apply(rotated, array.slice(0, offset));
        return rotated;
    }
    ArrayExtensions.rotate = rotate;
    function createWithId() {
        return extendWithId([]);
    }
    ArrayExtensions.createWithId = createWithId;
    function extendWithId(array) {
        let extended = array;
        extended.withId = withId;
        return extended;
    }
    ArrayExtensions.extendWithId = extendWithId;
    /**
     * Finds and returns the first item with a matching ID.
     */
    function findWithId(array, id) {
        for (let i = 0, len = array.length; i < len; i++) {
            let item = array[i];
            if (item.id === id)
                return item;
        }
    }
    ArrayExtensions.findWithId = findWithId;
    function withId(id) {
        return ArrayExtensions.findWithId(this, id);
    }
    function createWithName() {
        return extendWithName([]);
    }
    ArrayExtensions.createWithName = createWithName;
    function extendWithName(array) {
        let extended = array;
        extended.withName = withName;
        return extended;
    }
    ArrayExtensions.extendWithName = extendWithName;
    function findItemWithName(array, name) {
        let index = indexWithName(array, name);
        if (index >= 0)
            return array[index];
    }
    ArrayExtensions.findItemWithName = findItemWithName;
    function indexWithName(array, name) {
        for (let i = 0, len = array.length; i < len; i++) {
            let item = array[i];
            if (item.name === name)
                return i;
        }
        return -1;
    }
    ArrayExtensions.indexWithName = indexWithName;
    /**
     * Inserts a number in sorted order into a list of numbers already in sorted order.
     * @returns True if the item was added, false if it already existed.
     */
    function insertSorted(list, value) {
        let len = list.length;
        // NOTE: iterate backwards because incoming values tend to be sorted already.
        for (let i = len - 1; i >= 0; i--) {
            let diff = list[i] - value;
            if (diff === 0)
                return false;
            if (diff > 0)
                continue;
            // diff < 0
            list.splice(i + 1, 0, value);
            return true;
        }
        list.unshift(value);
        return true;
    }
    ArrayExtensions.insertSorted = insertSorted;
    /**
     * Removes the first occurrence of a value from a list if it exists.
     * @returns True if the value was removed, false if it did not exist in the list.
     */
    function removeFirst(list, value) {
        let index = list.indexOf(value);
        if (index < 0)
            return false;
        list.splice(index, 1);
        return true;
    }
    ArrayExtensions.removeFirst = removeFirst;
    /**
     * Finds and returns the first item with a matching name.
     */
    function withName(name) {
        let array = this;
        return findItemWithName(array, name);
    }
    /**
     * Deletes all items from the array.
     */
    function clear(array) {
        if (!array)
            return;
        while (array.length > 0)
            array.pop();
    }
    ArrayExtensions.clear = clear;
    function isUndefinedOrEmpty(array) {
        if (!array || array.length === 0) {
            return true;
        }
        return false;
    }
    ArrayExtensions.isUndefinedOrEmpty = isUndefinedOrEmpty;
    function swap(array, firstIndex, secondIndex) {
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }
    ArrayExtensions.swap = swap;
    function isInArray(array, lookupItem, compareCallback) {
        return array.some(item => compareCallback(item, lookupItem));
    }
    ArrayExtensions.isInArray = isInArray;
    /** Checks if the given object is an Array, and looking all the way up the prototype chain. */
    function isArrayOrInheritedArray(obj) {
        let nextPrototype = obj;
        while (nextPrototype != null) {
            if (Array.isArray(nextPrototype))
                return true;
            nextPrototype = Object.getPrototypeOf(nextPrototype);
        }
        return false;
    }
    ArrayExtensions.isArrayOrInheritedArray = isArrayOrInheritedArray;
    /**
     * Returns true if the specified values array is sorted in an order as determined by the specified compareFunction.
     */
    function isSorted(values, compareFunction) {
        let ilen = values.length;
        if (ilen >= 2) {
            for (let i = 1; i < ilen; i++) {
                if (compareFunction(values[i - 1], values[i]) > 0) {
                    return false;
                }
            }
        }
        return true;
    }
    ArrayExtensions.isSorted = isSorted;
    /**
     * Returns true if the specified number values array is sorted in ascending order
     * (or descending order if the specified descendingOrder is truthy).
     */
    function isSortedNumeric(values, descendingOrder) {
        let compareFunction = descendingOrder ?
            (a, b) => b - a :
            (a, b) => a - b;
        return isSorted(values, compareFunction);
    }
    ArrayExtensions.isSortedNumeric = isSortedNumeric;
    /**
     * Ensures that the given T || T[] is in array form, either returning the array or
     * converting single items into an array of length one.
     */
    function ensureArray(value) {
        if (Array.isArray(value)) {
            return value;
        }
        return [value];
    }
    ArrayExtensions.ensureArray = ensureArray;
})(ArrayExtensions || (ArrayExtensions = {}));
//# sourceMappingURL=arrayExtensions.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/enumExtensions.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/enumExtensions.js ***!
  \***************************************************************************************/
/*! exports provided: EnumExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumExtensions", function() { return EnumExtensions; });
/* harmony import */ var _double__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../double */ "./node_modules/powerbi-visuals-utils-typeutils/lib/double.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.

/**
 * Extensions for Enumerations.
 */
var EnumExtensions;
(function (EnumExtensions) {
    /**
     * Gets a value indicating whether the value has the bit flags set.
     */
    function hasFlag(value, flag) {
        return (value & flag) === flag;
    }
    EnumExtensions.hasFlag = hasFlag;
    /**
     * Sets a value of a flag without modifying any other flags.
     */
    function setFlag(value, flag) {
        return value |= flag;
    }
    EnumExtensions.setFlag = setFlag;
    /**
     * Resets a value of a flag without modifying any other flags.
     */
    function resetFlag(value, flag) {
        return value &= ~flag;
    }
    EnumExtensions.resetFlag = resetFlag;
    /**
     * According to the TypeScript Handbook, this is safe to do.
     */
    function toString(enumType, value) {
        return enumType[value];
    }
    EnumExtensions.toString = toString;
    /**
     * Returns the number of 1's in the specified value that is a set of binary bit flags.
     */
    function getBitCount(value) {
        if (!_double__WEBPACK_IMPORTED_MODULE_0__["isInteger"](value))
            return 0;
        let bitCount = 0;
        let shiftingValue = value;
        while (shiftingValue !== 0) {
            if ((shiftingValue & 1) === 1) {
                bitCount++;
            }
            shiftingValue = shiftingValue >>> 1;
        }
        return bitCount;
    }
    EnumExtensions.getBitCount = getBitCount;
})(EnumExtensions || (EnumExtensions = {}));
//# sourceMappingURL=enumExtensions.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/logicExtensions.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/logicExtensions.js ***!
  \****************************************************************************************/
/*! exports provided: LogicExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicExtensions", function() { return LogicExtensions; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
var LogicExtensions;
(function (LogicExtensions) {
    function XOR(a, b) {
        return (a || b) && !(a && b);
    }
    LogicExtensions.XOR = XOR;
})(LogicExtensions || (LogicExtensions = {}));
//# sourceMappingURL=logicExtensions.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/regExpExtensions.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/regExpExtensions.js ***!
  \*****************************************************************************************/
/*! exports provided: RegExpExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpExtensions", function() { return RegExpExtensions; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
var RegExpExtensions;
(function (RegExpExtensions) {
    /**
     * Runs exec on regex starting from 0 index
     * This is the expected behavior but RegExp actually remember
     * the last index they stopped at (found match at) and will
     * return unexpected results when run in sequence.
     * @param regex - regular expression object
     * @param value - string to search wiht regex
     * @param start - index within value to start regex
     */
    function run(regex, value, start) {
        regex.lastIndex = start || 0;
        return regex.exec(value);
    }
    RegExpExtensions.run = run;
})(RegExpExtensions || (RegExpExtensions = {}));
//# sourceMappingURL=regExpExtensions.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/stringExtensions.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/stringExtensions.js ***!
  \*****************************************************************************************/
/*! exports provided: StringExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringExtensions", function() { return StringExtensions; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/**
 * Extensions to String class.
 */
var StringExtensions;
(function (StringExtensions) {
    /**
     * Checks if a string ends with a sub-string.
     */
    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    StringExtensions.endsWith = endsWith;
})(StringExtensions || (StringExtensions = {}));
//# sourceMappingURL=stringExtensions.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/index.js ***!
  \*******************************************************************/
/*! exports provided: arrayExtensions, enumExtensions, logicExtensions, regExpExtensions, stringExtensions, numericSequence, numericSequenceRange, double, jsonComparer, pixelConverter, prototype, textSizeDefaults, valueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extensions_arrayExtensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions/arrayExtensions */ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/arrayExtensions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "arrayExtensions", function() { return _extensions_arrayExtensions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensions/enumExtensions */ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/enumExtensions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "enumExtensions", function() { return _extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _extensions_logicExtensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/logicExtensions */ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/logicExtensions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "logicExtensions", function() { return _extensions_logicExtensions__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _extensions_regExpExtensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/regExpExtensions */ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/regExpExtensions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "regExpExtensions", function() { return _extensions_regExpExtensions__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _extensions_stringExtensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/stringExtensions */ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/stringExtensions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "stringExtensions", function() { return _extensions_stringExtensions__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _numericSequence_numericSequence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./numericSequence/numericSequence */ "./node_modules/powerbi-visuals-utils-typeutils/lib/numericSequence/numericSequence.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "numericSequence", function() { return _numericSequence_numericSequence__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _numericSequence_numericSequenceRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numericSequence/numericSequenceRange */ "./node_modules/powerbi-visuals-utils-typeutils/lib/numericSequence/numericSequenceRange.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "numericSequenceRange", function() { return _numericSequence_numericSequenceRange__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _double__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./double */ "./node_modules/powerbi-visuals-utils-typeutils/lib/double.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "double", function() { return _double__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _jsonComparer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jsonComparer */ "./node_modules/powerbi-visuals-utils-typeutils/lib/jsonComparer.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "jsonComparer", function() { return _jsonComparer__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _pixelConverter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pixelConverter */ "./node_modules/powerbi-visuals-utils-typeutils/lib/pixelConverter.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "pixelConverter", function() { return _pixelConverter__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prototype */ "./node_modules/powerbi-visuals-utils-typeutils/lib/prototype.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "prototype", function() { return _prototype__WEBPACK_IMPORTED_MODULE_10__; });
/* harmony import */ var _textSizeDefaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./textSizeDefaults */ "./node_modules/powerbi-visuals-utils-typeutils/lib/textSizeDefaults.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "textSizeDefaults", function() { return _textSizeDefaults__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _valueType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./valueType */ "./node_modules/powerbi-visuals-utils-typeutils/lib/valueType.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "valueType", function() { return _valueType__WEBPACK_IMPORTED_MODULE_12__; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/jsonComparer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/jsonComparer.js ***!
  \**************************************************************************/
/*! exports provided: equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
/**
 * Performs JSON-style comparison of two objects.
 */
function equals(x, y) {
    if (x === y)
        return true;
    return JSON.stringify(x) === JSON.stringify(y);
}
//# sourceMappingURL=jsonComparer.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/numericSequence/numericSequence.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/numericSequence/numericSequence.js ***!
  \*********************************************************************************************/
/*! exports provided: NumericSequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericSequence", function() { return NumericSequence; });
/* harmony import */ var _double__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../double */ "./node_modules/powerbi-visuals-utils-typeutils/lib/double.js");
/* harmony import */ var _numericSequenceRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numericSequenceRange */ "./node_modules/powerbi-visuals-utils-typeutils/lib/numericSequence/numericSequenceRange.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */


class NumericSequence {
    static calculate(range, expectedCount, maxAllowedMargin, minPower, useZeroRefPoint, steps) {
        let result = new NumericSequence();
        if (expectedCount === undefined)
            expectedCount = 10;
        else
            expectedCount = _double__WEBPACK_IMPORTED_MODULE_0__["ensureInRange"](expectedCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
        if (minPower === undefined)
            minPower = _double__WEBPACK_IMPORTED_MODULE_0__["MIN_EXP"];
        if (useZeroRefPoint === undefined)
            useZeroRefPoint = false;
        if (maxAllowedMargin === undefined)
            maxAllowedMargin = 1;
        if (steps === undefined)
            steps = [1, 2, 5];
        // Handle single stop case
        if (range.forcedSingleStop) {
            result.interval = range.getSize();
            result.intervalOffset = result.interval - (range.forcedSingleStop - range.min);
            result.min = range.min;
            result.max = range.max;
            result.sequence = [range.forcedSingleStop];
            return result;
        }
        let interval = 0;
        let min = 0;
        let max = 9;
        let canExtendMin = maxAllowedMargin > 0 && !range.hasFixedMin;
        let canExtendMax = maxAllowedMargin > 0 && !range.hasFixedMax;
        let size = range.getSize();
        let exp = _double__WEBPACK_IMPORTED_MODULE_0__["log10"](size);
        // Account for Exp of steps
        let stepExp = _double__WEBPACK_IMPORTED_MODULE_0__["log10"](steps[0]);
        exp = exp - stepExp;
        // Account for MaxCount
        let expectedCountExp = _double__WEBPACK_IMPORTED_MODULE_0__["log10"](expectedCount);
        exp = exp - expectedCountExp;
        // Account for MinPower
        exp = Math.max(exp, minPower - stepExp + 1);
        let count = undefined;
        // Create array of "good looking" numbers
        if (interval !== 0) {
            // If explicit interval is defined - use it instead of the steps array.
            let power = _double__WEBPACK_IMPORTED_MODULE_0__["pow10"](exp);
            let roundMin = _double__WEBPACK_IMPORTED_MODULE_0__["floorToPrecision"](range.min, power);
            let roundMax = _double__WEBPACK_IMPORTED_MODULE_0__["ceilToPrecision"](range.max, power);
            let roundRange = _numericSequenceRange__WEBPACK_IMPORTED_MODULE_1__["NumericSequenceRange"].calculateFixedRange(roundMin, roundMax);
            roundRange.shrinkByStep(range, interval);
            min = roundRange.min;
            max = roundRange.max;
            count = Math.floor(roundRange.getSize() / interval);
        }
        else {
            // No interval defined -> find optimal interval
            let dexp;
            for (dexp = 0; dexp < 3; dexp++) {
                let e = exp + dexp;
                let power = _double__WEBPACK_IMPORTED_MODULE_0__["pow10"](e);
                let roundMin = _double__WEBPACK_IMPORTED_MODULE_0__["floorToPrecision"](range.min, power);
                let roundMax = _double__WEBPACK_IMPORTED_MODULE_0__["ceilToPrecision"](range.max, power);
                // Go throught the steps array looking for the smallest step that produces the right interval count.
                let stepsCount = steps.length;
                let stepPower = _double__WEBPACK_IMPORTED_MODULE_0__["pow10"](e - 1);
                for (let i = 0; i < stepsCount; i++) {
                    let step = steps[i] * stepPower;
                    let roundRange = _numericSequenceRange__WEBPACK_IMPORTED_MODULE_1__["NumericSequenceRange"].calculateFixedRange(roundMin, roundMax, useZeroRefPoint);
                    roundRange.shrinkByStep(range, step);
                    // If the range is based on Data we might need to extend it to provide nice data margins.
                    if (canExtendMin && range.min === roundRange.min && maxAllowedMargin >= 1)
                        roundRange.min -= step;
                    if (canExtendMax && range.max === roundRange.max && maxAllowedMargin >= 1)
                        roundRange.max += step;
                    // Count the intervals
                    count = _double__WEBPACK_IMPORTED_MODULE_0__["ceilWithPrecision"](roundRange.getSize() / step, _double__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PRECISION"]);
                    if (count <= expectedCount || (dexp === 2 && i === stepsCount - 1) || (expectedCount === 1 && count === 2 && (step > range.getSize() || (range.min < 0 && range.max > 0 && step * 2 >= range.getSize())))) {
                        interval = step;
                        min = roundRange.min;
                        max = roundRange.max;
                        break;
                    }
                }
                // Increase the scale power until the interval is found
                if (interval !== 0)
                    break;
            }
        }
        // Avoid extreme count cases (>1000 ticks)
        if (count > expectedCount * 32 || count > NumericSequence.MAX_COUNT) {
            count = Math.min(expectedCount * 32, NumericSequence.MAX_COUNT);
            interval = (max - min) / count;
        }
        result.min = min;
        result.max = max;
        result.interval = interval;
        result.intervalOffset = min - range.min;
        result.maxAllowedMargin = maxAllowedMargin;
        result.canExtendMin = canExtendMin;
        result.canExtendMax = canExtendMax;
        // Fill in the Sequence
        let precision = _double__WEBPACK_IMPORTED_MODULE_0__["getPrecision"](interval, 0);
        result.precision = precision;
        let sequence = [];
        let x = _double__WEBPACK_IMPORTED_MODULE_0__["roundToPrecision"](min, precision);
        sequence.push(x);
        for (let i = 0; i < count; i++) {
            x = _double__WEBPACK_IMPORTED_MODULE_0__["roundToPrecision"](x + interval, precision);
            sequence.push(x);
        }
        result.sequence = sequence;
        result.trimMinMax(range.min, range.max);
        return result;
    }
    /**
     * Calculates the sequence of int numbers which are mapped to the multiples of the units grid.
     * @min - The minimum of the range.
     * @max - The maximum of the range.
     * @maxCount - The max count of intervals.
     * @steps - array of intervals.
     */
    static calculateUnits(min, max, maxCount, steps) {
        // Initialization actions
        maxCount = _double__WEBPACK_IMPORTED_MODULE_0__["ensureInRange"](maxCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
        if (min === max) {
            max = min + 1;
        }
        let stepCount = 0;
        let step = 0;
        // Calculate step
        for (let i = 0; i < steps.length; i++) {
            step = steps[i];
            let maxStepCount = _double__WEBPACK_IMPORTED_MODULE_0__["ceilWithPrecision"](max / step);
            let minStepCount = _double__WEBPACK_IMPORTED_MODULE_0__["floorWithPrecision"](min / step);
            stepCount = maxStepCount - minStepCount;
            if (stepCount <= maxCount) {
                break;
            }
        }
        // Calculate the offset
        let offset = -min;
        offset = offset % step;
        // Create sequence
        let result = new NumericSequence();
        result.sequence = [];
        for (let x = min + offset;; x += step) {
            result.sequence.push(x);
            if (x >= max)
                break;
        }
        result.interval = step;
        result.intervalOffset = offset;
        result.min = result.sequence[0];
        result.max = result.sequence[result.sequence.length - 1];
        return result;
    }
    trimMinMax(min, max) {
        let minMargin = (min - this.min) / this.interval;
        let maxMargin = (this.max - max) / this.interval;
        let marginPrecision = 0.001;
        if (!this.canExtendMin || (minMargin > this.maxAllowedMargin && minMargin > marginPrecision)) {
            this.min = min;
        }
        if (!this.canExtendMax || (maxMargin > this.maxAllowedMargin && maxMargin > marginPrecision)) {
            this.max = max;
        }
    }
}
NumericSequence.MIN_COUNT = 1;
NumericSequence.MAX_COUNT = 1000;
//# sourceMappingURL=numericSequence.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/numericSequence/numericSequenceRange.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/numericSequence/numericSequenceRange.js ***!
  \**************************************************************************************************/
/*! exports provided: NumericSequenceRange, ValueUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericSequenceRange", function() { return NumericSequenceRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueUtil", function() { return ValueUtil; });
/* harmony import */ var _double__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../double */ "./node_modules/powerbi-visuals-utils-typeutils/lib/double.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

class NumericSequenceRange {
    _ensureIncludeZero() {
        if (this.includeZero) {
            // fixed min and max has higher priority than includeZero
            if (this.min > 0 && !this.hasFixedMin) {
                this.min = 0;
            }
            if (this.max < 0 && !this.hasFixedMax) {
                this.max = 0;
            }
        }
    }
    _ensureNotEmpty() {
        if (this.min === this.max) {
            if (!this.min) {
                this.min = 0;
                this.max = NumericSequenceRange.DEFAULT_MAX;
                this.hasFixedMin = true;
                this.hasFixedMax = true;
            }
            else {
                // We are dealing with a single data value (includeZero is not set)
                // In order to fix the range we need to extend it in both directions by half of the interval.
                // Interval is calculated based on the number:
                // 1. Integers below 10,000 are extended by 0.5: so the [2006-2006] empty range is extended to [2005.5-2006.5] range and the ForsedSingleStop=2006
                // 2. Other numbers are extended by half of their power: [700,001-700,001] => [650,001-750,001] and the ForsedSingleStop=null as we want the intervals to be calculated to cover the range.
                let value = this.min;
                let exp = _double__WEBPACK_IMPORTED_MODULE_0__["log10"](Math.abs(value));
                let step;
                if (exp >= 0 && exp < 4) {
                    step = 0.5;
                    this.forcedSingleStop = value;
                }
                else {
                    step = _double__WEBPACK_IMPORTED_MODULE_0__["pow10"](exp) / 2;
                    this.forcedSingleStop = null;
                }
                this.min = value - step;
                this.max = value + step;
            }
        }
    }
    _ensureDirection() {
        if (this.min > this.max) {
            let temp = this.min;
            this.min = this.max;
            this.max = temp;
        }
    }
    getSize() {
        return this.max - this.min;
    }
    shrinkByStep(range, step) {
        let oldCount = this.min / step;
        let newCount = range.min / step;
        let deltaCount = Math.floor(newCount - oldCount);
        this.min += deltaCount * step;
        oldCount = this.max / step;
        newCount = range.max / step;
        deltaCount = Math.ceil(newCount - oldCount);
        this.max += deltaCount * step;
    }
    static calculate(dataMin, dataMax, fixedMin, fixedMax, includeZero) {
        let result = new NumericSequenceRange();
        result.includeZero = includeZero ? true : false;
        result.hasDataRange = ValueUtil.hasValue(dataMin) && ValueUtil.hasValue(dataMax);
        result.hasFixedMin = ValueUtil.hasValue(fixedMin);
        result.hasFixedMax = ValueUtil.hasValue(fixedMax);
        dataMin = _double__WEBPACK_IMPORTED_MODULE_0__["ensureInRange"](dataMin, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
        dataMax = _double__WEBPACK_IMPORTED_MODULE_0__["ensureInRange"](dataMax, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
        // Calculate the range using the min, max, dataRange
        if (result.hasFixedMin && result.hasFixedMax) {
            result.min = fixedMin;
            result.max = fixedMax;
        }
        else if (result.hasFixedMin) {
            result.min = fixedMin;
            result.max = dataMax > fixedMin ? dataMax : fixedMin;
        }
        else if (result.hasFixedMax) {
            result.min = dataMin < fixedMax ? dataMin : fixedMax;
            result.max = fixedMax;
        }
        else if (result.hasDataRange) {
            result.min = dataMin;
            result.max = dataMax;
        }
        else {
            result.min = 0;
            result.max = 0;
        }
        result._ensureIncludeZero();
        result._ensureNotEmpty();
        result._ensureDirection();
        if (result.min === 0) {
            result.hasFixedMin = true; // If the range starts from zero we should prevent extending the intervals into the negative range
        }
        else if (result.max === 0) {
            result.hasFixedMax = true; // If the range ends at zero we should prevent extending the intervals into the positive range
        }
        return result;
    }
    static calculateDataRange(dataMin, dataMax, includeZero) {
        if (!ValueUtil.hasValue(dataMin) || !ValueUtil.hasValue(dataMax)) {
            return NumericSequenceRange.calculateFixedRange(0, NumericSequenceRange.DEFAULT_MAX);
        }
        else {
            return NumericSequenceRange.calculate(dataMin, dataMax, null, null, includeZero);
        }
    }
    static calculateFixedRange(fixedMin, fixedMax, includeZero) {
        let result = new NumericSequenceRange();
        result.hasDataRange = false;
        result.includeZero = includeZero;
        result.min = fixedMin;
        result.max = fixedMax;
        result._ensureIncludeZero();
        result._ensureNotEmpty();
        result._ensureDirection();
        result.hasFixedMin = true;
        result.hasFixedMax = true;
        return result;
    }
}
NumericSequenceRange.DEFAULT_MAX = 10;
NumericSequenceRange.MIN_SUPPORTED_DOUBLE = -1E307;
NumericSequenceRange.MAX_SUPPORTED_DOUBLE = 1E307;
/** Note: Exported for testability */
var ValueUtil;
(function (ValueUtil) {
    function hasValue(value) {
        return value !== undefined && value !== null;
    }
    ValueUtil.hasValue = hasValue;
})(ValueUtil || (ValueUtil = {}));
//# sourceMappingURL=numericSequenceRange.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/pixelConverter.js":
/*!****************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/pixelConverter.js ***!
  \****************************************************************************/
/*! exports provided: toString, fromPoint, fromPointToPixel, toPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPoint", function() { return fromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPointToPixel", function() { return fromPointToPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPoint", function() { return toPoint; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
const PxPtRatio = 4 / 3;
const PixelString = "px";
/**
 * Appends 'px' to the end of number value for use as pixel string in styles
 */
function toString(px) {
    return px + PixelString;
}
/**
 * Converts point value (pt) to pixels
 * Returns a string for font-size property
 * e.g. fromPoint(8) => '24px'
 */
function fromPoint(pt) {
    return toString(fromPointToPixel(pt));
}
/**
 * Converts point value (pt) to pixels
 * Returns a number for font-size property
 * e.g. fromPoint(8) => 24px
 */
function fromPointToPixel(pt) {
    return (PxPtRatio * pt);
}
/**
 * Converts pixel value (px) to pt
 * e.g. toPoint(24) => 8
 */
function toPoint(px) {
    return px / PxPtRatio;
}
//# sourceMappingURL=pixelConverter.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/prototype.js":
/*!***********************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/prototype.js ***!
  \***********************************************************************/
/*! exports provided: inherit, inheritSingle, overrideArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inheritSingle", function() { return inheritSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideArray", function() { return overrideArray; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/**
 * Returns a new object with the provided obj as its prototype.
 */
function inherit(obj, extension) {
    function wrapCtor() { }
    wrapCtor.prototype = obj;
    let inherited = new wrapCtor();
    if (extension)
        extension(inherited);
    return inherited;
}
/**
 * Returns a new object with the provided obj as its prototype
 * if, and only if, the prototype has not been previously set
 */
function inheritSingle(obj) {
    let proto = Object.getPrototypeOf(obj);
    if (proto === Object.prototype || proto === Array.prototype)
        obj = inherit(obj);
    return obj;
}
/**
 * Uses the provided callback function to selectively replace contents in the provided array.
 * @return A new array with those values overriden
 * or undefined if no overrides are necessary.
 */
function overrideArray(prototype, override) {
    if (!prototype)
        return;
    let overwritten;
    for (let i = 0, len = prototype.length; i < len; i++) {
        let value = override(prototype[i]);
        if (value) {
            if (!overwritten)
                overwritten = inherit(prototype);
            overwritten[i] = value;
        }
    }
    return overwritten;
}
//# sourceMappingURL=prototype.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/textSizeDefaults.js":
/*!******************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/textSizeDefaults.js ***!
  \******************************************************************************/
/*! exports provided: TextSizeMin, TextSizeMax, getScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSizeMin", function() { return TextSizeMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSizeMax", function() { return TextSizeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScale", function() { return getScale; });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
/**
 * Values are in terms of 'pt'
 * Convert to pixels using PixelConverter.fromPoint
 */
/**
 * Stored in terms of 'pt'
 * Convert to pixels using PixelConverter.fromPoint
 */
const TextSizeMin = 8;
/**
 * Stored in terms of 'pt'
 * Convert to pixels using PixelConverter.fromPoint
 */
const TextSizeMax = 40;
const TextSizeRange = TextSizeMax - TextSizeMin;
/**
 * Returns the percentage of this value relative to the TextSizeMax
 * @param textSize - should be given in terms of 'pt'
 */
function getScale(textSize) {
    return (textSize - TextSizeMin) / TextSizeRange;
}
//# sourceMappingURL=textSizeDefaults.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-typeutils/lib/valueType.js":
/*!***********************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-typeutils/lib/valueType.js ***!
  \***********************************************************************/
/*! exports provided: ValueType, ScriptType, TemporalType, GeographyType, MiscellaneousType, FormattingType, PrimitiveType, ExtendedType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueType", function() { return ValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptType", function() { return ScriptType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporalType", function() { return TemporalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeographyType", function() { return GeographyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousType", function() { return MiscellaneousType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingType", function() { return FormattingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimitiveType", function() { return PrimitiveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedType", function() { return ExtendedType; });
/* harmony import */ var _extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions/enumExtensions */ "./node_modules/powerbi-visuals-utils-typeutils/lib/extensions/enumExtensions.js");
/* harmony import */ var _jsonComparer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonComparer */ "./node_modules/powerbi-visuals-utils-typeutils/lib/jsonComparer.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// powerbi.extensibility.utils.type


/** Describes a data value type, including a primitive type and extended type if any (derived from data category). */
class ValueType {
    /** Do not call the ValueType constructor directly. Use the ValueType.fromXXX methods. */
    constructor(underlyingType, category, enumType, variantTypes) {
        this.underlyingType = underlyingType;
        this.category = category;
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__["EnumExtensions"].hasFlag(underlyingType, ExtendedType.Temporal)) {
            this.temporalType = new TemporalType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__["EnumExtensions"].hasFlag(underlyingType, ExtendedType.Geography)) {
            this.geographyType = new GeographyType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__["EnumExtensions"].hasFlag(underlyingType, ExtendedType.Miscellaneous)) {
            this.miscType = new MiscellaneousType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__["EnumExtensions"].hasFlag(underlyingType, ExtendedType.Formatting)) {
            this.formattingType = new FormattingType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__["EnumExtensions"].hasFlag(underlyingType, ExtendedType.Enumeration)) {
            this.enumType = enumType;
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__["EnumExtensions"].hasFlag(underlyingType, ExtendedType.Scripting)) {
            this.scriptingType = new ScriptType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__["EnumExtensions"].hasFlag(underlyingType, ExtendedType.Variant)) {
            this.variationTypes = variantTypes;
        }
    }
    /** Creates or retrieves a ValueType object based on the specified ValueTypeDescriptor. */
    static fromDescriptor(descriptor) {
        descriptor = descriptor || {};
        // Simplified primitive types
        if (descriptor.text)
            return ValueType.fromExtendedType(ExtendedType.Text);
        if (descriptor.integer)
            return ValueType.fromExtendedType(ExtendedType.Integer);
        if (descriptor.numeric)
            return ValueType.fromExtendedType(ExtendedType.Double);
        if (descriptor.bool)
            return ValueType.fromExtendedType(ExtendedType.Boolean);
        if (descriptor.dateTime)
            return ValueType.fromExtendedType(ExtendedType.DateTime);
        if (descriptor.duration)
            return ValueType.fromExtendedType(ExtendedType.Duration);
        if (descriptor.binary)
            return ValueType.fromExtendedType(ExtendedType.Binary);
        if (descriptor.none)
            return ValueType.fromExtendedType(ExtendedType.None);
        // Extended types
        if (descriptor.scripting) {
            if (descriptor.scripting.source)
                return ValueType.fromExtendedType(ExtendedType.ScriptSource);
        }
        if (descriptor.enumeration)
            return ValueType.fromEnum(descriptor.enumeration);
        if (descriptor.temporal) {
            if (descriptor.temporal.year)
                return ValueType.fromExtendedType(ExtendedType.Years_Integer);
            if (descriptor.temporal.quarter)
                return ValueType.fromExtendedType(ExtendedType.Quarters_Integer);
            if (descriptor.temporal.month)
                return ValueType.fromExtendedType(ExtendedType.Months_Integer);
            if (descriptor.temporal.day)
                return ValueType.fromExtendedType(ExtendedType.DayOfMonth_Integer);
            if (descriptor.temporal.paddedDateTableDate)
                return ValueType.fromExtendedType(ExtendedType.PaddedDateTableDates);
        }
        if (descriptor.geography) {
            if (descriptor.geography.address)
                return ValueType.fromExtendedType(ExtendedType.Address);
            if (descriptor.geography.city)
                return ValueType.fromExtendedType(ExtendedType.City);
            if (descriptor.geography.continent)
                return ValueType.fromExtendedType(ExtendedType.Continent);
            if (descriptor.geography.country)
                return ValueType.fromExtendedType(ExtendedType.Country);
            if (descriptor.geography.county)
                return ValueType.fromExtendedType(ExtendedType.County);
            if (descriptor.geography.region)
                return ValueType.fromExtendedType(ExtendedType.Region);
            if (descriptor.geography.postalCode)
                return ValueType.fromExtendedType(ExtendedType.PostalCode_Text);
            if (descriptor.geography.stateOrProvince)
                return ValueType.fromExtendedType(ExtendedType.StateOrProvince);
            if (descriptor.geography.place)
                return ValueType.fromExtendedType(ExtendedType.Place);
            if (descriptor.geography.latitude)
                return ValueType.fromExtendedType(ExtendedType.Latitude_Double);
            if (descriptor.geography.longitude)
                return ValueType.fromExtendedType(ExtendedType.Longitude_Double);
        }
        if (descriptor.misc) {
            if (descriptor.misc.image)
                return ValueType.fromExtendedType(ExtendedType.Image);
            if (descriptor.misc.imageUrl)
                return ValueType.fromExtendedType(ExtendedType.ImageUrl);
            if (descriptor.misc.webUrl)
                return ValueType.fromExtendedType(ExtendedType.WebUrl);
            if (descriptor.misc.barcode)
                return ValueType.fromExtendedType(ExtendedType.Barcode_Text);
        }
        if (descriptor.formatting) {
            if (descriptor.formatting.color)
                return ValueType.fromExtendedType(ExtendedType.Color);
            if (descriptor.formatting.formatString)
                return ValueType.fromExtendedType(ExtendedType.FormatString);
            if (descriptor.formatting.alignment)
                return ValueType.fromExtendedType(ExtendedType.Alignment);
            if (descriptor.formatting.labelDisplayUnits)
                return ValueType.fromExtendedType(ExtendedType.LabelDisplayUnits);
            if (descriptor.formatting.fontSize)
                return ValueType.fromExtendedType(ExtendedType.FontSize);
            if (descriptor.formatting.labelDensity)
                return ValueType.fromExtendedType(ExtendedType.LabelDensity);
        }
        if (descriptor.extendedType) {
            return ValueType.fromExtendedType(descriptor.extendedType);
        }
        if (descriptor.operations) {
            if (descriptor.operations.searchEnabled)
                return ValueType.fromExtendedType(ExtendedType.SearchEnabled);
        }
        if (descriptor.variant) {
            let variantTypes = descriptor.variant.map((variantType) => ValueType.fromDescriptor(variantType));
            return ValueType.fromVariant(variantTypes);
        }
        return ValueType.fromExtendedType(ExtendedType.Null);
    }
    /** Advanced: Generally use fromDescriptor instead. Creates or retrieves a ValueType object for the specified ExtendedType. */
    static fromExtendedType(extendedType) {
        extendedType = extendedType || ExtendedType.Null;
        let primitiveType = getPrimitiveType(extendedType), category = getCategoryFromExtendedType(extendedType);
        return ValueType.fromPrimitiveTypeAndCategory(primitiveType, category);
    }
    /** Creates or retrieves a ValueType object for the specified PrimitiveType and data category. */
    static fromPrimitiveTypeAndCategory(primitiveType, category) {
        primitiveType = primitiveType || PrimitiveType.Null;
        category = category || null;
        let id = primitiveType.toString();
        if (category)
            id += "|" + category;
        return ValueType.typeCache[id] || (ValueType.typeCache[id] = new ValueType(toExtendedType(primitiveType, category), category));
    }
    /** Creates a ValueType to describe the given IEnumType. */
    static fromEnum(enumType) {
        return new ValueType(ExtendedType.Enumeration, null, enumType);
    }
    /** Creates a ValueType to describe the given Variant type. */
    static fromVariant(variantTypes) {
        return new ValueType(ExtendedType.Variant, /* category */ null, /* enumType */ null, variantTypes);
    }
    /** Determines if the specified type is compatible from at least one of the otherTypes. */
    static isCompatibleTo(typeDescriptor, otherTypes) {
        let valueType = ValueType.fromDescriptor(typeDescriptor);
        for (let otherType of otherTypes) {
            let otherValueType = ValueType.fromDescriptor(otherType);
            if (otherValueType.isCompatibleFrom(valueType))
                return true;
        }
        return false;
    }
    /** Determines if the instance ValueType is convertable from the 'other' ValueType. */
    isCompatibleFrom(other) {
        let otherPrimitiveType = other.primitiveType;
        if (this === other ||
            this.primitiveType === otherPrimitiveType ||
            otherPrimitiveType === PrimitiveType.Null ||
            // Return true if both types are numbers
            (this.numeric && other.numeric))
            return true;
        return false;
    }
    /**
     * Determines if the instance ValueType is equal to the 'other' ValueType
     * @param {ValueType} other the other ValueType to check equality against
     * @returns True if the instance ValueType is equal to the 'other' ValueType
     */
    equals(other) {
        return _jsonComparer__WEBPACK_IMPORTED_MODULE_1__["equals"](this, other);
    }
    /** Gets the exact primitive type of this ValueType. */
    get primitiveType() {
        return getPrimitiveType(this.underlyingType);
    }
    /** Gets the exact extended type of this ValueType. */
    get extendedType() {
        return this.underlyingType;
    }
    /** Gets the data category string (if any) for this ValueType. */
    get categoryString() {
        return this.category;
    }
    // Simplified primitive types
    /** Indicates whether the type represents text values. */
    get text() {
        return this.primitiveType === PrimitiveType.Text;
    }
    /** Indicates whether the type represents any numeric value. */
    get numeric() {
        return _extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__["EnumExtensions"].hasFlag(this.underlyingType, ExtendedType.Numeric);
    }
    /** Indicates whether the type represents integer numeric values. */
    get integer() {
        return this.primitiveType === PrimitiveType.Integer;
    }
    /** Indicates whether the type represents Boolean values. */
    get bool() {
        return this.primitiveType === PrimitiveType.Boolean;
    }
    /** Indicates whether the type represents any date/time values. */
    get dateTime() {
        return this.primitiveType === PrimitiveType.DateTime ||
            this.primitiveType === PrimitiveType.Date ||
            this.primitiveType === PrimitiveType.Time;
    }
    /** Indicates whether the type represents duration values. */
    get duration() {
        return this.primitiveType === PrimitiveType.Duration;
    }
    /** Indicates whether the type represents binary values. */
    get binary() {
        return this.primitiveType === PrimitiveType.Binary;
    }
    /** Indicates whether the type represents none values. */
    get none() {
        return this.primitiveType === PrimitiveType.None;
    }
    // Extended types
    /** Returns an object describing temporal values represented by the type, if it represents a temporal type. */
    get temporal() {
        return this.temporalType;
    }
    /** Returns an object describing geographic values represented by the type, if it represents a geographic type. */
    get geography() {
        return this.geographyType;
    }
    /** Returns an object describing the specific values represented by the type, if it represents a miscellaneous extended type. */
    get misc() {
        return this.miscType;
    }
    /** Returns an object describing the formatting values represented by the type, if it represents a formatting type. */
    get formatting() {
        return this.formattingType;
    }
    /** Returns an object describing the enum values represented by the type, if it represents an enumeration type. */
    get enumeration() {
        return this.enumType;
    }
    get scripting() {
        return this.scriptingType;
    }
    /** Returns an array describing the variant values represented by the type, if it represents an Variant type. */
    get variant() {
        return this.variationTypes;
    }
}
ValueType.typeCache = {};
class ScriptType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get source() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ScriptSource);
    }
}
class TemporalType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get year() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Years);
    }
    get quarter() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Quarters);
    }
    get month() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Months);
    }
    get day() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.DayOfMonth);
    }
    get paddedDateTableDate() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PaddedDateTableDates);
    }
}
class GeographyType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get address() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Address);
    }
    get city() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.City);
    }
    get continent() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Continent);
    }
    get country() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Country);
    }
    get county() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.County);
    }
    get region() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Region);
    }
    get postalCode() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PostalCode);
    }
    get stateOrProvince() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.StateOrProvince);
    }
    get place() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Place);
    }
    get latitude() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Latitude);
    }
    get longitude() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Longitude);
    }
}
class MiscellaneousType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get image() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Image);
    }
    get imageUrl() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ImageUrl);
    }
    get webUrl() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.WebUrl);
    }
    get barcode() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Barcode);
    }
}
class FormattingType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get color() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Color);
    }
    get formatString() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FormatString);
    }
    get alignment() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Alignment);
    }
    get labelDisplayUnits() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDisplayUnits);
    }
    get fontSize() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FontSize);
    }
    get labelDensity() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDensity);
    }
}
/** Defines primitive value types. Must be consistent with types defined by server conceptual schema. */
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType[PrimitiveType["Null"] = 0] = "Null";
    PrimitiveType[PrimitiveType["Text"] = 1] = "Text";
    PrimitiveType[PrimitiveType["Decimal"] = 2] = "Decimal";
    PrimitiveType[PrimitiveType["Double"] = 3] = "Double";
    PrimitiveType[PrimitiveType["Integer"] = 4] = "Integer";
    PrimitiveType[PrimitiveType["Boolean"] = 5] = "Boolean";
    PrimitiveType[PrimitiveType["Date"] = 6] = "Date";
    PrimitiveType[PrimitiveType["DateTime"] = 7] = "DateTime";
    PrimitiveType[PrimitiveType["DateTimeZone"] = 8] = "DateTimeZone";
    PrimitiveType[PrimitiveType["Time"] = 9] = "Time";
    PrimitiveType[PrimitiveType["Duration"] = 10] = "Duration";
    PrimitiveType[PrimitiveType["Binary"] = 11] = "Binary";
    PrimitiveType[PrimitiveType["None"] = 12] = "None";
    PrimitiveType[PrimitiveType["Variant"] = 13] = "Variant";
})(PrimitiveType || (PrimitiveType = {}));
var PrimitiveTypeStrings;
(function (PrimitiveTypeStrings) {
    PrimitiveTypeStrings[PrimitiveTypeStrings["Null"] = 0] = "Null";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Text"] = 1] = "Text";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Decimal"] = 2] = "Decimal";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Double"] = 3] = "Double";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Integer"] = 4] = "Integer";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Boolean"] = 5] = "Boolean";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Date"] = 6] = "Date";
    PrimitiveTypeStrings[PrimitiveTypeStrings["DateTime"] = 7] = "DateTime";
    PrimitiveTypeStrings[PrimitiveTypeStrings["DateTimeZone"] = 8] = "DateTimeZone";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Time"] = 9] = "Time";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Duration"] = 10] = "Duration";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Binary"] = 11] = "Binary";
    PrimitiveTypeStrings[PrimitiveTypeStrings["None"] = 12] = "None";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Variant"] = 13] = "Variant";
})(PrimitiveTypeStrings || (PrimitiveTypeStrings = {}));
/** Defines extended value types, which include primitive types and known data categories constrained to expected primitive types. */
var ExtendedType;
(function (ExtendedType) {
    // Flags (1 << 8-15 range [0xFF00])
    // Important: Enum members must be declared before they are used in TypeScript.
    ExtendedType[ExtendedType["Numeric"] = 256] = "Numeric";
    ExtendedType[ExtendedType["Temporal"] = 512] = "Temporal";
    ExtendedType[ExtendedType["Geography"] = 1024] = "Geography";
    ExtendedType[ExtendedType["Miscellaneous"] = 2048] = "Miscellaneous";
    ExtendedType[ExtendedType["Formatting"] = 4096] = "Formatting";
    ExtendedType[ExtendedType["Scripting"] = 8192] = "Scripting";
    // Primitive types (0-255 range [0xFF] | flags)
    // The member names and base values must match those in PrimitiveType.
    ExtendedType[ExtendedType["Null"] = 0] = "Null";
    ExtendedType[ExtendedType["Text"] = 1] = "Text";
    ExtendedType[ExtendedType["Decimal"] = 258] = "Decimal";
    ExtendedType[ExtendedType["Double"] = 259] = "Double";
    ExtendedType[ExtendedType["Integer"] = 260] = "Integer";
    ExtendedType[ExtendedType["Boolean"] = 5] = "Boolean";
    ExtendedType[ExtendedType["Date"] = 518] = "Date";
    ExtendedType[ExtendedType["DateTime"] = 519] = "DateTime";
    ExtendedType[ExtendedType["DateTimeZone"] = 520] = "DateTimeZone";
    ExtendedType[ExtendedType["Time"] = 521] = "Time";
    ExtendedType[ExtendedType["Duration"] = 10] = "Duration";
    ExtendedType[ExtendedType["Binary"] = 11] = "Binary";
    ExtendedType[ExtendedType["None"] = 12] = "None";
    ExtendedType[ExtendedType["Variant"] = 13] = "Variant";
    // Extended types (0-32767 << 16 range [0xFFFF0000] | corresponding primitive type | flags)
    // Temporal
    ExtendedType[ExtendedType["Years"] = 66048] = "Years";
    ExtendedType[ExtendedType["Years_Text"] = 66049] = "Years_Text";
    ExtendedType[ExtendedType["Years_Integer"] = 66308] = "Years_Integer";
    ExtendedType[ExtendedType["Years_Date"] = 66054] = "Years_Date";
    ExtendedType[ExtendedType["Years_DateTime"] = 66055] = "Years_DateTime";
    ExtendedType[ExtendedType["Months"] = 131584] = "Months";
    ExtendedType[ExtendedType["Months_Text"] = 131585] = "Months_Text";
    ExtendedType[ExtendedType["Months_Integer"] = 131844] = "Months_Integer";
    ExtendedType[ExtendedType["Months_Date"] = 131590] = "Months_Date";
    ExtendedType[ExtendedType["Months_DateTime"] = 131591] = "Months_DateTime";
    ExtendedType[ExtendedType["PaddedDateTableDates"] = 197127] = "PaddedDateTableDates";
    ExtendedType[ExtendedType["Quarters"] = 262656] = "Quarters";
    ExtendedType[ExtendedType["Quarters_Text"] = 262657] = "Quarters_Text";
    ExtendedType[ExtendedType["Quarters_Integer"] = 262916] = "Quarters_Integer";
    ExtendedType[ExtendedType["Quarters_Date"] = 262662] = "Quarters_Date";
    ExtendedType[ExtendedType["Quarters_DateTime"] = 262663] = "Quarters_DateTime";
    ExtendedType[ExtendedType["DayOfMonth"] = 328192] = "DayOfMonth";
    ExtendedType[ExtendedType["DayOfMonth_Text"] = 328193] = "DayOfMonth_Text";
    ExtendedType[ExtendedType["DayOfMonth_Integer"] = 328452] = "DayOfMonth_Integer";
    ExtendedType[ExtendedType["DayOfMonth_Date"] = 328198] = "DayOfMonth_Date";
    ExtendedType[ExtendedType["DayOfMonth_DateTime"] = 328199] = "DayOfMonth_DateTime";
    // Geography
    ExtendedType[ExtendedType["Address"] = 6554625] = "Address";
    ExtendedType[ExtendedType["City"] = 6620161] = "City";
    ExtendedType[ExtendedType["Continent"] = 6685697] = "Continent";
    ExtendedType[ExtendedType["Country"] = 6751233] = "Country";
    ExtendedType[ExtendedType["County"] = 6816769] = "County";
    ExtendedType[ExtendedType["Region"] = 6882305] = "Region";
    ExtendedType[ExtendedType["PostalCode"] = 6947840] = "PostalCode";
    ExtendedType[ExtendedType["PostalCode_Text"] = 6947841] = "PostalCode_Text";
    ExtendedType[ExtendedType["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
    ExtendedType[ExtendedType["StateOrProvince"] = 7013377] = "StateOrProvince";
    ExtendedType[ExtendedType["Place"] = 7078913] = "Place";
    ExtendedType[ExtendedType["Latitude"] = 7144448] = "Latitude";
    ExtendedType[ExtendedType["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
    ExtendedType[ExtendedType["Latitude_Double"] = 7144707] = "Latitude_Double";
    ExtendedType[ExtendedType["Longitude"] = 7209984] = "Longitude";
    ExtendedType[ExtendedType["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
    ExtendedType[ExtendedType["Longitude_Double"] = 7210243] = "Longitude_Double";
    // Miscellaneous
    ExtendedType[ExtendedType["Image"] = 13109259] = "Image";
    ExtendedType[ExtendedType["ImageUrl"] = 13174785] = "ImageUrl";
    ExtendedType[ExtendedType["WebUrl"] = 13240321] = "WebUrl";
    ExtendedType[ExtendedType["Barcode"] = 13305856] = "Barcode";
    ExtendedType[ExtendedType["Barcode_Text"] = 13305857] = "Barcode_Text";
    ExtendedType[ExtendedType["Barcode_Integer"] = 13306116] = "Barcode_Integer";
    // Formatting
    ExtendedType[ExtendedType["Color"] = 19664897] = "Color";
    ExtendedType[ExtendedType["FormatString"] = 19730433] = "FormatString";
    ExtendedType[ExtendedType["Alignment"] = 20058113] = "Alignment";
    ExtendedType[ExtendedType["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
    ExtendedType[ExtendedType["FontSize"] = 20189443] = "FontSize";
    ExtendedType[ExtendedType["LabelDensity"] = 20254979] = "LabelDensity";
    // Enumeration
    ExtendedType[ExtendedType["Enumeration"] = 26214401] = "Enumeration";
    // Scripting
    ExtendedType[ExtendedType["ScriptSource"] = 32776193] = "ScriptSource";
    // NOTE: To avoid confusion, underscores should be used only to delimit primitive type variants of an extended type
    // (e.g. Year_Integer or Latitude_Double above)
    // Operations
    ExtendedType[ExtendedType["SearchEnabled"] = 65541] = "SearchEnabled";
})(ExtendedType || (ExtendedType = {}));
var ExtendedTypeStrings;
(function (ExtendedTypeStrings) {
    ExtendedTypeStrings[ExtendedTypeStrings["Numeric"] = 256] = "Numeric";
    ExtendedTypeStrings[ExtendedTypeStrings["Temporal"] = 512] = "Temporal";
    ExtendedTypeStrings[ExtendedTypeStrings["Geography"] = 1024] = "Geography";
    ExtendedTypeStrings[ExtendedTypeStrings["Miscellaneous"] = 2048] = "Miscellaneous";
    ExtendedTypeStrings[ExtendedTypeStrings["Formatting"] = 4096] = "Formatting";
    ExtendedTypeStrings[ExtendedTypeStrings["Scripting"] = 8192] = "Scripting";
    ExtendedTypeStrings[ExtendedTypeStrings["Null"] = 0] = "Null";
    ExtendedTypeStrings[ExtendedTypeStrings["Text"] = 1] = "Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Decimal"] = 258] = "Decimal";
    ExtendedTypeStrings[ExtendedTypeStrings["Double"] = 259] = "Double";
    ExtendedTypeStrings[ExtendedTypeStrings["Integer"] = 260] = "Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Boolean"] = 5] = "Boolean";
    ExtendedTypeStrings[ExtendedTypeStrings["Date"] = 518] = "Date";
    ExtendedTypeStrings[ExtendedTypeStrings["DateTime"] = 519] = "DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["DateTimeZone"] = 520] = "DateTimeZone";
    ExtendedTypeStrings[ExtendedTypeStrings["Time"] = 521] = "Time";
    ExtendedTypeStrings[ExtendedTypeStrings["Duration"] = 10] = "Duration";
    ExtendedTypeStrings[ExtendedTypeStrings["Binary"] = 11] = "Binary";
    ExtendedTypeStrings[ExtendedTypeStrings["None"] = 12] = "None";
    ExtendedTypeStrings[ExtendedTypeStrings["Variant"] = 13] = "Variant";
    ExtendedTypeStrings[ExtendedTypeStrings["Years"] = 66048] = "Years";
    ExtendedTypeStrings[ExtendedTypeStrings["Years_Text"] = 66049] = "Years_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Years_Integer"] = 66308] = "Years_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Years_Date"] = 66054] = "Years_Date";
    ExtendedTypeStrings[ExtendedTypeStrings["Years_DateTime"] = 66055] = "Years_DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["Months"] = 131584] = "Months";
    ExtendedTypeStrings[ExtendedTypeStrings["Months_Text"] = 131585] = "Months_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Months_Integer"] = 131844] = "Months_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Months_Date"] = 131590] = "Months_Date";
    ExtendedTypeStrings[ExtendedTypeStrings["Months_DateTime"] = 131591] = "Months_DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["PaddedDateTableDates"] = 197127] = "PaddedDateTableDates";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters"] = 262656] = "Quarters";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Text"] = 262657] = "Quarters_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Integer"] = 262916] = "Quarters_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Date"] = 262662] = "Quarters_Date";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_DateTime"] = 262663] = "Quarters_DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth"] = 328192] = "DayOfMonth";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Text"] = 328193] = "DayOfMonth_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Integer"] = 328452] = "DayOfMonth_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Date"] = 328198] = "DayOfMonth_Date";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_DateTime"] = 328199] = "DayOfMonth_DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["Address"] = 6554625] = "Address";
    ExtendedTypeStrings[ExtendedTypeStrings["City"] = 6620161] = "City";
    ExtendedTypeStrings[ExtendedTypeStrings["Continent"] = 6685697] = "Continent";
    ExtendedTypeStrings[ExtendedTypeStrings["Country"] = 6751233] = "Country";
    ExtendedTypeStrings[ExtendedTypeStrings["County"] = 6816769] = "County";
    ExtendedTypeStrings[ExtendedTypeStrings["Region"] = 6882305] = "Region";
    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode"] = 6947840] = "PostalCode";
    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode_Text"] = 6947841] = "PostalCode_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["StateOrProvince"] = 7013377] = "StateOrProvince";
    ExtendedTypeStrings[ExtendedTypeStrings["Place"] = 7078913] = "Place";
    ExtendedTypeStrings[ExtendedTypeStrings["Latitude"] = 7144448] = "Latitude";
    ExtendedTypeStrings[ExtendedTypeStrings["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
    ExtendedTypeStrings[ExtendedTypeStrings["Latitude_Double"] = 7144707] = "Latitude_Double";
    ExtendedTypeStrings[ExtendedTypeStrings["Longitude"] = 7209984] = "Longitude";
    ExtendedTypeStrings[ExtendedTypeStrings["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
    ExtendedTypeStrings[ExtendedTypeStrings["Longitude_Double"] = 7210243] = "Longitude_Double";
    ExtendedTypeStrings[ExtendedTypeStrings["Image"] = 13109259] = "Image";
    ExtendedTypeStrings[ExtendedTypeStrings["ImageUrl"] = 13174785] = "ImageUrl";
    ExtendedTypeStrings[ExtendedTypeStrings["WebUrl"] = 13240321] = "WebUrl";
    ExtendedTypeStrings[ExtendedTypeStrings["Barcode"] = 13305856] = "Barcode";
    ExtendedTypeStrings[ExtendedTypeStrings["Barcode_Text"] = 13305857] = "Barcode_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Barcode_Integer"] = 13306116] = "Barcode_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Color"] = 19664897] = "Color";
    ExtendedTypeStrings[ExtendedTypeStrings["FormatString"] = 19730433] = "FormatString";
    ExtendedTypeStrings[ExtendedTypeStrings["Alignment"] = 20058113] = "Alignment";
    ExtendedTypeStrings[ExtendedTypeStrings["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
    ExtendedTypeStrings[ExtendedTypeStrings["FontSize"] = 20189443] = "FontSize";
    ExtendedTypeStrings[ExtendedTypeStrings["LabelDensity"] = 20254979] = "LabelDensity";
    ExtendedTypeStrings[ExtendedTypeStrings["Enumeration"] = 26214401] = "Enumeration";
    ExtendedTypeStrings[ExtendedTypeStrings["ScriptSource"] = 32776193] = "ScriptSource";
    ExtendedTypeStrings[ExtendedTypeStrings["SearchEnabled"] = 65541] = "SearchEnabled";
})(ExtendedTypeStrings || (ExtendedTypeStrings = {}));
const PrimitiveTypeMask = 0xFF;
const PrimitiveTypeWithFlagsMask = 0xFFFF;
const PrimitiveTypeFlagsExcludedMask = 0xFFFF0000;
function getPrimitiveType(extendedType) {
    return extendedType & PrimitiveTypeMask;
}
function isPrimitiveType(extendedType) {
    return (extendedType & PrimitiveTypeWithFlagsMask) === extendedType;
}
function getCategoryFromExtendedType(extendedType) {
    if (isPrimitiveType(extendedType))
        return null;
    let category = ExtendedTypeStrings[extendedType];
    if (category) {
        // Check for ExtendedType declaration without a primitive type.
        // If exists, use it as category (e.g. Longitude rather than Longitude_Double)
        // Otherwise use the ExtendedType declaration with a primitive type (e.g. Address)
        let delimIdx = category.lastIndexOf("_");
        if (delimIdx > 0) {
            let baseCategory = category.slice(0, delimIdx);
            if (ExtendedTypeStrings[baseCategory]) {
                category = baseCategory;
            }
        }
    }
    return category || null;
}
function toExtendedType(primitiveType, category) {
    let primitiveString = PrimitiveTypeStrings[primitiveType];
    let t = ExtendedTypeStrings[primitiveString];
    if (t == null) {
        t = ExtendedType.Null;
    }
    if (primitiveType && category) {
        let categoryType = ExtendedTypeStrings[category];
        if (categoryType) {
            let categoryPrimitiveType = getPrimitiveType(categoryType);
            if (categoryPrimitiveType === PrimitiveType.Null) {
                // Category supports multiple primitive types, check if requested primitive type is supported
                // (note: important to use t here rather than primitiveType as it may include primitive type flags)
                categoryType = t | categoryType;
                if (ExtendedTypeStrings[categoryType]) {
                    t = categoryType;
                }
            }
            else if (categoryPrimitiveType === primitiveType) {
                // Primitive type matches the single supported type for the category
                t = categoryType;
            }
        }
    }
    return t;
}
function matchesExtendedTypeWithAnyPrimitive(a, b) {
    return (a & PrimitiveTypeFlagsExcludedMask) === (b & PrimitiveTypeFlagsExcludedMask);
}
//# sourceMappingURL=valueType.js.map

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! exports provided: ExternalLinkVisualSettings, LinkGeneralSettings, LinkImageSettings, LinkTitleSettings, LinkContentSettings, LinkBottomSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLinkVisualSettings", function() { return ExternalLinkVisualSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkGeneralSettings", function() { return LinkGeneralSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkImageSettings", function() { return LinkImageSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTitleSettings", function() { return LinkTitleSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkContentSettings", function() { return LinkContentSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBottomSettings", function() { return LinkBottomSettings; });
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/index.js");
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */


var DataViewObjectsParser = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_0__["dataViewObjectsParser"].DataViewObjectsParser;
class ExternalLinkVisualSettings extends DataViewObjectsParser {
    constructor() {
        super(...arguments);
        this.linkGeneralSettings = new LinkGeneralSettings();
        this.linkImageSettings = new LinkImageSettings();
        this.linkTitleSettings = new LinkTitleSettings();
        this.linkContentSettings = new LinkContentSettings();
        this.linkBottomSettings = new LinkBottomSettings();
    }
}
class LinkGeneralSettings {
    constructor() {
        this.borderColor = "#F2F2F2";
        this.borderHoverColor = "black";
        this.backgroundColor = null;
        // public enableAnimation: boolean = false;
        // public animationDuration: number = 100;
    }
}
class LinkImageSettings {
    constructor() {
        this.show = false;
        this.imageURL = "https://www.w3schools.com/w3css/img_lights.jpg";
    }
}
class LinkTitleSettings {
    constructor() {
        this.link = "";
        this.linkTitle = "";
        this.linkTitleColor = "black";
        this.linkTitleHoverColor = "blue";
        this.linkHoverTitle = "";
    }
}
class LinkContentSettings {
    constructor() {
        this.show = false;
        this.linkContent = "";
        this.linkContentColor = "black";
    }
}
class LinkBottomSettings {
    constructor() {
        this.show = true;
        this.linkBottomText = "Go to Report";
    }
}


/***/ }),

/***/ "./src/visual.ts":
/*!***********************!*\
  !*** ./src/visual.ts ***!
  \***********************/
/*! exports provided: ExternalLinkVisual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLinkVisual", function() { return ExternalLinkVisual; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var powerbi_visuals_utils_formattingutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-utils-formattingutils */ "./node_modules/powerbi-visuals-utils-formattingutils/lib/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/





class ExternalLinkVisual {
    constructor(options) {
        this.target = options.element;
        this.host = options.host;
    }
    update(options) {
        this.linkVisualSettings = ExternalLinkVisual.parseSettings(options && options.dataViews && options.dataViews[0]);
        let linkGeneralSettings = this.linkVisualSettings.linkGeneralSettings;
        let linkImageSettings = this.linkVisualSettings.linkImageSettings;
        let linkTitleSettings = this.linkVisualSettings.linkTitleSettings;
        let linkContentSettings = this.linkVisualSettings.linkContentSettings;
        let linkBottomSettings = this.linkVisualSettings.linkBottomSettings;
        let linkTitle = "";
        try {
            if (this.rootElement) {
                this.rootElement.remove();
            }
            if (powerbi_visuals_utils_formattingutils__WEBPACK_IMPORTED_MODULE_1__["stringExtensions"].isNullOrUndefinedOrWhiteSpaceString(linkTitleSettings.linkHoverTitle)) {
                if (powerbi_visuals_utils_formattingutils__WEBPACK_IMPORTED_MODULE_1__["stringExtensions"].isNullOrUndefinedOrWhiteSpaceString(linkTitleSettings.link)) {
                    linkTitle = "Click here to go to nowhere";
                }
                else {
                    linkTitle = "Click here to go to " + linkTitleSettings.link;
                }
            }
            else {
                linkTitle = linkTitleSettings.linkHoverTitle;
            }
            this.rootElement = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this.target).append("div")
                .classed("rootElement", true)
                .attr("title", linkTitle)
                .style("height", "100%")
                .style("width", "100%")
                .style("border", linkGeneralSettings.borderColor)
                .style("border-style", "solid")
                .style("border-width", "3px")
                .style("box-sizing", "border-box")
                .style("background-color", linkGeneralSettings.backgroundColor);
            if (linkImageSettings.show) {
                this.topContentElement = this.rootElement.append("img")
                    .attr("src", linkImageSettings.imageURL)
                    .style("width", "100%");
            }
            this.middleContentElement = this.rootElement.append("div")
                .style("padding", "20px")
                .style("margin", 0)
                .style("max-width", "100%")
                .style("left", "0px");
            this.middleContentElement.append("h2")
                .attr("id", "linkTitle")
                .style("color", linkTitleSettings.linkTitleColor)
                .style("text-align", "start")
                .style("margin", 0)
                .text(linkTitleSettings.linkTitle);
            if (linkContentSettings.show) {
                this.middleContentElement.append("p")
                    .text(linkContentSettings.linkContent);
            }
            if (linkBottomSettings.show) {
                this.bottomContentElement = this.rootElement.append("div")
                    .classed("bottomLink", true)
                    .style("position", "absolute")
                    .style("bottom", "0")
                    .style("left", "0")
                    .style("width", "100%")
                    .style("max-width", "100%");
                this.bottomContentElement.append("p")
                    .attr("id", "bottomText")
                    .style("border-top", linkGeneralSettings.borderColor)
                    .style("border-top-style", "solid")
                    .style("border-top-width", "3px")
                    .style("padding-left", "20px")
                    .style("padding-top", "10px")
                    .text(linkBottomSettings.linkBottomText)
                    .append("span")
                    .style("margin-left", "5px")
                    .text("🡭");
            }
            this.rootElement.on("mouseover", (data, i, elements) => {
                let ele = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(elements[i]);
                ele.style("border", linkGeneralSettings.borderHoverColor)
                    .style("border-style", "solid")
                    .style("border-width", "3px");
                ele.select("#linkTitle")
                    .style("color", linkTitleSettings.linkTitleHoverColor);
                this.bottomContentElement
                    .select("#bottomText")
                    .style("border-top", linkGeneralSettings.borderHoverColor)
                    .style("border-top-style", "solid")
                    .style("border-top-width", "3px");
            })
                .on("mouseout", (data, i, elements) => {
                let ele = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(elements[i]);
                ele.style("border", linkGeneralSettings.borderColor)
                    .style("border-style", "solid")
                    .style("border-width", "3px");
                ele.select("#linkTitle")
                    .style("color", linkTitleSettings.linkTitleColor);
                this.bottomContentElement
                    .select("#bottomText")
                    .style("border-top", linkGeneralSettings.borderColor)
                    .style("border-top-style", "solid")
                    .style("border-top-width", "3px");
            })
                .on("click", () => {
                if (!powerbi_visuals_utils_formattingutils__WEBPACK_IMPORTED_MODULE_1__["stringExtensions"].isNullOrUndefinedOrWhiteSpaceString(linkTitleSettings.link)) {
                    this.host.launchUrl(linkTitleSettings.link);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    static parseSettings(dataView) {
        return _settings__WEBPACK_IMPORTED_MODULE_3__["ExternalLinkVisualSettings"].parse(dataView);
    }
    /**
     * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
     * objects and properties you want to expose to the users in the property pane.
     *
     */
    enumerateObjectInstances(options) {
        return _settings__WEBPACK_IMPORTED_MODULE_3__["ExternalLinkVisualSettings"].enumerateObjectInstances(this.linkVisualSettings || _settings__WEBPACK_IMPORTED_MODULE_3__["ExternalLinkVisualSettings"].getDefault(), options);
    }
}


/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./.tmp/precompile/visualPlugin.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bjadav\Power BI Custom Visuals\externalLink\.tmp\precompile\visualPlugin.ts */"./.tmp/precompile/visualPlugin.ts");


/***/ }),

/***/ "powerbi-visuals-api":
/*!***********************!*\
  !*** external "null" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = null;

/***/ })

/******/ });
//# sourceMappingURL=visual.js.map