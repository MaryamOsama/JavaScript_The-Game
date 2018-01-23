function help(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var back2 = new Image();
    var bg2= new Image();
    var arrowWidth=48;
    var arrowHeight=48;
    back2.onload = function(){
        ctx.drawImage(back2, 0, 0);
    };
    back2.src = 'img/arr.png';
    ctx.drawImage(back2, 0, 0);
    bg2.onload = function(){
        ctx.drawImage(bg2, 0, 0);
    };
    bg2.src = 'img/instruction.png';
    ctx.drawImage(bg2, 0, 0);
    canvas.addEventListener("click", backClick);
    function backClick(mouseEvent) {
        helpX=mouseEvent.clientX-this.offsetLeft;
        helpY=mouseEvent.clientY-this.offsetTop;

        if (helpX> 0 && helpX < arrowWidth) {
            if (helpY > 0 && helpY < arrowHeight) {
                clickSound.play();
                console.log("hereeeeeee");
                canvas.removeEventListener("click", backClick);
                displayMenu();
                console.log(mouseEvent);


            }
        }
    }
}