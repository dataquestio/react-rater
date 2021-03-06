'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = function (_Component) {
  _inherits(Star, _Component);

  function Star() {
    _classCallCheck(this, Star);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Star).apply(this, arguments));
  }

  _createClass(Star, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var nameMap = {
        isDisabled: 'is-disabled',
        isActive: 'is-active',
        willBeActive: 'will-be-active'
      };
      var className = Object.keys(nameMap).filter(function (prop) {
        return _this2.props[prop];
      }).map(function (prop) {
        return nameMap[prop];
      }).join(' ');
      return _react2.default.createElement(
        'a',
        { className: className },
        '★'
      );
    }
  }]);

  return Star;
}(_react.Component);

exports.default = Star;


Star.defaultProps = {
  willBeActive: false,
  isActive: false,
  isDisabled: false
};

Star.propTypes = {
  isActive: _react.PropTypes.bool,
  willBeActive: _react.PropTypes.bool,
  isDisabled: _react.PropTypes.bool
};