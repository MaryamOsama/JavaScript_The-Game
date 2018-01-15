var flagToStart=1
var canvas = document.getElementById("myCanvas");
var paddlex=(canvas.width-200)/2;
var shape =new String();
var shape=[
    "212 21212 212",
    " 2   212   2 ",
    " 2   212   2 ",
    " 2   212   2 ",
    "212  212  212",
];
var paddle1=new paddle(150,paddlex);
var ball=new Ball(canvas.width/2-35, canvas.height-paddle1.paddleHeight-60, 30);
var brick1=new brick(35,35);

var bricks=brick1.init(shape);
var rightPressed = false;
var leftPressed = false;
//  var image=new image();
//  image.src="./img/c.jpg";
var setup=new GameProgress(3);
setup.init(-3);
 


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
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    paddle1.drawPaddle();
    ball.drawBall();
    //ctx.drawImage(image,0, 0,canvas.width,canvas.height);

    brick1.drawBricks(bricks,shape);
    
       
    
    
    if (rightPressed && paddle1.paddleX < canvas.width-paddle1.paddleWidth) {
        paddle1.paddleX += 7;
       
    }
    else if(leftPressed && paddle1.paddleX > 0) {
        paddle1.paddleX -= 7;
    }

    if(ball.ballx + setup.dx > canvas.width-ball.ballRadius || ball.ballx + setup.dx < ball.ballRadius) {
        setup.dx = -setup.dx;
    }
    if(ball.bally + setup.dy < ball.ballRadius) {
        setup.dy = -setup.dy;
    }
    else if(ball.bally + setup.dy > canvas.height-ball.ballRadius) {
        if(ball.ballx > paddle.paddleX && ball.ballx < paddle.paddleX + paddle.paddleWidth) {
            setup.dy = -setup.dy;
        }  else {
            setup.lives--;
            if(!setup.lives) {
                alert("Game Over");
                document.location.reload();
            }
            else {
                ball.ballX = canvas.width/2;
                ball.ballY = canvas.height-90;
                //setup.init(-3);
                paddle.paddleX = (canvas.width-paddle.paddleWidth)/2;
            }
        }
        }
        
        if(flagToStart==1) {
            ball.ballX += setup.dx;
            ball.ballY += setup.dy;
            badge.badgeY += 5;
        }
            
    
 //requestAnimationFrame(draw);
}
setInterval(draw, 10);






