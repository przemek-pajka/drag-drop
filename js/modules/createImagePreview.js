import fileReader from './fileReader.js';
import getFileSize from './getFileSize.js';

export default function createImagePreview(file) {
    const gallery = document.querySelector("#drop-field");
    
    const markup = `
        <div class="df_preview"> 
            <div class="df_details">
                <div class="df_size">${getFileSize(file.size)}</div>
                    <div class="df_filename">${file.name}</div>
            </div>
            <div class="progress_bar">
                <div class="percent"></div>
            </div>
            <i></i>
            <div class="df-image"><img src=''></div>
        </div>
`;

    gallery.insertAdjacentHTML('beforeend',markup);
    
    const imgContainer = document.querySelectorAll('.df-image img');
    const last = imgContainer[imgContainer.length-1];
    
    fileReader(file,last);

}