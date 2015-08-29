import expect from 'expect';
import Plugin from '../src/Plugin';
import reduceVisitors from '../src/reduceVisitors';

describe('#reduceVisitors', () => {
  it('should reduce a plugin with a single visitor to an array with a single function', () => {
    const mock = function enter(node) { return 1; };

    const visitors = Object.defineProperty({}, 'enter', {
      value: mock,
      writeable: false,
      enumerable: true,
      configurable: false
    });

    const p = new Plugin('foo', visitors);

    expect(reduceVisitors([p])).toEqual({ enter: [mock] });
  });

  it('should transform plugins with different visitors to an object with keys that have an array with a single function as its value', () => {
    const mocks = [
      function enter(node) { return 1; },
      function exit(node) { return 2; }
    ];

    const visitors = mocks.map((mock) => Object.defineProperty({}, mock.name, {
      value: mock,
      writeable: false,
      enumerable: true,
      configurable: false
    }));

    const plugins = [
      new Plugin('foo', visitors[0]),
      new Plugin('bar', visitors[1])
    ];

    expect(reduceVisitors(plugins))
      .toEqual({ enter: [mocks[0]], exit: [mocks[1]] });
  })

  it('should reduce plugins with the same visitor to an array with multple functions', () => {
    const mocks = [
      function enter(node) { return 1; },
      function enter(node) { return 2; }
    ];

    const visitors = mocks.map((mock) => Object.defineProperty({}, 'enter', {
      value: mock,
      writeable: false,
      enumerable: true,
      configurable: false
    }));

    const plugins = [
      new Plugin('foo', visitors[0]),
      new Plugin('bar', visitors[1])
    ];

    expect(reduceVisitors(plugins)).toEqual({ enter: mocks });
  });
});
