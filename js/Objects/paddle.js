var paddle=function (paddleWidth,paddlex,paddleHeight) {
    
 this.paddleWidth =  paddleWidth;
 this.paddleHeight = 26;
 this.paddleX = paddlex;


}

paddle.prototype.drawPaddle = function(){
    var paddleShape=new Image(this.paddleWidth,this.paddleHeight);
    paddleShape.src="./img/paddle.png";
    ctx.beginPath();
    ctx.drawImage(paddleShape,this.paddleX, canvas.height-this.paddleHeight-10,this.paddleWidth, this.paddleHeight);
    
    ctx.closePath();

    
}
