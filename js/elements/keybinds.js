export var Keybinds = {
    init,
}

function init(){
    $(document).on("keydown", keyDown);
}

function keyDown(e){
    if(e.key === "Escape")
        keybindClosePopup();
}

function keybindClosePopup(e){
    $('.popup').hide("fast");
}