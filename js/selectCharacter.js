function selectCharacter() {

clearInterval(timerId);	
console.log(ctx);

//ctx.clearRect(0, 0, canvas.width, canvas.height);


    var arrowWidth=48;
    var arrowHeight=48;
    var back = new Image();
    var go = new Image();
    var character = new Image();
    back.onload = function(){
                ctx.drawImage(back, 0, 0);
	}
    back.src = 'img/arr.png'
    ctx.drawImage(back, 0, 0);

    go.onload = function(){
                ctx.drawImage(go, 972, 552);
	}
    go.src = 'img/go.png'
    ctx.drawImage(go,972,552);

    character.onload = function(){
                ctx.drawImage(character, 0, 100);
	}
    character.src = 'img/characters.png'
    ctx.drawImage(character, 0, 100);
   
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

if (X> 972 && X < 972+arrowWidth) {
                if (Y > 552 && Y < 552+arrowHeight) {
                   
	console.log("hereeeeeee");
        canvas.removeEventListener("click", arrowClick);              
        selectLevel();
	console.log(mouseEvent);
        //clearInterval(timerId);


                }
            }


        }

   // var arrowX=0;
    //var arrowY=0;
    

 
    

}
