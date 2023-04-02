var PowerButton;
var textPosition = 0;
var DrawNintendoID;
function TurnOffOn() {
    PowerButton = document.getElementById('Button_power');
    let PowerButtonState = PowerButton.getAttribute("data-state");

    if(PowerButtonState=== 'off') {
        PowerButton.style.left = '66px';
        PowerButton.setAttribute("data-state","on"); 
        TurnOn();
    } else if (PowerButtonState==='on') {
        PowerButton.style.left = '40px';
        PowerButton.setAttribute("data-state","off"); 
    }

}

function TurnOn() {
    DrawNintendoID = setInterval(drawNintendo,"100");
}


function drawNintendo() {
    clearCanvas();
    var canvas = document.getElementById("play");
    var ctx = canvas.getContext("2d");


    ctx.font='50px Calibri';
    ctx.fillStyle = "black";
    ctx.textAlign='center';
    ctx.fillText('Nintendo',(canvas.width/2),textPosition); 

    textPosition++;
    
    if(textPosition >= canvas.height/2) {
        window.clearInterval(DrawNintendoID);
    }
    
}

function clearCanvas() {
    var canvas = document.getElementById("play");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);
}