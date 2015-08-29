/**
 *
 * @doc general
 */

import React, { Component } from 'react';

export default class Title extends Component {
  static propTypes = {
    foo: React.PropTypes.string
  }

  /**
   * Handles the on click event
   * @param  {event} e
   * @return {void}
   */
  handleOnClick(e) {}

  render() {
    return <h1>{this.props.children}</h1>
  }
}
