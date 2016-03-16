'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = require('@naujs/component');

var Registry = (function (_Component) {
  _inherits(Registry, _Component);

  function Registry() {
    _classCallCheck(this, Registry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Registry).call(this));

    _this._registry = {};
    return _this;
  }

  _createClass(Registry, [{
    key: 'get',
    value: function get(key, defaultValue) {
      var value = this._registry[key];
      if (value === undefined) {
        return defaultValue;
      }
      return value;
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this._registry[key] = value;
      return this;
    }
  }, {
    key: 'del',
    value: function del(key) {
      delete this._registry[key];
      return this;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._registry = {};
      return this;
    }
  }, {
    key: 'getset',
    value: function getset(key, value, defaultValue) {
      var prev = this.get(key, defaultValue);
      this.set(key, value);
      return prev;
    }
  }]);

  return Registry;
})(Component);

module.exports = Registry;