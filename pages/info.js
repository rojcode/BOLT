
import { circleButton } from '../component/circleButton.js';
import { header } from '../component/header.js';
import { infoContainer } from '../component/help.js';
import { _finish, _load } from '../loading/load.js';
import { $URL, $dom, scheduleAction } from '../toolbox.js';

// DOCUEMNT 
const $ = document;

// GET ELEMENTS
const loading  = $.querySelector('#myLoader');
const main = $.querySelector('main');

// COMPONENTS

_load(loading,main,()=>{
    const parms = $URL.getDataFromUrl()
    header(`سلام ${parms.name}👋`,`سلام ${parms.name}`);
    infoContainer(main,'اطلاعات',`
       ${parms.name}   عزیز   ! 
       بە تست BOLT خوش آمدی 
       برای شروع لازم است بدن و فکر خود را رها کنید و ریلکس کنید و در یک مکان راحت و آرام بشینید و چند تا نفس عمیق مناسب بکشید 
       بعد روی دکمە شروع تست زده و با شروع شدن تایمر نفس خود را حبس کرده و تا جایی کە بە شما فشار نیاد نفس خود را حبس کنید 
       هر وقت دیگر نتوانستید این کار رو انجام دهید فقط لازم است روی دکمە توقف بزنید و بعد نتیجە تست خود را ببینید.
    `,`شروع تست`,(e)=>{
        $dom.addClassToElement(main,'animate-go');
        scheduleAction(2,()=>{
            $URL.navigateToPage('quiz',parms)
        })
    });
    circleButton(main,(e)=>{
        $URL.navigateToPage('about',{name:parms.name});
    })
    
    

})


_finish(loading,main,()=>{
    console.log('Finish')
})
