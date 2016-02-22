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
        	action: function(thisCharacter) {
        		var charactersArray = '',
        			animationKey = '';
        		if (thisCharacter.team === 'allie') {
        			charactersArray = game.enemiesCharactersArray;
        			animationKey = 'Attack Right';
        		} else if (thisCharacter.team === 'enemy') {
        			charactersArray = game.alliesCharactersArray;
        			animationKey = 'Attack Left';
        		}
        		var tempArray = [];
        		charactersArray.forEach(function(target) {
					tempArray.push(target.attributes.hitpoints);
        		});        			
        		var largest = Math.max.apply(Math, tempArray);
        		charactersArray.forEach(function(target) {
					if (target.attributes.hitpoints === largest && thisCharacter.actionInProgress) {
						target.attributes.hitpoints -= thisCharacter.attributes.attack;
						thisCharacter.animations.play(animationKey, 23, false);
						game.effects.slash(target);
						thisCharacter.actionInProgress = false;
					}
        		});
        	}
        },
        '2': {
        	action: function() {
        		// console.log('test1');
        	}
        },
        '3': {
        	action: function() {
        		// console.log('test1');
        	}
        }
    },
    'Wizard': {
        '1': {
        	action: function() {
        		// console.log('test2');
        	}
        },
        '2': {
        	action: function() {
        		// console.log('wizard action 2');
        	}
        },
        '3': {
        	action: function() {
        		// console.log('wizard action 3');
        	}
        },
        '4': {
        	// Cast Fire All
        	action: function(thisCharacter) {
        		var charactersArray = '',
        			animationKey = '';
        		if (thisCharacter.team === 'allie') {
        			charactersArray = game.enemiesCharactersArray;
        			animationKey = 'Attack Right';
        		} else if (thisCharacter.team === 'enemy') {
        			charactersArray = game.alliesCharactersArray;
        			animationKey = 'Attack Left';
        		}
        		charactersArray.forEach(function(target) {
        			target.attributes.hitpoints -= thisCharacter.attributes.attack * 0.3;
        			thisCharacter.animations.play(animationKey, 23, false);
        			game.effects.fire(target);
        			thisCharacter.actionInProgress = false;
        		});

        	}
        }
    },
    'Rogue': {
        '1': {
        	action: function() {
        		// console.log('test3');
        	}
        },
        '2': {
        	// If there is Priest, attack that Priest
        	action: function(thisCharacter) {
        		var charactersArray = '',
        			animationKey = '';
        		if (thisCharacter.team === 'allie') {
        			charactersArray = game.enemiesCharactersArray;
        			animationKey = 'Attack Right';
        		} else if (thisCharacter.team === 'enemy') {
        			charactersArray = game.alliesCharactersArray;
        			animationKey = 'Attack Left';
        		}
        		charactersArray.forEach(function(target) {
        			if (target.key === 'Priest') {
        				target.attributes.hitpoints -= thisCharacter.attributes.attack;
						thisCharacter.animations.play(animationKey, 23, false);
						game.effects.slash(target);
        				thisCharacter.actionInProgress = false;
        			}
        		});
        	}
        },
        '3': {
        	action: function() {
        		// console.log('testy');
        	}
        }
    },
    'Priest': {
        '1': {
        	action: function() {
        		// console.log('priest action 1');
        	}
        },
        '2': {
        	action: function() {
        		// console.log('test6');
        	}
        },
        '3': {
        	action: function() {
        		// console.log('test9');
        	}
        },
        '4': {
        	action: function() {
        		// console.log('test9');
        	}
        },
        '5': {
        	// Cast Heal All
        	action: function(thisCharacter) {
        		var charactersArray = '',
        			animationKey = '';
        		if (thisCharacter.team === 'allie') {
        			charactersArray = game.alliesCharactersArray;
        			animationKey = 'Attack Right';
        		} else if (thisCharacter.team === 'enemy') {
        			charactersArray = game.enemiesCharactersArray;
        			animationKey = 'Attack Left';
        		}
        		charactersArray.forEach(function(target) {
        			target.attributes.hitpoints += thisCharacter.attributes.attack;
        			thisCharacter.animations.play(animationKey, 23, false);
        			game.effects.heal(target);
        			thisCharacter.actionInProgress = false;
        		});
        	}
        }
    }
};