var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var timerId = 0;
//var scriptType=document.getElementById("myScript");
    var welcomeImg=new Image();
     welcomeImg.src='img/c.jpg';
    ctx.drawImage(welcomeImg, 0, 0);
    //ctx.font = "30px Arial";
    //ctx.strokeText("Click on Screen",450,225); 
    canvas.addEventListener("click",displayMenu);
/*  canvas.addEventListener("click",display);
  function display()
{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  scriptType.src="js/menu.js";

} */




