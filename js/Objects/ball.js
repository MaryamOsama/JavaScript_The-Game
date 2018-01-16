
var Ball=function(ballx,bally,radius) {
    this.ballX=ballx;
    this.ballY=bally;
    this.ballRadius=radius;
    this.ballShape=new Image(this.ballX,this.ballY);
    this.ballShape.src="img/ball.png";
    
}
Ball.prototype.drawBall=function(){
    
    ctx.beginPath();
    ctx.drawImage(this.ballShape,this.ballX,this.ballY,40,40)

    /* ctx.arc(this.ballx,this.bally,this.ballRadius,0,Math.PI*2)
    ctx.fillStyle="red";
    ctx.fill(); */
    ctx.closePath();
}

