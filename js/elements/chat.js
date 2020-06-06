export var Chat = {
    init: ()=>initChat(),
    addMessage: (msg)=>addMessage(msg),
}

function initChat(){
    let chat = `${_('game.Chat')}<a href='#' style='float: right' id='clearChat'>${_('game.Chat.Clear')}</a>
    <div id='chat'></div>`;

    $("#chatCol").append(chat);
    $("#clearChat").click(clearChat);
}

function addMessage(msg){
    let message = `<div class="message">${msg}</div>`;
    $('#chat').prepend(message);
}

function clearChat(){
    $('.message').remove();
}