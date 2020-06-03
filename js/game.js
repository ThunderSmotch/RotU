import {Footer} from './elements/footer.js';
import {Button} from './elements/button.js';

let version = "v0.1";

window.onload = function(){
    Footer.init(version);
    
    $('.main').append(Button.create('testButton')).click(function(){
        console.log("xd");
    });
}