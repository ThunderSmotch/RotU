import {Lang} from './lang.js';
import {Footer} from './elements/footer.js';
import {Settings} from './elements/settings.js';
import {Button} from './elements/button.js';
import {Tooltip} from './elements/tooltip.js';
import {Chat} from './elements/chat.js';

let version = "v0.1";

//TODO: Storage Localization with variables  Save/Export/Load Game Achievements

//TODO: Use flexbox to handle dynamics resolution


window.onload = function(){
    initModules();

    setTooltipDefaultProps();

    //TestCode still
    var testButton = Button.createCooldownButton('test', _('button.gatherHerbs'), '0.5s');
    var numHerbs = 1;
    $('#mainCol').append(testButton);

    testButton.click(()=>{
        Chat.addMessage(_('chat.gatherHerbs'));
    });

    Tooltip.addTooltip('#test', _('tooltip.gatherHerbs', numHerbs, numHerbs))

    //End of TestCode

    Chat.addMessage(_('chat.gameLoaded'));
}

function initModules(){
    Lang.init();
    window._ = Lang.translate;

    Footer.init(version);
    Settings.init();
    Chat.init();
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