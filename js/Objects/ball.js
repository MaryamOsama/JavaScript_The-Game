var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var Ball=function(ballx,bally,radius) {
    this.ballx=ballx;
    this.bally=bally;
    this.ballRadius=radius;
    this.ballShape=new Image(this.ballx,this.bally);
    this.ballShape.src="./img/ball1.png";
    
}
Ball.prototype.drawBall=function(){
    
    ctx.beginPath();
    ctx.drawImage(this.ballShape,this.ballx,this.bally,40,40)

    /* ctx.arc(this.ballx,this.bally,this.ballRadius,0,Math.PI*2)
    ctx.fillStyle="red";
    ctx.fill(); */
    ctx.closePath();
}

