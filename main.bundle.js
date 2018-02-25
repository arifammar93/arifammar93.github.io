webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n\tfont-family: 'PT Mono', monospace;\n}\n\nh1 {\n\tfont-size: 20px;\n\t}\n\np {\n\tfont-size: 14px;\n}\n\n#header {\n\tbackground-color: black;\n\tposition: fixed;\n\theight: 6.5vh;\n\ttop: 0px;\n\tleft: 50vw;\n\twidth: 50vw;\n\tz-index: 3;\n}\n\n#header > p {\n\tcolor: white;\n\tpadding-left: 2.7vw;\n\tline-height: 6.5vh;\n\tdisplay: table-cell;\n\tvertical-align: middle;\n}\n\n#git {\n\tposition: absolute;\n\theight: 5vh;\n\twidth: 5vh;\n\ttop:0.7vh;\n\tright: 1.07vh;\n}\n\n.infoBox{\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 6.5vh;\n\tz-index: 1;\n\tbackground-color: white;\n\twidth: 50vw;\n\n}\n\n.infoBox > div > h1 {\n\tpadding-top: 6vh;\n\tpadding-left: 2.7vw;\n}\n\n.infoBox > div {\n\theight: 93.5vh;\n}\n\n.infoBox > div > p {\n\tpadding-top: 3vh;\n\tmax-width: 45vw;\n\tpadding-left: 2.7vw;\n\tline-height: 4.5vh;\n}\n\n.others > h1 {\n\tpadding-top: 6.5vh;\n}\n\n.others > p {\n\tpadding-top: 0.5vh;\n}\n\n#leftBox{\n/*\tbackground-image: url(assets\\space.jpg);\t\n\tbackground-size: cover;*/\n\tposition: fixed;\n\tleft: 0px;\n\ttop: 0px;\n\theight: 100vh;\n\twidth: 50vw;\n\tbackground-position: 40%;\n/*\tbackground-color: rgba(67,65,65,.5); \n  \tbackground-blend-mode: multiply;*/\n}\n\n#leftBox > p {\n\tfont-size: 36;\n\tcolor: white;\n\ttext-align: center;\n\tpadding-top: 90vh;\n}\n\n#menu {\n\tcolor: white;\n\tfont-size: 20px;\n\tposition: relative;\n  \ttop: 50%;\n  \t-webkit-transform: translateY(-50%);\n  \t        transform: translateY(-50%);\n}\n\n#menu ul {\n\ttext-align: center;\n}\n\nli {\n\tcursor: pointer;\n}\n\nvideo {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n\tz-index: 0;\n\theight: 100vh;\n}\n\n@media screen and (max-height: 600px){\n  p {\n  \tfont-size: 9px;\n  }\n  #menu {\n  \tfont-size: 14px;\n  }\n}\n\n@media screen and (max-width: 1000px){\n  p {\n  \tfont-size: 10px;\n  }\n  #menu {\n  \tfont-size: 14px;\n  }\n}\n\n@media screen and (max-device-width: 600px){\n\t#menu {\n\t\ttop: 90%;\n\t\tpadding-left: 0;\n\t\tposition: fixed;\n\t\tleft: -5%;\n\t}\n\n\t#menu ul{\n  \t\tfont-size: 10px;\n  \t\ttext-align: left;\n  \t\twidth: 50px;\n  \t}\n\t#header{\n\t\tleft:29.9%;\n\t\twidth:70vw;\n\n\t}\n\t.infoBox{\n\t\tleft: 30%;\n\t\twidth:70vw;\n\t}\n\tp {\n\t\tfont-size: 7px;\n\t}\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<link href=\"https://fonts.googleapis.com/css?family=PT+Mono\" rel=\"stylesheet\">\n\n<video autoplay loop src=\"assets\\code.mp4\"></video>\n\n<div id=\"header\">\n  <p>arifammar93@gmail.com</p>\n  <a href=\"https://www.github.com/arifammr93\" target=\"_blank\"><img id=\"git\" src=assets\\github.png /></a>\n</div>\n\n<div id = \"leftBox\">\n  <div id = \"menu\">\n    <ul style=\"list-style: none\">\n      <a [ngx-scroll-to]=\"'#about'\"><li>About</li></a>\n      <a [ngx-scroll-to]=\"'#education'\"><li>Education &amp; Work</li></a>\n      <a [ngx-scroll-to]=\"'#projects'\"><li>Projects</li></a>\n    </ul>\n  </div>\n</div>\n\n<div class=\"infoBox\">\n  <div id=\"about\">\n    <h1>About Me</h1>\n    <p>\n      Hello! I’m a final year Computer Science student living in California. Not having settled on a specific CS subject yet, I have become deeply intersted in Machine Learning over the past few months. I have been working as an iOS developer for my University’s MBA department in addition to my own side projects.\n      <br><br>\n      Other than CS, I love physics, public affiars and poetry.\n      <br><br>\n      I grew up in Pakistan and have lived in Hong Kong for 3 years before moving to US to pursue a degree in CS.\n      <br><br>\n      -Ammar\n  </p>\n  </div>\n\n  <div class=\"others\" id=\"education\">\n    <h1>Education</h1>\n    <p>\n      California State University San Bernardino (CSUSB)   \n      <br>B.Sc. (Computer Science) \n      <br>2015-2019\n      <br><br>\n      University of Hong Kong (HKU) \n      <br>B.Sc. (Mechanical Engineering)\n      <br>2011-2014\n    </p>\n\n    <h1>Work</h1>\n    <p>\n      iOS Developer for MBA CSUSB\n      <br>Jan 2018 - Present\n      <br><br>\n      Delegate at National Model United Nations (NMUN)\n      <br>Jun 2017 - Present\n    </p>\n\n  </div>\n\n  <div class=\"others\" id=\"projects\">\n    <h1>Projects</h1>\n    <p>\n      <b>2 Minute Read - Creator </b>\n      <br> Currently working on a reading app for iOS which lets users read hand-picked short readings such as book excerpts, short proses and poems. Built using swift in Xcode.\n      <br><br>\n      <b>Searchsta.com - Creator </b>\n      <br> Wesbite that returns last 20 instagram images uploaded based on #hashtags. The site was been created with HTML, CSS and Javascript and integrated with Instagram API for accessing images.\n    </p>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map