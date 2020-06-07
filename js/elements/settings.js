import {langs, Lang} from '../lang.js';
import { StateManager } from '../stateManager.js';
import {Popup} from './popup.js';

export var Settings = {
    init,
}

//Initializes this singleton
function init(){

    Popup.create('settings', getSettingsHTML());
    $("#settingsButton").click(()=>{
        $("#settings").toggle("fast");
    });
     
    initLangSelect();
    initStateOptions();
}

//Initialize the Lang Select element
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

//Initialize the Save options
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
    var fileReader = new FileReader();
    fileReader.onload = () => StateManager.importState(fileReader.result);
    let a = $('#fileInput');
    a.on('change', ()=>{
        fileReader.readAsText($('#fileInput').prop('files')[0]);
    });

    $('#importGame').click(() => {
        $('#fileInput').click();
    });

    //Wipe Game
    $('#wipeGame').click(()=>{
        if(confirm(_('settings.Wipe.description'))){
            StateManager.wipeState();
            setTimeout( () => location.reload(), 100);
        }
    });
}

//Settings DIV HTML
function getSettingsHTML(){
    return `<h3 style='display: inline-block;'>${_('settings.Title')}</h3>
    <br>
    <span>${_('settings.Lang')}</span>
    <select name='langs' id='langSelect'></select>
    <span>${_('settings.LangWarning')}</span>
    <br>
    <hr>
    <input type="file" style="display: none;" id="fileInput"></input>
    <a href='#' id='exportGame'>${_('settings.Export')}</a> | 
    <a href='#' id='importGame'>${_('settings.Import')}</a> | 
    <a href='#' id='wipeGame'>${_('settings.Wipe')}</a> |`;
}