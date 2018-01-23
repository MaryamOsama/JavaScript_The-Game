function gameover(score){
    var looseImg =new Image(675,505);
    looseImg.src="img/icon/gameover.png";

    var mainBtnImg =new Image(105,40);
    mainBtnImg.src="img/icon/mainmenu.png";

    var mainBtnImg2 =new Image(105,40);
    mainBtnImg2.src="img/icon/mainmenu2.png";

    looseImg.onload=function () {
        ctx.drawImage(looseImg,172,50);
        ctx.drawImage(mainBtnImg,457,435);
        ctx.font = '24pt Courier';
        ctx.strokeStyle="#8df8ff";
        ctx.strokeText(score, 552, 310);
    };

    canvas.addEventListener("click",function (e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        var relativeY = e.clientY - canvas.offsetTop;
        console.log(relativeX);console.log(relativeY);
        if(relativeX> 457 && relativeX<562 && relativeY>435 && relativeY<475) {
            sessionStorage.setItem("moveDirectToMenu","1");
            document.location.reload();
        }
    },false);
    canvas.addEventListener("mousemove",function (e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        var relativeY = e.clientY - canvas.offsetTop;
        if(relativeX> 457 && relativeX<562 && relativeY>435 && relativeY<475) {
            ctx.drawImage(mainBtnImg2,457,435);
            /*sessionStorage.setItem("moveDirectToMenu","1");
            document.location.reload();*/

        }else{
            ctx.drawImage(looseImg,172,50);
            ctx.drawImage(mainBtnImg,457,435);
            ctx.font = '24pt Courier';
            ctx.strokeStyle="#8df8ff";
            ctx.strokeText(score, 552, 310);
        }
    },false);

}