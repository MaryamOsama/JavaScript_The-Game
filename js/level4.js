function level4(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var flagToStart=0;
var canvas = document.getElementById("myCanvas");
var paddlex=(canvas.width-200)/2;
var shape =new String();
var shape=[
    "       44444444       ",
    "      4 111111 4      ",
    "     4 11111111 4     ",
    "    4 1111111111 4    ",
    "   4111111111111114   ",
    "   4111114444111114   ",
    "   4111114  4111114   ",
    "   4111114  4111114   ",
    "   4111114  4111114   ",
    "   4444444  4444444   ",
];
var paddle1=new paddle(150,paddlex);
var ball=new Ball(canvas.width/2-35, canvas.height-paddle1.paddleHeight-60, 30);
var brick1=new brick(40,35,3);
//var mySound4 = new sound("video-games-general-gaming-sounds-game-over.mp3");
var bricks=brick1.init(shape);
var rightPressed = false;
var leftPressed = false;
var image=new Image(canvas.width,canvas.height);
image.src="img/c.jpg";
var setup=new GameProgress();
setup.dx=-5;
setup.dy=5;
 


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
canvas.addEventListener('click',function () {
    console.log("event done");
    flagToStart=1;

},false)
function drawlevel4(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //mySound4.play();
    //ctx.drawImage(image,0, 0); 
    paddle1.drawPaddle();
    ball.drawBall();
    

    brick1.drawBricks(bricks,shape);
    
       
    
    
    if (rightPressed && paddle1.paddleX < canvas.width-paddle1.paddleWidth) {
        paddle1.paddleX += 7;
       
    }
    else if(leftPressed && paddle1.paddleX > 0) {
        paddle1.paddleX -= 7;
    }

    if(ball.ballX + setup.dx > canvas.width-ball.ballRadius|| ball.ballX + setup.dx < ball.ballRadius) {
        setup.dx = -setup.dx;
    }
    if(ball.ballY + setup.dy < ball.ballRadius) {
        setup.dy = -setup.dy;
    }
    else if(ball.ballY + setup.dy > canvas.height-ball.ballRadius) {
        if(ball.ballX > paddle1.paddleX && ball.ballX < paddle1.paddleX + paddle1.paddleWidth) {
            setup.dy = -setup.dy;
        }  else {
            /* setup.lives--;
            if(!setup.lives) {
                alert("Game Over");
                document.location.reload();
            }
            else { */
                ball.ballX = canvas.width/2-35;
                ball.ballY = canvas.height-paddle1.paddleHeight-60;
                //setup.init(-3);
                paddle1.paddleX = (canvas.width-paddle1.paddleWidth)/2;
            //}
        }
        }
        
        if(flagToStart==1) {
            ball.ballX += setup.dx;
            ball.ballY += setup.dy;
           // badge.badgeY += 5;
        }
            
    
 requestAnimationFrame(drawlevel4);
}
drawlevel4();
}
level4();
//setInterval(draw, 10);






