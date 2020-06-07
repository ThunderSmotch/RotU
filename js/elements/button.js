export var Button = {
    createCooldownButton,
    createButton,
}

//Creates a button of the type Cooldown (has a BG cooldown bar)
function createCooldownButton(id, text, cd, onclick){

    let newButton = $(getButtonHTML(id, text));

    //Implement cooldown
    newButton.click(function(){
        let button = $(this);
        let buttonBG = $(this).children().eq(0);

        //If not on cooldown run the function
        if(!button.hasClass('disabled'))
            onclick();

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
function createButton(id, text, onclick){
    let newButton = $(getButtonHTML(id, text));
    newButton.click(onclick);
    return newButton;
}

//Button HTML
function getButtonHTML(id, text){
    return `<div class='button' id='${id}'>${text}<div class='buttonBG'><div></div>`;
}