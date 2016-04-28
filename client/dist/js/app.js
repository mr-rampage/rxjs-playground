(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FIRST = '_first';
var LAST = '_last';

var Name = function () {
  function Name() {
    _classCallCheck(this, Name);
  }

  _createClass(Name, [{
    key: 'first',
    get: function get() {
      return this[FIRST];
    },
    set: function set(value) {
      this[FIRST] = value;
    }
  }, {
    key: 'last',
    get: function get() {
      return this[LAST];
    },
    set: function set(value) {
      this[LAST] = value;
    }
  }]);

  return Name;
}();

exports.default = Name;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var USER_NAME = '_userName';
var NAME = '_name';

var Person = exports.Person = function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: 'userName',
    get: function get() {
      return this[USER_NAME];
    },
    set: function set(value) {
      this[USER_NAME] = value;
    }
  }, {
    key: 'name',
    get: function get() {
      return this[NAME];
    },
    set: function set(value) {
      this[NAME] = value;
    }
  }]);

  return Person;
}();

},{}]},{},[1,2,3]);
