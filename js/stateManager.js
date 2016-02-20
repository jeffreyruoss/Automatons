// var w = window.innerWidth * window.devicePixelRatio,
//     h = window.innerHeight * window.devicePixelRatio;
    
// setting fixed size right now for faster/easier development
var w = 1200,
    h = 600;

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('title', titleState);
game.state.add('menu', menuState);
game.state.add('battle', battleState);
game.state.add('results', resultsState);

game.state.start('boot');
