import { START_GAME, BACK_TO_MENU, TURN_CARD, CHECK_FOR_PAIR, TIMER_TICK } from '../actions/game'
import { randomizeArray } from '../helpers/arrays'

/** The board reducer is responsible for managing the state of the cards within the game
 * cards -> The array of cards which are in play
 * selectedCard -> Lets us store the first card within a selected pair for comparison
 * canTurnCard -> Lets us disable any other cards being turned over, so the user can only turn one at a time
 * complete -> A flag to let us know when the game has been won
 */

// Board reducer is responsible for keeping track of the reducers states and what's currently selected
const initialState = {
  cards: [],
  selectedCard: null,
  canTurnCard: false,
  complete: false
};

const randomizeCards = (numberOfPairs) => {
  let cards = [];

  // Generate an ordered array
  let id = 1;
  for(let i = 0; i < numberOfPairs; i++) {
    // This is the type of card, there should be two of each type
    let cardNumber = i+1;

    // Add a new pair of cards (each with a unique id)
    cards.push(createNewCard(id, cardNumber));
    id+=1;
    cards.push(createNewCard(id, cardNumber));
    id+=1;
  }
  return randomizeArray(cards);
};

const createNewCard = (id, cardNumber) => { return {id: id, number: cardNumber, visible: false}};

export default function board(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
    {
      var numberOfCards = action.numberOfPairs;

      return {
        cards: randomizeCards(numberOfCards),
        selectedCard: null,
        canTurnCard: true,
        complete: false
      }
    }
    case TURN_CARD:
    {
      // Turn the given card over
      action.card.visible = true;

      return {
        cards: [...state.cards],
        selectedCard: state.selectedCard,
        canTurnCard: false,
        complete: state.complete
      }
    }
    case CHECK_FOR_PAIR:
    {
      // If no card has been selected, this one can stay visible
      if(state.selectedCard === null) {
        return {
          cards: state.cards,
          selectedCard: action.card,
          canTurnCard: true,
          complete: state.complete }
      }

      // We have a selected card, do the numbers match?
      if(action.card.number === state.selectedCard.number){
        // Check if the game has been won
        let anyFailed = state.cards.find((card) => card.visible === false);
        state.complete = !anyFailed;
      }
      else {
        // Cards didn't match, turn them back over
        state.selectedCard.visible = false;
        action.card.visible = false;
      }

      // Update our results
      return {
        cards: [...state.cards],
        selectedCard: null,
        complete: state.complete,
        canTurnCard: true
      }
    }
    case BACK_TO_MENU:
    {
      return {
        cards: [],
        selectedCard: null,
        complete: false,
        canTurnCard: false
      }
    }
    default:
      return state
  }
}