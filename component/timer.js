import { $dom, TimerLibrary } from "../toolbox.js";


const timerStart = (tartgetElememt,title,startButtonName,startButtonAction,endButtonName,endButtonNameAction)=>{
    $dom.addHtmlFirst(`
    <div class="container" id="quiz">
    <h1 id="timer">${title}</h1>
    <div id="buttons">
        <button class="green-button" id='start'>${startButtonName}</button>
        <button class="red-button" id='end'>${endButtonName}</button>
    </div>
</div>
    `,tartgetElememt)

/// SET TIMER
const h1Timer = document.querySelector('#timer');

const timerLibary = new TimerLibrary();
timerLibary.startCountUp(1,h1Timer,()=>{
    timerDone()
})

const startButton = document.querySelector('#start');
startButton.addEventListener('click',(e)=>{
    timerLibary.stopCountUp();
    timerLibary.startCountUp(1,h1Timer,()=>{
    });
    
})

const endButton = document.querySelector('#end');
endButton.addEventListener('click',(e)=>{
    timerLibary.stopCountUp();
    const timeParms = timerLibary.getElapsedTime();
    endButtonNameAction(e,timeParms);
})


};



export{
    timerStart,
}