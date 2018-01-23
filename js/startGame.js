function keyDownHandler(e) {
    console.log("here startgame script");
    if(e.keyCode == 27){
        if(paused==0){
            paused=1;
            pause();
        }

    }
}
function startGame(level){
    let setup=new GameProgress(level);
    setup.init();
    let flagToStart=0;
    let background=new Image();
    background.src="img/background.png";
    let catchedBadgeFlag=0;
    let ball=new Ball();
    ball.init(setup.ballX,setup.ballY,setup.ballRadius);
    var paddle=new Paddle();
    paddle.init(setup.paddleX,setup.paddleY,setup.paddleWidth,setup.paddleHeight);
    let brick=new Brick();
    let bricks=brick.init(setup.brickWidth,setup.brickHeight,setup.brickPadding,setup.brickShape);
    var badge=new Badge();
    badge.init(setup.badgeX,setup.badgeY,setup.badgeWidth,setup.badgeHeight,setup.randomBadgeType());
    let rightPressed = false;
    let leftPressed = false;
    var ballHitSound=new Audio("sound/brickHit.mp3");
    var getBadgeSound=new Audio("sound/getBadge.mp3");
    var gameOverSound=new Audio("sound/gameOver.mp3");

    document.addEventListener("keydown", keyDownHandler, false);




    document.addEventListener("mousemove", mouseMoveHandler, false);
    function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            if(flagToStart==0) {
                ball.ballX=relativeX;
            }
            paddle.paddleX = relativeX - paddle.paddleWidth / 2;
        }

    }
    //collision handling between ball and bricks
    function collisionDetection() {
        for (c = 0; c < setup.brickShape.length; c++) {
            for (r = 0; r < setup.brickShape[c].length; r++) {
                var b = bricks[c][r];
                if (ball.ballY < b.y)
                    continue;
                if (ball.ballY > b.y+ brick.brickHeight)
                    continue;
                if (ball.ballX  > b.x + brick.brickWidth)
                    continue;
                if (ball.ballX  < b.x )
                    continue;

                ballHitSound.play();
                if ((setup.dx > 0) && (setup.dy > 0))
                {
                    if (ball.ballY > b.y) {
                        setup.dx = -setup.dx;
                    }
                    else
                    {
                        setup.dy = -setup.dy;
                    }
                }
                else if ((setup.dx < 0) && (setup.dy > 0))
                {
                    if (ball.ballY> b.y)
                        setup.dx  = -setup.dx ;
                    else
                        setup.dy = -setup.dy;
                }
                else if ((setup.dx > 0) && (setup.dy < 0))
                {
                    if (ball.ballY < b.y+brick.brickHeight)
                        setup.dx  = -setup.dx ;
                    else
                        setup.dy=-setup.dy;
                }
                else if ((setup.dx < 0)&& (setup.dy < 0))
                {
                    if (ball.ballY < b.y+brick.brickHeight)
                        setup.dx  = -setup.dx ;
                    else
                        setup.dy= -setup.dy;

                }

                if(b.status == 1) {
                    b.status = 0; b.x=-150; b.y=-130;
                    brick.numberOfBricks--;
                }
                else if(b.status == 2){
                    b.status=1;
                }
                else if(b.status == 3){
                    b.status=2;
                }
                else if(b.status == 4){
                    b.status=3;
                }
                setup.score++;
                //sessionStorage.score=Number(sessionStorage.score)+1;
                if(brick.numberOfBricks==0) {
                    paused=1;
                    win(level);
                }
            }
        }
    }
    //adding mouse click event listener to @game_area to flag to start game
    canvas.addEventListener('click',function () {flagToStart=1;},false)
    //the main function for starting game and moving
    function startMove() {
        if (!paused){
            /*document.addEventListener("keydown",function (e) {
                if(e.keyCode == 27){
                    paused=1;
                    pause();
                }
            },false);*/
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            collisionDetection();
            brick.drawBricks(bricks, setup.brickShape,setup.footerHeight);
            ball.drawBall();
            paddle.drawPaddle();
            setup.drawFooter();
            if (badge.badgeY > canvas.height + 1000) {
                badge.init(setup.randomBadgeX(), 50, 40, 40, setup.randomBadgeType());
                catchedBadgeFlag = 0;
            }
            else if (badge.badgeY < canvas.height && catchedBadgeFlag == 0) {
                badge.drawBadge();
            }
            if (badge.badgeY + badge.badgeHeight == canvas.height - paddle.paddleHeight) {
                if (badge.badgeX > paddle.paddleX && badge.badgeX < paddle.paddleX + paddle.paddleWidth ||
                    badge.badgeX + badge.badgeWidth < paddle.paddleX + paddle.paddleWidth && badge.badgeX + badge.badgeWidth > paddle.paddleX) {
                    getBadgeSound.play();
                    if (badge.badgeType == 1) {
                        setup.lives++;
                    }
                    else if (badge.badgeType == 2) {
                        flagToStart = 0;
                        ball.ballX = canvas.width / 2;
                        ball.ballY = canvas.height - 20;
                        paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;
                    }
                    else if (badge.badgeType == 3) {
                        if (paddle.paddleWidth < 40) {
                            setup.lives--;
                            flagToStart = 0;
                            paddle.paddleWidth = 100;

                        } else {
                            paddle.paddleWidth -= 10;
                        }
                    } else if (badge.badgeType == 4) {
                        if (paddle.paddleWidth > 160) {
                            setup.lives++;
                        } else {
                            paddle.paddleWidth += 10;
                        }
                    }
                    catchedBadgeFlag = 1;
                }
            }

            //condition to inverse ball X direction if the ball is in  collision with left and right border of @game_area
            if (ball.ballX + setup.dx > canvas.width - ball.ballRadius || ball.ballX + setup.dx < ball.ballRadius) {
                setup.dx = -setup.dx;
            }
            //condition to inverse ball Y direction if the ball is in  collision with upper border of @game_area
            if (ball.ballY + setup.dy < setup.footerHeight+ball.ballRadius ) {
                setup.dy = -setup.dy;
            }
            //condition to inverse ball Y direction if the ball is in  collision with paddle or with lower border of @Game_area
            else if (ball.ballY + setup.dy > canvas.height - ball.ballRadius) {
                //collision with paddle
                if (ball.ballX > paddle.paddleX && ball.ballX < paddle.paddleX + paddle.paddleWidth) {
                    setup.dy = -setup.dy;
                }
                //collision with lower border of @Gam_Area without hitting the paddle
                else {
                    setup.lives--;
                    if (!setup.lives) {
                        paused=1;
                        gameOverSound.play();
                        gameover(setup.score);
                    }
                    else {
                        setup.reset();
                        ball.ballX = setup.ballX;
                        ball.ballY =setup.ballY;
                        paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;
                        flagToStart=0;
                    }
                }
            }
            if (rightPressed && paddle.paddleX < canvas.width - paddle.paddleWidth) {
                paddle.paddleX += 12;
                if(flagToStart==0) ball.ballX+=12;
            }
            else if (leftPressed && paddle.paddleX > 0) {
                paddle.paddleX -= 12;
                if(flagToStart==0) ball.ballX-=12;
            }
            if (flagToStart == 1) {
                ball.ballX += setup.dx;
                ball.ballY += setup.dy;
                badge.badgeY += setup.badgeSpeed;
            }else{
                badge.badgeY =canvas.height+badge.badgeHeight;
            }

        }

        animationId = requestAnimationFrame(startMove);

    }
    startMove();

}

