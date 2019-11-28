"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var QueryString = {
  get: function get(key) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var qs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    if (qs === undefined) {
      qs = window.location.href;
    }

    var results = new RegExp('[?&]' + key + '=([^&#]*)').exec(qs);

    if (results) {
      return results[1] || defaultValue;
    }

    return defaultValue;
  }
};
var _default = QueryString;
exports["default"] = _default;