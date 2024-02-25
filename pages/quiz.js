import { header } from "../component/header.js";
import { timerStart } from "../component/timer.js";
import { _finish, _load } from "../loading/load.js";
import { $URL, $dom, scheduleAction } from "../toolbox.js";



// DOCUMENT
const $  = document;

// GET ELEMENTS
const loading = $.querySelector('#myLoader');
const main = $.querySelector('main');

// COMPONENTS

_load(loading,main,()=>{
    const parms = $URL.getDataFromUrl();
    header(`${parms.name} تست شروع شد ! 🚀`,`تست در حال انجام است ...`)
    timerStart(main,'تایمر','شروع مجدد',(e)=>{
        console.log('start');
    },'توقف و نمایش نتیجە تست',(e,timeParms)=>{
        $dom.addClassToElement(main,'animate-go');
        scheduleAction(2,()=>{
            const mergeParms = Object.assign({},parms,timeParms)
            $URL.navigateToPage('result',mergeParms);
        })
    })

})

_finish(loading,main,()=>{
    console.log('Finish ...');
})