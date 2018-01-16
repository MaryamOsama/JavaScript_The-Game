function displayMenu() {
    canvas.removeEventListener("click",displayMenu);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var width = canvas.getAttribute('width');
    var height = canvas.getAttribute('height');

    var mouseX;
    var mouseY;

    var bgImage = new Image();
    var playImage = new Image();
    var instructImage = new Image();
    var settingsImage = new Image();
    var creditsImage = new Image();
    var ballImage = new Image();




    var buttonX = [462, 380, 419, 430];
    var buttonY = [100, 140, 180, 220];
    var buttonWidth = [96, 260, 182, 160];
    var buttonHeight = [40, 40, 40, 40];

    var ballX = [0, 0];
    var ballY = [0, 0];
    var ballWidth = 35;
    var ballHeight = 40;

    var ballVisible = false;
    var ballSize = ballWidth;
    var ballRotate = 0;

    var frames = 30;



    
        bgImage.onload = function(){
		context.drawImage(bgImage, 0, backgroundY);
	};
        bgImage.src = "img/c.jpg";
        
        playImage.onload = function(){
		context.drawImage(playImage, buttonX[0], buttonY[0]);
	}
        playImage.src = "img/play.png";
        instructImage.onload = function(){
		context.drawImage(instructImage, buttonX[1], buttonY[1]);
	}
        instructImage.src = "img/instructions.png";
        settingsImage.onload = function(){
		context.drawImage(settingsImage, buttonX[2], buttonY[2]);
	}
        settingsImage.src = "img/settings.png";
        creditsImage.onload = function(){
		context.drawImage(creditsImage, buttonX[3], buttonY[3]);
	}
        creditsImage.src = "img/credits.png";
        


   
    canvas.addEventListener("mousemove", checkPos);
    canvas.addEventListener("mouseup", checkClick);

   
        draw();
 



    function draw() {
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(playImage, buttonX[0], buttonY[0]);
        ctx.drawImage(instructImage, buttonX[1], buttonY[1]);
        ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
        ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
        
    }

    function checkPos(mouseEvent) {
        if (mouseEvent.pageX || mouseEvent.pageY == 0) {
            mouseX = mouseEvent.pageX - this.offsetLeft;
            mouseY = mouseEvent.pageY - this.offsetTop;
        } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {
            mouseX = mouseEvent.offsetX;
            mouseY = mouseEvent.offsetY;
        }
        
    }

    function checkClick(mouseEvent) {
        for (i = 0; i < buttonX.length; i++) {
            if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
                if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
                	//console.log(mouseEvent);

		    if(mouseY>100 && mouseY<140 ){
                    canvas.removeEventListener("mousemove", checkPos);
                    canvas.removeEventListener("mouseup", checkClick);
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    selectCharacter();
                     }
                    if(mouseY>220 && mouseY<260 ){
                    canvas.removeEventListener("mousemove", checkPos);
                    canvas.removeEventListener("mouseup", checkClick);
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                      credits(); 
                    }
                 
                    
                }
            }
        }
    }
}
displayMenu() ;	
