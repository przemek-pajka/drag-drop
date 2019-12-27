'use strict';
import previewImage from './modules/previewImage.js';
import errorHandle from './modules/errorHandle.js';

    const uploadfiles = document.querySelector('#file-upload-input');
          
    /* If user drag and drop any file on the field */
    uploadfiles.addEventListener('change', function () {

        /* --- Display images and error handling loop --- */
        for(let i=0; i<this.files.length;i++) { 

            /* --- Error handling function that decides if file should be sent to server or not. If not it show us error info --- */
            errorHandle(this.files[i],previewImage(this.files[i])).isItImage();
            
        }
   
    }, false);