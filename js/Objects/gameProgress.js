function GameProgress(level) {
    this.level=level;
    var footerHeight;
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
    ctx.fillStyle = "#480b5b";
    ctx.fillRect(0,0,canvas.width,this.footerHeight);
    ctx.font = "28px Arial";
    ctx.fillStyle = "#9f0555";
    ctx.fillText("Score: "+this.score, 8, 25);
    ctx.fillText("Level: "+this.level, canvas.width/2 -110, 25);
    ctx.fillText("Lives: "+this.lives, canvas.width-110, 25);
};
GameProgress.prototype.randomBadgeX=function () {
    var min = 50, max = 1300;
    let r = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    return r;
};
GameProgress.prototype.randomBadgeType=function () {
    var min = 1, max = 4;
    let r = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    return r;
};
GameProgress.prototype.reset=function (level){
    if(this.level ==1){
        this.dx=5;
        this.dy=-5;
    } else if(this.level==2){
        this.dx=5;
        this.dy=-5;
    } else if(this.level==3){
        this.dx=10;
        this.dy=-10;
    } else if(this.level==4){
        this.dx=10;
        this.dy=-10;
    }
}
;
GameProgress.prototype.init=function (){
    this.footerHeight=0;
    this.paddleWidth=100;
    this.paddleHeight=10;
    this.paddleX=(canvas.width-this.paddleWidth)/2;
    this.paddleY=canvas.height-this.paddleHeight;
    this.ballX=canvas.width/2;
    this.ballY=canvas.height-20;
    this.ballRadius=10;
    this.brickHeight=30;
    this.brickWidth=50;
    this.badgeX= -40;
    this.badgeY=-40 ;
    this.badgeWidth=40 ;
    this.badgeHeight=40;
    if(this.level==1){
        this.lives=3;
        this.score=0;
        this.dx=5;
        this.dy=-5;
        this.brickPadding=10;
        this.brickShape=[
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "        1          ",
        ];
        this.badgeSpeed=5;
    }else if(this.level==2){
        this.lives=3;
        this.score=0;
        this.dx=5;
        this.dy=-5;
        this.brickPadding=5;
        this.brickShape=[
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "        1          ",
        ];
        this.badgeSpeed=5;
    }
    else if(this.level==3){
        this.lives=3;
        this.score=0;
        this.dx=10;
        this.dy=-10;
        this.brickPadding=0;
        this.brickShape=[
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "        1          ",
        ];
        this.badgeSpeed=5;
    }
    else if(this.level==4){
        this.lives=1;
        this.score=0;
        this.dx=10;
        this.dy=-10;
        this.brickPadding=0;
        this.brickShape=[
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "                   ",
            "        1          ",
        ];
        this.badgeSpeed=5;
    }

};