import React, { Component } from 'react';

class Winner extends Component {
  render() {
    return (
        <div className="winner-message">
          Well done {this.props.playerName}, you finished {this.props.difficulty} in {this.props.seconds} seconds.
        </div>
    );
  }
}

Winner.propTypes = {
  seconds: React.PropTypes.number.isRequired,
  playerName: React.PropTypes.string.isRequired,
  difficulty: React.PropTypes.string.isRequired
};

export default Winner;