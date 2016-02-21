var battleState = {

    create: function() {

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

        game.add.tileSprite(0, 0, 1200, 600, 'Battle Background');

        game.charactersGroup = game.add.group();

        game.knight = game.add.sprite(0, 0, 'Knight');
        game.knight.frame = 0;
        game.knight.animations.add('Attack Right', [4, 5, 1]);
        game.knight.animations.add('Attack Left', [2, 3, 0]);
        game.charactersGroup.add(game.knight);

        // game.knight.animations.play('Attack Right', 23, false);


    },
    
    update: function() {
        
        // if (isGameOver === true) {
        //     game.state.start('results');
        // }
        
    }


};