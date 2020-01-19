(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app\">\n  <app-home></app-home>\n  <app-menu></app-menu>\n  <div nz-row nzType=\"flex\" nzJustify=\"center\" class=\"about-row\">\n    <div nz-col [nzXs]=\"22\" [nzSm]=\"18\" [nzMd]=\"14\" [nzLg]=\"14\" [nzXl]=\"16\" [nzXXl]=\"16\">\n      <app-about></app-about>\n    </div>\n  </div>\n  <div class=\"section-separator-1\"></div>\n  <div nz-row nzType=\"flex\" nzJustify=\"center\">\n    <div nz-col [nzXs]=\"22\" [nzSm]=\"18\" [nzMd]=\"14\" [nzLg]=\"14\" [nzXl]=\"16\" [nzXXl]=\"16\">\n      <app-experience></app-experience>\n    </div>\n  </div>\n  <div class=\"section-separator-2\"></div>\n  <div nz-row nzType=\"flex\" nzJustify=\"center\">\n    <div nz-col [nzXs]=\"22\" [nzSm]=\"18\" [nzMd]=\"14\" [nzLg]=\"14\" [nzXl]=\"16\" [nzXXl]=\"16\">\n      <app-education></app-education>\n    </div>\n  </div>\n  <div class=\"section-separator-3\"></div>\n  <div nz-row nzType=\"flex\" nzJustify=\"center\">\n    <div nz-col [nzXs]=\"22\" [nzSm]=\"18\" [nzMd]=\"14\" [nzLg]=\"14\" [nzXl]=\"16\" [nzXXl]=\"16\">\n      <app-skills></app-skills>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"about\" id=\"about\">\r\n    <h1 nz-title class=\"text-center\">{{about.title}}</h1>\r\n    <app-section [section]=\"about\" size=\"200\"></app-section>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"education\" id=\"education\">\r\n    <h1 nz-title class=\"text-center\">{{education.title}}</h1>\r\n    <app-section [section]=\"education\"></app-section>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"experience\" id=\"experience\">\r\n    <h1 nz-title class=\"text-center\">{{experience.title}}</h1>\r\n    <app-section [section]=\"experience\"></app-section>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n    <a href=\"mailto:valerio.lucantonio@gmail.com\">\r\n        <i nz-icon nzType=\"mail\" nzTheme=\"outline\"></i>\r\n    </a>\r\n    <a href=\"https://linkedin.com/in/valerio-lucantonio\">\r\n        <i nz-icon nzType=\"linkedin\" nzTheme=\"outline\"></i>\r\n    </a>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home\" id=\"home\" [style.height.px]=\"homeHeight\">\r\n    <div class=\"home-container\">\r\n        <h1 nz-title class=\"name home-text\">{{homeInfo.name}}</h1>\r\n        <h1 nz-title class=\"home-text\">{{homeInfo.profession}}</h1>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"menu\">\r\n    <ul nz-menu nzMode=\"horizontal\" nzMatchRouter=\"true\" class=\"menu-container\">\r\n        <li nz-menu-item *ngFor=\"let item of menu.items\">\r\n            <a href=\"{{item.link}}\">\r\n                <i nz-icon [nzType]=\"item.icon\" nzTheme=\"outline\"></i>\r\n                <span class=\"menu-items\">{{item.name}}</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div nz-row nzType=\"flex\" nzGutter=\"16\" nzJustify=\"center\" *ngFor=\"let section of section.sections\" class=\"section-row\">\r\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"24\" [nzLg]=\"24\" [nzXl]=\"24\" [nzXXl]=\"24\" class=\"section-header\">\r\n        <img [style.height.px]=\"size\" [style.width.px]=\"size\" src=\"{{section.image}}\">\r\n        <div class=\"section-detail-container\" [style.height.px]=\"size\">\r\n            <div class=\"section-detail\" *ngFor=\"let detail of section.details\">\r\n                <span nzEllipsis>\r\n                    <i nz-icon [nzType]=\"detail.icon\" nzTheme=\"outline\"></i>\r\n                    {{detail.description}}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"24\" [nzLg]=\"18\" [nzXl]=\"15\" [nzXXl]=\"17\" class=\"text-center\">\r\n        <nz-divider></nz-divider>\r\n        {{section.description}}\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"skills text-center\" id=\"skills\">\r\n    <h1 nz-title>{{skills.title}}</h1>\r\n    <div nz-row nzType=\"flex\" class=\"skillset-row\" nzJustify=\"center\" *ngFor=\"let skillSet of skills.skillsets\">\r\n        <div nz-col [nzSpan]=\"24\">\r\n            <h2>{{skillSet.name}}</h2>\r\n        </div>\r\n        <div nz-col [nzSpan]=\"24\" class=\"skillset-col text-left\">\r\n            <div *ngFor=\"let skills of skillSet.skills\" class=\"skillset-content\">\r\n                <div *ngFor=\"let skill of skills\">\r\n                    <span>\r\n                        <span class=\"skill-name\">{{skill.name}}</span>\r\n                        <nz-rate [(ngModel)]=\"skill.rank\" nzDisabled></nz-rate>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.section-separator-1 {\r\n    background-image: url('matterhorn.jpg');\r\n    height: 300px;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n.section-separator-2 {\r\n    background-image: url('castelli.jpg');\r\n    height: 300px;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n.section-separator-3 {\r\n    background-image: url('campofelice2.jpg');\r\n    height: 300px;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUNBQWlEO0lBQ2pELGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0kscUNBQStDO0lBQy9DLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0kseUNBQW1EO0lBQ25ELGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VjdGlvbi1zZXBhcmF0b3ItMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvbWF0dGVyaG9ybi5qcGdcIik7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuLnNlY3Rpb24tc2VwYXJhdG9yLTIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2Nhc3RlbGxpLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXNlcGFyYXRvci0zIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9jYW1wb2ZlbGljZTIuanBnXCIpO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'valerio-site';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/components/section/section.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");







