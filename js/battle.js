var battleState = {

    create: function() {

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


        /** 
         * Create allies
         * ------------------------------
         */   
        

        game.add.tileSprite(0, 0, 1200, 600, 'Battle Background');

        game.allCharactersGroup = game.add.group();
        game.alliesCharactersGroup = game.add.group();
        game.enemiesCharactersGroup = game.add.group();


        /**
         * Create first allie
         */   

        game.characterOne = game.add.sprite(260, 170, game.selectedCharacterData['characterOne']['type']);
        game.characterOne.frame = 1;
        game.characterOne.animations.add('Attack Right', [4, 5, 1]);
        game.characterOne.scale.setTo(0.8, 0.8);
        game.allCharactersGroup.add(game.characterOne);
        game.alliesCharactersGroup.add(game.characterOne);


        /**
         * Create second allie
         */   

        game.characterTwo = game.add.sprite(230, 280, game.selectedCharacterData['characterTwo']['type']);
        game.characterTwo.frame = 1;
        game.characterTwo.animations.add('Attack Right', [4, 5, 1]);
        game.characterTwo.scale.setTo(0.9, 0.9);
        game.allCharactersGroup.add(game.characterTwo);
        game.alliesCharactersGroup.add(game.characterTwo);


        /**
         * Create third allie
         */   

        game.characterThree = game.add.sprite(200, 410, game.selectedCharacterData['characterThree']['type']);
        game.characterThree.frame = 1;
        game.characterThree.animations.add('Attack Right', [4, 5, 1]);

        game.allCharactersGroup.add(game.characterThree);
        game.alliesCharactersGroup.add(game.characterThree);


        /** 
         * Create enemies
         * ------------------------------
         */   

        game.allCharactersGroup = game.add.group();
        game.alliesCharactersGroup = game.add.group();
        game.enemiesCharactersGroup = game.add.group();


        /**
         * Create first enemy
         */   

        game.enemyOne = game.add.sprite(719, 170, game.enemyCharacterData['characterOne']['type']);
        game.enemyOne.frame = 0;
        game.enemyOne.animations.add('Attack Left', [2, 3, 0]);
        game.enemyOne.scale.setTo(0.8, 0.8);
        game.allCharactersGroup.add(game.enemyOne);
        game.alliesCharactersGroup.add(game.enemyOne);


        /**
         * Create second enemy
         */   

        game.enemyTwo = game.add.sprite(731, 280, game.enemyCharacterData['characterTwo']['type']);
        game.enemyTwo.frame = 0;
        game.enemyTwo.animations.add('Attack Left', [2, 3, 0]);
        game.enemyTwo.scale.setTo(0.9, 0.9);
        game.allCharactersGroup.add(game.enemyTwo);
        game.alliesCharactersGroup.add(game.enemyTwo);


        /**
         * Create third enemy
         */   

        game.enemyThree = game.add.sprite(736, 410, game.enemyCharacterData['characterThree']['type']);
        game.enemyThree.frame = 0;
        game.enemyThree.animations.add('Attack Left', [2, 3, 0]);

        game.allCharactersGroup.add(game.enemyThree);
        game.alliesCharactersGroup.add(game.enemyThree);



    },
    
    update: function() {
        
        // if (isGameOver === true) {
        //     game.state.start('results');
        // }
        
    }


};