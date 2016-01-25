// Libraries
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Constants
import { APP_STATUS } from '../constants/appStatus'

// Actions
import * as GameActions from '../actions/game'

// Styling
import general from '../styles/app.scss'

// Smart Components
import Menu from '../smart_components/menu.jsx'
import Game from '../smart_components/game.jsx'
import Scoreboard from '../smart_components/scoreboard.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { game, board, timer, difficulty, actions, scoreboard } = this.props;

    // We have three types of 'smart component'
    let component;
    if(game.status === APP_STATUS.MENU){
      component =
          <Menu levels={difficulty.levels}
                selectedLevel={difficulty.selected}
                scores={scoreboard}
                playerName={game.playerName}
                canStart={game.canStart}
                handleStartGame={actions.startGame}
                changeDifficulty={actions.setDifficulty}
                changePlayerName={actions.changePlayerName}
                viewScoreboard={actions.viewScoreboard}
          />
    }
    else if (game.status === APP_STATUS.SCOREBOARD){
      component =
          <Scoreboard scores={scoreboard}
                      onQuit={actions.backToMenu}/>
    }
    else {
      component =
          <Game board={board}
                timer={timer}
                playerName={game.playerName}
                difficulty={difficulty.selectedName}
                onTimerTick={actions.timerTick}
                onWonGame={actions.wonGame}
                onTurnCard={actions.turnCard}
                onCheckForPair={actions.checkForPair}
                onQuit={actions.backToMenu}
          />
    }

    return (
        <div className="app-wrapper">
          {component}
        </div>
    )
  }
}

// Pull our state from our redux store
function mapStateToProps(state) {
  return {
    game: state.game,
    difficulty: state.difficulty,
    board: state.board,
    timer: state.timer,
    scoreboard: state.scoreboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)