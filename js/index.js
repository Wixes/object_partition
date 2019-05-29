function setCanvasResolution() {
    var canvas_width = document.getElementById("canvas_width").value;
    var canvas_height = document.getElementById("canvas_height").value;

    var canvas = document.getElementById("artifactCanvas");

    canvas.width = canvas_width;
    canvas.height = canvas_height;

    console.log(canvas_width, canvas_height);
}