game.effects = {}

game.effects.slash = function(target) {
	var slash = game.add.sprite(target.x, target.y, 'Slash');
	slash.anchor.x = 0.5;
	slash.anchor.y = 0.5;
	slash.animations.add('Slashing', [0, 1, 2, 3, 4]);
	slash.animations.play('Slashing', 30, false);
	slash.animations.currentAnim.onComplete.add(function() {
		slash.destroy();
	}, this);
}

game.effects.fire = function(target) {
	var fire = game.add.sprite(target.x, target.y, 'Fire');
	fire.anchor.x = 0.5;
	fire.anchor.y = 0.5;
	fire.animations.add('Burning', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
	fire.animations.play('Burning', 50, false);
	fire.animations.currentAnim.onComplete.add(function() {
		fire.destroy();
	}, this);
}