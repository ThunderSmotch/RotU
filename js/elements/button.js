export var Button = {
    createCooldownButton,
    createButton,
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
    let newButton = $(getButtonHTML(id, text));
    return newButton;
}

//Button HTML
function getButtonHTML(id, text){
    return `<div class='button' id='${id}'>${text}<div class='buttonBG'><div></div>`;
}