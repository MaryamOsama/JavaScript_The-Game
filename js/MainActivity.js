var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var timerId;
function mainActivity(){

//timerId = 0;
    var welcomeImg=new Image();
    welcomeImg.src='img/main.jpg';
    ctx.drawImage(welcomeImg, 0, 0);
    canvas.addEventListener("click",displayMenu);
}
mainActivity();


