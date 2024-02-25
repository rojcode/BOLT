import { $dom } from "../toolbox.js";


export const header = (text,title)=>{

   if (typeof text !== 'string' || typeof title !== 'string') {
      throw new TypeError('Type Error in text parm');
    }
    try {
        $dom.addHtmlFirst(`
        <header>
            <h1>${text}</h1>
        </header>`,document.body);

        document.title = title
    } catch (error) {
      console.error(error.message)
    }
}
