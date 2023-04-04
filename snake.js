var PowerButton;
var logoPosition = 0;
var DrawNintendoID;
// CurrInterval stores any current interval happening in order to easily clear it if needed
var CurrInterval;
var PlayerX;
var PlayerY;
/* 
    All "Hardware variables" [colors, fps, resolution...] try to mimic the original 1990 GameBoy.
    You can read more about it here:
    https://en.wikipedia.org/wiki/Game_Boy
*/
var fps = 17;

/*
    Holding button presses
*/
var KeyDown = document.addEventListener('keydown', function(event){
    if(event.key==='s'){
        alert('has pulsado la s');
    } else {
        alert(event.key);

    }
});



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
        TurnOff();
    }
}
/*
This function holds the Turning off process:
    -Reseting variables (if needed)
    -Stopping any running interval/timer
    -Clearing screen one last time
*/
function TurnOff() {
    document.getElementById('console').style.backgroundImage = "url('/imgs/gameBoy/gameboy_off.png')";
    window.clearInterval(CurrInterval);
    logoPosition = 0;
    clearCanvas();
}
function TurnOn() {
    document.getElementById('console').style.backgroundImage = "url('/imgs/gameBoy/gameboy_on.png')";
    DrawNintendoID = setInterval(drawNintendo,fps);
}


function drawNintendo() {
    clearCanvas();
    CurrInterval = DrawNintendoID;
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