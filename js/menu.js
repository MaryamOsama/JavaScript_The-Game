function displayMenu() {
    //canvas.removeEventListener("click",displayMenu);
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
    var playImage2= new Image();
    var instructImage2 = new Image();
    var settingsImage2 = new Image();
    var creditsImage2 = new Image();
    var ballImage = new Image();




    var buttonX = [462, 380, 419, 430];
    var buttonY = [100, 140, 180, 220];
    var buttonWidth = [96, 260, 182, 160];
    var buttonHeight = [40, 40, 40, 40];



    creditsImage.src = "img/credits.png";
    settingsImage.src = "img/settings.png";
    instructImage.src = "img/instructions.png";
    playImage.src = "img/play.png";
    creditsImage2.src = "img/credits2.png";
    settingsImage2.src = "img/settings2.png";
    instructImage2.src = "img/instructions2.png";
    playImage2.src = "img/play2.png";
    bgImage.src = "img/c.jpg";
    bgImage.onload = function(){
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(playImage, buttonX[0], buttonY[0]);
        ctx.drawImage(instructImage, buttonX[1], buttonY[1]);
        ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
        ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
    };



    //var mySound = new sound("video-games-general-gaming-sounds-game-over.mp3");
    //mySound.play();

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
        for (var i = 0; i < buttonX.length; i++) {
            if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
                if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
                    //console.log(mouseEvent);

                    if(mouseY>100 && mouseY<140 ){
                        canvas.removeEventListener("mousemove", checkPos);
                        canvas.removeEventListener("mouseup", checkClick);
                        ctx.clearRect(0,0,canvas.width,canvas.height);
                        ctx.drawImage(playImage, buttonX[0], buttonY[0]);
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
