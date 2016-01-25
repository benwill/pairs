import { WON_GAME } from '../actions/game'
import { NUMBER_OF_HIGH_SCORES } from '../constants/application'

/** The scoreboard reducer is responsible for managing the highest scores
 * Holds an array of 'score-lists', one for each difficulty, with the highest scores ordered by time
 */

// These scores are hard-coded but in reality we would use an API
const initialState = [
  { difficulty : "Easy", scores: [{ name: 'Ben', time: 30 },{ name: 'John', time: 40 },{ name: 'Chris', time: 50 },{ name: 'Henry', time: 60 },{ name: 'Wayne', time: 70 }]},
  { difficulty : "Medium", scores: [{ name: 'Ben',time: 30 },{ name: 'Arnold', time: 60 }]},
  { difficulty : "Hard", scores: [{ name: 'Ben',time: 100 }]},
]

// Helper functions
export const createHighScore = (action) => { return {name: action.name, time: action.time}};

export default function scoreboard(state = initialState, action) {
  switch (action.type) {
    case WON_GAME: {

      let newState = [];
      let newHighScore=false;
      let newScoreList=true;
      let scoresToShow = NUMBER_OF_HIGH_SCORES;

      // Loop over our score lists and find the right difficulty one
      state.forEach((scoreList) => {
        let scores = scoreList.scores;

        // Check the relevant difficulties scores, and update if necessary
        if(scoreList.difficulty === action.difficulty){
          newScoreList=false;
          // Check if we have enough scores to satisfy the number of scores to show constant
          if(scoreList.scores.length < scoresToShow){
            scores = [...scoreList.scores, createHighScore(action)]
            newHighScore=true;
          }
          else {
            // Check if the winning time is good enough to go on the leader board
            if(action.time < scores[scoresToShow-1].time){
              // Remove last score
              scores.pop();
              scores = [...scores, createHighScore(action)];
              newHighScore=true;
            }
          }
          // Sort array based on time
          scores.sort((a, b) => a.time - b.time);
        }
        newState.push({difficulty : scoreList.difficulty, scores: scores});
      });

      // If there isn't any high scores for our difficulty, add a new list
      if(newScoreList) newState.push({difficulty : action.difficulty, scores: [createHighScore(action)]});

      return newHighScore || newScoreList ? newState: state;
    }
    default:
      return state
  }
}