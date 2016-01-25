// APP ACTIONS
export const START_GAME = 'START_GAME'
export const SET_DIFFICULTY = 'SET_DIFFICULTY'
export const CHANGE_NAME = 'CHANGE_NAME'
export const VIEW_SCOREBOARD = 'VIEW_SCOREBOARD'

// GAME ACTIONS
export const BACK_TO_MENU = 'BACK_TO_MENU'
export const WON_GAME = 'WON_GAME'

// TIMER ACTIONS
export const TIMER_TICK = 'TIMER_TICK'

// CARD ACTIONS
export const TURN_CARD = 'TURN_CARD'
export const CHECK_FOR_PAIR = 'CHECK_FOR_PAIR'

// ACTION CALLERS
export function startGame(numberOfPairs) {
  return {type: START_GAME, numberOfPairs : numberOfPairs }
}

export function setDifficulty(pairs) {
  return { type: SET_DIFFICULTY, pairs: pairs }
}

export function changePlayerName(playerName) {
  return { type: CHANGE_NAME, playerName: playerName }
}

export function viewScoreboard() {
  return { type: VIEW_SCOREBOARD  }
}

export function backToMenu() {
  return { type: BACK_TO_MENU }
}

export function wonGame(name, time, difficulty) {
  return { type: WON_GAME, name: name, time: time, difficulty: difficulty }
}

export function timerTick(){
  return { type: TIMER_TICK }
}


export function turnCard(card){
  return {type: TURN_CARD,  card: card}
}

export function checkForPair(card){
  return {type: CHECK_FOR_PAIR,  card: card}
}