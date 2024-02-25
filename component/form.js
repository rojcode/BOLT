import { $dom, $input } from "../toolbox.js";
import { generateToast } from './toast.js';



const main = document.querySelector('.main-form');

    export const formNameAndAge = (title,nameLabel,placeholderName,ageLabel,agePlaceholder,buttonName)=>{
        if (typeof title !== 'string' && typeof nameLabel !== 'string' && typeof placeholderName !== 'string' && typeof ageLabel !== 'string' && typeof agePlaceholder !== 'string' && typeof buttonName !== 'string' ) {
            throw new TypeError('Type Error in parms');
        }

        try {
            $dom.addHtmlFirst(`
            <div class="container">
            <h2>${title}</h2>
            <form>
                <label for="name">${nameLabel}</label>
                <input type="text" id="name" name="name" placeholder="${placeholderName}" required>
        
                <label for="age">${ageLabel}</label>
                <input type="number" id="age" name="age" placeholder="${agePlaceholder}" required>
        
                <button type="submit">${buttonName}</button>
            </form>
        </div>
            
            `,main);
        } catch (error) {
            console.error(error.message)
        }

    }

export const formAction = (buttonAction)=>{
    // GET ELEMENT 
    const button = document.querySelector('button');
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector('#age');

    // CHECK TYPE 
    if(typeof buttonAction !== 'function'){
        throw new Error('Type Error in buttonAction parms');
    }
    try {
        
        // CHECK INPUTS && EMPTY && LENGHT
        // START NAME INPUT CHECK
        $input.disableEmptyInput(nameInput,()=>{
            generateToast('مقدار نام شما نباید خالی باشد 😊',5000)
        })

        $input.allowOnlyPersian(nameInput,()=>{
            generateToast('لطفا نام خود را بە فارسی وارد کنید',5000)
        })

        $input.allowOnlyString(nameInput,()=>{
            generateToast('چە عجیب ! اسم شما با عدد شروع می شود ؟ لطفا عدد وارد نکنید',5000)
        })

        $input.limitInputLength(nameInput,20,()=>{
            generateToast('نباید اسمت از ٢٠ کاراکتر بیشتر شود',5000)
        })

        
        
        // START AGE INPUT CHECK

        $input.disableEmptyInput(ageInput,()=>{
            generateToast('ای بابا ! نمی خوای سنتو بە ما بگی؟ قول میدیم پیش خودمون بمونە♥️',5000)
        })

        $input.limitInputLength(ageInput,2,()=>{
            generateToast('واقعا ! ما سن ٣ رقمی نداریم🙃',5000)
        })

        ageInput.addEventListener('input',(e)=>{
            if(e.target.value.length == 1){
                $input.isLessThan(ageInput,15,(age)=>{
                    if(age){
                        generateToast('سن شما کمتر از ١٥ سال است لطفا این تست همراە با دوست و خانوادە انجام دهید',5000)
                    }
                })
            }
        })
        
        // BUTTON PRESS 
        button.addEventListener('click',(e)=>{
            e.preventDefault();
            buttonAction(e,nameInput,ageInput)
            
        })


    } catch (error) {
        console.error(error.message)
    }
}

export const formInfo = (title,paragraph)=>{
    if(typeof title !== 'string' && typeof paragraph !== 'string'){
        throw new TypeError('Type Error in parms');
    }

    try {
        $dom.addHtmlLast(`
        <div class="additional-container">
        <h3>${title}</h3>
        <p>${paragraph}</p>
        </div>
        `,main)
    } catch (error) {
        console.error(error.message)
    }

}

