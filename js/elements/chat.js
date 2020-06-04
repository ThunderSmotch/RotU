export var Chat = {
    init: ()=>initChat(),
    addMessage: (msg)=>addMessage(msg),
}

function initChat(){
    var chat = `<div id='chat'></div>`;
    $("#chatCol").append(chat);
    addMessage("Game loaded.")
}

function addMessage(msg){
    var message = `<div class="message">${msg}</div>`;
    $('#chat').prepend(message);
}