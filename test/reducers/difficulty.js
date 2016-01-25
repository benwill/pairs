import expect from 'expect'
import difficulty from '../../src/reducers/difficulty.js'
import { SET_DIFFICULTY } from '../../src/actions/game.js'

describe('difficulty reducer', () => {
  it('should have initial state -> Medium selected by default', () => {
	  expect(
      difficulty(undefined, {})
    ).toEqual({
      levels: [
        { id: 3, label: 'Easy'},
        { id: 4, label: 'Medium' },
        { id: 6, label: 'Hard' },
        { id: 10, label: 'Very hard'}
      ],
      selected: 4,
      selectedName: 'Medium'
    });
  });	
  
  it('Should handle invalid action',  () => {
	  expect(
      difficulty(undefined, { type: 'SOME-ACTION'})
    ).toEqual({
        levels: [
          { id: 3, label: 'Easy'},
          { id: 4, label: 'Medium' },
          { id: 6, label: 'Hard' },
          { id: 10, label: 'Very hard'}
        ],
        selected: 4,
        selectedName: 'Medium'
      }
    );
  });	
  
  it('Should handle SET_DIFFICULTY to easy',  () => {
	  expect(
      difficulty(undefined, { type: SET_DIFFICULTY, pairs: 3})
    ).toEqual({
        levels: [
          { id: 3, label: 'Easy'},
          { id: 4, label: 'Medium' },
          { id: 6, label: 'Hard' },
          { id: 10, label: 'Very hard'}
        ],
        selected: 3,
        selectedName: 'Easy'
      }
    );
  });	
  
  it('Should handle SET_DIFFICULTY to very hard',  () => {
	  expect(
      difficulty(undefined, { type: SET_DIFFICULTY, pairs: 10})
    ).toEqual({
        levels: [
          { id: 3, label: 'Easy'},
          { id: 4, label: 'Medium' },
          { id: 6, label: 'Hard' },
          { id: 10, label: 'Very hard'}
        ],
        selected: 10,
        selectedName: 'Very hard'
      }
    );
  });	
});