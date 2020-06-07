import {Tooltip} from './tooltip.js'
import {StateManager} from '../stateManager.js';

export var Achievements = {
    init: () => init(),
    unlock: (i) => unlock(i),
}

let achievementNumber = 5;

function unlock(i){
    $('#ach_'+i+' > .ach_locked').hide();
    Tooltip.updateTooltip('#ach_'+i, getAchievementTooltip(i));
}

function init(){
    //Setup popup
    $("body").append(getAchievementsHTML());
    $("#achievementsButton, #achievementsToggle").click(()=>{
        $("#achievements").toggle("fast");
    });

    //Add achievements to the popup
    for (let i = 1; i <= achievementNumber; i++) {
        let id = `ach_${i}`;
        $("#achievementContainer").append(getAchievementHTML(id));
        Tooltip.addTooltip('#'+id, getAchievementTooltipHidden(i));
        if(StateManager.getState()['achievements'].includes(i))
            unlock(i);       
    }

}

function getAchievementsHTML(){
    return `<div id='achievements' class='popup' style='display: none;'>
    <a href='#' style='float:right; position:sticky; top:0;' id='achievementsToggle'>X</a>
    <h3 style='display: inline-block;'>${_('achievements.Title')}</h3>
    <br>
    <div id='achievementContainer'></div>
    </div>`;
}

function getAchievementHTML(id){
    return `<div id='${id}' class='achievement'>1<div class='ach_locked'>?</div></div>`;
}

function getAchievementTooltipHidden(id){
    return `<b>${_('achievements.'+id+'.Name')}</b>
    <br>
    ${_('achievements.'+id+'.Tip')}`;
}

function getAchievementTooltip(id){
    return `<b>${_('achievements.'+id+'.Name')}</b>
    <br>
    ${_('achievements.'+id+'.Description')}`;
}