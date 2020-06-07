export var Chat = {
    init,
    addMessage,
}

//Initialize this singleton
function init(){
    let chat = getChatHTML();

    $("#chatCol").append(chat);
    $("#clearChat").click(clearChat);
}

//Add new message to the chat
function addMessage(msg){
    let message = $(`<div style="display: none;" class="message">${msg}</div>`);
    message.prependTo('#chat').show('slow');
}

//Clear all messages
function clearChat(){
    $('.message').remove();
}

//Chat HTML
function getChatHTML(){
    return `
    ${_('game.Chat')}<a href='#' style='float: right' id='clearChat'>${_('game.Chat.Clear')}</a>
    <div id='chat'></div>`;
}