/*global _*/
/*global Phaser*/
/*global bootState*/
/*global loadState*/
/*global titleState*/
/*global menuState*/
/*global battleState*/
/*global resultsState*/

// var w = window.innerWidth * window.devicePixelRatio,
//     h = window.innerHeight * window.devicePixelRatio;
    
// setting fixed size right now for faster/easier development
var w = 1200,
    h = 600;

console.count('test');
console.count('test');
console.count('test');
console.count('test');
console.count('test');
console.count('test');



var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

_.each({
    'boot':bootState,
    'load':loadState,
    'title':titleState,
    'menu':menuState,
    'battle':battleState,
    'results':resultsState
}, function(state, stateName){
    
    // this == game.state
    game.state.add(stateName, state);
    
});

game.state.start('boot');
