import updateFilesCounter from './updateFilesCounter.js'
export default function displayInfo(result_param,previewElements) {  
    const result = result_param ? 'success' : 'error';
    const error_msg = document.createElement("div");
            
    previewElements.mark.classList.add(`df-${result}-mark`);
    previewElements.lastPreview.classList.add(`df-${result}`);
    error_msg.classList.add('error-msg');
   
    result_param ? true : error_msg.textContent = "Error, you can't upload files other than images";
    previewElements.lastPreview.appendChild(error_msg);
    updateFilesCounter();
}