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
levelImage.src='img/c2.jpg';
ctx.drawImage(levelImage,0,0);



var  step1 = new Image();
step1.onload = function(){
                ctx.drawImage(step1, 50, 363);
	}
step1.src='img/step1.jpg';
ctx.drawImage(step1,50,363);

var  step1 = new Image();
step1.onload = function(){
                ctx.drawImage(step1, 200, 363);
	}
step1.src='img/step1.jpg';
ctx.drawImage(step1,200,363);



/*var  step2 = new Image();
step2.onload = function(){
                ctx.drawImage(step2, 200, 218);
	}
step2.src='img/step2.jpg';
ctx.drawImage(step2,200,218);*/


var  step1 = new Image();
step1.onload = function(){
                ctx.drawImage(step1, 350, 363);
	}
step1.src='img/step1.jpg';
ctx.drawImage(step1,350,363);



/*var  step2 = new Image();
step2.onload = function(){
                ctx.drawImage(step2, 350, 218);
	}
step2.src='img/step2.jpg';
ctx.drawImage(step2,250,218);*/


var  step1 = new Image();
step1.onload = function(){
                ctx.drawImage(step1, 500, 363);
	}
step1.src='img/step1.jpg';
ctx.drawImage(step1,500,363);


}
selectLevel();
