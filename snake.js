function TurnOffOn() {
    var TurnOn = document.getElementById('Button_on');
    var TurnOff = document.getElementById('Button_off');

    /* Right now you can click in all the img, it should not behave that way */

    if (TurnOn.hasAttribute('hidden')) {
        TurnOn.removeAttribute('hidden');
        TurnOff.setAttribute('hidden', true);
    } else {
        TurnOff.removeAttribute('hidden');
        TurnOn.setAttribute('hidden', true);
    }

}

setTimeout(drawNintendo, 1000);



function drawNintendo() {
    var canvas = document.getElementById("play");
    var ctx = canvas.getContext("2d");
    ctx.font='50px Calibri';
    ctx.fillStyle = "black";
    ctx.textAlign='center';
    ctx.fillText('Nintendo',(canvas.width/2),(canvas.height/2)); 
}