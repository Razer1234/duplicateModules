"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var components1_level2_1 = require("./components1_level2");
var HomeL1_1 = (function (_super) {
    __extends(HomeL1_1, _super);
    function HomeL1_1() {
        _super.apply(this, arguments);
    }
    HomeL1_1.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h2", null, "this is home Level1_1"), 
            React.createElement(components1_level2_1.HomeL2, null)));
    };
    return HomeL1_1;
}(React.Component));
exports.HomeL1_1 = HomeL1_1;
//# sourceMappingURL=homeL1_1.js.map