const icons = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["CalendarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["PushpinOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["ReadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["FireOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["HistoryOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["HomeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["PhoneOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["MailOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["LinkedinOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["ExperimentOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["BookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_6__["BankOutline"]
];









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _components_education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"],
            _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
            _components_section_section_component__WEBPACK_IMPORTED_MODULE_14__["SectionComponent"],
            _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_15__["SkillsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"]
        ],
        providers: [
            { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NZ_ICONS"], useValue: icons }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _about_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.json */ "./src/app/components/about/about.json");
var _about_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./about.json */ "./src/app/components/about/about.json", 1);



let AboutComponent = class AboutComponent {
    constructor() {
        this.about = _about_json__WEBPACK_IMPORTED_MODULE_2__;
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/about/about.json":
/*!*********************************************!*\
  !*** ./src/app/components/about/about.json ***!
  \*********************************************/
/*! exports provided: title, sections, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"About Me\",\"sections\":[{\"image\":\"assets/about-pic.png\",\"details\":[{\"description\":\"Valerio Lucantonio\",\"icon\":\"user\"},{\"description\":\"30 Sep 1989\",\"icon\":\"calendar\"},{\"description\":\"Software Engineer\",\"icon\":\"experiment\"},{\"description\":\"L'Aquila, Italy\",\"icon\":\"home\"},{\"description\":\"Zurich, Switzerland\",\"icon\":\"pushpin\"},{\"description\":\"valerio.lucantonio@gmail.com\",\"icon\":\"mail\"},{\"description\":\"linkedin.com/in/valerio-lucantonio\",\"icon\":\"linkedin\"}],\"description\":\"I am Valerio and I am a Software Engineer from Italy. At the moment I am living in Zurich, Switzerland where working as Frontend Engineer for Evooq, a fast growing startup in the financial sector. I have been living in Switzerland for the last years, and I really love it also thanks to the sports I do: climbing, hinking and skiing. Other thing I love are eating and cooking, guess it's DNA, traveling and photography. I wish to travel all the world one day.\"}]}");

/***/ }),

/***/ "./src/app/components/education/education.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/education/education.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _education_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education.json */ "./src/app/components/education/education.json");
var _education_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./education.json */ "./src/app/components/education/education.json", 1);



let EducationComponent = class EducationComponent {
    constructor() {
        this.education = _education_json__WEBPACK_IMPORTED_MODULE_2__;
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.css */ "./src/app/components/education/education.component.css")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/components/education/education.json":
/*!*****************************************************!*\
  !*** ./src/app/components/education/education.json ***!
  \*****************************************************/
/*! exports provided: title, sections, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Education\",\"sections\":[{\"image\":\"assets/mdh.png\",\"details\":[{\"description\":\"Sep 2014 - Jun 2015\",\"icon\":\"calendar\"},{\"description\":\"Software Engineering\",\"icon\":\"experiment\"},{\"description\":\"Master Degree 110/110\",\"icon\":\"book\"},{\"description\":\"Malardalen University\",\"icon\":\"bank\"}],\"description\":\"I earned a master degree as part of an international program named Global Software Engineering European Master (GSEEM), distributed between Italy and Sweden. I spent the second year in Sweden where I attended 4 projects exams (with real customers) in the first semester, and the master thesis project titled 'Enhancing the consistency between requirements and test cases through the definition of a Controlled Natural Language.' in the second semester\"},{\"image\":\"assets/univaq.png\",\"details\":[{\"description\":\"Mar 2013 - Sep 2014\",\"icon\":\"calendar\"},{\"description\":\"Software Engineering\",\"icon\":\"experiment\"},{\"description\":\"Master Degree 110/110\",\"icon\":\"book\"},{\"description\":\"University of L'Aquila\",\"icon\":\"bank\"}],\"description\":\"I spent the first year of the master degree in my hometown, at the university of L'Aquila. Here I did around 10 exams both theoretical and practical, the most interesting were Software Engineering, Mobile Application Development and Model Driven Engineering.\"},{\"image\":\"assets/univaq.png\",\"details\":[{\"description\":\"Sep 2008 - Dec 2012\",\"icon\":\"calendar\"},{\"description\":\"Computer Science\",\"icon\":\"experiment\"},{\"description\":\"Bachelor Degree 99/110\",\"icon\":\"book\"},{\"description\":\"University of L'Aquila\",\"icon\":\"bank\"}],\"description\":\"I studied Computer Science as a bachelor degree, in the University of L'Aquila. This course gives a solid theoretical background, and a wide techology overview. I ended the studies, with a thesis work titled 'Design and development of a Java context aware mobile application'.\"}]}");

/***/ }),

/***/ "./src/app/components/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _experience_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience.json */ "./src/app/components/experience/experience.json");
var _experience_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./experience.json */ "./src/app/components/experience/experience.json", 1);



let ExperienceComponent = class ExperienceComponent {
    constructor() {
        this.experience = _experience_json__WEBPACK_IMPORTED_MODULE_2__;
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.css */ "./src/app/components/experience/experience.component.css")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/components/experience/experience.json":
/*!*******************************************************!*\
  !*** ./src/app/components/experience/experience.json ***!
  \*******************************************************/
/*! exports provided: title, sections, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Working Experience\",\"sections\":[{\"image\":\"assets/evooq.jpg\",\"details\":[{\"description\":\"Sep 2019 - Present\",\"icon\":\"calendar\"},{\"description\":\"Evooq\",\"icon\":\"team\"},{\"description\":\"Software Engineer\",\"icon\":\"experiment\"},{\"description\":\"Zurich, Switzerland\",\"icon\":\"pushpin\"}],\"description\":\"Working as Frontend Developer and Scrum Master for a life-cycle management tool. The app is part of a bigger ecosystem of applications, in the area of financial digital business. The apps are implemented in Angular 8, Typescript, HTML, CSS, Ant Design and served by graphql endpoints. We work in a SCRUM team, with recurring dailies, planning, groomings and retrospective supported by Jira for the management of the tickets.\"},{\"image\":\"assets/owt.png\",\"details\":[{\"description\":\"Jan 2019 - Aug 2019\",\"icon\":\"calendar\"},{\"description\":\"Open Web Technology\",\"icon\":\"team\"},{\"description\":\"Senior Frontend Dev\",\"icon\":\"experiment\"},{\"description\":\"Zurich, Switzerland\",\"icon\":\"pushpin\"}],\"description\":\"Worked as senior front-end developer for different web based b2b and b2c applications. The applications were implemented in the UI with Aurelia and Angular as frameworks, typescript, HTML5 and CSS3, and were served by REST APIs implemented in Java. As main testing frameworks Jasmine for unit test and TestCafe for end to end.As development process SCRUM supported by Jira for the tickets handling and Confluence for the documentation.\"},{\"image\":\"assets/avaloq.png\",\"details\":[{\"description\":\"Nov 2015 - Dic 2018\",\"icon\":\"calendar\"},{\"description\":\"Avaloq\",\"icon\":\"team\"},{\"description\":\"Software Engineer\",\"icon\":\"experiment\"},{\"description\":\"Zurich, Switzerland\",\"icon\":\"pushpin\"}],\"description\":\"Worked as front-end developer for e-banking web applications in the area of payment and trading. The applications were implemented with angularJs, javascript, HTML5 and CSS3, and served by REST APIs implemented in Java. For testing Jasmine for unit test, and Selenium for end-to-end. As development process SCRUM/Kanban supported by Jira for the tickets handling and Confluence for the documentation.\"}]}");

/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n    background-color: gray;\r\n    height: 60px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;   \r\n}\r\na {\r\n    color: white;\r\n    font-size: 40px;\r\n    margin: 0 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxyXG59XHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\r\n    background-image: url(\"home.jpg\");\r\n    height: 100%;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 0;\r\n}\r\n\r\n.home-container {\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    background-color: rgba(0,0,0,0.5); \r\n}\r\n\r\n.home-text {\r\n    color: white;\r\n    text-align: center;\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\r\n}\r\n\r\nh1.name {\r\n    font-size: 48px;\r\n    font-weight: 600;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJob21lLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpOyBcclxufVxyXG5cclxuLmhvbWUtdGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaDEubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.json */ "./src/app/components/home/home.json");
var _home_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./home.json */ "./src/app/components/home/home.json", 1);



let HomeComponent = class HomeComponent {
    constructor() {
        this.homeInfo = _home_json__WEBPACK_IMPORTED_MODULE_2__;
        this.homeHeight = window.innerHeight;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/home/home.json":
/*!*******************************************!*\
  !*** ./src/app/components/home/home.json ***!
  \*******************************************/
/*! exports provided: name, profession, position, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Valerio Lucantonio\",\"profession\":\"Software Engineer\",\"position\":\"Zurich, Swizerland\"}");

/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.menu {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 100000;\r\n}\r\n@media screen and (max-width: 700px) {\r\n    .menu-items {\r\n        display: none;\r\n    }\r\n  }  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sZUFBZTtBQUNuQjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4ubWVudSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAubWVudS1pdGVtcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9ICAiXX0= */");

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_items_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.items.json */ "./src/app/components/menu/menu.items.json");
var _menu_items_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./menu.items.json */ "./src/app/components/menu/menu.items.json", 1);



let MenuComponent = class MenuComponent {
    constructor() {
        this.menu = _menu_items_json__WEBPACK_IMPORTED_MODULE_2__;
        //<720 fai scomparire le scritte
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/components/menu/menu.items.json":
/*!*************************************************!*\
  !*** ./src/app/components/menu/menu.items.json ***!
  \*************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"Home\",\"link\":\"#home\",\"icon\":\"home\",\"selected\":true},{\"name\":\"About\",\"link\":\"#about\",\"icon\":\"user\"},{\"name\":\"Experience\",\"link\":\"#experience\",\"icon\":\"history\"},{\"name\":\"Education\",\"link\":\"#education\",\"icon\":\"read\"},{\"name\":\"Skills\",\"link\":\"#skills\",\"icon\":\"fire\"}]}");

/***/ }),

/***/ "./src/app/components/section/section.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/section/section.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-header {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.section-detail-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    margin-left: 16px;\r\n}\r\n\r\n.section-row {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.section-detail {\r\n    font-size: 16px;\r\n    text-align: left;\r\n}\r\n\r\nnz-divider {\r\n    margin: 8px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1kZXRhaWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuLnNlY3Rpb24tcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxubnotZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/section/section.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionComponent = class SectionComponent {
    constructor() {
        this.size = 110;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "section", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "size", void 0);
SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section.component.css */ "./src/app/components/section/section.component.css")).default]
    })
], SectionComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".skillset-row {\r\n    margin-top: 40px;\r\n}\r\n\r\n.skillset-col {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.skillset-content {\r\n    margin: 0 16px;\r\n}\r\n\r\n.skill-name {\r\n    display: inline-block;\r\n    width: 100px;\r\n}\r\n\r\n::ng-deep.ant-rate {\r\n    color: #1890ff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzZXQtcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5za2lsbHNldC1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNraWxsc2V0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5za2lsbC1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLmFudC1yYXRlIHtcclxuICAgIGNvbG9yOiAjMTg5MGZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _skills_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.json */ "./src/app/components/skills/skills.json");
var _skills_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./skills.json */ "./src/app/components/skills/skills.json", 1);



