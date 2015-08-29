/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import expect from 'expect';
import collect from '../src/collect';
import files from './fixtures/files';
import importDeclaration from './fixtures/plugins/importDeclaration';
import variableDeclaration from './fixtures/plugins/variableDeclaration';

describe('#collect', () => {
  it('should return file information from a plugin', () => {
    const [App] = files;

    expect(collect([App], [importDeclaration]))
      .toEqual([
        { source: 'react', specifier: 'React' },
        { source: './Title', specifier: 'Title' }
      ]);
  });

  it('should return file information from multiple plugins', () => {
    const [App] = files;

    expect(collect([App], [importDeclaration, variableDeclaration]))
      .toEqual([
        { source: 'react', specifier: 'React' },
        { source: './Title', specifier: 'Title' },
        { name: 'a', value: 1 }
      ]);
  });
});
