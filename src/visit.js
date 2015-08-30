/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import { traverse } from 'babel';

/**
 * Visit an AST with a collection of visitors and return a collection of all
 * the data collected by the handlers called by these visitors.
 *
 * @param  {object} ast
 * @param  {object} visitors
 * @return {Array<object>}
 */
export default function visit(ast, visitors) {
  let result = [];

  /**
   * Wrap all the actions of a specific visitor and pass in the args given
   * to the function by babel's traverse method to each function in a
   * visitor.
   *
   * @param  {string} visitor  Visitor name, e.g. ImportDeclaration
   * @param  {object} visitors Object of visitor methods
   * @return {void}
   */
  function reduceActions(visitor, pluginVisitors) {
    return (...args) => {
      result = pluginVisitors[visitor]
        .reduce((acc, fn) => acc.concat(fn(...args)), result);
    };
  }

  const visitorActions = Object.keys(visitors)
    .reduce((acc, v) => ({ ...acc, [v]: reduceActions(v, visitors) }), {});

  traverse(ast, visitorActions);

  return result;
}
