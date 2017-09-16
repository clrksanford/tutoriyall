import React, { Component } from 'react';

class ContextWrapper extends Component {
  state = {
    authenticated : false
  }

  static childContextTypes = {
    is_authenticated: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired
  }

  render() {
    return <div>{this.props.children}</div>;
  }

  getChildContext(){
    return {
      is_authenticated: ()=>{this.setState({authenticated:true})},
      authenticated: this.state.authenticated
    }
  }
}

export default ContextWrapper;
