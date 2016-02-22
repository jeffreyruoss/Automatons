game.effects = {}

game.effects.slash = function(enemy) {
	var slash = game.add.sprite(enemy.x, enemy.y, 'Slash');
	slash.animations.add('Slashing', [0, 1, 2, 3, 4]);
	slash.animations.play('Slashing', 30, false);
	slash.animations.currentAnim.onComplete.add(function() {
		slash.destroy();
	}, this);
}