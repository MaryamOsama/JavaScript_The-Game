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
    ctx.fillStyle = "#8210ce";
    ctx.fillRect(0,0,canvas.width,this.footerHeight);
    ctx.font = "32px Bold Courier ";
    ctx.fillStyle = "#fdf5ff";
    ctx.fillText("Score: "+this.score, 100, 25);
    ctx.fillText("Level: "+this.level, canvas.width/2 , 25);
    ctx.fillText("Lives: "+this.lives, canvas.width-110, 25);
};
GameProgress.prototype.randomBadgeX=function () {
    var min = 50, max = 900;
    let r = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    return r;
};
GameProgress.prototype.randomBadgeType=function () {
    var min = 1, max = 4;
    let r = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    return r;
};
GameProgress.prototype.reset=function (){
    if(this.level ==1){
        this.dx=5;
        this.dy=-5;
    } else if(this.level==2){
        this.dx=5;
        this.dy=-5;
    } else if(this.level==3){
        this.dx=5;
        this.dy=-5;
    } else if(this.level==4){
        this.dx=10;
        this.dy=-10;
    }
};
GameProgress.prototype.init=function (){
    this.footerHeight=35;
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
            "                 ",
            "  1111 1111 1111 ",
            "   11   11   11  ",
            "   11   11   11  ",
            "   11   11   11  ",
            "   11   11   11  ",
            "  1111  11  1111 "
        ]
        this.badgeSpeed=10;
    }else if(this.level==2){
        this.lives=3;
        this.score=0;
        this.dx=5;
        this.dy=-5;
        this.brickPadding=5;
        this.brickShape=[
            "                  ",
            " 11111222222333333",
            "  111 22  22333333",
            "  111 22  2233  33",
            "  111 22  2233  33",
            "  111 22222233  33",
            "  111 22222233  33",
            "  111 22222233  33",
            "  111 22  2233  33",
            "  111 22  22333333",
            "  111 22  22333333",
        ];
        this.badgeSpeed=10;
    }
    else if(this.level==3){
        this.lives=4;
        this.score=0;
        this.dx=5;
        this.dy=-5;
        this.brickPadding=0;
        this.brickShape=[
            "                   ",
            "    333333333333   ",
            "   32222222222223  ",
            "  3222222222222223 ",
            " 344444444444444443",
            " 344444444444444443",
            "  3222222222222223 ",
            "   32222222222223  ",
            "    333333333333   ",
            "43434343434343434343",
            "34343434343434343434",


        ]
        this.badgeSpeed=10;
    }
    else if(this.level==4){
        this.lives=5;
        this.score=0;
        this.dx=10;
        this.dy=-10;
        this.brickPadding=0;
        this.brickShape=[
            "                     ",
            "        42124        ",
            "       4211124       ",
            "      422111224      ",
            "     42211111224     ",
            "    4422111111224    ",
            "   422111111111224   ",
            "   422222444222224   ",
            "   4222224 4222224   ",
            "   4222224 4222224   ",
            "   4222224 4222224   ",
            "   4444444 4444444   ",
        ]
        this.badgeSpeed=10;
    }

};