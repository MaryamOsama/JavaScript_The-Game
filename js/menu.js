var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

	
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');
	
var mouseX;
var mouseY;
	
var bgImage = new Image();
var logoImage = new Image();
var playImage = new Image();
var instructImage = new Image();
var settingsImage = new Image();
var creditsImage = new Image();
var shipImage = new Image();

var backgroundY = 0;
var speed = 1;
	
var buttonX = [192,110,149,160];
var buttonY = [100,140,180,220];
var buttonWidth = [96,260,182,160];
var buttonHeight = [40,40,40,40];
	
var shipX = [0,0];
var shipY = [0,0];
var shipWidth = 35;
var shipHeight = 40;
	
var shipVisible = false;
var shipSize = shipWidth;
var shipRotate = 0;
	
var frames = 30;
var timerId = 0;
var fadeId = 0;
var time = 0.0;

        shipImage.src = "img/ball.jpeg";
	bgImage.onload = function(){
		ctx.drawImage(bgImage, 0, backgroundY);
	};
	bgImage.src = "img/cyane.jpeg";
	logoImage.onload = function(){
		ctx.drawImage(logoImage, 50, -10);
	}
	/*logoImage.src = "img/logo.png";
	playImage.onload = function(){
		ctx.drawImage(playImage, buttonX[0], buttonY[0]);
	}*/
	playImage.src = "img/play.png";
	instructImage.onload = function(){
		ctx.drawImage(instructImage, buttonX[1], buttonY[1]);
	}
	instructImage.src = "img/instructions.png";
	settingsImage.onload = function(){
		ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
	}
	settingsImage.src = "img/settings.png";
	creditsImage.onload = function(){
		ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
	}
	creditsImage.src = "img/credits.png";
	
	timerId = setInterval("update()", 1000/frames);
	
	canvas.addEventListener("mousemove", checkPos);
	canvas.addEventListener("mouseup", checkClick);
	
	function update() {
		clear();
		move();
		draw();
	}
	function clear() {
		ctx.clearRect(0, 0, width, height);
	}
	function move(){
		backgroundY -= speed;
		if(backgroundY == -1 * height){
			backgroundY = 0;
		}
		if(shipSize == shipWidth){
			shipRotate = -1;
		}
		if(shipSize == 0){
			shipRotate = 1;
		}
		shipSize += shipRotate;
	}
	function draw(){
		ctx.drawImage(bgImage, 0, 0);
		//ctx.drawImage(logoImage, 50,-10);
		ctx.drawImage(playImage, buttonX[0], buttonY[0]);
		ctx.drawImage(instructImage, buttonX[1], buttonY[1]);
		ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
		ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
		if(shipVisible == true){
			ctx.drawImage(shipImage, shipX[0] - (shipSize/2), shipY[0], shipSize, shipHeight);
			ctx.drawImage(shipImage, shipX[1] - (shipSize/2), shipY[1], shipSize, shipHeight);
		}
	}
	function checkPos(mouseEvent){
		if(mouseEvent.pageX || mouseEvent.pageY == 0){
			mouseX = mouseEvent.pageX - this.offsetLeft;
			mouseY = mouseEvent.pageY - this.offsetTop;
		}else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
			mouseX = mouseEvent.offsetX;
			mouseY = mouseEvent.offsetY;
		}
		for(i = 0; i < buttonX.length; i++){
			if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
				if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
					shipVisible = true;
					shipX[0] = buttonX[i] - (shipWidth/2) - 2;
					shipY[0] = buttonY[i] + 2;
					shipX[1] = buttonX[i] + buttonWidth[i] + (shipWidth/2); 
					shipY[1] = buttonY[i] + 2;
				}
			}else{
				shipVisible = false;
			}
		}
	}
	function checkClick(mouseEvent){
		for(i = 0; i < buttonX.length; i++){
			if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
				if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
					fadeId = setInterval("fadeOut()", 1000/frames);
					clearInterval(timerId);
					canvas.removeEventListener("mousemove", checkPos);
					canvas.removeEventListener("mouseup", checkClick);
				}
			}
		}
	}
	function fadeOut(){
		ctx.fillStyle = "rgba(0,0,0, 0.2)";
		ctx.fillRect (0, 0, width, height);
		time += 0.1;
		if(time >= 2){
			clearInterval(fadeId);
			time = 0;
			timerId = setInterval("update()", 1000/frames);
			canvas.addEventListener("mousemove", checkPos);
			canvas.addEventListener("mouseup", checkClick);
		}
	}
