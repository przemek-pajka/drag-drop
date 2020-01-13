export default function(file,img) {
    const reader = new FileReader();

    reader.onload = (e) => {
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
}