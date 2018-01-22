function Ball(){
    var ballX, ballY, ballRadius;
    //var ballStyle=ballStyle;
}
Ball.prototype.drawBall=function(){
    ctx.beginPath();
    ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#23207d";
    ctx.fill();
    ctx.closePath();
};
Ball.prototype.init=function(ballX,ballY,ballRadius){
    this.ballX=ballX;
    this.ballY=ballY;
    this.ballRadius=ballRadius;
};



