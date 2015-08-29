/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import Plugin from '../../../src/Plugin';

export default new Plugin('variableDeclaration', {
  VariableDeclaration(node) {
    return {
      name: node.declarations[0].id.name,
      value: node.declarations[0].init.value
    };
  }
});
