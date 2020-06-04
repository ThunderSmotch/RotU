import {Lang} from './lang.js';
import {Footer} from './elements/footer.js';
import {Button} from './elements/button.js';
import {Tooltip} from './elements/tooltip.js';
import {Chat} from './elements/chat.js';

let version = "v0.1";

//TODO: Storage Localization  Save/Export/Load Game Achievements

window.onload = function(){
    Lang.init();
    window._ = Lang.translate;

    Footer.init(version);
    Chat.init();

    setTooltipDefaultProps();

    var testButton = Button.createCooldownButton('test', _('button.gatherHerbs'), '0.5s');

    $('#mainCol').append(testButton);

    testButton.click(()=>{
        Chat.addMessage(_('chat.gatherHerbs'));
    });

    Tooltip.addTooltip('#test', 'Gather some W33D')

    Chat.addMessage("Game loaded.");
    Chat.addMessage("There's still no gameplay. Hold tight!")
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