import expect from 'expect'
import board from '../../src/reducers/board.js'
import { START_GAME, BACK_TO_MENU, TURN_CARD, CHECK_FOR_PAIR } from '../../src/actions/game.js'

describe('board reducer', () => {
  it('should have initial state', () => {
	  expect(
      board(undefined, {})
    ).toEqual({
      cards: [],
      selectedCard: null,
      canTurnCard: false,
      complete: false
    });
  });	
  
  it('Should handle invalid action',  () => {
	  expect(
      board(undefined, { type: 'SOME-INVALID-ACTION'})
    ).toEqual({
      cards: [],
      selectedCard: null,
      canTurnCard: false,
      complete: false
    });
  });	
  
  it('Should handle START_GAME',  () => {
    let result = board(undefined, { type: START_GAME, numberOfPairs: 4 });
    
    // 4 pairs => 8
    expect(result.cards.length).toEqual(8);
    expect(result.selectedCard).toEqual(null);
    expect(result.canTurnCard).toEqual(true);
    expect(result.complete).toEqual(false);
  });	
  
  it('Should handle TURN_CARD',  () => {
    let result = board(undefined, { type: TURN_CARD, card: { id: 1, number: 1, visible: false } });
    
    expect(result.canTurnCard).toEqual(false);
    
    // Check that this is the only card visible
    result.cards.forEach((card) => {
      if(card.id === 1){
        expect(card.visible === true)
      } else {
        expect(card.visible===false);
      }
    });
  });	
  
  it('Should handle CHECK_FOR_PAIR , first selected',  () => {
    let result = board(undefined, { type: CHECK_FOR_PAIR, card: { id: 1, number: 1, visible: false } });
    
    expect(result.complete).toEqual(false);
    expect(result.canTurnCard).toEqual(true);
    expect(result.selectedCard).toEqual({id: 1, number: 1, visible: true});
  });	
  
  it('Should handle CHECK_FOR_PAIR , second selected -> no match',  () => {
    let boardState = {
      cards: [{id: 1, number:1, visible: true}, {id: 2, number:1, visible: false}, {id: 3, number:2, visible: false}, {id: 4, number:2, visible: false}],
      selectedCard: {id: 1, number:1, visible: true},
      canTurnCard: false,
      complete: false
    };
    
    let result = board(boardState, { type: CHECK_FOR_PAIR, card: { id: 3, number: 2, visible: false } });
    
    expect(result.complete).toEqual(false);
    expect(result.canTurnCard).toEqual(true);
    expect(result.selectedCard).toEqual(null);
    
    // Check no cards are visible
    result.cards.forEach((card) => expect(card.visible === false));
  });	
  
  it('Should handle CHECK_FOR_PAIR , second selected -> match (Not complete)',  () => {
    let boardState = {
      cards: [{id: 1, number:1, visible: true}, {id: 2, number:1, visible: false}, {id: 3, number:2, visible: false}, {id: 4, number:2, visible: false}],
      selectedCard: {id: 1, number:1, visible: true},
      canTurnCard: false,
      complete: false
    };
    
    let result = board(boardState, { type: CHECK_FOR_PAIR, card: { id: 2, number: 1, visible: false } });
    
    expect(result.complete).toEqual(false);
    expect(result.canTurnCard).toEqual(true);
    expect(result.selectedCard).toEqual(null);
    
    // Check all cards with the number 1 are visible
    result.cards.forEach((card) => expect(card.visible === (card.number === 1)));
  });	
  
  it('Should handle CHECK_FOR_PAIR , second selected -> match (Complete)',  () => {
    let boardState = {
      cards: [{id: 1, number:1, visible: true}, {id: 2, number:1, visible: true}, {id: 3, number:2, visible: true}, {id: 4, number:2, visible: true}],
      selectedCard: {id: 3, number:2, visible: true},
      canTurnCard: false,
      complete: false
    };
    
    let result = board(boardState, { type: CHECK_FOR_PAIR, card: { id: 4, number: 2, visible: true } });
    expect(result.canTurnCard).toEqual(false);
    expect(result.complete).toEqual(true);
    
    // Check all cards are visible
    result.cards.forEach((card) => expect(card.visible === true));
  });
  
  it('Should handle BACK_TO_MENU',  () => {
    let boardState = {
      cards: [{id: 1, number:1, visible: true}, {id: 2, number:1, visible: false}, {id: 3, number:2, visible: false}, {id: 4, number:2, visible: false}],
      selectedCard: {id: 1, number:1, visible: true},
      canTurnCard: false,
      complete: false
    };
  
     expect(
      board(boardState, { type: 'BACK_TO_MENU'})
    ).toEqual({
      cards: [],
      selectedCard: null,
      canTurnCard: false,
      complete: false
    });
  });
});