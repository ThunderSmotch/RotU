import {langs, Lang} from '../lang.js';

export var Settings = {
    init: () => init()
}

function init(){

    $("body").append(getSettingsHTML());

    $("#settingsButton, #settingsToggle").click(()=>{
        $("#settings").toggle();
    });
    
    var select = $("#langSelect");
    //Add available lags to select
    $.each(langs, function(key, value) {   
        select.append($("<option></option>").attr("value", key).text(value)); 
    });

    //Set current lang to the default selection
    select.val(Lang.getLang());

    //Handle language change
    select.on('change', function() {
        localStorage.setItem('lang', this.value);
        location.reload();
    });
}

function getSettingsHTML(){
    return `<div id='settings' class='popup' style='display: none;'>
    <a href='#' style='float:right;' id='settingsToggle'>X</a>
    <h3 style='display: inline-block;'>${_('settings.Title')}</h3><br>
    <span>${_('settings.Lang')}</span>
    <select name='langs' id='langSelect'></select>
    <span>${_('settings.LangWarning')}</span>
    </div>`;
}