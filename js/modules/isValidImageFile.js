export default function isValidImageFile(file) { 
    const imageType = /image.*/;
    
    return file.type.match(imageType) ? true : false;       
}