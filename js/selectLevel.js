var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function selectLevel()
{
ctx.clearRect(0, 0, canvas.width, canvas.height);
	console.log("hereeeeeee2");
var  levelImage = new Image();
levelImage.onload = function(){
                ctx.drawImage(levelImage, 0, 0);
	}
levelImage.src='img/c.jpg';
ctx.drawImage(levelImage,0,0);
}
selectLevel();
