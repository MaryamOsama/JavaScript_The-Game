
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bricks = [];
var brickShape;
var brick = function (width,height)
{
	this.brickWidth=width;
    this.brickHeigth=height;
    this.brickPadding = 5;
    this.brickOffsetTop =5;
    this.brickOffsetLeft =5;
	this.brick1=new Image(this.brickWidth,this.brickHeigth);
    this.brick1.src='img/block1.png'
    this.brick2=new Image(this.brickWidth,this.brickHeigth);
    this.brick2.src='img/block2.png'
}



brick.prototype.init=function (shape) {
    //var bricks = [];
    for(i=0; i<shape.length; i++) {
        bricks[i] = [];
        for(j=0; j<shape[i].length; j++) {
            bricks[i][j] = { x: 0, y: 0, status: 2 };

            if (shape[i].charAt(j) ==="1") {

                bricks[i][j] = { x: 0, y: 0, status: 1 };
            }
            else if (shape[i].charAt(j) ==="2") {

                bricks[i][j] = { x: 0, y: 0, status: 2 };
            }
            else if (shape[i].charAt(j) == " ") {
                bricks[i][j] = { x: 0, y: 0, status: 0 };
            }
        }
    }
    return bricks;
};



brick.prototype.drawBricks=function (bricks,shape) {
    for(c=0; c<shape.length; c++) {
        for(r=0; r<shape[c].length; r++) {
            var brickX = (r*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            var brickY = (c*(this.brickHeigth+this.brickPadding))+this.brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;

            if(bricks[c][r].status === 1) {
                ctx.beginPath();
                ctx.drawImage(this.brick1,brickX,brickY,this.brickWidth,this.brickHeigth);
                ctx.closePath();
            }
            else if(bricks[c][r].status === 2){
                ctx.beginPath();
                ctx.drawImage(this.brick2,brickX,brickY,this.brickWidth,this.brickHeigth);
                ctx.closePath();
            }
        }
    }
};




