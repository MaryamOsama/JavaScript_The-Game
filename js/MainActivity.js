var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var timerId = 0;

    var welcomeImg=new Image();
   welcomeImg.src="img/c.jpg";
    ctx.drawImage(welcomeImg, 0,0);
    //ctx.font = "30px Arial";
  //ctx.strokeText("Click on Screen",450,225); 
    canvas.addEventListener("click",displayMenu);



