# Pairs game

## Installation

```bash
npm install
npm start
```

## Tests

```bash
npm test
```

Game should be viewable on localhost:3000, if you do need to change port, edit the devServer.js file.

## Constants

In the constants/application folder, you can change a few settings, the cheat one is particularly useful (turn it to TRUE) to allow you to make the card numbers visible.

## Tech

* I used https://github.com/gaearon/react-transform-boilerplate as a starting point, which gave me hot reloading, webpack and babel.
* I decided to use react-redux, gave me an excuse to learn it and seemed a good fit with the way the data flowed between components
* Sass for styling
* ES6 throughout
* Jest for testing components
* My home pc is a windows box, but hopefully no issues on mac/linux

## Problems

I only had this weekend to work on this and unfortunately ran into a few issues I didn't have time to resolve:

* Images - couldn't figure out how to use the shared svg sprite sheet and also resize the images, so pulled them out into seperate files. From what I could tell I needed to use the Svg tag and using xlink, but I struggled to get it working with webpack.
* Unit & Browser testing - Struggled to get this set up correctly

## Future work/improvements

Development improvements
* Better unit test coverage, all of the components and parts of the application do feel de-coupled, although since I was learning react/redux
* Use a shared sprite sheet for svg images (improve performance, can cache etc.)
* Minification/bundling for a production version
* Use css-modules, to help tag elements with classes
* Responsive design, support mobiles, tablets etc.


Future Features
* Ability to pause the game while playing (raise an action which would stop the timer, and prevent cards being turned over)
* Could be a better work-flow with the scoring, let the user know they have a high score, or don't take the name until they have a high score
* New game-mode with a count-down timer, beat the clock style
* More difficulties (just add to the array, and add some more card images)
* Hook up the scoring with an API, real high scores for people to compete with one another