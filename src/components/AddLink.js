import React, {Component} from 'react';

class AddLink extends Component {
  render() {
    return(
      <form>
        <h3>Add Link</h3>
        <div>
          <label for="title">Title</label>
          <input type="text" name="title"/>
        </div>

        <div>
          <label for="link">Link</label>
          <input type="text" name="link" id="link"/>
        </div>

        <div>
          <label for="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>

        <div>
          <label for="tags">Tags</label>
          <input type="text" name="tags" id="tags"/>
        </div>

        <div>
          <button>Save</button>
        </div>
      </form>
    )
  }
}

export default AddLink;
