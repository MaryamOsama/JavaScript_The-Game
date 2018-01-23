

function pause(){
    var pause=new Image(662,356);
    var homeIcon2=new Image(135,136);
    homeIcon2.src="img/icon/Home_Icon2.png";
    var continue2=new Image(135,136);
    continue2.src="img/icon/continue2.png";

    pause.src="img/icon/pause.png";
    pause.onload=function () {
        ctx.drawImage(pause,179,122);
    };


    document.removeEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keydown",kdhandler,false);
    function kdhandler(event){
        if(event.keyCode == 27){
            console.log("here");
                canvas.removeEventListener('click', kdhandler,false);
                canvas.removeEventListener('mousemove', mouseMoveHandler,false);
                paused=0;
            //console.log("hereeeee");
            //document.removeEventListener("keydown",kdhandler,false);

        }
    }
    canvas.addEventListener("click",mouseClickHandler,false);
    function mouseClickHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeX> 312 && relativeX<447 && relativeY>222 && relativeY<358) {
            sessionStorage.setItem("moveDirectToMenu","1");
            document.location.reload();
        }else if(relativeX> 565 && relativeX< 700 && relativeY>222 &&relativeY<358){
            canvas.removeEventListener('click', mouseClickHandler);
            canvas.removeEventListener('mousemove', mouseMoveHandler);
            //document.removeEventListener("keydown",kdhandler,false);
            paused=0;
        }
    }

    canvas.addEventListener('mousemove',mouseMoveHandler,false);
    function mouseMoveHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeX> 312 && relativeX<447 && relativeY>222 && relativeY<358) {
            ctx.drawImage(homeIcon2,312,222);

            /*sessionStorage.setItem("moveDirectToMenu","1");
            document.location.reload();*/

        }else if(relativeX> 565 && relativeX< 700 && relativeY>222 &&relativeY<358){
            ctx.drawImage(continue2,565,222);

        }else{
            ctx.drawImage(pause,179,122);
        }
    }


}

