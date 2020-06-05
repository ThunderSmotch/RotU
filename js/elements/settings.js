import {langs, Lang} from '../lang.js';
import { StateManager } from '../stateManager.js';

export var Settings = {
    init: () => init()
}

function init(){

    $("body").append(getSettingsHTML());

    $("#settingsButton, #settingsToggle").click(()=>{
        $("#settings").toggle();
    });
    
    initLangSelect();
    initStateOptions();
}

function getSettingsHTML(){
    return `<div id='settings' class='popup' style='display: none;'>
    <a href='#' style='float:right;' id='settingsToggle'>X</a>
    <h3 style='display: inline-block;'>${_('settings.Title')}</h3>
    <br>
    <span>${_('settings.Lang')}</span>
    <select name='langs' id='langSelect'></select>
    <span>${_('settings.LangWarning')}</span>
    <br>
    <hr>
    <a href='#' id='exportGame'>${_('settings.Export')}</a> | 
    <a href='#' id='importGame'>${_('settings.Import')}</a> | 
    <a href='#' id='wipeGame'>${_('settings.Wipe')}</a> | 
    </div>`;
}

function initLangSelect(){
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

function initStateOptions(){

    //Export
    $('#exportGame').click(() => {
        StateManager.saveState();

        //Credits to Platonic for this code!
        //Check Synergism: https://www.kongregate.com/games/Platonic/synergism
        const a = document.createElement('a');
        a.setAttribute('href', 'data:text/plain;charset=utf-8,' + localStorage.getItem('save'));
        a.setAttribute('download', 'RotUSave.txt');
        a.setAttribute('id', 'downloadSave');
        a.click();
    });

    //Import
    $('#importGame').click(() => {

        const a = document.createElement('input');
        a.setAttribute('type', 'file');
        a.setAttribute('style', 'display: none;');
        a.setAttribute('id', 'fileInput');
        a.click();
    });

    //Wipe Game
    $('#wipeGame').click(()=>{
        if(confirm(_('settings.Wipe.description'))){
            StateManager.wipeState();
            location.reload();
        }
    });
}