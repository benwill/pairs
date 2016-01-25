import expect from 'expect'

import scoreboard from '../../src/reducers/scoreboard.js'
import { WON_GAME  } from '../../src/actions/game.js'

// Set up some objects to help
const easyScores = [{ name: 'Ben', time: 30 },{ name: 'John', time: 40 },{ name: 'Chris', time: 50 },{ name: 'Henry', time: 60 },{ name: 'Wayne', time: 70 }];
const mediumScores = [{ name: 'Ben',time: 30 },{ name: 'Arnold', time: 60 }];
const hardScores = [{ name: 'Ben',time: 100 }];
    
describe('scoreboard reducer', () => {
  it('should have some initial state', () => {
	  expect(
      scoreboard(undefined, {})
    ).toNotEqual(undefined).toBeA(Object);
  });	
  
  it('should handle an invalid actionby returning the same state', function(){
    let state = [{ difficulty: 'Easy', scores: []}];
	  expect(
      scoreboard(state, { type: 'Invalid Action'})
    ).toEqual(state);
  });	
  
  it('should handle no high score', () => {
    let action = { type: WON_GAME, difficulty: 'Easy', name: 'Not quite good enough', time: 71};
    
    expect(
      scoreboard([
        { difficulty : 'Easy', scores: [...easyScores]},
        { difficulty : 'Medium', scores: [...mediumScores]},
        { difficulty : 'Hard', scores: [...hardScores]}
      ], action)
    ).toEqual([
      { difficulty : 'Easy', scores: [{ name: 'Ben', time: 30 },{ name: 'John', time: 40 },{ name: 'Chris', time: 50 },{ name: 'Henry', time: 60 },{ name: 'Wayne', time: 70 }]},
      { difficulty : 'Medium', scores: [{ name: 'Ben',time: 30 },{ name: 'Arnold', time: 60 }]},
      { difficulty : 'Hard', scores: [{ name: 'Ben',time: 100 }]}
    ]);
  });	
    
  it('should handle new top score', () => {
    let action = { type: WON_GAME, difficulty: 'Easy', name: 'New high scorer', time: 1};
    
    expect(
      scoreboard([{ difficulty : 'Easy', scores: [...easyScores]}], action)
    ).toEqual([
      { difficulty : 'Easy', scores: [{ name: 'New high scorer', time: 1 },{ name: 'Ben', time: 30 },{ name: 'John', time: 40 },{ name: 'Chris', time: 50 },{ name: 'Henry', time: 60 }]}
    ]);
  });
  
  it('should handle new 3rd place score', () => {
    let action = { type: WON_GAME, difficulty: 'Easy', name: 'New 3rd place scorer', time: 41};
    
    expect(
      scoreboard([{ difficulty : 'Easy', scores: [...easyScores]}], action)
    ).toEqual([
      { difficulty : 'Easy', scores: [{ name: 'Ben', time: 30 },{ name: 'John', time: 40 },{ name: 'New 3rd place scorer', time: 41 }, { name: 'Chris', time: 50 },{ name: 'Henry', time: 60 }]}
    ]);
  });
  
  it('should handle new 5th place score', () => {
    let action = { type: WON_GAME, difficulty: 'Easy', name: 'Just made it', time: 60};
    
    expect(
      scoreboard([{ difficulty : 'Easy', scores: [...easyScores]}], action)
    ).toEqual([
      { difficulty : 'Easy', scores: [{ name: 'Ben', time: 30 },{ name: 'John', time: 40 },{ name: 'Chris', time: 50 },{ name: 'Henry', time: 60 },{ name: 'Just made it', time: 60 }]}
    ]);
  });
  
  it('first score for difficulty (new score list)', () => {
    let action = { type: WON_GAME, difficulty: 'Very Hard', name: 'First person to win very hard', time: 200};
    expect(
      scoreboard([], action)
    ).toEqual([
      { difficulty : 'Very Hard', scores: [{ name: 'First person to win very hard', time: 200 }]}
    ]);
  });
});