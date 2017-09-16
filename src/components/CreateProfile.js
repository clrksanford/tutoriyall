import React, {Component} from 'react';
import axios from 'axios';

class CreateProfile extends Component {
  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    let options = {};
    let experience = this.refs.experience.value;
    let username = this.refs.username.value;

    options['experience'] = experience;
    options['username'] = username;

    console.log(options);
    // axios.post('http://localhost:4000', options).then(response => console.log(response))
  }

  render() {
    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        this._handleSubmit();
      }}>
        <h3>Create Profile</h3>

        <div>
          <img src="" alt="profile" />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" ref="username" />
        </div>

        <div>
          <label htmlFor="experience">Experience</label>
          <select name="experience" id="experience" ref="experience">
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

export default CreateProfile;
