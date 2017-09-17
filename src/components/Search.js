import React, { Component } from 'react';
import axios from 'axios';
import { API_LINK } from '../constants';

export default class Search extends Component {
  _handleSubmit(e) {
    e.preventDefault();

    const searchBy = this._search_by.value;
    const searchVal = this._search_val.value;
    const { userId } = this.props;
    let api_link;

    if (searchBy === 'tag') {
      api_link = `${API_LINK}/get_other_users_links/${userId}?tags=${searchVal}`;
    } else {
      api_link = API_LINK;
    }

    axios.get(api_link).then((/*response*/) => {
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
      ]);
    });
  }

  _ref = (name) => (node) => {
    this[`_${name}`] = node;
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <span>Search By: </span>
        <select ref={this._ref('search_by')}>
          <option value="user">User</option>
          <option value="tag">Tag</option>
        </select>

        <input type="text" ref={this._ref('search_val')} />

        <input type="submit" value="Go" />
      </form>
    );
  }
}
