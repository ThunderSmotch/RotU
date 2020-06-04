import {Footer} from './elements/footer.js';
import {Button} from './elements/button.js';
import {Tooltip} from './elements/tooltip.js';
import {Chat} from './elements/chat.js';

let version = "v0.1";

//TODO: Save/Export/Load Game    Achievements    Storage   Clear chat

window.onload = function(){
    Footer.init(version);
    Chat.init();

    setTooltipDefaultProps();

    var testButton = Button.createCooldownButton('test', 'Gather plants', '0.5s');

    $('#mainCol').append(testButton);

    testButton.click(()=>{
        Chat.addMessage('You gather some herbs...');
    });

    Tooltip.addTooltip('#test', 'Gather some W33D')
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