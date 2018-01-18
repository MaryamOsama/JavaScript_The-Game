var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var timerId;
function mainActivity(){

timerId = 0;
    var welcomeImg=new Image();
    welcomeImg.onload = function(){
                ctx.drawImage(welcomeImg, 0, 0);
	}
    welcomeImg.src='img/main3.png';
    ctx.drawImage(welcomeImg, 0, 0);
    canvas.addEventListener("click",displayMenu);
}
mainActivity();


