var resultsState = {

    create: function() {

        game.add.plugin(Phaser.Plugin.Debug);


        var resultsStateName = game.add.text(game.world.centerX, 150, 'Results State', {font: '30px Courier', fill: '#fff'});
        resultsStateName.anchor.x = 0.5;


        game.add.plugin(Phaser.Plugin.Inspector);

    }

};