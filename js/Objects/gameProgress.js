function GameProgress() {
    var score;
    var lives;
    var dx, dy;
    var badgeSpeed;
    var paddleWidth,paddleHeight,paddleX, paddleY;
    var brickWidth,brickHeight,brickPadding,brickShape;
    var ballX, ballY, ballRadius;
    var badgeX,badgeY,badgeWidth,badgeType;
    //this.difficulty=difficulty;
}
GameProgress.prototype.drawFooter=function () {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+this.score, 8, 20);
    ctx.fillText("Lives: "+this.lives, canvas.width-65, 20);
};
GameProgress.prototype.randomBadgeX=function () {
    var min = 50, max = 1100;
    let r = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    return r;
};
GameProgress.prototype.randomBadgeType=function () {
    var min = 1, max = 4;
    let r = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    return r;
};