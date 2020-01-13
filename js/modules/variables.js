export default function() {
    const preview = document.querySelectorAll('.df_preview');
    const lastPreview = preview[preview.length-1];
    const mark = preview[preview.length-1].children[2];
    const previewElements = {lastPreview,mark}

    return previewElements;
}