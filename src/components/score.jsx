import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
        <tr className="score">
          <td>{this.props.name}</td>
          <td>{this.props.time.toString()}</td>
        </tr>
    );
  }
}

Score.propTypes = {
  name: React.PropTypes.string.isRequired,
  time: React.PropTypes.number.isRequired
};

export default Score;