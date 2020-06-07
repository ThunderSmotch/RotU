export var Button = {
    init: function(){

    },
    create: (id, text) => getButtonHTML(id, text),

    createCooldownButton: (id, text, cd) => createCooldownButton(id, text, cd),
    createButton: (id, text) => createButton(id, text),
}

function getButtonHTML(id, text){
    return `<div class='button' id='${id}'>${text}<div class='buttonBG'><div></div>`;
}

//Creates a button of the type Cooldown (has a BG cooldown bar)
function createCooldownButton(id, text, cd){

    let newButton = createButton(id, text).click(function(){
        
        let button = $(this);
        let buttonBG = $(this).children().eq(0);

        buttonBG.css('animation-duration', cd);
        button.addClass('disabled');
        
        buttonBG.on("animationend webkitAnimationEnd", function(){
            if(button.hasClass('disabled'))    
                button.removeClass('disabled');
        });

    });

    return newButton;
}

//Creates a normal button
function createButton(id, text){
    let newButton = $(Button.create(id, text));
    return newButton;
}
