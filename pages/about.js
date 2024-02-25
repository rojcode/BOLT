import { header } from "../component/header.js";
import { infoContainer } from "../component/help.js";
import { _finish, _load } from "../loading/load.js";
import { $URL } from "../toolbox.js";

// DOCUMENT
const $ = document;


// GET ELEMENT
const loading = $.querySelector('#myLoader');
const main = $.querySelector('main');


// COMPONENTS

_load(loading,main,()=>{
    header('داستان ساخت 🚀','داستان ساخت 🚀')
    const data = $URL.getDataFromUrl();
    infoContainer(main,`${data.name} 
    عزیز بیشتر دربارە ما بدون ` ,`
    این وب اپلیکیشن برای کمک بە جامعه روانشناسی ایران توسعە دادە شدە است هدف اصلی تیم توسعە دهنده ارائە خدمات و تست های رایگان جهانی برای هم وطن های عزیز است لازم است از مدیر پروژه سرکار خانم شیواز عبدالهی تشکر ویژە ای کنیم کە در طول فرایند توسعە و کد نویسی پروژە در کنار تیم بودە و همانند یک خانوادە چند ماه توسعە رو کنار هم تجربە کردیم
    `,'بازگشت',()=>{
        window.history.back();
    });

});


_finish(loading,main,()=>{
    console.log('finish')
})