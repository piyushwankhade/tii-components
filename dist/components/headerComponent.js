"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HeaderComponent = function HeaderComponent() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: "#52ac4e",
      color: "white",
      height: "80px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }
  }, "Logo", /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "New Home Page"), /*#__PURE__*/_react["default"].createElement("li", null, "About Us"))));
};
var _default = exports["default"] = HeaderComponent;