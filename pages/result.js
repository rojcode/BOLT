import { circleButton } from "../component/circleButton.js";
import { header } from "../component/header.js";
import { infoContainer } from "../component/help.js";
import { _finish, _load } from "../loading/load.js";
import { $URL, $dom, scheduleAction } from "../toolbox.js";


// DOCUMENT 
const $ = document;


// GET ELEMENT
const loading = $.querySelector('#myLoader');
const main = $.querySelector('main');


// COMPONENTS
_load(loading,main,()=>{
    const parms = $URL.getDataFromUrl();
    let result = null;
    header(`نتیجه تست`,`نتیجه تست`);
    if(Number(parms.seconds) <10){
        result = 'امتیاز شما زیر ١٠ ثانیە است ، شما احتمالا دچار اختلال و مشکلات تنفسی هستید'
    }
    if(Number(parms.seconds)>=10 && Number(parms.seconds)<=20){
        result = `زمان شما در بین ١٠ تا ٢٠ ثانیە است کە احتمالا نشان دهندە تنفس سطحی و کمی بامشکل ،وجود استرس و اضطراب ، مشکلاتی مثل خروپف و گاهی تنگی نفس است`
    }
    if(Number(parms.seconds >20) && Number(parms.seconds <=30)){
        result = `تنفس شما نرمال و طبیعی است`;
    }
    if(Number(parms.seconds >30) && Number(parms.seconds<=40)){
        result = `تنفس شما بهینه ، سالم و مناسب عملکرد های ورزشی است`
    }
    infoContainer(main,`${parms.name} نتیجە تست شما بە این گونە است `,`${result}`,'تست مجدد',(e)=>{
       
        $dom.addClassToElement(main,'animate-go-right');
        scheduleAction(2,()=>{
            window.history.back();
        })
       
    })

    circleButton(main,(e)=>{
        $URL.navigateToPage('about',{name:parms.name});
    })

});



_finish(loading,main,()=>{
    console.log('finish')
});