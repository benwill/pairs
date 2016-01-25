import expect from 'expect'
import timer from '../../src/reducers/timer.js'
import { TIMER_TICK, START_GAME, WON_GAME } from '../../src/actions/game.js'

describe('timer reducer', () => {
  it('should have initial state', () => {
	  expect(
      timer(undefined, {})
    ).toEqual({active: false, seconds: 0 });
  });	
  
  it('Should handle invalid action',  () => {
	  expect(
      timer(undefined, { type: 'INVALID-ACTION'})
    ).toEqual({active: false, seconds: 0 });
  });	
  
  it('Should handle START_GAME',  () => {
	  expect(
      timer(undefined, { type: START_GAME})
    ).toEqual({active: true, seconds: 0 });
  });	
  
  it('Should handle WON_GAME',  () => {
    expect(
      timer({active: true, seconds: 10 }, { type: WON_GAME})
    ).toEqual({active: false, seconds: 10 });
  });	
  
  it('Should handle TIMER_TICK', () => {
	  expect(
      timer({active: true, seconds: 5 }, { type: TIMER_TICK})
    ).toEqual({active: true, seconds: 6 });
  });	
});