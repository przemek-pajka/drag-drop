(function() {
    var imageType = /image.*/;

    function previewImage(file) {
        var gallery = document.getElementById("drop-field");

        var progress_bar = document.createElement('div'),
        df_details = document.createElement('div'),
        df_size = document.createElement('div'),
        df_filename = document.createElement('div'),
        thumb = document.createElement("div"),
        thumb_img_container = document.createElement("div"),
        img = document.createElement('img'),
        percent_info = document.createElement('div');

        thumb.classList.add('df-preview');        
        thumb_img_container.classList.add('df-image');
        df_details.classList.add('df-details');
        df_size.classList.add('df-filesize');
        df_filename.classList.add('df-filename');
        percent_info.classList.add('percent');
        
        img.file = file;   
        percent_info.style.width = '0%';
        
        df_size.textContent = get_file_size(file.size);
        df_filename.textContent = file.name;

        df_details.appendChild(df_size);
        df_details.appendChild(df_filename);
        thumb.appendChild(df_details);
        progress_bar.appendChild(percent_info);
        thumb.appendChild(progress_bar);         
        thumb_img_container.appendChild(img);
        thumb.appendChild(thumb_img_container);
        gallery.appendChild(thumb);

        function get_file_size(_size) {
            var fSExt = new Array('Bytes', 'KB', 'MB', 'GB'),
            i=0;while(_size>900){_size/=1024;i++;}
            var exactSize = (Math.round(_size*100)/100)+' '+fSExt[i];
            return exactSize;
        }

        var reader = new FileReader();
        reader.onload = (function(aImg) {
            return function(e) {
                aImg.src = e.target.result;
            };
        })(img);
        reader.readAsDataURL(file);

        
        (function error_handle(file) {

            var Message = {
                info: function(inf) {
                     

                    if (inf ==="success") {
                        progress_bar.classList.add('progress_bar');
                    }
                    if (inf === "error") {
                        var mark = document.createElement("i"),
                        error_msg = document.createElement("div");
                        error_msg.classList.add('error-msg');

                        mark.classList.add('df-' + inf + '-mark');
                        thumb.classList.add('df-error');
                        thumb.appendChild(mark);
                        thumb.appendChild(error_msg);
                        error_msg.textContent = "Error, you can't upload other files than images";
                    }
                }
            };
            {
                const success_inf = "success", error_inf = "error";
                if (file.type.match(imageType)) {
                    Message.info(success_inf);
                }
                else if (!file.type.match(imageType)) {
                    Message.info(error_inf);
                }
            }
        })(file);
    }

function uploadFile(file,percent_info,p_bar){
        var url = "server/index.php";

        
        if (file.type.match(imageType)) {
            var xhr  = new XMLHttpRequest();
            var fd = new FormData();
        
            xhr.onprogress = function(evt) {  
                if (evt.lengthComputable) {

                    var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                    if (percentLoaded < 100) {
                        $(percent_info).animate({width: "100%"},500);
                    }
                }
            }

            xhr.onloadend = function (e) {
                $(percent_info).animate({width: "100%"},501);            
            }
            
            function ready() {
                return function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        p_bar.classList.add('trans_completed');
                    }
                };
            }
        
            xhr.onreadystatechange = ready();
            xhr.open("POST", url, true);        
            fd.append('uploaded_file', file);
            xhr.send(fd);    
        }
    };



        var uploadfiles = document.querySelector('#file-upload');
        uploadfiles.addEventListener('change', function () {            
            var files = this.files;
            /* --- Display images loop --- */
            for(var i=0; i<files.length; i++){
                previewImage(this.files[i]);
            }
                        
            var percent_info = document.querySelectorAll('.progress_bar:not(.trans_completed) .percent');
            var p_bar = document.querySelectorAll('.progress_bar:not(.trans_completed)');
            /* --- Upload files to server loop --- */
            for(var i=0; i<files.length;i++) {
                (function(i) {
                    var timeToStartNote = 1000 * i;
                    setTimeout(function() {
                        uploadFile(files[i],percent_info[i],p_bar[i]);        
                    }, timeToStartNote);
                })(i)
            }
            
            var thumbs = document.querySelectorAll(".df-preview:not(.df-success):not(.df-error)");
            /* --- Create success marks loop --- */
            for(var i=0;i<thumbs.length;i++) {                
                (function(i) {
                    var timeToStartNote = 1000 * i;
                    setTimeout(function() {
                        var mark = document.createElement("i");
                        mark.classList.add('df-success-mark');
                        thumbs[i].classList.add('df-success');                                            
                        thumbs[i].appendChild(mark);
                    }, timeToStartNote);
                })(i)
            }
            
            var df_prvw = document.querySelectorAll(".df-preview");
            /* --- Files counter loop --- */
            for(var i=0;i<df_prvw.length;i++) {
                (function(i) {
                        function counter_files() {
                            var file_counter = document.getElementById('filecounter_bar'),
                            error_counter = document.getElementById('counter_errors'),
                            scss_transfer = document.querySelectorAll('.df-success'),
                            err_transfer = document.getElementsByClassName('df-error'),
                            all_files = document.getElementsByClassName('df-preview');

                            file_counter.textContent = (scss_transfer.length) + " / " + (all_files.length + " files sent");
                            error_counter.textContent = err_transfer.length + " errors";
                        }
                    var timeToStartNote = 1000 * i;
                    setTimeout(function() {
                        counter_files();
                    }, timeToStartNote);
                })(i)
            }
                  
    }, false);
})();
