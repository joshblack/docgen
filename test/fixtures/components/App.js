/**
 *
 * @doc general
 */

import React from 'react';
import Title from './Title';

export default class App extends React.Component {
  static defaultProps = {
    foo: 'bar'
  }

  render() {
    return <Title>Hello World</Title>
  }
}
