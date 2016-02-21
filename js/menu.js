/*global game*/

var menuState = {

    create: function() {
        
        game.characterData = {
            'characterOne': {
                'type': '',
                'behaviors': {
                }
            },
            'characterTwo': {
                'type': '',
                'behaviors': {
                }
            },
            'characterThree': {
                'type': '',
                'behaviors': {
                }
            },
        };
        
            
        /**
         * Background Panel containers
         */
        
        game.add.sprite(30, 32, 'Panel');
        game.add.sprite(430, 32, 'Panel');
        game.add.sprite(830, 32, 'Panel');
        
        
        /**
         * Choose your characters text headings
         */
        
        var chooseYourCharacterTextStyles = {font: '18px Courier', fill: '#fff'},
            choseYourCharacterTextY = 47;
            
        game.add.text(200, choseYourCharacterTextY, 'CHOOSE YOUR 1ST CHARACTER', chooseYourCharacterTextStyles)
            .anchor.x = 0.5;
        game.add.text(600, choseYourCharacterTextY, 'CHOOSE YOUR 2ND CHARACTER', chooseYourCharacterTextStyles)
            .anchor.x = 0.5;
        game.add.text(1000, choseYourCharacterTextY, 'CHOOSE YOUR 3RD CHARACTER', chooseYourCharacterTextStyles)
            .anchor.x = 0.5;

        
        /**
         * Character types avatars
         */
        
        game.avatarsGroup = game.add.group();
        
        var avatarWidth = 76,
            avatarHeight = 73,
            avatarsCurrentX = 46,
            avatarsY = 69,
            avatarsMarginRight = 1,
            currentPanel = 1,
            currentAvatar = '',
            currentCharacterTypeLabel = '';
        
        for (var i = 1; i <= 12; i++) {
            // lay out the avatar frames
            currentAvatar = game.make.button(avatarsCurrentX, avatarsY, 'Avatar Frame', null, this, 1, 0, 0);
            game.avatarsGroup.add(currentAvatar);
            avatarsCurrentX += avatarWidth + avatarsMarginRight;
            currentAvatar.panel = currentPanel;
            // give them a panel property 1, 2 or 3
            if (i === 4) {
                currentPanel += 1;
                avatarsCurrentX += 94;
            } else if (i === 8) {
                currentPanel += 1;
                avatarsCurrentX += 94;
            }
            // Add character type labels and set the avatars' character type properies
            var characterTypeLabelX = currentAvatar.x + avatarWidth / 2,
                characterTypeLabelY = currentAvatar.y + avatarHeight,
                characterTypeLabelFontStyles = {font: '16px Courier', fill: '#fff'};
            if (i === 1 || i === 5 || i === 9) {
                currentCharacterTypeLabel = game.add.text(characterTypeLabelX, characterTypeLabelY, 'KIGHT', characterTypeLabelFontStyles);
                currentCharacterTypeLabel.anchor.x = 0.5;
                currentAvatar.characterType = 'Knight';
            } else if (i === 2 || i === 6 | i === 10) {
                currentCharacterTypeLabel = game.add.text(characterTypeLabelX, characterTypeLabelY, 'WIZARD', characterTypeLabelFontStyles);
                currentCharacterTypeLabel.anchor.x = 0.5;
                currentAvatar.characterType = 'Wizard';
            } else if (i === 3 || i === 7 | i === 11) {
                currentCharacterTypeLabel = game.add.text(characterTypeLabelX, characterTypeLabelY, 'ROGUE', characterTypeLabelFontStyles);
                currentCharacterTypeLabel.anchor.x = 0.5;
                currentAvatar.characterType = 'Rogue';
            } else if (i === 4 || i === 8 | i === 12) {
                currentCharacterTypeLabel = game.add.text(characterTypeLabelX, characterTypeLabelY, 'PRIEST', characterTypeLabelFontStyles);
                currentCharacterTypeLabel.anchor.x = 0.5;
                currentAvatar.characterType = 'Priest';
            }
        }
        
        
        /**
         * Character types avatars functionality
         */
        
        game.avatarsGroup.forEach( function(avatar) { 
            avatar.events.onInputDown.add(avatarOnClick, this);
        }, this);
        
        function avatarOnClick (sprite, pointer) {
            console.log(sprite.characterType);
            console.log(sprite.panel);

            if (sprite.panel === 1) {
                game.avatarsGroup.forEach(function(avatar) {
                    if (avatar.panel === 1) {
                        avatar.setFrames(1, 0, 0);
                    }
                });
                game.characterData.characterOne.type = sprite.characterType;
            } else if (sprite.panel === 2) {
                game.avatarsGroup.forEach(function(avatar) {
                    if (avatar.panel === 2) {
                        avatar.setFrames(1, 0, 0);
                    }
                });
                game.characterData.characterTwo.type = sprite.characterType;
            } else if (sprite.panel === 3) {
                game.avatarsGroup.forEach(function(avatar) {
                    if (avatar.panel === 3) {
                        avatar.setFrames(1, 0, 0);
                    }
                });
                game.characterData.characterThree.type = sprite.characterType;
            }
            sprite.setFrames(2, 2, 0);
        }
        
        
        /**
         * Choose behaviors text headings
         */
         
        var chooseYourCharactersTextFontStyles = {font: '18px Courier', fill: '#fff'};
        
        game.add.text(200, 167, 'CHOOSE BEHAVIORS', chooseYourCharactersTextFontStyles)
            .anchor.x = 0.5;
        game.add.text(600, 167, 'CHOOSE BEHAVIORS', chooseYourCharactersTextFontStyles)
            .anchor.x = 0.5;
        game.add.text(1000, 167, 'CHOOSE BEHAVIORS', chooseYourCharactersTextFontStyles)
            .anchor.x = 0.5;
        
        
        /**
         * Behavior slots
         */
        
        game.behaviorSlotsGroup = game.add.group();
        
        var behaviorSlotWidth = 308,
            behaviorSlotHeight = 55,
            behaviorSlotsCurrentX = 46,
            behaviorSlotsCurrentY = 190,
            behaviorSlotsMarginBottom = 2,
            currentPanel = 1,
            currentBehaviorSlot = '';
        
        for (var i = 1; i <= 15; i++) {
            currentBehaviorSlot = game.make.button(behaviorSlotsCurrentX, behaviorSlotsCurrentY, 'Behavior Frame', null, this, 1, 0, 0);
            currentBehaviorSlot.panel = currentPanel;
            game.behaviorSlotsGroup.add(currentBehaviorSlot);
            behaviorSlotsCurrentY += behaviorSlotHeight + behaviorSlotsMarginBottom;
            if (i === 5 || i === 10) {
                behaviorSlotsCurrentX += behaviorSlotWidth + 92;
                behaviorSlotsCurrentY = 191;
                currentPanel += 1;
            }
        }
        
        
        /**
         * Behavior slots functionality
         */
         
        var behaviorPopup = game.add.sprite(game.world.centerX, 38, 'Behaviors Popup');
        behaviorPopup.anchor.x = 0.5;
        behaviorPopup.alpha = 0;
        
        var behaviorPopupClose = game.add.button(1075, 65, 'Close X', null, this, 1, 0, 0);
        behaviorPopupClose.alpha = 0;
        
        game.behaviorSlotsGroup.forEach(function(behaviorSlot) { 
            behaviorSlot.events.onInputDown.add(behaviorSlotOnClick, this);
        }, this);
        
        function behaviorSlotOnClick(sprite, pointer) {
            console.log(sprite.panel);
            behaviorPopup.alpha = 1;
            behaviorPopupClose.alpha = 1;
        }
        
        behaviorPopupClose.events.onInputDown.add(behaviorPopupCloseOnClick, this);
        
        function behaviorPopupCloseOnClick(sprite, pointer) {
            behaviorPopup.alpha = 0;
            behaviorPopupClose.alpha = 0;
        }
        
        
        /**
         * Start Button
         */   
        
        game.add.button(game.world.centerX, 525, 'Start Button', startBattle, this, 1, 0, 0)
            .anchor.x = 0.5;
        
        function startBattle() {
            game.state.start('battle');
        }
        
        

    }

};