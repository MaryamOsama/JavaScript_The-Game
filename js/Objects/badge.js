function Badge(){
    this.badgeY=0;
    var badgeX, badgeY,badgeWidth, badgeHeight,badgeType,badgeImg,dx,dy;
//this.ballStyle=ballStyle;
}
Badge.prototype.drawBadge=function(){
    ctx.beginPath()
    ctx.drawImage(this.badgeImg,this.badgeX,this.badgeY,this.badgeWidth,this.badgeHeight);
    ctx.fill();
    ctx.closePath();
};

Badge.prototype.init=function(badgeX,badgeY,badgeWidth,badgeHeight,badgeType) {
    this.badgeX=badgeX;
    this.badgeY=badgeY;
    this.badgeWidth=badgeWidth;
    this.badgeHeight=badgeHeight;
    this.badgeType=badgeType;
    //badge type 1 : win new live
    if(badgeType==1){
        this.badgeImg=new Image(40,40);
        this.badgeImg.src='img/icon/badge/badge2.png';
    }
    //badge type 2 : decrease paddle width with 10 pixel ,if paddle width become less than 40, lives decrease
    else if(badgeType==2){
        this.badgeImg=new Image(40,40);
        this.badgeImg.src='img/icon/badge/badge1.png';
    }

    //badge type 3 : loss live
    else if(badgeType==3){
        this.badgeImg=new Image(40,40);
        this.badgeImg.src='img/icon/badge/badge3.png';
    }
    //badge type 4 : increase paddle width with 20 pixel ,if paddle width become greater than 160, lives increase
    else if(badgeType==4){
        this.badgeImg=new Image(40,40);
        this.badgeImg.src='img/icon/badge/badge4.png';
    }
};



