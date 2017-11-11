import React, { Component } from 'react';
import { textColor } from './utils';
import './form-style.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div id="test">
        <form>
          <input
            type="text"
            placeholder="say hello!"
            value={this.state.value}
            onChange={this.handleChange}
            className={textColor(this.state.value, 10)}
          />
        </form>
      </div>
    );
  }
}
