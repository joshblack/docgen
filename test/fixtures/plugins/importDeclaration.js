/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import Plugin from '../../../src/Plugin';

export default new Plugin('importDeclaration', {
  ImportDeclaration(node) {
    return {
      source: node.source.value,
      specifier: node.specifiers[0].local.name
    };
  }
});
