/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import expect from 'expect';
import Plugin from '../src/Plugin';
import reduceVisitors from '../src/reduceVisitors';

describe('#reduceVisitors', () => {
  it('should reduce a plugin with a single visitor to an array with a single function', () => {
    const mock = function enter() { return 1; };

    const visitors = Object.defineProperty({}, 'ImportDeclaration', {
      value: mock,
      writeable: false,
      enumerable: true,
      configurable: false
    });

    const p = new Plugin('foo', visitors);

    expect(reduceVisitors([p])).toEqual({ ImportDeclaration: [mock] });
  });

  it('should transform plugins with different visitors to an object with keys that have an array with a single function as its value', () => {
    const mocks = [
      function ImportDeclaration() { return 1; },
      function VariableDeclaration() { return 2; }
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
      .toEqual({ ImportDeclaration: [mocks[0]], VariableDeclaration: [mocks[1]] });
  });

  it('should reduce plugins with the same visitor to an array with multple functions', () => {
    const mocks = [
      function ImportDeclaration() { return 1; },
      function ImportDeclaration() { return 2; }
    ];

    const visitors = mocks.map((mock) => Object.defineProperty({}, 'ImportDeclaration', {
      value: mock,
      writeable: false,
      enumerable: true,
      configurable: false
    }));

    const plugins = [
      new Plugin('foo', visitors[0]),
      new Plugin('bar', visitors[1])
    ];

    expect(reduceVisitors(plugins)).toEqual({ ImportDeclaration: mocks });
  });
});
