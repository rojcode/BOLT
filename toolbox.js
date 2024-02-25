export class $dom {

    static insertBefore(element, newElement) {
       element.before(newElement);
    }
 
    static insertAfter(element, newElement) {
       element.after(newElement);
    }
 
    static addElementBefore(targetSelector, newElement) {
       const targetElement = this.getElement(targetSelector);
       targetElement && this.insertBefore(targetElement, newElement);
    }
 
    static addElementAfter(targetSelector, newElement) {
       const targetElement = this.getElement(targetSelector);
       targetElement && this.insertAfter(targetElement, newElement);
    }
 
    static addElementToElement(targetElement, newElement) {
       targetElement && targetElement.appendChild(newElement);
    }
 
    static addElementBeforeElement(targetElement, newElement) {
       targetElement && this.insertBefore(targetElement, newElement);
    }
 
    static addElementAfterElement(targetElement, newElement) {
       targetElement && this.insertAfter(targetElement, newElement);
    }
 
    static getElement(selectorOrElement) {
       if (typeof selectorOrElement === 'string') {
          return document.querySelector(selectorOrElement);
       } else if (selectorOrElement instanceof Element) {
          return selectorOrElement;
       } else {
          console.error('Invalid selector or element:', selectorOrElement);
          return null;
       }
    }
 
    static removeElement(element) {
       element.parentNode.removeChild(element);
    }
 
    static addClassToElement(element, className) {
       element.classList.add(className);
    }
 
    static removeClassFromElement(element, className) {
       element.classList.remove(className);
    }
 
    static changeElementText(element, newText) {
       element.textContent = newText;
    }
 
    static addAttributeToElement(element, attributeName, attributeValue) {
       element.setAttribute(attributeName, attributeValue);
    }
 
    static addHtmlBefore(element, htmlString) {
       element.insertAdjacentHTML('beforebegin', htmlString);
    }
 
    static addHtmlAfter(element, htmlString) {
       element.insertAdjacentHTML('afterend', htmlString);
    }
 
    static addHtmlToElement(element, htmlString) {
       element.insertAdjacentHTML('beforeend', htmlString);
    }
 
    static addHtmlBeforeSelector(targetSelector, htmlString) {
       const targetElement = this.getElement(targetSelector);
       targetElement && this.addHtmlBefore(targetElement, htmlString);
    }
 
    static addHtmlAfterSelector(targetSelector, htmlString) {
       const targetElement = this.getElement(targetSelector);
       targetElement && this.addHtmlAfter(targetElement, htmlString);
    }
 
    static addHtmlToElementSelector(targetSelector, htmlString) {
       const targetElement = this.getElement(targetSelector);
       targetElement && this.addHtmlToElement(targetElement, htmlString);
    }
 
    static addIdToElement(element, id) {
       element.id = id;
    }
    static removeIdFromElement(element) {
        element.id = ''; 
    }
 
    static addMultipleElementsToElement(targetElement, ...newElements) {
        if (targetElement instanceof Node) {
           newElements.forEach(newElement => {
              if (newElement instanceof Node) {
                 targetElement.appendChild(newElement);
              } else {
                 console.error('Invalid element:', newElement);
              }
           });
        } else {
           console.error('Invalid target element:', targetElement);
        }
     }
 
    static toggleClass(element, className) {
       if (element.classList.contains(className)) {
          this.removeClassFromElement(element, className);
       } else {
          this.addClassToElement(element, className);
       }
    }

    static toggleId(element, id) {
        if (element.id === id) {
           element.id = '';
        } else {
           element.id = id;
        }
     }

     static addMultipleElementsAfter(targetElement, ...newElements) {
        if (targetElement instanceof Node) {
           newElements.forEach(newElement => {
              if (newElement instanceof Node) {
                 targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
              } else {
                 console.error('Invalid element:', newElement);
              }
           });
        } else {
           console.error('Invalid target element:', targetElement);
        }
     }
    
     static addMultipleElementsBefore(targetElement, ...newElements) {
        if (targetElement instanceof Node) {
           newElements.forEach(newElement => {
              if (newElement instanceof Node) {
                 targetElement.parentNode.insertBefore(newElement, targetElement);
              } else {
                 console.error('Invalid element:', newElement);
              }
           });
        } else {
           console.error('Invalid target element:', targetElement);
        }
    }

    static addFirst(newElement, targetElement) {
        if (targetElement instanceof Node) {
            this.addMultipleElementsBefore(targetElement, newElement);
        } else {
            console.error('Invalid target element:', targetElement);
        }
    }

    static addLast(newElement, targetElement) {
        if (targetElement instanceof Node) {
            this.addMultipleElementsAfter(targetElement, newElement);
        } else {
            console.error('Invalid target element:', targetElement);
        }
    }

    static addHtmlFirst(newHtml, targetElement) {
        if (targetElement instanceof Node) {
            targetElement.insertAdjacentHTML('afterbegin', newHtml);
        } else {
            console.error('Invalid target element:', targetElement);
        }
    }

    static addHtmlLast(newHtml, targetElement) {
        if (targetElement instanceof Node) {
            targetElement.insertAdjacentHTML('beforeend', newHtml);
        } else {
            console.error('Invalid target element:', targetElement);
        }
    }
}

