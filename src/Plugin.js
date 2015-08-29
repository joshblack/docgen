/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import invariant from 'invariant';
import { types as t } from 'babel';

export default class Plugin {
  constructor(name, visitors) {
    this.name = name;

    // Verify visitors with t.TYPES
    this.visitors = visitors;
  }
}
