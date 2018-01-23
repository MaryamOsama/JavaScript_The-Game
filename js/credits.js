function credits()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var newimg = new Image();
    var arrowWidth=48;
    var arrowHeight=48;
    newimg.onload = function(){
        ctx.drawImage(newimg, 0, 0);
    }
    newimg.src = 'img/credits.png'
    ctx.drawImage(newimg, 0, 0);
    var X=0; var Y=0;
    canvas.addEventListener("click", arrowClick);
    function arrowClick(mouseEvent) {
        X=mouseEvent.clientX-this.offsetLeft;
        Y=mouseEvent.clientY-this.offsetTop
        if (X> 0 && X < arrowWidth) {
            if (Y > 0 && Y < arrowHeight) {
                canvas.removeEventListener("click", arrowClick);
                displayMenu();
                clickSound.play();
            }
        }
    }

}
