import { $dom } from "../toolbox.js";

const circleButton = (targetElement,callBack)=>{
    $dom.addHtmlLast(`<div class="fixed-button">
    <button class="blue-circle-button" id='circle-button'>i</button>
    </div>`,targetElement);
    const button = document.querySelector('#circle-button');
    button.addEventListener('click',(e)=>{
        callBack(e);
    })
}

export{
    circleButton
}