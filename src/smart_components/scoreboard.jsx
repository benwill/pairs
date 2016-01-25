import React, { Component } from 'react';

import Scorelist from '../components/scorelist.jsx'

class Scoreboard extends Component {
  render() {
    let lists = this.props.scores.map((list, id) => {
      let uniqueId = `scoreList_${id}`
      return (
          <Scorelist key={uniqueId} items={list.scores} difficulty={list.difficulty}/>
      )
    });

    return (
      <div className="scoreboard">
        <h1>Fastest Times</h1>
        <hr/>
        {lists}
        <hr className="clearfix"/>
        <div>
          <a onClick={this.props.onQuit}>Back to menu</a>
        </div>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  onQuit: React.PropTypes.func.isRequired,
  scores: React.PropTypes.array.isRequired
};

export default Scoreboard;