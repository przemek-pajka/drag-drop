import fileReader from './fileReader.js';
export default function previewImage(file) {
    const gallery = document.querySelector("#drop-field");
    const img = document.createElement('img');
    const mark = document.createElement('i');
   
        let elementsToCreate = ['df_details','df_size','df_filename','df_preview','df-image','percent','progress_bar'];
        const previewElements = {}; /* Array of elements showing sent files*/
        for(let i=0;i<=elementsToCreate.length-1;i++) {
            previewElements[elementsToCreate[i]] = document.createElement('div');
            
            if(elementsToCreate[i] != 'progress_bar'){
                previewElements[elementsToCreate[i]].classList.add(elementsToCreate[i]);
            }         
        }
        previewElements['mark'] = mark;
        
        /* --- Building container for each file and show this --- */
        previewElements['df_filename'].textContent = file.name;
        previewElements['df_details'].appendChild(previewElements['df_size']);
        previewElements['df_details'].appendChild(previewElements['df_filename']); 
        previewElements['df_preview'].appendChild(previewElements['df_details']); //1
        previewElements['progress_bar'].appendChild(previewElements['percent']); 
        previewElements['df_preview'].appendChild(previewElements['progress_bar']); //2
        previewElements['df-image'].appendChild(img);
        previewElements['df_preview'].appendChild(mark);
        previewElements['df_preview'].appendChild(previewElements['df-image']); //3
        gallery.appendChild(previewElements['df_preview']);
        
     
        /* Function that calculates the file size */
        fileReader(file,previewElements['df_size'],img);


        return previewElements
}