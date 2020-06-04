export var Settings = {
    init: () => init()
}

//TODO: 

function init(){

    $("body").append(getSettingsHTML());

    $("#settingsButton, #settingsToggle").click(()=>{
        $("#settings").toggle();
    });
}

function getSettingsHTML(){
    return `<div id='settings' class='popup' style='display: none;'>
    <a href='#' style='float:right;' id='settingsToggle'>X</a>
    <h3 style='display: inline-block;'>${_('settings.Title')}</h3><br>
    <span>${_('settings.Lang')}</span>
    <select name='langs' id='langSelect'></select>
    </div>`;
}