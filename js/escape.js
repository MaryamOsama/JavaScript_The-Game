function pause(){
    var img=new Image(650,400);
    img.src="img/escape2.png";
    img.onload=function () {
        ctx.drawImage(img,340,240);
    };
    document.addEventListener("keydown",kdhandler,false);
    function kdhandler(event){
        if(event.keyCode == 27){
            //console.log("hereeeee");
                paused=0;
        }
    }
    canvas.addEventListener("click",function (e) {
        if(e.clientX > 485 && e.clientX < 613 && e.clientY>352 && e.clientY<481){
            sessionStorage.setItem("moveDirectToMenu","1");
            document.location.reload();

        }
    })

}
