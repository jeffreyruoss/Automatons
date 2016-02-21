var battleState = {

    create: function() {

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
        game.characterOne.animations.add('Attack Left', [2, 3, 0]);
        game.characterOne.scale.setTo(0.8, 0.8);
        game.allCharactersGroup.add(game.characterOne);
        game.alliesCharactersGroup.add(game.characterOne);


        /**
         * Create second allie
         */   

        game.characterTwo = game.add.sprite(230, 280, game.selectedCharacterData['characterTwo']['type']);
        game.characterTwo.frame = 1;
        game.characterTwo.animations.add('Attack Right', [4, 5, 1]);
        game.characterTwo.animations.add('Attack Left', [2, 3, 0]);
        game.characterTwo.scale.setTo(0.9, 0.9);
        game.allCharactersGroup.add(game.characterTwo);
        game.alliesCharactersGroup.add(game.characterTwo);


        /**
         * Create third allie
         */   

        game.characterThree = game.add.sprite(200, 410, game.selectedCharacterData['characterThree']['type']);
        game.characterThree.frame = 1;
        game.characterThree.animations.add('Attack Right', [4, 5, 1]);
        game.characterThree.animations.add('Attack Left', [2, 3, 0]);

        game.allCharactersGroup.add(game.characterThree);
        game.alliesCharactersGroup.add(game.characterThree);



    },
    
    update: function() {
        
        // if (isGameOver === true) {
        //     game.state.start('results');
        // }
        
    }


};