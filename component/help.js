import { $dom } from "../toolbox.js";



const infoContainer = (targetElement,title,text,buttonName,action)=>{
    $dom.addHtmlFirst(`
    <div class="container" id="info">
    <h2>${title}</h2>
    <p>${text}</p>
    <button id="start-test">${buttonName}</button>
    </div>
    `,targetElement);
    const button = document.querySelector('#start-test');
    button.addEventListener('click',(e)=>{
        action(e);
    })
}

export{
    infoContainer
};