import React, {Component} from 'react';

class AddLink extends Component {
  render() {
    return(
      <form>
        <h3>Add Link</h3>
        <label for="title">Title</label>
        <input type="text" name="title"/>

        <label for="link">Link</label>
        <input type="text" name="link" id="link"/>
      </form>
    )
  }
}

export default AddLink;
