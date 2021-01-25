

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactResponsive = require('react-responsive');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

___$insertStyle(".rs-widget {\n  position: absolute;\n  background-color: #fff;\n  width: 5rem;\n  padding: 5px;\n  height: 1.5rem;\n  opacity: 0.3;\n  box-shadow: rgba(17, 17, 26, 0.3) 0px 4px 6px, rgba(17, 17, 26, 0.2) 0px 8px 18px;\n  position: absolute;\n  z-index: 99999999;\n  border-radius: 8px;\n  transition: all 200ms ease-in-out;\n  display: flex;\n  align-items: center;\n}\n.rs-widget .rs-widget-label {\n  font-size: 12px;\n  font-weight: bold;\n  color: #34374b;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  line-height: 2rem;\n  overflow: hidden;\n  padding: 0 5px;\n}\n\n.rs-position-point {\n  position: absolute;\n  height: 7px;\n  width: 7px;\n  border-radius: 8px;\n  border: 1px solid;\n  border-color: #34374b;\n  background-color: #fff;\n}\n\n.rs-widget:hover {\n  width: 5rem;\n  height: 5rem;\n  opacity: 0.8;\n}\n.rs-widget:hover .rs-widget-label {\n  line-height: 5rem;\n}\n\n.rs-position-top-left {\n  top: 5px;\n  left: 5px;\n}\n\n.rs-position-top-right {\n  top: 5px;\n  right: 5px;\n}\n\n.rs-position-bottom-left {\n  bottom: 5px;\n  left: 5px;\n}\n\n.rs-position-bottom-right {\n  bottom: 5px;\n  right: 5px;\n}\n\n.rs-position-active {\n  background-color: #34374b;\n}");

(function (Position) {
    Position["TOPLEFT"] = "TOPLEFT";
    Position["TOPRIGHT"] = "TOPRIGHT";
    Position["BOTTOMLEFT"] = "BOTTOMLEFT";
    Position["BOTTOMRIGHT"] = "BOTTOMRIGHT";
})(exports.Position || (exports.Position = {}));
var getWidgetPosition = function (position) {
    switch (position) {
        case exports.Position.TOPLEFT:
            return { top: '10px', left: '10px' };
        case exports.Position.BOTTOMLEFT:
            return { bottom: '10px', left: '10px' };
        case exports.Position.TOPRIGHT:
            return { top: '10px', right: '10px' };
        case exports.Position.BOTTOMRIGHT:
            return { bottom: '10px', right: '10px' };
        default:
            return { top: '10px', left: '10px' };
    }
};
var PointPositioner = function (_a) {
    var currentPosition = _a.currentPosition, setPosition = _a.setPosition;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "rs-position-point rs-position-bottom-left " + (currentPosition === exports.Position.BOTTOMLEFT ? 'rs-position-active' : ''), onClick: function () { return setPosition(exports.Position.BOTTOMLEFT); } }),
        React__default['default'].createElement("div", { className: "rs-position-point rs-position-top-left " + (currentPosition === exports.Position.TOPLEFT ? 'rs-position-active' : ''), onClick: function () { return setPosition(exports.Position.TOPLEFT); } }),
        React__default['default'].createElement("div", { className: "rs-position-point rs-position-bottom-right " + (currentPosition === exports.Position.BOTTOMRIGHT ? 'rs-position-active' : ''), onClick: function () { return setPosition(exports.Position.BOTTOMRIGHT); } }),
        React__default['default'].createElement("div", { className: "rs-position-point rs-position-top-right " + (currentPosition === exports.Position.TOPRIGHT ? 'rs-position-active' : ''), onClick: function () { return setPosition(exports.Position.TOPRIGHT); } })));
};
var BreakpointWidget = function (props) {
    var _a;
    var _b = React.useState(exports.Position.BOTTOMLEFT), currentPosition = _b[0], setCurrentPosition = _b[1];
    var _c = React.useState(false), focused = _c[0], setFocused = _c[1];
    var currentBreakPoint = React.useRef('');
    (_a = props === null || props === void 0 ? void 0 : props.breakPoints) === null || _a === void 0 ? void 0 : _a.forEach(function (point) {
        var isMatch = reactResponsive.useMediaQuery({
            query: "(min-width: " + point.minWidth + "px) and (max-width: " + (point.maxWidth ? point.maxWidth : 999999999999) + "px)",
        });
        if (isMatch) {
            currentBreakPoint.current = point.label;
        }
    });
    return (React__default['default'].createElement("div", { className: "rs-widget", style: getWidgetPosition(currentPosition), onMouseOver: function () { return setFocused(true); }, onMouseLeave: function () { return setFocused(false); } },
        React__default['default'].createElement("div", { className: "rs-widget-label" }, currentBreakPoint.current.toString()),
        focused && (React__default['default'].createElement(PointPositioner, { currentPosition: currentPosition, setPosition: setCurrentPosition }))));
};

exports.default = BreakpointWidget;
//# sourceMappingURL=index.js.map
