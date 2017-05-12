"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../components1/components1_level2/components1_level3/homel3.tsx" />
var React = require("react");
var _1 = require("./components3_level2/");
var HomeC3L1 = (function (_super) {
    __extends(HomeC3L1, _super);
    function HomeC3L1() {
        _super.apply(this, arguments);
    }
    HomeC3L1.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h2", null, "this is home c3 Level1"), 
            React.createElement(_1.HomeC3L2, null)));
    };
    return HomeC3L1;
}(React.Component));
exports.HomeC3L1 = HomeC3L1;
//# sourceMappingURL=homeC3L1.js.map