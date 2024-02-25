import { $dom } from "../toolbox.js";

export const generateToast = (title,timerToast)=>{
    if(typeof title !== 'string'){
        throw new TypeError('Onlay String in->title');
    }
    $dom.addHtmlFirst(`
    <div id="myToast" class="toast">
    <p>${title}</p>
    <progress id="myProgressBar" value="0" max="100"></progress>
        </div>
    `,document.body)

    const toast = document.getElementById("myToast");
    toast.style.display = "block";
    const duration = timerToast; 

    const progressBar = document.getElementById("myProgressBar");
    const interval = duration / 100; 
    let progress = 0;

    const timer = setInterval(() => {
        if (progress >= 100) {
           
            clearInterval(timer);
            toast.style.display = "none";
        } else {
            progress++;
            progressBar.value = progress;
        }
    }, interval);
}