import React, { Component } from 'react';
import { CHEAT, TRANSITION_TIME, TICK_TIME} from '../constants/application'
import Card from '../components/card.jsx'
import Timer from '../components/timer.jsx'
import Winner from '../components/winner.jsx'

class Game extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Game decides on interval in which to raise callbacks to the parent app
    // The parent app then calls the relevant action(s)
    this.interval = setInterval(() => this.props.onTimerTick(), TICK_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleFlipCard(card) {

    // We only send actions if the card isn't visible already, the game hasn't been won, and a card isn't already transitioning
    if(!card.visible && this.props.board.canTurnCard && !this.props.board.complete) {

      // Show the card to the user
      this.props.onTurnCard(card);

       // Set a delay to allow transition, we want to let the user to see the card...
       setTimeout(() => {
         // Check to see if we have a pair once the transition is done
         this.props.onCheckForPair(card);

         // Check if the game has been won
         if(this.props.board.complete) {
           // If the game has been won, fire an action to let other parts of the app know
           this.props.onWonGame(this.props.playerName, this.props.timer.seconds, this.props.difficulty);
         }
       }, TRANSITION_TIME);
    }
  }

  render() {
    const { board, timer, onQuit, playerName, difficulty } = this.props
    let onHandleFlipcard = this.handleFlipCard;

    let cards = board.cards.map((card) => {
      return <Card key={card.id} number={card.number} visible={card.visible} showNumber={CHEAT} onClick={onHandleFlipcard.bind(this, card)}></Card>
    });

    let congrats = !board.complete ? '' : <Winner playerName={playerName} difficulty={difficulty} seconds={timer.seconds}/>

    return (
        <div className="game-wrapper">
          <div>
            <Timer seconds={timer.seconds}/>
            <hr className="clearfix"/>
            {cards}
            {congrats}
          </div>
          <hr className="clearfix"/>
          <div>
            <a onClick={onQuit}>Back to menu</a>
          </div>
        </div>
      );
  }
}

Game.propTypes = {
  board: React.PropTypes.object.isRequired,
  timer: React.PropTypes.object.isRequired,
  difficulty: React.PropTypes.string.isRequired,
  onTimerTick: React.PropTypes.func.isRequired,
  onWonGame: React.PropTypes.func.isRequired,
  onTurnCard: React.PropTypes.func.isRequired,
  onCheckForPair: React.PropTypes.func.isRequired,
  onQuit: React.PropTypes.func.isRequired
};

export default Game;