
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var timerId;
var mySound = new sound("sound/welcom.mp3");
function mainActivity(){

timerId = 0;
    var welcomeImg=new Image();
    welcomeImg.onload = function(){
                ctx.drawImage(welcomeImg, 0, 0);
               
    }

    mySound.play();
    welcomeImg.src='img/main3.png';
    ctx.drawImage(welcomeImg, 0, 0);
    canvas.addEventListener("click",displayMenu);
}
mainActivity();


