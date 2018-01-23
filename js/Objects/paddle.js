function Paddle() {
    var paddleHeight, paddleWidth , paddleX, paddleY;
    //this.paddleStyle = paddleStyle;
    this.paddleImg=new Image(100,10);
    this.paddleImg.src="img/paddle.png";
}
Paddle.prototype.drawPaddle=function () {
        ctx.drawImage(this.paddleImg, this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight);

};
Paddle.prototype.init=function (paddleX,paddleY,paddleWidth,paddleHeight) {
    this.paddleX=paddleX;
    this.paddleY=paddleY;
    this.paddleHeight = paddleHeight;
    this.paddleWidth = paddleWidth;

};