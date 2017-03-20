(function() {


    function previewImage(file) {

        var gallery = document.getElementById("drop-field");
        var imageType = /image.*/;



        var thumb = document.createElement("div");
        thumb.classList.add("df-preview");

        var thumb_img_container = document.createElement("div");
        thumb_img_container.classList.add("df-image");

        var img = document.createElement("img");
        img.file = file;

        var progress_bar = document.createElement('div');
        progress_bar.classList.add("progress_bar");

        var percent_info = document.createElement('div');
        percent_info.classList.add('percent');
        percent_info.textContent = "0%";
        percent_info.style.width = '0%';

        progress_bar.appendChild(percent_info);
        thumb.appendChild(progress_bar);
        thumb_img_container.appendChild(img);
        thumb.appendChild(thumb_img_container);
        gallery.appendChild(thumb);



        function updateProgress(evt) {  //

            if (evt.lengthComputable) {
                var percentLoaded = Math.round((evt.loaded / evt.total) * 100);

                if (percentLoaded < 100) {
                    percent_info.style.width = percentLoaded + '%';
                    percent_info.textContent = percentLoaded + '%';
                }
            }
        }

        var Image_reader = function() {
            var reader = new FileReader();

            reader.onprogress = updateProgress;
            reader.onload = (function(aImg, e) {
                return function(e) {
                    aImg.src = e.target.result;

                    percent_info.style.width = '100%';
                    percent_info.textContent = '100%';
                };
            })(img);

            function reading_file() {
                reader.readAsDataURL(file);
                return true;
            }

            (function() {
                var read_result = reading_file();

                if (read_result === true) {
                    setTimeout(error_handle(), 2000);
                }
            })();

        }();




        function error_handle() {

            var Message = {
                info: function(inf) {
                    var mark = document.createElement("i");
                    mark.classList.add('df-' + inf + '-mark');
                    thumb.appendChild(mark);

                    if (inf === "error") {
                        progress_bar.classList.add('progress_error');
                        progress_bar.textContent = "Error, you can't upload other files than images";
                    }
                }
            };

            {
                const success_inf = "success", error_inf = "error";

                if (file.type.match(imageType)) {
                    Message.info(success_inf);
                } else if (!file.type.match(imageType)) {
                    Message.info(error_inf);
                }
            }
        }

    }

    var uploadfiles = document.querySelector('#file-upload');
    uploadfiles.addEventListener('change', function() {
        var files = this.files;
        for (var i = 0; i < files.length; i++) {

            (function(i) {
                var timeToStartNote = 1000 * i;
                setTimeout(function() {
                    previewImage(files[i])
                }, timeToStartNote);
            })(i)

        }

    });
})();