import { START_GAME, BACK_TO_MENU, VIEW_SCOREBOARD, CHANGE_NAME } from '../actions/game'
import { APP_STATUS } from '../constants/appStatus'

/** The game reducer is responsible for managing what the user see's, and also their name
 * status -> Whether the user is on the menu, playing or viewing the scoreboard
 * playerName -> Name of the player
 * canStart -> Whether the player can start a new game
 */
const initialState = {
  status: APP_STATUS.MENU,
  playerName: 'Player1',
  canStart: true
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        status: APP_STATUS.PLAYING,
        playerName: state.playerName,
        canStart: state.canStart
      };
    case CHANGE_NAME:
      // Make sure a name has been entered
      let playerName = action.playerName;
      let canStart = playerName.length > 0;

      return {
        status: APP_STATUS.MENU,
        playerName: playerName,
        canStart: canStart
      };
    case BACK_TO_MENU:
      return {
        status: APP_STATUS.MENU,
        playerName: state.playerName,
        canStart: state.canStart
      };
    case VIEW_SCOREBOARD:
      return {
        status: APP_STATUS.SCOREBOARD,
        playerName: state.playerName,
        canStart: state.canStart
      }
    default:
      return state
  }
}