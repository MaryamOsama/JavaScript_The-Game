function credits()
{

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var newimg = new Image();
    //var img = new Image();
    var arrowWidth=48;
    var arrowHeight=48;
    newimg.onload = function(){
                ctx.drawImage(newimg, 0, 0);
	}
    newimg.src = 'img/c2_3.png'

   // img.onload = function(){
     //           ctx.drawImage(img, 0,0);
	//}
   // img.src = 'img/arr.png';

    ctx.drawImage(newimg, 0, 0);
    //ctx.drawImage(img, 0, 0);   
    
   
    var X=0; var Y=0;
    canvas.addEventListener("click", arrowClick);              
    function arrowClick(mouseEvent) {
    X=mouseEvent.clientX-this.offsetLeft;
    Y=mouseEvent.clientY-this.offsetTop      
      if (X> 0 && X < arrowWidth) {
                if (Y > 0 && Y < arrowHeight) {
        canvas.removeEventListener("click", arrowClick);              
        displayMenu();


                }
            }
        }

}
