import {Tooltip} from './tooltip.js'
import {StateManager} from '../stateManager.js';
import {Popup} from './popup.js';

export var Achievements = {
    init: () => init(),
    unlock: (i) => unlock(i),
    getUnlockNotification: (i) => getUnlockNotification(i),
}

//Total number of achievements
let achievementNumber = 5;

function unlock(i){
    $('#ach_'+i+' > .ach_locked').hide();
    Tooltip.updateTooltip('#ach_'+i, getAchievementTooltip(i));
}

function init(){
    //Setup popup
    Popup.create('achievements', getAchievementsHTML())

    $("#achievementsButton").click(()=>{
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

function getUnlockNotification(i){
    return `
    <div><img src="img/achievements/ach_${i}.png" alt="Ach. ${i}"
    width="96" hieght="96"></img></div>
    <div><b>${_('achievements.Unlock')}</b>
    <br><br>
    ${_('achievements.'+i+'.Name')}</div>
    `;
}

function getAchievementsHTML(){
    return `<h3 style='display: inline-block;'>${_('achievements.Title')}</h3>
    <br>
    <div id='achievementContainer'></div>`;
}

function getAchievementHTML(id){
    return `<div id='${id}' class='achievement' 
    style='background-image: url("img/achievements/${id}.png"), url("img/achievements/ach_0.png");'>
    <div class='ach_locked'>?</div></div>`;
}

function getAchievementTooltipHidden(id){
    return `<b>${id} - ${_('achievements.'+id+'.Name')}</b>
    <br>
    ${_('achievements.'+id+'.Tip')}`;
}

function getAchievementTooltip(id){
    return `<b>${id} - ${_('achievements.'+id+'.Name')}</b>
    <br>
    ${_('achievements.'+id+'.Description')}`;
}