export var Button = {
    init: function(){

    },
    create: (id) => getButtonHTML(id),

    createCooldownButton: (id, cd) => createCooldownButton(id, cd)
}

function getButtonHTML(id){
    return `<div class='button' id='${id}'>Test Button<div class='buttonBG'><div></div>`;
}

//Creates a button of the type Cooldown (has a BG cooldown bar)
function createCooldownButton(id, cd){

    var newButton = $(Button.create(id)).click(function(){
        
        var button = $(this);
        var buttonBG = $(this).children().eq(0);

        buttonBG.css('animation-duration', cd);
        button.addClass('disabled');
        
        buttonBG.on("animationend webkitAnimationEnd", function(){
            if(button.hasClass('disabled'))    
                button.removeClass('disabled');
        });

    });

    return newButton;
}