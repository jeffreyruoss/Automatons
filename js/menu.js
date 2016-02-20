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

        
        // Character avatars choice
        
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
        
        
        // Choose behaviors text
        game.chooseBehaviorsText = game.add.text(200, 167, 'CHOOSE BEHAVIORS', {font: '18px Courier', fill: '#fff'});
        game.chooseBehaviorsText.anchor.x = 0.5;
        game.chooseBehaviorsText = game.add.text(600, 167, 'CHOOSE BEHAVIORS', {font: '18px Courier', fill: '#fff'});
        game.chooseBehaviorsText.anchor.x = 0.5;
        game.chooseBehaviorsText = game.add.text(1000, 167, 'CHOOSE BEHAVIORS', {font: '18px Courier', fill: '#fff'});
        game.chooseBehaviorsText.anchor.x = 0.5;
        
        
        // Behavior choice
        
        game.behaviorSlotsGroup = game.add.group();
        
        var behaviorSlotWidth = 308,
            behaviorSlotHeight = 55,
            behaviorSlotsCurrentX = 46,
            behaviorSlotsCurrentY = 190,
            behaviorSlotsMarginBottom = 2;
        
        for (var i = 1; i <= 15; i++) {
            // game.behaviorSlotsGroup.create(behaviorSlotsCurrentX, behaviorSlotsCurrentY, 'Behavior Frame');
            var thisBehaviorSlot = game.make.button(behaviorSlotsCurrentX, behaviorSlotsCurrentY, 'Behavior Frame', onClickAction, this, 1, 0, 0);
            game.behaviorSlotsGroup.add(thisBehaviorSlot);
            behaviorSlotsCurrentY += behaviorSlotHeight + behaviorSlotsMarginBottom;
            if (i === 5 || i === 10) {
                behaviorSlotsCurrentX += behaviorSlotWidth + 92;
                behaviorSlotsCurrentY = 191;
            }
        }
        
        
        // Behavior slots functionality
        
        game.behaviorSlotsGroup.forEach( function(behaviorSlot) { 
            behaviorSlot.events.onInputDown.add(behaviorSlotOnClick, this);
        }, this);
        
        function behaviorSlotOnClick (sprite, pointer) {
            console.log(sprite);
        }
        
        function onClickAction() {
            // do we need this?
        }
        
        
        

        
        
        var startButton = game.add.button(game.world.centerX, 525, 'Start Button', startBattle, this, 1, 0, 0);
        startButton.anchor.x = 0.5;
        
        function startBattle() {
            game.state.start('battle');
        }
        
        

    }

};