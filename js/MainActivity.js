let canvas=document.getElementById("myCanvas");
let ctx=canvas.getContext("2d");
canvas.width='1020';
canvas.height='600';
let animationId=0;
let paused=0;
let clickSound=new Audio("sound/clickSound.mp3");
let menuSound=new Audio("sound/menu.mp3");
menuSound.play();
menuSound.loop=true;
let menuSoundFlag=0;
let welcomeImg=new Image();
welcomeImg.src="img/welcome.png";
function start(){
    if(sessionStorage.getItem("moveDirectToMenu")=="1") {
        displayMenu();
    }else if( sessionStorage.getItem("moveDirectToGame")=="1"){
        startGame(Number(sessionStorage.getItem("level")));
    }
    else {
        document.addEventListener('keydown',keyDownHandler,false)
        welcomeImg.onload = function(){
            ctx.drawImage(welcomeImg,0, 0);
        }
    }
}
function keyDownHandler() {
    displayMenu();
}
start();



