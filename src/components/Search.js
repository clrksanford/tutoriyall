import React, {Component} from 'react';
import axios from 'axios';
import API_LINK from '../constants.js';

class Search extends Component {
  static contextTypes = {
    set_userinfo: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired,
    user_id: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (event)=>{
    event.preventDefault
    console.log("seacrh")
    var tag_list = ['python']
    let api_link = API_LINK + '/get_other_users_links/' + this.context.user_id +'?' + tag_list.join(',');
    axios.get(api_link, {crossDomain: true, xhrFields: { withCredentials: true }})
      .then((resp) => {
        console.log(resp)
        this.context.set_userinfo(resp.data)
      })
      .catch((error) => {
        console.log(error);
        if(error == 'Error: Network Error'){
          this.props.history.push("/");
        }
      });
  }

  render() {
    return(
      <form id="search">
        <select>
          <option id="user" value="user">User</option>
          <option id="tag" value="tag">Tag</option>
        </select>

        <input type="text" id="search_by"/>
        <span onClick={this.handleSearch}>Search</span>
      </form>
    );
  }
}

export default Search;
