/*global Phaser*/
/*global game*/

game.doBehavior = function(character) {
	character.actionInProgress = true
	character.behaviors.forEach(function(behavior) {
		if (character.actionInProgress) {
			game.Behaviors[character.key][behavior].action(character);
		}
	});
}

game.Behaviors = {
    'Knight': {
        '1': {
        	// "Attack the enemy with the lowest HP"
        	action: function(character) {
        		var tempArray = [];
        		game.enemiesCharactersArray.forEach(function(enemy) {
					tempArray.push(enemy.attributes.hitpoints);
        		});        			
        		var largest = Math.max.apply(Math, tempArray);
        		game.enemiesCharactersArray.forEach(function(enemy) {
					if (enemy.attributes.hitpoints === largest) {
						enemy.attributes.hitpoints -= character.attributes.attack;
						character.animations.play("Attack Right", 23, false);
						game.effects.slash(enemy);
					}
        		});
        		character.actionInProgress = false;
        	}
        },
        '2': {
        	action: function() {
        		console.log('test1');
        	}
        }
    },
    'Wizard': {
        '1': {
        	action: function() {
        		console.log('test2');
        	}
        },
        '2': {
        	action: function() {
        		console.log('wizard action 2');
        	}
        },
        '3': {
        	action: function() {
        		console.log('wizard action 3');
        	}
        }
    },
    'Rogue': {
        '1': {
        	action: function() {
        		console.log('test3');
        	}
        },
        '2': {
        	action: function() {
        		console.log('test4');
        	}
        },
        '3': {
        	action: function() {
        		console.log('testy');
        	}
        }
    },
    'Priest': {
        '1': {
        	action: function() {
        		console.log('priest action 1');
        	}
        },
        '2': {
        	action: function() {
        		console.log('test6');
        	}
        },
        '3': {
        	action: function() {
        		console.log('test9');
        	}
        }
    }
};