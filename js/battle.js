var battleState = {

    create: function() {

        game.add.plugin(Phaser.Plugin.Debug);


        var battleStateName = game.add.text(game.world.centerX, 150, 'Battle State', {font: '30px Courier', fill: '#fff'});
        battleStateName.anchor.x = 0.5;
        
        
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
            game.state.start('results');
        }


        game.add.plugin(Phaser.Plugin.Inspector);

    },
    
    update: function() {
        
        // if (isGameOver === true) {
        //     game.state.start('results');
        // }
        
    }


};