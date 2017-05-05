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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

const $l = (selector) => {

  switch (typeof selector) {
    case "string":
      const nodeList = document.querySelectorAll(selector);
      const elementList = [];
      for (var i = 0; i < nodeList.length; i++) {
        elementList.push(nodeList[i]);
      }
      return new DOMNodeCollection(elementList);

    case HTMLElement:
      return new DOMNodeCollection([selector]);
  }
};

window.$l = $l;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(elements){
    this.elements = elements;
  }

  html(string = null){
    if (string === null) {
      return this.elements[0].innerHTML;
    } else {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML = string;
        return this.elements;
      }
    }
  }

  empty () {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = "";
    }
    return this.elements;
  }

  append (arg) {
    for (var i = 0; i < this.elements.length; i++) {
      if (arg instanceof HTMLElement){
        this.elements[i].appendChild(arg);
        return this.elements;
      } else if (typeof arg === "string"){
        this.elements[i].innerHTML += (arg);
        return this.elements;
      }
    }
  }

  attr (name, value = null) {
    if (value === null) {
      return this.elements[0].getAttribute(name);
    } else {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].setAttribute(name, value);
      }
      return this.elements;
    }
  }

  addClass (name) {
      const classes = this.elements[0].getAttribute("class");
      if (classes === null){
        this.attr("class", name);
      } else {
        const newClasses = name + " " + classes;
        this.attr("class", newClasses);
      }
      return this.elements;
  }

  removeClass (classes) {
    const currentClasses = this.elements[0].getAttribute("class").split(" ");
    const keptClasses = [];
    for (var i = 0; i < currentClasses.length; i++) {
      if (!classes.includes(currentClasses[i])) {
        keptClasses.push(currentClasses[i]);
      }
    }

    if (keptClasses.length === 0) {
      this.elements[0].removeAttribute("class");
      return this.elements;
    }

    this.attr("class", keptClasses.join(" "));
    return this.elements;
  }

  children () {
    const kids = [];
    for (var i = 0; i < this.elements.length; i++) {
      kids = kids.concat(this.elements[i].children);
    }
    return new DOMNodeCollection(kids);
  }

  parent () {
    const parents = [];
    for (var i = 0; i < this.elements.length; i++) {
      parents = parents.concat(this.elements[i].parentElement);
    }
    return new DOMNodeCollection(parents);
  }

  find (selector) {
    const descendents = [];

    for (var i = 0; i < this.elements.length; i++) {
      descendents = descendents.concat(this.elements[i].querySelectorAll(selector));
    }
    return new DOMNodeCollection(descendents);
  }

  remove () {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].remove();
    }

  }


}


module.exports = DOMNodeCollection;


/***/ })
/******/ ]);