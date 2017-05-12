/// <reference path="../../components1/components1_level2/components1_level3/homel3.tsx" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var components1_1 = require("../../components1");
var HomeC3L2 = (function (_super) {
    __extends(HomeC3L2, _super);
    function HomeC3L2() {
        _super.apply(this, arguments);
    }
    HomeC3L2.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h2", null, "this is home component3 Level2"), 
            React.createElement(components1_1.HomeL3, null)));
    };
    return HomeC3L2;
}(React.Component));
exports.HomeC3L2 = HomeC3L2;
//# sourceMappingURL=homeC3L2.js.map