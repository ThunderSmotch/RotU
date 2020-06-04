export var Chat = {
    init: ()=>initChat(),
    addMessage: (msg)=>addMessage(msg),
}

function initChat(){
    var chat = `<a href='#' style='float: right' id='clearChat'>clear chat</a>
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