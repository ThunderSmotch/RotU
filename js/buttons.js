import { Button } from "./elements/button.js";
import { Tooltip } from "./elements/tooltip.js";
import { StateManager } from "./stateManager.js";

import { Stage0 } from "./stage/stage0.js";
import { Stage1 } from "./stage/stage1.js";
import { WindowManager } from "./windowManager.js";

export var Buttons = {
    createButton,
    init,
}

//Initialize this module
function init(){
    //Create Buttons
    
    //Stage0
    createButton('wakeUp', Stage0.wakeUpButtonClick, _('tooltip.wakeUp'), 'mainCol');

    //Stage1
    createButton('explore', Stage1.explore, _('tooltip.explore'), 'mainCol', '10s');
    createButton('gatherHerbs', Stage1.gatherHerbsClick, _('tooltip.gatherHerbs', Stage1.herbsPerClick()), 'mainCol', '0.5s');
}

//Creates a button and appends it to parent
function createButton(key, onclick, tooltip, parent, cd=''){
    let button;
    if (cd == '')
        button = Button.createButton(key, _('button.' + key), onclick);
    else
        button = Button.createCooldownButton(key, _('button.' + key), cd, onclick);

    $('#' + parent).append(button);
    Tooltip.addTooltip('#' + key, tooltip);

    WindowManager.hideUI(key);
}