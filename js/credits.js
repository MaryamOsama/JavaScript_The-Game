function credits()
{
    clearInterval(timerId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var newimg = new Image();
    var arrowWidth=117;
    var arrowHeight=95;
    newimg.onload = function(){
                context.drawImage(newimg, buttonX[3], buttonY[3]);
	}
    newimg.src = 'img/c.jpg'
    ctx.drawImage(newimg, 0, 0);
    ctx.font = "bold italic 26px Times";
    ctx.fillText("Game developed by",150,90);
    ctx.font = "bold italic 20px Times";
    ctx.fillText("Mohammad Salah",170,150);
    ctx.fillText("Maisa Mohamed",170,180);
    ctx.fillText("Mohab Mahmoud",170,210);
    ctx.fillText("Maryam Badreldin",170,240);
    ctx.fillText("ITI intake-38 OpenSource",650,340);


 var arrowWidth=117;
    var arrowHeight=95;
    var img = new Image();
    img.onload = function(){
                context.drawImage(img, buttonX[3], buttonY[3]);
	}
    img.src = 'img/leftwards-arrow.png'
    ctx.drawImage(img, 0, 0);
   
    var X=0; var Y=0;
      canvas.addEventListener("click", arrowClick);              
function arrowClick(mouseEvent) {
    X=mouseEvent.clientX-this.offsetLeft;
	 Y=mouseEvent.clientY-this.offsetTop
	console.log(X);
	
	console.log(Y);
	
                        
if (X> 0 && X < arrowWidth) {
                if (Y > 0 && Y < arrowHeight) {
                   
	console.log("hereeeeeee");
        canvas.removeEventListener("click", arrowClick);              
        displayMenu();
	console.log(mouseEvent);
        //clearInterval(timerId);


                }
            }
        }

}
