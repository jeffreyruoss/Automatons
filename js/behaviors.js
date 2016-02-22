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
        		}
        	}
        },
        '2': {
        	// If there are 2 or more enemies cast Fire All
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
        		var aliveCount = '';
        		charactersArray.forEach(function(target) {
        			if (target.alive) {
        				aliveCount++;
        			}
        		});
        		if (aliveCount >= 2) {
					charactersArray.forEach(function(target) {
						target.attributes.hitpoints -= thisCharacter.attributes.attack * 0.3;
						thisCharacter.animations.play(animationKey, 23, false);
						game.effects.fire(target);
						thisCharacter.actionInProgress = false;
					});
        		}
        	}
        },
        '3': {
        	// Cast Fire an the enemy with the lowest Hit Points
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
						game.effects.fire(target);
						thisCharacter.actionInProgress = false;
					}
        		});
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
        	// Cast Fire an the enemy with the highest Hit Points
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
						game.effects.fire(target);
						thisCharacter.actionInProgress = false;
					}
        		});
        	}
        }
    },
    'Rogue': {
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
        	// Attack the enemy with the lowest Hit Points
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
        	// If there are 3 allies below 50% Hit Points, Heal All
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
        		var aliveCount = '',
        			validTargetCount = '';
        		charactersArray.forEach(function(target) {
        			if (target.alive) {
        				aliveCount++;
        			}
        			if (target.attributes.hitpoints < target.attributes.hitpointsMax * 0.5) {
        				validTargetCount++;
        			}
        		});
        		if (aliveCount === 3 && validTargetCount === 3) {
	        		charactersArray.forEach(function(target) {
	        			if (target.alive) {
							target.attributes.hitpoints += thisCharacter.attributes.attack;
							if (target.attributes.hitpoints > target.attributes.hitpointsMax) {
								target.attributes.hitpoints = target.attributes.hitpointsMax;
							}
							thisCharacter.animations.play(animationKey, 23, false);
							game.effects.heal(target);
	        			}
	        			thisCharacter.actionInProgress = false;
	        		});
        		}
        	}
        },
        '3': {
        	// If there are 3 allies below 70% Hit Points, Heal All
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
        		var aliveCount = '',
        			validTargetCount = '';
        		charactersArray.forEach(function(target) {
        			if (target.alive) {
        				aliveCount++;
        			}
        			if (target.attributes.hitpoints < target.attributes.hitpointsMax * 0.7) {
        				validTargetCount++;
        			}
        		});
        		if (aliveCount === 3 && validTargetCount === 3) {
	        		charactersArray.forEach(function(target) {
	        			if (target.alive) {
							target.attributes.hitpoints += thisCharacter.attributes.attack;
							if (target.attributes.hitpoints > target.attributes.hitpointsMax) {
								target.attributes.hitpoints = target.attributes.hitpointsMax;
							}
							thisCharacter.animations.play(animationKey, 23, false);
							game.effects.heal(target);
	        			}
	        			thisCharacter.actionInProgress = false;
	        		});
        		}
        	}
        },
        '4': {
        	// Cast Heal on the allie with the lowest Hit Points
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
        		var tempArray = [];
        		charactersArray.forEach(function(target) {
        			if (target.alive) {
						tempArray.push(target.attributes.hitpoints);
        			}
        		});
        		var smallest = Math.min.apply(Math, tempArray);
        		charactersArray.forEach(function(target) {
					if (target.attributes.hitpoints === smallest && thisCharacter.actionInProgress) {
						target.attributes.hitpoints += thisCharacter.attributes.attack;
						if (target.attributes.hitpoints > target.attributes.hitpointsMax) {
							target.attributes.hitpoints = target.attributes.hitpointsMax;
						}
						thisCharacter.animations.play(animationKey, 23, false);
						game.effects.heal(target);
						thisCharacter.actionInProgress = false;
					}
        		});
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