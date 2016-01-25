import { TIMER_TICK, START_GAME, WON_GAME } from '../actions/game'

/** The timer reducer is responsible for managing the timer for the game
 * active -> Whether it is running
 * seconds -> How many seconds have passed
 *
 * */
const initialState = {
  active: false,
  seconds: 0
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        active: true,
        seconds: 0
      }
    case TIMER_TICK:
      if(!state.active) return state;
      return {
        active: true,
        seconds: state.seconds += 1
      }
    case WON_GAME:
      return {
        active: false,
        seconds: state.seconds
    }
    default:
      return state
  }
}