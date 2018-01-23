function Brick() {
    var brickWidth,brickHeight,brickPadding, brickImg1, brickImg2, brickImg3, brickImg4;
    this.numberOfBricks=0;
}
Brick.prototype.drawBricks=function (bricks,shape,footerHeight) {
    for(c=0; c<shape.length; c++) {
        for(r=0; r<shape[c].length; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (r*(this.brickWidth+this.brickPadding));
                var brickY = (c*(this.brickHeight+this.brickPadding))//+footerHeight;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.drawImage(this.brickImg1,brickX,brickY,this.brickWidth,this.brickHeight);
                ctx.fill();
                ctx.closePath();
            }
            else if(bricks[c][r].status == 2){
                var brickX = (r*(this.brickWidth+this.brickPadding));
                var brickY = (c*(this.brickHeight+this.brickPadding))//+footerHeight;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.drawImage(this.brickImg2,brickX,brickY,this.brickWidth,this.brickHeight);
                ctx.fill();
                ctx.closePath();
            }
            else if(bricks[c][r].status == 3){
                var brickX = (r*(this.brickWidth+this.brickPadding));
                var brickY = (c*(this.brickHeight+this.brickPadding))//+footerHeight;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.drawImage(this.brickImg3,brickX,brickY,this.brickWidth,this.brickHeight);
                ctx.fill();
                ctx.closePath();
            }
            else if(bricks[c][r].status == 4){
                var brickX = (r*(this.brickWidth+this.brickPadding));
                var brickY = (c*(this.brickHeight+this.brickPadding))//+footerHeight;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.drawImage(this.brickImg4,brickX,brickY,this.brickWidth,this.brickHeight);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
};

Brick.prototype.init=function (bWidth,bHeight,bPadding,shape) {
    this.brickPadding = bPadding;
    this.brickWidth = bWidth;
    this.brickHeight = bHeight;
    this.brickImg1=new Image(this.brickWidth,this.brickHeight);
    this.brickImg1.src='img/brick.png';
    this.brickImg2=new Image(this.brickWidth,this.brickHeight);
    this.brickImg2.src='img/brick2.png';
    this.brickImg3=new Image(this.brickWidth,this.brickHeight);
    this.brickImg3.src='img/brick3.png';
    this.brickImg4=new Image(this.brickWidth,this.brickHeight);
    this.brickImg4.src='img/brick4.png';
    var bricks = [];
    for(i=0; i<shape.length; i++) {
        bricks[i] = [];
        for(j=0; j<shape[i].length; j++) {
            bricks[i][j] = { x: 0, y: 0, status: 2 };

            if (shape[i].charAt(j) ==="1") {
                this.numberOfBricks++;
                bricks[i][j] = { x: 0, y: 0, status: 1 };
            }
            else if (shape[i].charAt(j) ==="2") {
                this.numberOfBricks+=2;
                bricks[i][j] = { x: 0, y: 0, status: 2 };
            }
            else if (shape[i].charAt(j) ==="3") {
                this.numberOfBricks+=3;
                bricks[i][j] = { x: 0, y: 0, status: 3 };
            }
            else if (shape[i].charAt(j) ==="4") {
                this.numberOfBricks+=4;
                bricks[i][j] = { x: 0, y: 0, status: 4 };
            }
            else if (shape[i].charAt(j) == " ") {
                bricks[i][j] = { x: -150, y: -130, status: 0 };
            }
        }
    }
    return bricks;
};



