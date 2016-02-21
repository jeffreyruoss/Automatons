var loadState = {

    preload: function() {

        /*
        Load all game assets
        Place your load bar, some messages.
        In this case of loading, only text is placed...
        */

        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#fff'});

        //Load your images, spritesheets, bitmaps...
        game.load.image('Button', 'assets/img/button.png');
        
        
        // Menu
        game.load.image('Panel', 'assets/img/menu/panel.png');
        game.load.spritesheet('Avatar Frame', 'assets/img/menu/avatar-frame.png', 76, 73, 3);
        game.load.spritesheet('Behavior Frame', 'assets/img/menu/behavior-frame.png', 308, 55, 2);
        game.load.spritesheet('Start Button', 'assets/img/menu/start-button.png', 134, 48, 2);


        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');

    },

    create: function() {

        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.state.start('title');
    }
};
