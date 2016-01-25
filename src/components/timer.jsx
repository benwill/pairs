import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div className="timer">
        Time taken: {this.props.seconds.toString()}
      </div>
    );
  }
}

Timer.propTypes = {
  seconds: React.PropTypes.number.isRequired
};

export default Timer;