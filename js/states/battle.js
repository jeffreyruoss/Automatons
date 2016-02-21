/*global game*/

var battleState = {

    create: function() {

        // temporary data so I can skip the menu state in development

        game.selectedCharacterData = {
            'characterOne': {
                'type': 'Knight',
                'behaviors': [1, 2, 3]
            },
            'characterTwo': {
                'type': 'Rogue',
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
                'behaviors': [2, 1]
            },
            'characterTwo': {
                'type': 'Knight',
                'behaviors': [3, 2]
            },
            'characterThree': {
                'type': 'Rogue',
                'behaviors': [1, 2]
            },
        };


        game.add.tileSprite(0, 0, 1200, 600, 'Battle Background');

        game.allCharactersGroup = game.add.group();
        game.alliesCharactersArray = [];
        game.enemiesCharactersArray = [];


        /**
         * Create first allie
         */   

        game.characterOne = game.add.sprite(260, 170, game.selectedCharacterData['characterOne']['type']);
        game.characterOne.frame = 1;
        game.characterOne.animations.add('Attack Right', [4, 5, 1]);
        game.characterOne.scale.setTo(0.8, 0.8);
        game.allCharactersGroup.add(game.characterOne);
        game.alliesCharactersArray.push(game.characterOne);


        /**
         * Create second allie
         */   

        game.characterTwo = game.add.sprite(230, 280, game.selectedCharacterData['characterTwo']['type']);
        game.characterTwo.frame = 1;
        game.characterTwo.animations.add('Attack Right', [4, 5, 1]);
        game.characterTwo.scale.setTo(0.9, 0.9);
        game.allCharactersGroup.add(game.characterTwo);
        game.alliesCharactersArray.push(game.characterTwo);


        /**
         * Create third allie
         */   

        game.characterThree = game.add.sprite(200, 410, game.selectedCharacterData['characterThree']['type']);
        game.characterThree.frame = 1;
        game.characterThree.animations.add('Attack Right', [4, 5, 1]);

        game.allCharactersGroup.add(game.characterThree);
        game.alliesCharactersArray.push(game.characterThree);


        /**
         * Create first enemy
         */   

        game.enemyOne = game.add.sprite(719, 170, game.enemyCharacterData['characterOne']['type']);
        game.enemyOne.frame = 0;
        game.enemyOne.animations.add('Attack Left', [2, 3, 0]);
        game.enemyOne.scale.setTo(0.8, 0.8);
        game.allCharactersGroup.add(game.enemyOne);
        game.enemiesCharactersArray.push(game.enemyOne);


        /**
         * Create second enemy
         */   

        game.enemyTwo = game.add.sprite(731, 280, game.enemyCharacterData['characterTwo']['type']);
        game.enemyTwo.frame = 0;
        game.enemyTwo.animations.add('Attack Left', [2, 3, 0]);
        game.enemyTwo.scale.setTo(0.9, 0.9);
        game.allCharactersGroup.add(game.enemyTwo);
        game.enemiesCharactersArray.push(game.enemyTwo);


        /**
         * Create third enemy
         */   

        game.enemyThree = game.add.sprite(736, 410, game.enemyCharacterData['characterThree']['type']);
        game.enemyThree.frame = 0;
        game.enemyThree.animations.add('Attack Left', [2, 3, 0]);
        game.allCharactersGroup.add(game.enemyThree);
        game.enemiesCharactersArray.push(game.enemyThree);


         /**
         * Assign attribues to the characters
         */ 

         game.allCharactersGroup.forEach(function(character) {
            character.actionCounter = 0;
            character.attributes = {};
            if (character['key'] === 'Knight') {
                character.attributes.hitpoints = 100;
                character.attributes.speed = 50;
                character.attributes.attack = 20;
            } else if (character['key'] === 'Wizard') {
                character.attributes.hitpoints = 50;
                character.attributes.speed = 60;
                character.attributes.attack = 30;               
            } else if (character['key'] === 'Rogue') {
                character.attributes.hitpoints = 80;
                character.attributes.speed = 85;
                character.attributes.attack = 15;               
            } else if (character['key'] === 'Priest') {
                character.attributes.hitpoints = 40;
                character.attributes.speed = 65;
                character.attributes.attack = 7;
            }
            character.attributes.speed += Math.floor(Math.random() * 20);
         });


    },
    
    update: function() {

        game.allCharactersGroup.forEach(function(character) {
            character.actionCounter += character.attributes.speed;
            if (character.actionCounter >= 20000) {
                character.actionCounter = 0;
            }
        });
        
        // if (isGameOver === true) {
        //     game.state.start('results');
        // }
        
    }


};