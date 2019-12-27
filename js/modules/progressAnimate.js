export default function(xhr,previewElements){
    xhr.upload.onprogress = (evt) => { 
        previewElements.progress_bar.classList.add('progress_bar')
        let percentLoaded = Math.round((evt.loaded / evt.total) * 100) + '%';
              
        $(previewElements.percent).animate({width: percentLoaded},0);
    }

    xhr.onloadend = (e) => {
        $(previewElements.progress_bar).last().addClass('trans_completed');
    }     
  };