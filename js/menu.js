var menuState = {

    create: function() {
         
        game.add.sprite(30, 32, 'Panel');
        game.add.sprite(430, 32, 'Panel');
        game.add.sprite(830, 32, 'Panel');
        
        
        
        
        var startButton = game.add.button(game.world.centerX, 525, 'Start Button', startBattle, this, 1, 0, 0);
        startButton.anchor.x = 0.5;
        
        function startBattle() {
            game.state.start('battle');
        }
        
        

    }

};