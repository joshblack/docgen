/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import invariant from 'invariant';
import { types as t } from 'babel';

export default class Plugin {
  constructor(name, visitors) {
    const invalidVisitors = Object.keys(visitors)
      .filter((visitor) => !t.TYPES[visitor]);

    invariant(
      invalidVisitors,
      'You\'re using unsupported visitor types. See: %s',
      invalidVisitors
    );

    this.name = name;
    this.visitors = visitors;
  }
}
