import {StateManager} from '../stateManager.js';

export var Storage = {
    init: () => init(),
    update: () => update(),
}

//Initialize storage div
function init(){
    //Create main storage
    var div = getStorageHTML();
    $("#inventoryCol").append(div);
}

//Update the numbers on storage
function update(){
    var storage = StateManager.getState()['storage'];

    for(var res in storage){
        if($("#"+res).length == 0){
            $("#storage").append(getResourceHTML(res, storage[res]));
        } else {
            $('#'+res+'_amount').text(storage[res]);
        }
    }
}

//Returns storage HTML
function getStorageHTML(){
    return `<div id='storage'></div>`;
}

//Returns a resource's HTML
function getResourceHTML(name, qty=0){
    return `<div class='resource'><div id='${name}'>${_('resource.'+name)}</div><div class='resource_amount' id='${name}_amount'>${qty}</div></div>`
}