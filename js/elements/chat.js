export var Chat = {
    init: ()=>initChat(),
    addMessage: (msg)=>addMessage(msg),
}

function initChat(){
    var chat = `${_('game.Chat')}<a href='#' style='float: right' id='clearChat'>${_('game.Chat.Clear')}</a>
    <div id='chat'></div>`;

    $("#chatCol").append(chat);
    $("#clearChat").click(clearChat);
}

function addMessage(msg){
    var message = `<div class="message">${msg}</div>`;
    $('#chat').prepend(message);
}

function clearChat(){
    $('.message').remove();
}