let SkillsComponent = class SkillsComponent {
    constructor() {
        this.skills = _skills_json__WEBPACK_IMPORTED_MODULE_2__;
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.json":
/*!***********************************************!*\
  !*** ./src/app/components/skills/skills.json ***!
  \***********************************************/
/*! exports provided: title, skillsets, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Skills\",\"skillsets\":[{\"name\":\"Programming Languages\",\"skills\":[[{\"name\":\"JavaScript\",\"rank\":5},{\"name\":\"HTML\",\"rank\":4},{\"name\":\"TypeScript\",\"rank\":5}],[{\"name\":\"CSS\",\"rank\":4},{\"name\":\"Java\",\"rank\":3},{\"name\":\"SQL\",\"rank\":3}]]},{\"name\":\"Frontend Frameworks\",\"skills\":[[{\"name\":\"Angular\",\"rank\":5},{\"name\":\"AngularJs\",\"rank\":5},{\"name\":\"Aurelia\",\"rank\":3},{\"name\":\"Backbone\",\"rank\":3}],[{\"name\":\"Jquery\",\"rank\":3},{\"name\":\"Bootstrap\",\"rank\":4},{\"name\":\"ANT Design\",\"rank\":4},{\"name\":\"Angular Mat\",\"rank\":3}]]},{\"name\":\"Other Tools\",\"skills\":[[{\"name\":\"Webpack\",\"rank\":3},{\"name\":\"Jasmine\",\"rank\":4},{\"name\":\"GIT\",\"rank\":5},{\"name\":\"Jenkins\",\"rank\":4}],[{\"name\":\"Selenium\",\"rank\":3},{\"name\":\"Test Cafe\",\"rank\":2},{\"name\":\"Docker\",\"rank\":3},{\"name\":\"Cordova\",\"rank\":2}]]}]}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\valer\Development\valeriolucantonio.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map