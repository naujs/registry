var Registry = require('../');

describe('Registry', () => {
  describe('#set', () => {
    it('should store value', () => {
      Registry.getInstance().set('test', 1);
      expect(Registry.getInstance()._registry).toEqual({
        'test': 1
      });
    });
  });

  describe('#get', () => {
    it('should return value', () => {
      Registry.getInstance().set('test', 1);
      expect(Registry.getInstance().get('test')).toEqual(1);
    });

    it('should return default value if not existed', () => {
      Registry.getInstance().set('test', 1);
      expect(Registry.getInstance().get('test1', 2)).toEqual(2);
    });
  });

  describe('#getset', () => {
    it('should return previous value before setting new one', () => {
      Registry.getInstance().set('test', 1);
      var prev = Registry.getInstance().getset('test', 2);
      expect(prev).toEqual(1);
      expect(Registry.getInstance().get('test')).toEqual(2);
    });
  });

  describe('#del', () => {
    it('should delete value', () => {
      Registry.getInstance().set('test', 1);
      Registry.getInstance().del('test');
      expect(Registry.getInstance().get('test')).toEqual(undefined);
    });
  });

  describe('#clear', () => {
    it('should clear everything', () => {
      Registry.getInstance().set('test', 1);
      Registry.getInstance().clear();
      expect(Registry.getInstance()._registry).toEqual({});
    });
  });
});
