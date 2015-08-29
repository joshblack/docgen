/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import { traverse } from 'babel';

export default function visit(ast, visitors) {
  let result = [];
  const visitorActions = Object.keys(visitors)
    .reduce((acc, v) => ({ ...acc, [v]: reduceActions(v, visitors) }), {});

  traverse(ast, visitorActions);

  return result;

  function reduceActions(visitor, visitors) {
    return function (...args) {
      result = visitors[visitor]
        .reduce((acc, fn) => acc.concat(fn(...args)), result);
    }
  }
}
