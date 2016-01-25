import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <input placeholder='Enter your name' value={this.props.value} onChange={this.props.onChange.bind(this)}/>
    );
  }
}

Input.propTypes = {
  onChange: React.PropTypes.func.isRequired
};

export default Input;