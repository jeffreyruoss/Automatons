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
        			if (target.alive) {
						tempArray.push(target.attributes.hitpoints);
        			}
        		});
        		var smallest = Math.min.apply(Math, tempArray);
        		charactersArray.forEach(function(target) {
					if (target.attributes.hitpoints === smallest && thisCharacter.actionInProgress) {
						target.attributes.hitpoints -= thisCharacter.attributes.attack;
						thisCharacter.animations.play(animationKey, 23, false);
						game.effects.slash(target);
						thisCharacter.actionInProgress = false;
					}
        		});
        	}
        },
        '2': {
        	// Attack the enemy with the highest Hit Points
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
        			if (target.alive) {
						tempArray.push(target.attributes.hitpoints);
        			}
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
        '3': {
        	// If an ally has less then 30% Hit Points, protect that allie
        	action: function(thisCharacter) {
        		
        	}
        },
        '4': {
        	// If an ally has less then 30% Hit Points, protect that allie
        	action: function(thisCharacter) {
        		
        	}
        },
        '5': {
        	// If an ally has less then 30% Hit Points, protect that allie
        	action: function(thisCharacter) {
        		
        	}
        }
    },
    'Wizard': {
        '1': {
        	// If there are 3 enemies cast Fire All
        	action: function(thisCharacter) {
        		console.log('If there are 3 enemies cast Fire All');
        		var charactersArray = '',
        			animationKey = '';
        		if (thisCharacter.team === 'allie') {
        			charactersArray = game.enemiesCharactersArray;
        			animationKey = 'Attack Right';
        		} else if (thisCharacter.team === 'enemy') {
        			charactersArray = game.alliesCharactersArray;
        			animationKey = 'Attack Left';
        		}
        		var aliveCount = '';
        		charactersArray.forEach(function(target) {
        			if (target.alive) {
        				aliveCount++;
        			}
        		});
        		if (aliveCount === 3) {
					charactersArray.forEach(function(target) {
						target.attributes.hitpoints -= thisCharacter.attributes.attack * 0.3;
						thisCharacter.animations.play(animationKey, 23, false);
						game.effects.fire(target);
						thisCharacter.actionInProgress = false;
					});
					console.log('there were 3 enemies so I cast Fire All');
        		} else {
        			console.log('there were not 3 enemies so I did not cast Fire All');
        		}
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
        			if (target.alive) {
						target.attributes.hitpoints -= thisCharacter.attributes.attack * 0.3;
						thisCharacter.animations.play(animationKey, 23, false);
						game.effects.fire(target);
						thisCharacter.actionInProgress = false;
        			}
        		});
        	}
        },
        '5': {
        	// If an ally has less then 30% Hit Points, protect that allie
        	action: function(thisCharacter) {
        		
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
        			if (target.key === 'Priest' && target.alive) {
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
        },
        '4': {
        	// If an ally has less then 30% Hit Points, protect that allie
        	action: function() {
        		
        	}
        },
        '5': {
        	// If an ally has less then 30% Hit Points, protect that allie
        	action: function() {
        		
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
        			if (target.alive) {
						target.attributes.hitpoints += thisCharacter.attributes.attack;
						thisCharacter.animations.play(animationKey, 23, false);
						game.effects.heal(target);
        			}
        			thisCharacter.actionInProgress = false;
        		});
        	}
        }
    }
};