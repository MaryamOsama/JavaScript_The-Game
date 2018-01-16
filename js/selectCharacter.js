function selectCharacter() {

clearInterval(timerId);	
console.log(ctx);

//ctx.clearRect(0, 0, canvas.width, canvas.height);


    var arrowWidth=117;
    var arrowHeight=85;
    var back = new Image();
    back.onload = function(){
                ctx.drawImage(back, 0, 0);
	}
    back.src = 'img/leftwards-arrow.png'
    ctx.drawImage(back, 0, 0);
   
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

   // var arrowX=0;
    //var arrowY=0;
    

 
    

}
