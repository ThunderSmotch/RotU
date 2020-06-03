export var Button = {
    init: function(id){

    },
    create: (id) => getButtonHTML(id),
}

function getButtonHTML(id){
    return `<div class='button' id='${id}'>Test Button</div>`;
}