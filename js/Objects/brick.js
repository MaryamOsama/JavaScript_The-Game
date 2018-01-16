
var bricks = [];
var brickShape;
var brick = function (width,height,padding)
{
	this.brickWidth=width;
    this.brickHeigth=height;
    this.brickPadding =padding;
    this.brickOffsetTop =5;
    this.brickOffsetLeft =5;
	this.brick1=new Image(this.brickWidth,this.brickHeigth);
    this.brick1.src='img/brick5.png';
    this.brick2=new Image(this.brickWidth,this.brickHeigth);
    this.brick2.src='img/brick6.png';
    this.brick3=new Image(this.brickWidth,this.brickHeigth);
    this.brick3.src='img/brick2.png'
    this.brick4=new Image(this.brickWidth,this.brickHeigth);
    this.brick4.src='img/brick.png';
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
            }else if (shape[i].charAt(j) ==="3") {

                bricks[i][j] = { x: 0, y: 0, status: 3 };
            }else if (shape[i].charAt(j) ==="4") {

                bricks[i][j] = { x: 0, y: 0, status: 4 };
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
            }else if(bricks[c][r].status === 3){
                ctx.beginPath();
                ctx.drawImage(this.brick3,brickX,brickY,this.brickWidth,this.brickHeigth);
                ctx.closePath();
            }else if(bricks[c][r].status === 4){
                ctx.beginPath();
                ctx.drawImage(this.brick4,brickX,brickY,this.brickWidth,this.brickHeigth);
                ctx.closePath();
            }
        }
    }
};




