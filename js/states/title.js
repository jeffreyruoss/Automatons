/*global Phaser*/
/*global game*/

var titleState = {

    create: function() {

        game.add.plugin(Phaser.Plugin.Debug);

        var titleStateName = game.add.text(game.world.centerX, 150, 'Title State', {font: '30px Courier', fill: '#fff'});
        titleStateName.anchor.x = 0.5;
        
        var buttonX = game.world.centerX,
            buttonY = game.world.height - game.world.height * 0.25,
            button = game.add.button(buttonX, buttonY, 'Button'),
            buttonText = game.add.text(buttonX, buttonY, 'next', {font: '30px Courier', fill: '#000'});
        button.anchor.x = 0.5;
        button.anchor.y = 1;
        buttonText.anchor.x = 0.5;
        buttonText.anchor.y = 1;
        
        button.events.onInputDown.add(onDown, this);
        
        function onDown(sprite, pointer) {
            game.state.start('menu');
        }


        // game.add.plugin(Phaser.Plugin.Inspector);

    },
    
    update: function() {
        

            

        
    }


};
