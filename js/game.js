import {Footer} from './elements/footer.js';
import {Button} from './elements/button.js';


let version = "v0.1";

window.onload = function(){
    Footer.init(version);
    
    var testButton = Button.createCooldownButton('test', '0.5s')

    $('.main').append(testButton);

    tippy('#test', {
        content: 'Test Tooltip'
    });
}