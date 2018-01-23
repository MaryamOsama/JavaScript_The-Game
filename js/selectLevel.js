function selectLevel(character) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var level1=new Image(128,129);
    level1.src="img/icon/selectLevels/level1.png";
    var level2=new Image(128,129);
    level2.src="img/icon/selectLevels/level2.png";
    var level3=new Image(128,129);
    level3.src="img/icon/selectLevels/level3.png";
    var level4=new Image(128,129);
    level4.src="img/icon/selectLevels/level4.png";
    var back=new Image(69,44);
    back.src="img/icon/selectLevels/back.png";

    var levels=new Image(1020,600);
    levels.src="img/icon/selectLevels/levels.png";
    levels.onload=function () {
        ctx.drawImage(levels,0,0);
    };
    canvas.addEventListener("click",clickHandler,false);
    function clickHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeY>190 && relativeY<319 && relativeX>188 && relativeX< 316) {
            clickSound.play();
            menuSound.loop=false;
            menuSound.pause();
            startGame(1);
            canvas.removeEventListener("click",clickHandler,false);
            canvas.removeEventListener("mousemove",mouseMoveHandler,false);
        }else if(relativeY>190 && relativeY<319 && relativeX>371&& relativeX<499 ){
            clickSound.play();
            menuSound.loop=false;
            menuSound.pause();
            canvas.removeEventListener("click",clickHandler,false);
            canvas.removeEventListener("mousemove",mouseMoveHandler,false);
            startGame(2);
        }else if(relativeY>190 && relativeY<319 && relativeX>544 && relativeX<672 ){
            clickSound.play();
            menuSound.pause();
            canvas.removeEventListener("click",clickHandler,false);
            canvas.removeEventListener("mousemove",mouseMoveHandler,false);
            startGame(3);
        }else if(relativeY>190 && relativeY<319 && relativeX>712 && relativeX< 840){
            clickSound.play();
            menuSound.loop=false;
            menuSound.pause();
            canvas.removeEventListener("click",clickHandler,false);
            canvas.removeEventListener("mousemove",mouseMoveHandler,false);
            startGame(4);
        }else if(relativeX>45 && relativeX<45+70 && relativeY>24 && relativeY<24+44){
            clickSound.play();
            canvas.removeEventListener("click",clickHandler,false);
            canvas.removeEventListener("mousemove",mouseMoveHandler,false);
            selectCharacter();
        }


    }
    canvas.addEventListener("mousemove",mouseMoveHandler,false);
    function mouseMoveHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeY>190 && relativeY<319 && relativeX>188 && relativeX< 316) {
            ctx.drawImage(level1, 188, 190);
        }else if(relativeY>190 && relativeY<319 && relativeX>371&& relativeX<499 ){
            ctx.drawImage(level2,371,190);
        }else if(relativeY>190 && relativeY<319 && relativeX>544 && relativeX<672 ){
            ctx.drawImage(level3,544,190);
        }else if(relativeY>190 && relativeY<319 && relativeX>712 && relativeX< 840){
            ctx.drawImage(level4,712,190);
        }else if(relativeX>45 && relativeX<45+70 && relativeY>24 && relativeY<24+44){
            ctx.drawImage(back,45,24);
        }else{
            ctx.drawImage(levels,0,0);
        }
    }



}