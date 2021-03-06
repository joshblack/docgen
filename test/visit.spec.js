/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import expect from 'expect';
import { parse } from 'babel';
import visit from '../src/visit';

const ast = parse(`import Foo from 'foo';`);

describe('#visit', () => {
  it('should correctly report the results of a single visitor', () => {
    function mock() {
      return { foo: 'bar' };
    }

    const visitors = {
      'ImportDeclaration': [mock]
    };

    expect(visit(ast, visitors)).toEqual([{ foo: 'bar' }]);
  });

  it('should correctly report the results of multiple visitors', () => {
    function local(node) {
      return { local: node.specifiers[0].local.name };
    }

    function source(node) {
      return { from: node.source.value };
    }

    const visitors = {
      'ImportDeclaration': [local, source]
    };

    expect(visit(ast, visitors)).toEqual([{ local: 'Foo' }, { from: 'foo' }]);
  });
});
