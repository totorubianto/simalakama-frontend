import React, { Component } from 'react';

interface Props {
  child: any;
}
interface State {}

class Wraper extends Component<Props, State> {
  state = {};

  render() {
    return <div className='container'>{this.props.child}</div>;
  }
}

export default Wraper;
