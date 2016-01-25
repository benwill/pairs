import React, { Component } from 'react';
import Score from '../components/score.jsx'

class Scorelist extends Component {
  render() {
      let scores = this.props.items.map((score, scoreId) => {
        let uniqueKey = `score_${this.props.difficulty}_${scoreId}`
        return (
            <Score key={uniqueKey} rank={scoreId} name={score.name} time={score.time}/>
        )
      });

      return (
          <div className="score-list">
            <h2>{this.props.difficulty}</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {scores}
              </tbody>
            </table>
          </div>
      )
    };
}

Scorelist.propTypes = {
  difficulty: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired
};

export default Scorelist;