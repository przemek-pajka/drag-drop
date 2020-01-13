import createImagePreview from './modules/createImagePreview.js';
import upload from './modules/upload.js';
import displayInfo from './modules/displayInfo.js';
import isValidImageFile from './modules/isValidImageFile.js';
import getPreviewElements from './modules/variables.js'

const uploadfiles = document.querySelector('#file-upload-input');
          
/* If user drag and drop any file on the field */
uploadfiles.addEventListener('change', function (file) {
    /* --- Display images and error handling loop --- */ 
    [...event.target.files].forEach((file) => {
        createImagePreview(file);
        const previewElements = getPreviewElements();
    
        isValidImageFile(file) ? upload(file,previewElements) : displayInfo(false,previewElements);
    });     
}, false);