import React, { Component } from 'react';
import DropDown from '../components/dropdown.jsx'
import Input from '../components/input.jsx'
import Button from '../components/button.jsx'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.onDifficultyChange = this.onDifficultyChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onGameStart = this.onGameStart.bind(this);
  }

  onDifficultyChange(e){
    // Make sure we convert the selected value to an integer here, or it will cause problems later
    this.props.changeDifficulty(parseInt(e.target.value));
  }

  onNameChange(e){
    this.props.changePlayerName(e.target.value);
  }

  onGameStart(){
    this.props.handleStartGame(this.props.selectedLevel);
  }

  render() {
    let { canStart, playerName, levels, selectedLevel, viewScoreboard } = this.props;

    let errorMsg = canStart ? '' : <strong>Please enter your name in order to play</strong>

    return (
        <div className="main-menu">
          <h1>Pairs Game</h1>
          <hr/>
          <div>
            {errorMsg}
          </div>
          <div className="start-game">
            <Input value={playerName} onChange={this.onNameChange}/>
            <DropDown selectedValue={selectedLevel} options={levels} onChange={this.onDifficultyChange}/>
            <Button onClick={this.onGameStart} text="Start Game" disabled={!canStart} title="Start Game!" disabledTitle="You must enter a name"/>
          </div>

          <div className="view-scoreboard">
            <a onClick={viewScoreboard}>View Scoreboard</a>
          </div>
        </div>
    );
  }
}

Menu.propTypes = {
  levels: React.PropTypes.array.isRequired,
  selectedLevel: React.PropTypes.number.isRequired,
  scores: React.PropTypes.array.isRequired,
  handleStartGame: React.PropTypes.func.isRequired,
  changeDifficulty: React.PropTypes.func.isRequired,
  viewScoreboard: React.PropTypes.func.isRequired,
};

export default Menu;