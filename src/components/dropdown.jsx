import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    let options = this.props.options.map((opt) => {
      return <option key={opt.id} value={opt.id} >{opt.label}</option>
    });

    return (
      <select placeholder='Choose a difficulty' value={this.props.selectedValue} onChange={this.props.onChange.bind(this)}>
        {options}
			</select>
    );
  }
}

Dropdown.propTypes = {
  options: React.PropTypes.array.isRequired,
  selectedValue: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Dropdown;