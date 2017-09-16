import React, {Component} from 'react';

class CreateProfile extends Component {
  render() {
    return(
      <form>
        <h3>Create Profile</h3>

        <h4>Username</h4>
        <img src="" alt="profile" />

        <label for="experience">Experience</label>
        <select name="experience" id="experience">
          <option id="0-2" value="0-2">0-2 years</option>
          <option id="3-5" value="3-5">3-5 years</option>
          <option id="5+" value="5+">5+ years</option>
        </select>
      </form>
    );
  }
}

export default CreateProfile;
