/*global game*/

var battleState = {

    create: function() {

        // temporary data so I can skip the menu state in development

        game.selectedCharacterData = {
            'characterOne': {
                'type': 'Knight',
                'behaviors': [2, 1, 3]
            },
            'characterTwo': {
                'type': 'Priest',
                'behaviors': [1, 2, 3]
            },
            'characterThree': {
                'type': 'Wizard',
                'behaviors': [1, 2, 3]
            },
        };

        // end temporary data



        game.enemyCharacterData = {
            'characterOne': {
                'type': 'Wizard',
                'behaviors': [2, 1, 3]
            },
            'characterTwo': {
                'type': 'Priest',
                'behaviors': [3, 2, 1]
            },
            'characterThree': {
                'type': 'Rogue',
                'behaviors': [1, 2, 3]
            },
        };


        game.alliesDefeated = 0;
        game.enemiesDefeated = 0;
        game.battleOver = false;


        game.add.tileSprite(0, 0, 1200, 600, 'Battle Background');

        game.allCharactersGroup = game.add.group();
        game.alliesCharactersArray = [];
        game.enemiesCharactersArray = [];


        /**
         * Create first allie
         */   

        game.characterOne = game.add.sprite(360, 220, game.selectedCharacterData['characterOne']['type']);
        game.characterOne.scale.setTo(0.8, 0.8);
        game.characterOne.location = 1;
        game.characterOne.behaviors = game.selectedCharacterData['characterOne']['behaviors'];
        game.allCharactersGroup.add(game.characterOne);
        game.alliesCharactersArray.push(game.characterOne);


        /**
         * Create second allie
         */

        game.characterTwo = game.add.sprite(330, 330, game.selectedCharacterData['characterTwo']['type']);
        game.characterTwo.scale.setTo(0.9, 0.9);
        game.characterTwo.location = 2;
        game.characterTwo.behaviors = game.selectedCharacterData['characterTwo']['behaviors'];
        game.allCharactersGroup.add(game.characterTwo);
        game.alliesCharactersArray.push(game.characterTwo);


        /**
         * Create third allie
         */   

        game.characterThree = game.add.sprite(300, 460, game.selectedCharacterData['characterThree']['type']);
        game.characterThree.location = 3;
        game.characterThree.behaviors = game.selectedCharacterData['characterThree']['behaviors'];
        game.allCharactersGroup.add(game.characterThree);
        game.alliesCharactersArray.push(game.characterThree);


        /**
         * Create first enemy
         */   

        game.enemyOne = game.add.sprite(819, 220, game.enemyCharacterData['characterOne']['type']);
        game.enemyOne.scale.setTo(0.8, 0.8);
        game.enemyOne.location = 4;
        game.enemyOne.behaviors = game.enemyCharacterData['characterOne']['behaviors'];
        game.allCharactersGroup.add(game.enemyOne);
        game.enemiesCharactersArray.push(game.enemyOne);


        /**
         * Create second enemy
         */   

        game.enemyTwo = game.add.sprite(841, 330, game.enemyCharacterData['characterTwo']['type']);
        game.enemyTwo.scale.setTo(0.9, 0.9);
        game.enemyTwo.location = 5;
        game.enemyTwo.behaviors = game.enemyCharacterData['characterTwo']['behaviors'];
        game.allCharactersGroup.add(game.enemyTwo);
        game.enemiesCharactersArray.push(game.enemyTwo);


        /**
         * Create third enemy
         */   

        game.enemyThree = game.add.sprite(876, 460, game.enemyCharacterData['characterThree']['type']);
        game.enemyThree.location = 6;
        game.enemyThree.behaviors = game.enemyCharacterData['characterThree']['behaviors'];
        game.allCharactersGroup.add(game.enemyThree);
        game.enemiesCharactersArray.push(game.enemyThree);


         /**
         * Set properies to all characters
         */ 

         game.allCharactersGroup.forEach(function(character) {
            character.actionCounter = 0;
            character.anchor.x = 0.5;
            character.anchor.y = 0.5;
            character.attributes = {};
            if (character['key'] === 'Knight') {
                character.attributes.hitpoints = 130;
                character.attributes.hitpointsMax = 130
                character.attributes.speed = 50;
                character.attributes.attack = 20;
            } else if (character['key'] === 'Wizard') {
                character.attributes.hitpoints = 80;
                character.attributes.hitpointsMax = 80
                character.attributes.speed = 60;
                character.attributes.attack = 30;               
            } else if (character['key'] === 'Rogue') {
                character.attributes.hitpoints = 110;
                character.attributes.hitpointsMax = 110
                character.attributes.speed = 85;
                character.attributes.attack = 15;
            } else if (character['key'] === 'Priest') {
                character.attributes.hitpoints = 70;
                character.attributes.hitpointsMax = 70
                character.attributes.speed = 65;
                character.attributes.attack = 7;
            }
            character.attributes.speed += Math.floor(Math.random() * 20);
            character.actionInProgress = false;
         });


         /**
         * Set properies to the allies
         */

         game.alliesCharactersArray.forEach(function(allie) {
            allie.frame = 1;
            allie.animations.add('Attack Right', [4, 5, 1]);
            allie.team = 'allie';
         }); 


         /**
         * Set properies to the enemies
         */

         game.enemiesCharactersArray.forEach(function(enemy) {
            enemy.frame = 0;
            enemy.animations.add('Attack Left', [2, 3, 0]);
            enemy.team = 'enemy';
         }); 


    },
    
    update: function() {

        game.allCharactersGroup.forEach(function(character) {

            // Check if a character is ready and if so, run a behavior
            character.actionCounter += character.attributes.speed;
            if (character.actionCounter >= 20000) {
                character.actionCounter = 0;
                if (!game.battleOver) {
                    game.doBehavior(character);
                }
            }

            // Check for dead characters and if so, destroy them and add to defeated count
            if (character.attributes.hitpoints <= 0) {
                if (character.team === 'allie') {
                    game.alliesDefeated++;
                } else if (character.team === 'enemy') {
                    game.enemiesDefeated++;
                }
                character.destroy();
            }

        });

        // Check if all allies or enemies are defeated and if so, end the game
        if (game.alliesDefeated >= 3) {
            game.battleOver = true;
            // game.state.start('results');
        } else if (game.enemiesDefeated >=3) {
            game.battleOver = true;
            // game.state.start('results');
        }
        
    }


};