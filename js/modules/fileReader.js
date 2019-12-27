export default function(file,df_size,img) {
    const reader = new FileReader();

    const get_file_size = (_size) => {
        let i=0;while(_size>900){_size/=1024;i++;};
        const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
        const exactSize = (Math.round(_size*100)/100)+' '+fSExt[i];
        return exactSize;
    }

    reader.onload = (e) => {
        img.src = e.target.result;
        df_size.textContent = get_file_size(file.size);
    };

    reader.readAsDataURL(file);
}