export const $input = {
    limitInputLength: (inputElement, maxLength, onMaxLengthExceeded) => {
        if (inputElement instanceof HTMLElement) {
            inputElement.addEventListener('input', (e) => {
                const inputValue = e.target.value;
 
                if (inputValue.length > maxLength) {
 
                    inputElement.value = inputValue.slice(0, maxLength);
                    if (typeof onMaxLengthExceeded === 'function') {
                        onMaxLengthExceeded(e.target.value);
                    }
                } else if (inputValue.length < maxLength && inputValue.length === 8 && typeof onSpecialOperation === 'function') {
                }
            });
        } else {
            console.error('Invalid input element provided.');
        }
    },
     enableInput:(event, keyCode, inputElement) => {
       if (event.keyCode === keyCode) {
           inputElement.focus();
       }
   },
    handleShortcut:(event, keyCode, inputElement) => {
    if (event.keyCode === keyCode && event.ctrlKey) {
        inputElement.focus();
    }
 },
    disableEmptyInput: (inputElement, onEmptyInput) => {
        if (inputElement instanceof HTMLElement) {
            inputElement.addEventListener('blur', () => {
                if (inputElement.value.trim() === '') {
                    if (typeof onEmptyInput === 'function') {
                        onEmptyInput();
                    }
                }
            });
        } else {
            console.error('Invalid input element provided.');
        }
    },
    allowOnlyString: (inputElement, callback) => {
        if (inputElement instanceof HTMLElement) {
            inputElement.addEventListener('input', (e) => {
                const inputValue = e.target.value;
                const cleanedValue = inputValue.replace(/[٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹]/g, '');
    
                if (inputValue !== cleanedValue) {
                    inputElement.value = cleanedValue;
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
        } else {
            console.error('Invalid input element provided.');
        }
    },
       
     allowOnlyNumbers:(inputElement,callback) => {
        if (inputElement instanceof HTMLElement) {
            inputElement.addEventListener('input', (e) => {
                const inputValue = e.target.value;
                const numericValue = inputValue.replace(/[^0-9]/g, ''); 
    
                if (inputValue !== numericValue) {
                    inputElement.value = numericValue; 
                    callback();
                }
            });
        } else {
            console.error('Invalid input element provided.');
        }
    },
    allowOnlyPersian: (inputElement, callback) => {
        if (inputElement instanceof HTMLElement) {
            inputElement.addEventListener('input', (e) => {
                const inputValue = e.target.value;
                const persianValue = inputValue.replace(/[^آ-ی ]/gu, '');
    
                if (inputValue !== persianValue) {
                    inputElement.value = persianValue;
                    callback();
                }
            });
        } else {
            console.error('Invalid input element provided.');
        }
    },

     allowOnlyEnglish:(inputElement, callback) => {
        if (inputElement instanceof HTMLElement) {
            inputElement.addEventListener('input', (e) => {
                const inputValue = e.target.value;
                const englishValue = inputValue.replace(/[^a-zA-Z]/g, '');
    
                if (inputValue !== englishValue) {
                    inputElement.value = englishValue;
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
        } else {
            console.error('Invalid input element provided.');
        }
    },

     isGreaterThan:(inputElement, threshold, callback) => {
        if (inputElement instanceof HTMLElement) {
            inputElement.addEventListener('input', (e) => {
                const inputValue = parseFloat(e.target.value);
                
                if (!isNaN(inputValue) && inputValue > threshold) {
                    callback(true);
                } else {
                    callback(false);
                }
            });
        } else {
            console.error('Invalid input element provided.');
        }
    },

     isLessThan:(inputElement, threshold, callback) => {
        if (inputElement instanceof HTMLElement) {
            inputElement.addEventListener('input', (e) => {
                const inputValue = parseFloat(e.target.value);
                
                if (!isNaN(inputValue) && inputValue < threshold) {
                    callback(true);
                } else {
                    callback(false);
                }
            });
        } else {
            console.error('Invalid input element provided.');
        }
    },

    




    

    
 };

 
 export const scheduleAction = (delayInSeconds, callback) => {
    const delayInMillis = delayInSeconds * 1000;   
    setTimeout(callback, delayInMillis);
};

export const $URL =  {

    navigateToPage: (page, params) => {
        const url = new URL(page.endsWith('.html') ? page : page + '.html', window.location.href);
    
        for (const key in params) {
            url.searchParams.set(key, params[key]);
        }
    
        window.location.href = url.href;
    },

     getDataFromUrl :() => {
        const urlParams = new URLSearchParams(window.location.search);
        const data = {};
    
        for (const [key, value] of urlParams) {
            data[key] = value;
        }
    
        return data;
    },
}

 


export class TimerLibrary {
    constructor() {
        this.intervalId = null;
        this.totalTimeInSeconds = 0;
        this.currentTimeInSeconds = 0;
        this.displayElement = null;
        this.onFinishCallback = null;
        
    }

    startCountUp(durationInMinutes, displayElement, onFinishCallback) {
        this.totalTimeInSeconds = durationInMinutes * 60;
        this.currentTimeInSeconds = 0;
        this.displayElement = displayElement;
        this.onFinishCallback = onFinishCallback;

        if (!(this.displayElement instanceof HTMLElement)) {
            console.error('Invalid display element provided.');
            return;
        }

        this.intervalId = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    updateTime() {
        const minutes = Math.floor(this.currentTimeInSeconds / 60);
        const seconds = this.currentTimeInSeconds % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        this.displayElement.textContent = formattedTime;
        this.currentTimeInSeconds++;

        if (this.currentTimeInSeconds > this.totalTimeInSeconds) {
            this.stopCountUp();
            if (this.onFinishCallback && typeof this.onFinishCallback === 'function') {
                this.onFinishCallback();
            }
        }
    }

    stopCountUp() {
        clearInterval(this.intervalId);
        
    }

    resumeCountUp() {
        this.intervalId = setInterval(() => {
            this.updateTime();
        }, 1000);
    }
    getElapsedTime() {
        const milliseconds = this.currentTimeInSeconds * 1000;
        const seconds = Math.floor(this.currentTimeInSeconds % 60);
        const minutes = Math.floor(this.currentTimeInSeconds / 60);
    
        return {
            minutes,
            seconds,
            milliseconds,
            formattedTime: `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
        };
    }
    
    
}

