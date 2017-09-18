import React, { Component } from 'react';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';
// import scrapeIt from 'scrape-it';
import { API_LINK } from '../constants.js';

const items = [
  { label: 'AngularJS' },
  { label: 'BackboneJS' },
  { label: 'Bootstrap' },
  { label: 'C#' },
  { label: 'C++' },
  { label: 'Django' },
  { label: 'Java' },
  { label: 'JavaScript' },
  { label: 'jQuery' },
  { label: 'NodeJS' },
  { label: 'Python' },
  { label: 'ReactJS' },
];
const linkSection = {
  display: 'inline-block',
  verticalAlign: 'top',
  marginLeft: '2%',
  color: '#23b567',
  marginBottom: '5%',
};
const linkTitle = {
  marginBottom: '15%',
};
const saveButtonStyle = {
  color: '#ffffff',
  backgroundColor: '#6f7175',
  borderRadius: '2px',
  border: 'none',
  padding: '40%',
  cursor: 'pointer',
};
const addLinkStyle = {
  color: '#23b567',
};

export default class AddLink extends Component {
  state = {
    selectedTags: [],
    value: '',
  };

  _handleChange = () => {
    // TODO send API request to scrape site
  };

  _handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('userId', this.props.userId);
    const options = {
      description: this._description.value,
      url: this._url.value,
      tags: this.state.selectedTags,
      title: this._title.value,
    };
    const { userId } = this.props;

    // eslint-disable-next-line no-console
    console.log(options);
    const api_link = `${API_LINK}/links/${userId}`;

    axios.post(api_link, options).then((/*response*/) => {
      this.props.addNewLink(options);
    });
  }

  _ref = (name) => (node) => {
    this[`_${name}`] = node;
  };

  _getItemValue(item) {
    return item.label;
  }

  _renderItem (item, isHighlighted) {
    return (
      <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
        {item.label}
      </div>
    );
  }

  _shouldItemRender (item, value) {
    return item.label.toLowerCase().indexOf(value.toLowerCase()) > -1;
  }

  _onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  _onSelect = (val) => {
    const { selectedTags } = this.state;

    selectedTags.push(val);

    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <h3 style={addLinkStyle}>Add a Link</h3>
        <div style={linkSection}>
          <label style={linkTitle} htmlFor="title">Title</label><br/>
          <input type="text" id="title" ref={this._ref('title')} />
        </div>

        <div style={linkSection}>
          <label style={linkTitle} htmlFor="url">Link</label><br/>
          <input
            type="text"
            id="url"
            ref={this._ref('url')}
            onChange={this._handleChange}
          />
        </div>

        <div style={linkSection}>
          <label style={linkTitle} htmlFor="description">Description</label><br/>
          <textarea id="description" ref={this._ref('description')} />
        </div>

        <div style={linkSection}>
          <label style={linkTitle}>Tags</label><br/>
          <Autocomplete
            getItemValue={this._getItemValue}
            items={items}
            renderItem={this._renderItem}
            shouldItemRender={this._shouldItemRender}
            value={this.state.value}
            onChange={this._onChange}
            onSelect={this._onSelect}
          />
          <ul>
            {this.state.selectedTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div style={linkSection}>
          <input style={saveButtonStyle} type="submit" value="Save"/>
        </div>
      </form>
    );
  }
}
