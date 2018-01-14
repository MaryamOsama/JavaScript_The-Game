function selectCharacter() {
    clearInterval(timerId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //canvas.removeEventListener("click", selectCharacter);

    var newimg = new Image();
    newimg.src = 'img/play.png'
    ctx.drawImage(newimg, 0, 0);

}
