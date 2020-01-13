export default function(xhr){
    const previewElements = document.querySelectorAll('.df_preview');
    const progress_bar = previewElements[previewElements.length-1].childNodes[3];
    
    xhr.upload.onprogress = (evt) => { 
        progress_bar.classList.add('progress_bar')
        let percentLoaded = Math.round((evt.loaded / evt.total) * 100) + '%';     
        $(progress_bar.children).animate({width: percentLoaded},0);
    }

    xhr.onloadend = (e) => {
        $(progress_bar).addClass('trans_completed');
    }     
  };