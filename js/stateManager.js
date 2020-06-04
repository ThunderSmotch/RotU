export var StateManager = {
    updateResource: (key, qty) => updateResource(key, qty),
    getState: () => {return gameState;},
}

//Default game state
var gameState = {
    storage: {
        herb: 0
    },
};

function updateResource(key, qty){
    if(gameState['storage'].hasOwnProperty(key))
        gameState['storage'][key] += qty;
}