function displayMenu(){
    document.removeEventListener('keydown',keyDownHandler,false);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var bgImage = new Image();
    var playImage = new Image(96,40);
    var instructImage = new Image(260,40);
    var creditsImage = new Image(160,40);
    var playImage2 = new Image(96,40);
    var instructImage2 = new Image(260,40);
    var creditsImage2 = new Image(160,40);
    var volumeImage = new Image(50,50);
    volumeImage.src = "img/icon/menu/volume.png";
    creditsImage2.src = "img/icon/menu/credits2.png";
    instructImage2.src = "img/icon/menu/instructions2.png";
    playImage2.src = "img/icon/menu/play2.png";
    bgImage.src = "img/icon/menu/background.png";
    creditsImage.src = "img/icon/menu/credits.png";
    instructImage.src = "img/icon/menu/instructions.png";
    playImage.src ="img/icon/menu/play.png";
    bgImage.onload = function(){
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(playImage,442,146);
        ctx.drawImage(instructImage,360,192);
        ctx.drawImage(creditsImage, 412,242);
    };
    canvas.addEventListener("mousemove", mouseHandler,false);
    canvas.addEventListener("click", clkHandler,false);
    function clkHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeY>146 && relativeY< 146+40 && relativeX>442 && relativeX< 442+96) {
            clickSound.play();
            canvas.removeEventListener("click",clkHandler,false);
            canvas.removeEventListener("mousemove",mouseHandler,false);
            selectCharacter();
        }else if(relativeY> 192&& relativeY<216 && relativeX>360 && relativeX<360+260){
            clickSound.play();
            canvas.removeEventListener("click",clkHandler,false);
            canvas.removeEventListener("mousemove",mouseHandler,false);
            help();
        }else if(relativeY> 242&& relativeY< 242+40&& relativeX> 412&& relativeX<412+160){
            clickSound.play();
            canvas.removeEventListener("click",clkHandler,false);
            canvas.removeEventListener("mousemove",mouseHandler,false);
            credits();
        }else if(relativeY>25 && relativeY<25+50 && relativeX>33 && relativeX<33+50){
            if(menuSoundFlag==0) {
                menuSound.pause();
                menuSound.loop = false;
                menuSoundFlag=1;
            }else{
                menuSound.play();
                menuSound.loop = true;
                menuSoundFlag=0;
            }

        }
    }
    function mouseHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeY>146 && relativeY< 146+40 && relativeX>442 && relativeX< 442+96) {
            ctx.drawImage(playImage2,442,146);
        }else if(relativeY> 192&& relativeY<216 && relativeX>360 && relativeX<360+260){
            ctx.drawImage(instructImage2,360,192);
        }else if(relativeY> 242&& relativeY< 242+40&& relativeX> 412&& relativeX<412+160){
            ctx.drawImage(creditsImage2, 412,242);
        }else if(relativeY>25 && relativeY<25+50 && relativeX>33 && relativeX<33+50){
            ctx.drawImage(volumeImage, 32,23);
        }else{
            ctx.drawImage(bgImage, 0, 0);
            ctx.drawImage(playImage,442,146);
            ctx.drawImage(instructImage,360,192);
            ctx.drawImage(creditsImage, 412,242);
        }
    }

}