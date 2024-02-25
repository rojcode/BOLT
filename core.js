// IMPORTS
import { formAction, formInfo, formNameAndAge } from './component/form.js';
import { header } from './component/header.js';
import { _finish, _load } from './loading/load.js';
import { $URL, scheduleAction } from './toolbox.js';


// DOCUMENT
const $ = document;

// GET ELEMENTS
const loading = $.querySelector('#myLoader');
const main = $.querySelector('main');



// COMPONENTS
_load(loading,main,()=>{
    header('خوش آمدید','بە تست BOLT خوش آمدید');

    formNameAndAge('اطلاعات خود را وارد نمایید','نام:','نام خود را وارد کنید','سن:','سن خود را وارد کنید','شروع آزمون');
    formAction((e,name,age)=>{
        main.className = 'animate-go';
        scheduleAction(1,()=>{
            const pageParams = {
                name:name.value,
                age:age.value
            };
            

            $URL.navigateToPage('pages/info',pageParams)
            
        })
        
    })

    formInfo('درباره تست:',`
    تست BOLT (تست سطح اکسیژن بدن) که توسط Patrick McKeown به شهرت بالایی رسیده است، یک ارزیابی سریع و ساده تنفسی از حجم نسبی تنفس افراد محسوب می شود.
    امتیاز BOLT شما معیاری است که نشان  می دهد برای چه مدت می توانید نفس خود را پس از بازدم حبس کنید. در مجموع تست بولت شاخصی عالی از تاثیرگذاری تنفس و میزان تحمل Co2 به شمار می رود. هرچه CO2 بیشتری را تحمل کنید، اکسیژن بیشتری نیز جذب خواهید کرد.
    `)
    
})

_finish(loading,main,()=>{
    console.log('Finish')
})









