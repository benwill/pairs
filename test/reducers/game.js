import expect from 'expect'
import game from '../../src/reducers/game.js'
import {START_GAME, BACK_TO_MENU, VIEW_SCOREBOARD, CHANGE_NAME  } from '../../src/actions/game.js'
import { APP_STATUS } from '../../src/constants/appStatus'


describe('game reducer', () => {
  it('should have initial state', () => {
	  expect(
      game(undefined, {})
    ).toEqual({ status: APP_STATUS.MENU, playerName: 'Player1', canStart: true});
  });	
  
  it('Should handle invalid action', () => {
	  expect(
      game(undefined, { type: 'INVALID-ACTION'})
    ).toEqual({ status: APP_STATUS.MENU, playerName: 'Player1', canStart: true});
  });	
  
  it('Should handle START_GAME', () => {
	  expect(
      game({ status: APP_STATUS.MENU, playerName: 'Bob', canStart: true}, { type: START_GAME })
    ).toEqual({ status: APP_STATUS.PLAYING, playerName: 'Bob', canStart: true});
  });	
 
  it('Should handle CHANGE_NAME (Valid)', () => {
	  expect(
      game({ status: APP_STATUS.MENU, playerName: 'Random', canStart: true}, { type: CHANGE_NAME, playerName: 'Chris' })
    ).toEqual({ status: APP_STATUS.MENU, playerName: 'Chris', canStart: true});
  });	
 
  it('Should handle CHANGE_NAME (Invalid)', () => {
	  expect(
      game({ status: APP_STATUS.MENU, playerName: 'Random', canStart: true}, { type: CHANGE_NAME, playerName: '' })
    ).toEqual({ status: APP_STATUS.MENU, playerName: '', canStart: false});
  });	
 
  it('Should handle BACK_TO_MENU ', () => {
	  expect(
      game({ status: APP_STATUS.PLAYING, playerName: 'Something', canStart: true}, { type: BACK_TO_MENU })
    ).toEqual({ status: APP_STATUS.MENU, playerName: 'Something', canStart: true});
  });	
  
  it('Should handle VIEW_SCOREBOARD ', () => {
	  expect(
      game({ status: APP_STATUS.MENU, playerName: 'Jeff', canStart: true}, { type: VIEW_SCOREBOARD })
    ).toEqual({ status: APP_STATUS.SCOREBOARD, playerName: 'Jeff', canStart: true});
  });	
 
});