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
        {
          file: App,
          meta: [
            { source: 'react', specifier: 'React' },
            { source: './Title', specifier: 'Title' }
          ]
        }
      ]);
  });

  it('should return file information from multiple plugins', () => {
    const [,,Foo] = files;

    expect(collect([Foo], [importDeclaration, variableDeclaration]))
      .toEqual([
        {
          file: Foo,
          meta: [
            { source: 'react', specifier: 'React' },
            { name: 'a', value: 1 }
          ]
        }
      ]);
  });

  it('should return information from multiple files from a plugin', () => {
    const [App,,Foo] = files;
    const collectedInfo = collect([App, Foo], [importDeclaration]);
    const [AppInfo, FooInfo] = collectedInfo;

    expect(AppInfo['meta']).toEqual([
      { source: 'react', specifier: 'React' },
      { source: './Title', specifier: 'Title' }
    ]);

    expect(FooInfo['meta']).toEqual([
      { source: 'react', specifier: 'React' }
    ]);
  });

  it('should return information from multiple files from a variety of plugins', () => {
    const [App,,Foo] = files;
    const collectedInfo = collect(
      [App, Foo],
      [importDeclaration, variableDeclaration]
    );
    const [AppInfo, FooInfo] = collectedInfo;

    expect(AppInfo['meta']).toEqual([
      { source: 'react', specifier: 'React' },
      { source: './Title', specifier: 'Title' }
    ]);

    expect(FooInfo['meta']).toEqual([
      { source: 'react', specifier: 'React' },
      { name: 'a', value: 1 }
    ]);
  });
});
