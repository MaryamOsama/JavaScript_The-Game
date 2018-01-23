let canvas=document.getElementById("myCanvas");
let ctx=canvas.getContext("2d");
canvas.width='1020';
canvas.height='600';
let animationId=0;
let paused=0;

function start() {
    if(sessionStorage.getItem("moveDirectToMenu")=="1") {
        displayMenu();
    }else if( sessionStorage.getItem("moveDirectToGame")=="1"){
        startGame(Number(sessionStorage.getItem("level")));
    }
    else {
        /*ctx.font = '60pt Calibri';
        ctx.strokeStyle = 'blue';
        ctx.strokeText('Welcome Page ', 100, 200);*/
        displayMenu();
    }
}
    start();



