import {Lang} from './lang.js';
import {StateManager} from './stateManager.js';

import {Footer} from './elements/footer.js';
import {Settings} from './elements/settings.js';
import {Button} from './elements/button.js';
import {Tooltip} from './elements/tooltip.js';
import {Chat} from './elements/chat.js';
import {Storage} from './elements/storage.js'

let version = "v0.1";
//TODO: Achievements | Timestamp on chat messages

//TODO: Handle savefiles cross versions maybe using jquery.extend(true,...)

//TODO: Use flexbox to handle dynamic resolutions

window.onload = function(){
    initModules();

    setTooltipDefaultProps();

    //Load game from local storage
    StateManager.loadState();

    //TestCode still///////////////////
    var testButton = Button.createCooldownButton('test', _('button.gatherHerbs'), '0.5s');
    var numHerbs = 1;
    $('#mainCol').append(testButton);

    testButton.click(()=>{
        StateManager.updateResource('herb', numHerbs);
        Storage.update();
        Chat.addMessage(_('chat.gatherHerbs'));
    });

    Tooltip.addTooltip('#test', _('tooltip.gatherHerbs', numHerbs, numHerbs))
    //End of TestCode//////////////////

    //Update Intervals
    this.setInterval(() => Storage.update(), 1000);
    this.setInterval(() => StateManager.saveState(), 5000);

    this.setTimeout(()=>{
    $('#loader').css('display', 'none');
    }, 3000)

    Chat.addMessage(_('chat.gameLoaded'));
}

function initModules(){
    Lang.init();
    window._ = Lang.translate;

    Footer.init(version);
    Settings.init();
    Chat.init();
    Storage.init();
}

function setTooltipDefaultProps(){
    tippy.setDefaultProps({
        theme: 'rotu',
        allowHTMl: true,
        arrow: false,
        interactive: true,
        placement: 'right',
        hideOnClick: false
    });
}