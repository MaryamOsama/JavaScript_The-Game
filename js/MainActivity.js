var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var timerId = 0;

    var welcomeImg=new Image();

     welcomeImg.src='img/c.jpg';
    ctx.drawImage(welcomeImg, 0, 0);
    
    canvas.addEventListener("click",displayMenu);



