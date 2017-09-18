import React, { Component } from 'react';
// import axios from 'axios';

export default class CreateProfile extends Component {
  _handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      experience: this._experience.value,
      username: this._username.value,
    };

    // eslint-disable-next-line no-console
    console.log(options);
    // axios.post('http://localhost:4000', options).then(response => console.log(response))
  };

  _ref = (name) => (node) => {
    this[`_${name}`] = node;
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <h3>Create Profile</h3>

        <div>
          <img src="" alt="profile" />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={this._ref('username')} />
        </div>

        <div>
          <label htmlFor="experience">Experience</label>
          <select id="experience" ref={this._ref('experience')}>
            <option id="0-2" value="0-2">0-2 years</option>
            <option id="3-5" value="3-5">3-5 years</option>
            <option id="5+" value="5+">5+ years</option>
          </select>
        </div>

        <input type="submit" value="Save" />
      </form>
    );
  }
}
