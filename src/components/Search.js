import React, {Component} from 'react';
import axios from 'axios';
import API_LINK from '../constants';

class Search extends Component {
  _handleSubmit() {
    let searchBy = this.refs.search_by.value;
    let searchVal = this.refs.search_val.value;
    let {userId} = this.props;
    let api_link;

    if (searchBy === 'tag') {
      api_link = `${API_LINK}/get_other_users_links/${userId}?tags=${searchVal}`
    } else {
      api_link = API_LINK;
    }

    axios.get(api_link).then(response => {
      this.props.renderOthersLinks([
        {
          title: 'Learn Node',
          username: 'siliconion',
          url: 'learnnode.com',
          description: 'Learn Node'
        },
        {
          title: 'Learn Node',
          username: 'siliconion',
          url: 'learnnode.com',
          description: 'Learn Node'
        }
      ])
    });
  }

  render() {
    return(
      <form id="search" onSubmit={(e) => {
        e.preventDefault();
        this._handleSubmit();
      }}>
        <span>Search By: </span>
        <select ref="search_by">
          <option id="user" value="user">User</option>
          <option id="tag" value="tag">Tag</option>
        </select>

        <input type="text" id="search_by" ref="search_val"/>

        <input type="submit" value="Go" />
      </form>
    );
  }
}

export default Search;
