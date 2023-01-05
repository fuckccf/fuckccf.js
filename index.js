"use strict";
exports.__esModule = true;
var cbs = [], CCF = {
    fuck: function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        cbs.forEach(function (cb) {
            cb();
        });
    },
    on: function (ev, cb) {
        cbs.push(cb);
    }
};
exports["default"] = CCF;
