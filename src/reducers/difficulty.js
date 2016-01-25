import { SET_DIFFICULTY } from '../actions/game'

/** The difficulty reducer is responsible for managing the difficulty for the game
 * levels -> The array of difficulties that can be chosen, the id is the number of pairs
 * selected -> the selected level
 * selectedName -> the selected level's label
 */
const initialState = {
  levels: [
    { id: 3, label: 'Easy'},
    { id: 4, label: 'Medium' },
    { id: 6, label: 'Hard' },
    { id: 10, label: 'Very hard'}
  ],
  selected: 4,
  selectedName: 'Medium'
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case SET_DIFFICULTY:
      let difficulty = state.levels.find((diff) => diff.id === action.pairs);

      return {
        levels: [...state.levels],
        selected: difficulty.id,
        selectedName: difficulty.label
      };
    default:
      return state
  }
}