setTimeout(drawNintendo, 1000);



function drawNintendo() {
    var canvas = document.getElementById("play");
    var ctx = canvas.getContext("2d");
    ctx.font='50px Calibri';
    ctx.fillStyle = "black";
    ctx.textAlign='center';
    ctx.fillText('Nintendo',(canvas.width/2),(canvas.height/2)); 
}