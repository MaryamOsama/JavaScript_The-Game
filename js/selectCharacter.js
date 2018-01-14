function selectCharacter() {
    clearInterval(timerId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //canvas.removeEventListener("click", selectCharacter);
    var img=new Image();
     img.src='img/play.png';
    ctx.drawImage(img, 0, 0);
    //ctx.font = "30px Arial";
    //ctx.strokeText("Click on Screen", 450, 225);
}
