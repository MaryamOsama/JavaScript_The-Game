function selectCharacter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var char1=new Image(123,117);
    char1.src="img/icon/selectCharacter/char1_1.png";
    var char2=new Image(123,117);
    char2.src="img/icon/selectCharacter/char2_1.png";
    var char3=new Image(123,117);
    char3.src="img/icon/selectCharacter/char3_1.png";
    var char4=new Image(123,117);
    char4.src="img/icon/selectCharacter/char4_1.png";

    var selectCharacterImg=new Image(1020,600);
    selectCharacterImg.src="img/icon/selectCharacter/selectCharacter.png";
    selectCharacterImg.onload=function () {
        ctx.drawImage(selectCharacterImg,0,0);
    };
    canvas.addEventListener("click",clickHandler,false);
    function clickHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeY>467 && relativeY<584){
            if(relativeX>56 && relativeX< 179){
                canvas.removeEventListener("click",clickHandler,false);
                canvas.removeEventListener("mousemove",mouseMoveHandler,false);
                selectLevel("superman");
            }else if(relativeX>341&& relativeX<464 ){
                canvas.removeEventListener("click",clickHandler,false);
                canvas.removeEventListener("mousemove",mouseMoveHandler,false);
                selectLevel("spiderman");
            }else if(relativeX>583 && relativeX<706 ){
                canvas.removeEventListener("click",clickHandler,false);
                canvas.removeEventListener("mousemove",mouseMoveHandler,false);
                selectLevel("batman");

            }else if(relativeX>836 && relativeX< 959) {
                canvas.removeEventListener("click", clickHandler, false);
                canvas.removeEventListener("mousemove", mouseMoveHandler, false);
                selectLevel("hitman");
            }
        }
    }
    canvas.addEventListener("mousemove",mouseMoveHandler,false);
    function mouseMoveHandler(event) {
        var relativeX = event.clientX - canvas.offsetLeft;
        var relativeY = event.clientY - canvas.offsetTop;
        if(relativeY>467 && relativeY<584){
            if(relativeX>56 && relativeX< 179){
                ctx.drawImage(char1,56,467);
            }else if(relativeX>341&& relativeX<464 ){
                ctx.drawImage(char2,341,467);
            }else if(relativeX>583 && relativeX<706 ){
                ctx.drawImage(char3,586,466);

            }else if(relativeX>836 && relativeX< 959){
                ctx.drawImage(char4,838,465);
            }else{
                ctx.drawImage(selectCharacterImg,0,0);
            }
        }
    }

}