import { $dom } from "../toolbox.js";

// GET LOADING
const isHTMLElement = element => element instanceof HTMLElement;
export const _load = (loadingElement,elementEffect,callBack)=>{

    if (typeof callBack !== 'function' || isHTMLElement(loadingElement) !== true || isHTMLElement(elementEffect) !== true) {
        throw new TypeError('Type Error in Parms');
    }
    try {
        document.addEventListener('DOMContentLoaded',e=>{
            callBack()
            $dom.addIdToElement(elementEffect,'blurBackground');
            $dom.addClassToElement(loadingElement,'hidden');
            
        })

    } catch (error) {
      console.error(error.message)
    }
}


export const _finish = (loadingElement,elementEffect,callBack)=>{

   if (typeof callBack !== 'function' || isHTMLElement(loadingElement) !== true || isHTMLElement(elementEffect) !== true) {
      throw new TypeError('Type Error in Parms');
    }

    try {
      window.addEventListener('load',e=>{
        callBack();
        $dom.removeIdFromElement(elementEffect);
        $dom.removeClassFromElement(loadingElement);
      })
    } catch (error) {
      console.error(error.message)
    }
}