function win(score,level){
    console.log(level);
    var winSound=new Audio("sound/win.mp3");
    winSound.play();
    winSound.loop=1;
    var win=new Image(398,212);
    win.src="img/icon/win/win.png";
    var homeIcon1=new Image(48,49);
    homeIcon1.src="img/icon/win/main1.png";
    var homeIcon2=new Image(48,49);
    homeIcon2.src="img/icon/win/main2.png";
    var next1=new Image(63,39);
    next1.src="img/icon/win/next1.png";
    var next2=new Image(63,39);
    next2.src="img/icon/win/next2.png";
    win.onload=function () {
        ctx.drawImage(win,311,194);
        ctx.drawImage(homeIcon1,350,344);
        ctx.drawImage(next1,629,359);
        ctx.font = '24pt Courier';
        ctx.strokeStyle="#8df8ff";
        ctx.strokeText("SCORE:", 435, 310);
        ctx.strokeText(score, 552, 310);
        ctx.strokeText("LEVEL:", 435, 360);
        ctx.strokeText(level, 552, 360);
    };
    canvas.addEventListener("click",ClickHAndler,false);
    canvas.addEventListener("mousemove",mouseMoveHandler);

    function ClickHAndler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeX> 345 && relativeX< 393&& relativeY>359 && relativeY<398){
            sessionStorage.setItem("moveDirectToMenu","1");
            document.location.reload();
        }else if(relativeX> 629 && relativeX< 692 && relativeY>359 && relativeY<398){
            if(level==4){
                clickSound.play();
                winSound.loop=false;
                sessionStorage.setItem("moveDirectToMenu","1");
                winSound.stop();
                document.location.reload();
            }else {
                winSound.loop=false;
                canvas.removeEventListener("click",ClickHAndler,false);
                canvas.removeEventListener("mousemove",mouseMoveHandler);
                level++;
                paused=0;
                winSound.pause();
                clickSound.play();
                cancelAnimationFrame(animationId);
                console.log(level);
                startGame(level);
                /*sessionStorage.setItem("moveDirectToGame","1");
                sessionStorage.setItem("level", level);
                document.location.reload();*/
            }
        }
    }

    function mouseMoveHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeX> 345 && relativeX< 393 && relativeY>359 && relativeY<398){
            ctx.drawImage(homeIcon2,350,344);
        }else if(relativeX> 629 && relativeX< 692 && relativeY>359 && relativeY<398){
            ctx.drawImage(next2,629,359);
        }else{
            ctx.drawImage(homeIcon1,350,344);
            ctx.drawImage(next1,629,359);
            ctx.strokeText("SCORE:", 435, 310);
            ctx.strokeText(score, 552, 310);
            ctx.strokeText("LEVEL:", 435, 360);
            ctx.strokeText(level, 552, 360);
        }
    }


}
