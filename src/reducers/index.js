import { combineReducers } from 'redux'

import timer from './timer'
import board from './board'
import difficulty from './difficulty'
import game from './game'
import scoreboard from './scoreboard'

const rootReducer = combineReducers({
  timer,
  board,
  difficulty,
  game,
  scoreboard
})

export default rootReducer