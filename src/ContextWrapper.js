import React, { Component } from 'react';

class ContextWrapper extends Component {
  state = {
    authenticated : false,
    username: null,
  }

  static childContextTypes = {
    is_authenticated: React.PropTypes.func.isRequired,
    set_userinfo: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired
  }

  getChildContext(){
    return {
      is_authenticated: ()=>{
        this.setState({authenticated:true})
      },
      set_userinfo: (username)=>{this.setState({username:username})},
      authenticated: this.state.authenticated
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default ContextWrapper;
