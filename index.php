<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>Drag & Drop</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/fontello/fontello.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div id="page">
            <div class="drop-container">
    <form id="drop-field" class="drop-field" method="post" action="upload.php" enctype="multipart/form-data">
        <div id="files_counter"></div>
        <div id="errors_counter"></div>
        <div class="file-upload-box">
            <input id="file-upload-input" type="file" multiple="multiple"/>
            <h1 class="df-msg ">
                Drop here files or click to upload.
            </h1>
        </div>
    </form>
    <!--.drop-field-->
</div>
<!--.drop-container-->


</div>
<!-- #page-->

<script type="module" src="js/app.js"></script>
</body>
</html>