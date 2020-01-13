export default function getFileSize(size) {
        let i=0;while(size>900){size/=1024;i++;};
        const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
        const exactSize = (Math.round(size*100)/100)+' '+fSExt[i];
        return exactSize;
}