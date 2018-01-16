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



    //ballImage.src = "img/ball.png";
        
        bgImage.src = "img/c.jpg";
        


         playImage.src = "img/play.png";
         
       
        instructImage.src = "img/instructions.png";
       
   
        settingsImage.src = "img/settings.png";
      
   
        creditsImage.src = "img/credits.png";
        


   // timerId = setInterval(update, 1000 / frames);

    canvas.addEventListener("mousemove", checkPos);
    canvas.addEventListener("mouseup", checkClick);

    //function update() {

       // move();
        draw();
  //  }


/*   function move() {

        if (ballSize == ballWidth) {
            ballRotate = -1;
        }
        if (ballSize == 0) {
            ballRotate = 1;
        }
        ballSize += ballRotate;
    }*/

    function draw() {
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(playImage, buttonX[0], buttonY[0]);
        ctx.drawImage(instructImage, buttonX[1], buttonY[1]);
        ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
        ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
        /*if (ballVisible == true) {
            ctx.drawImage(ballImage, ballX[0] - (ballSize / 2), ballY[0], ballSize, ballHeight);
            ctx.drawImage(ballImage, ballX[1] - (ballSize / 2), ballY[1], ballSize, ballHeight);
        }*/
    }

    function checkPos(mouseEvent) {
        if (mouseEvent.pageX || mouseEvent.pageY == 0) {
            mouseX = mouseEvent.pageX - this.offsetLeft;
            mouseY = mouseEvent.pageY - this.offsetTop;
        } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {
            mouseX = mouseEvent.offsetX;
            mouseY = mouseEvent.offsetY;
        }
        /*for (i = 0; i < buttonX.length; i++) {
            if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
                if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
                    ballVisible = true;
                    ballX[0] = buttonX[i] - (ballWidth / 2) - 2;
                    ballY[0] = buttonY[i] + 2;
                    ballX[1] = buttonX[i] + buttonWidth[i] + (ballWidth / 2);
                    ballY[1] = buttonY[i] + 2;
                }
            } else {
                ballVisible = false;
            }
        }*/
    }

    function checkClick(mouseEvent) {
        for (i = 0; i < buttonX.length; i++) {
            if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
                if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
                	//console.log(mouseEvent);

		    if(mouseY>100 && mouseY<140 ){
                    canvas.removeEventListener("mousemove", checkPos);
                    canvas.removeEventListener("mouseup", checkClick);
                    selectCharacter();
                     }
                    if(mouseY>220 && mouseY<260 ){
                      credits(); 
                    }
                    //clearInterval(timerId);
                    
                }
            }
        }
    }
}
displayMenu() ;
