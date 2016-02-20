var menuState = {

    create: function() {
         
        // Panels
        
        game.add.sprite(30, 32, 'Panel');
        game.add.sprite(430, 32, 'Panel');
        game.add.sprite(830, 32, 'Panel');
        
        
        // Choose your characters text
        
        game.chooseYourFirstCharacterText = game.add.text(200, 51, 'CHOOSE YOUR 1ST CHARACTER', {font: '18px Courier', fill: '#fff'});
        game.chooseYourFirstCharacterText.anchor.x = 0.5;
        game.chooseYourSecondCharacterText = game.add.text(600, 51, 'CHOOSE YOUR 2ND CHARACTER', {font: '18px Courier', fill: '#fff'});
        game.chooseYourSecondCharacterText.anchor.x = 0.5;
        game.chooseYourThirdCharacterText = game.add.text(1000, 51, 'CHOOSE YOUR 3RD CHARACTER', {font: '18px Courier', fill: '#fff'});
        game.chooseYourThirdCharacterText.anchor.x = 0.5;

        
        
        // Avatars
        
        var avatarsGroup = game.add.group();
        
        var avatarWidth = 76,
            avatarsY = 75;
            avatarsCurrentX = 46;
            avatarsMarginRight = 1;
        
        for (var i = 1; i <= 12; i++) {
            avatarsGroup.create(avatarsCurrentX, avatarsY, 'Avatar Frame');
            avatarsCurrentX += avatarWidth + avatarsMarginRight;
            if (i === 4 || i === 8) {
                avatarsCurrentX += 94;
            }
        }

        
        
        var startButton = game.add.button(game.world.centerX, 525, 'Start Button', startBattle, this, 1, 0, 0);
        startButton.anchor.x = 0.5;
        
        function startBattle() {
            game.state.start('battle');
        }
        
        

    }

};