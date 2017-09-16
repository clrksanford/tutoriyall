import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import Autocomplete from 'react-autocomplete';

class AddLink extends Component {
  constructor() {
    super();

    this.state = {
      defaultTags: [
        'AngularJS',
        'BackboneJS',
        'Bootstrap',
        'C#',
        'C++',
        'Django',
        'Java',
        'JavaScript',
        'jQuery',
        'NodeJS',
        'Python',
        'ReactJS',
      ],
      autoCompleteList: [],
      selected: [],
      value: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    console.log('submitting');
    let options = {};

    let {title, link, description} = this.refs;

    title = title.value;
    link = link.value;
    description = description.value;

    options['title'] = title;
    options['link'] = link;
    options['description'] = description;

    // TODO: implement axios once API is running
    // axios.post(link, options).then(response => console.log(respons));
  }

  render() {
    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        this._handleSubmit();}}
      >
        <h3>Add Link</h3>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref="title"/>
        </div>

        <div>
          <label htmlFor="link">Link</label>
          <input type="text" name="link" id="link" ref="link"/>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" ref="description"></textarea>
        </div>

        <div>
          <label htmlFor="tags">Tags</label>
          <Autocomplete
            getItemValue={(item) => item.label}
            items={[
              {label: 'AngularJS'},
              {label: 'BackboneJS'},
              {label: 'Bootstrap'},
              {label: 'C#'},
              {label: 'C++'},
              {label: 'Django'},
              {label: 'Java'},
              {label: 'JavaScript'},
              {label: 'jQuery'},
              {label: 'NodeJS'},
              {label: 'Python'},
              {label: 'ReactJS'},
            ]}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
              </div>
            }
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}
            onSelect={(val) => {
              let {selected} = this.state;

              selected.push(val);

              this.setState({value: ''})
            }}
          />
          <ul id="tag_list">
            {_.map(this.state.selected, (tag) => {
              return <li>{tag}</li>
            })}
          </ul>
        </div>

        <div>
          <input type="submit" value="Save"/>
        </div>
      </form>
    )
  }
}

export default AddLink;
