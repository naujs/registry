var Component = require('@naujs/component');

class Registry extends Component {
  constructor() {
    super();
    this._registry = {};
  }

  get(key, defaultValue) {
    let value = this._registry[key];
    if (value === undefined) {
      return defaultValue;
    }
    return value;
  }

  set(key, value) {
    this._registry[key] = value;
    return this;
  }

  del(key) {
    delete this._registry[key];
    return this;
  }

  clear() {
    this._registry = {};
    return this;
  }

  getset(key, value, defaultValue) {
    let prev = this.get(key, defaultValue);
    this.set(key, value);
    return prev;
  }
}

module.exports = Registry;
