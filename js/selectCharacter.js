function selectCharacter() {
    clearInterval(timerId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener("click", arrowClick);
    var arrowX=0;
    var arrowY=0;
    var arrowWidth=80;
    var arrowHeight=116;
    var newimg = new Image();
    newimg.src = 'img/leftwards-arrow.png'
    ctx.drawImage(newimg, 0, 0);


function arrowClick(mouseEvent) {

            if (mouseX > arrowX && mouseX < arrowX + arrowWidth) {
                if (mouseY > arrowY && mouseY < arrowY + arrowHeight) {
                   
    ctx.fillText("Game developed by",150,90);
                   // displayMenu();
		    console.log(mouseEvent);
                    //clearInterval(timerId);

                   // canvas.removeEventListener("click", arrowClick);
                }
            }
        }
    

}
