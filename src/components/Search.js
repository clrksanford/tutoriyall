import React, {Component} from 'react';

class Search extends Component {
  render() {
    return(
      <form id="search">
        <h4>Search By:</h4>
        <select>
          <option id="user" value="user">User</option>
          <option id="tag" value="tag">Tag</option>
        </select>

        <input type="text" id="search_by"/>
      </form>
    );
  }
}

export default Search;
