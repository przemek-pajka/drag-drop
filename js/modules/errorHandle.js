import uploadFile from "./uploadFile.js";
import filesCounter from './filesCounter.js'

export default function error_handle(file,previewElements) { 
    let Messages;
    return Messages = {
        imageType: /image.*/,
        showInfo: (result_param) => { 
            const result = result_param ? 'success' : 'error';
            const error_msg = document.createElement("div");
            
            previewElements.mark.classList.add(`df-${result}-mark`);
            previewElements.df_preview.classList.add(`df-${result}`);
            error_msg.classList.add('error-msg');
   
            result_param ? true : error_msg.textContent = "Error, you can't upload other files than images";
            previewElements.df_preview.appendChild(error_msg);
            
            filesCounter();           
        },
        isItImage: () => {
            file.type.match(Messages.imageType) ? uploadFile(file,previewElements) : Messages.showInfo(false); 
        }
    };  
}