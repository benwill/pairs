# Pairs game

## Installation

```bash
npm install
npm start
```

Game should be viewable on localhost:3000, if you do need to change port, edit the devServer.js file.


## Tests

```bash
npm test
```

All tests are found in the test folder.

## Constants

In the constants/application.js file, you can change a few settings, the cheat one is particularly useful (turn it to TRUE) to allow you to make the card numbers visible.

## Tech

* I used https://github.com/gaearon/react-transform-boilerplate as a starting point, which gave me hot reloading, webpack and babel.
* I decided to use react-redux, gave me an excuse to learn it and seemed a good fit with the way the data flowed between components
* Sass for styling
* ES6 throughout with the help of babel
* Mocha for unit tests
* My home pc is a windows box, but hopefully no issues on mac/linux

## Problems

I only had this weekend to work on this and unfortunately ran into a few issues I didn't have time to resolve:

* Unit testing - I spent a while trying to get jest working to test the components, so in the end switched to using mocha and just did some unit tests on the reducers.
* Images - couldn't figure out how to use the shared svg sprite sheet and also resize the images, so pulled them out into seperate files. From what I could tell I needed to use the Svg tag and using xlink, but I struggled to get it working with webpack within the time I had.
* IE support - just down to time (some animations/using array.find method)...

## Future work/improvements

Development improvements
* Unit tests for components / More unit test coverage
* Clean up the project structure, setup a proper production build with minification etc.
* Use a shared sprite sheet for svg images (improve performance, can cache etc.)
* Use css-modules, to help tag elements with classes
* Responsive design, support mobiles, tablets etc.

Future Features
* Ability to pause the game while playing (raise an action which would stop the timer, and prevent cards being turned over)
* Could be a better work-flow with the scoring, let the user know they have a high score, or don't take the name until they have a high score
* New game-mode with a count-down timer, beat the clock style
* More difficulties (just add to the difficulties array, and add some more card images)
* Hook up the scoring with an API, real high scores for people to compete with one another