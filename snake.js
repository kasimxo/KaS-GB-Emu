var PowerButton;
var logoPosition = 0;
var DrawNintendoID;
var PlayerX;
var PlayerY;

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
    var NintendoLogo = new Image();
    NintendoLogo.src = 'imgs/gameBoy/Nintendo_logo.png';
    ctx.drawImage(NintendoLogo,16,logoPosition-(NintendoLogo.height/2),NintendoLogo.width/2,NintendoLogo.height/2);
    
    logoPosition++;
    
    if(logoPosition >= canvas.height/2) {
        window.clearInterval(DrawNintendoID);
        setTimeout(start,"1000");
    }
    
}

function clearCanvas() {
    var canvas = document.getElementById("play");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function start() {
    clearCanvas();
    var canvas = document.getElementById("play");
    var ctx = canvas.getContext("2d");

    
}