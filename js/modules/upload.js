import progressAnimate from './progressAnimate.js';
import displayInfo from './displayInfo.js';
export default function(file,previewElements){
    const upload_props = {
        url: "server/index.php",
        xhr: new XMLHttpRequest(),
        fd: new FormData(),
    }
    
    progressAnimate(upload_props.xhr);
    
    upload_props.xhr.open("POST", upload_props.url, true);        
    upload_props.fd.append('uploaded_file', file);
    upload_props.xhr.send(upload_props.fd);
    upload_props.xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            displayInfo(true,previewElements);
        }
    }
};