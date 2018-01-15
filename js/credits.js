function credits()
{
    clearInterval(timerId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var newimg = new Image();
    
    newimg.src = 'img/c.jpg'
    ctx.drawImage(newimg, 0, 0);
    ctx.font = "bold italic 26px Times";
    //ctx.textAlign="center";
    //ctx.fillStyle="#FF8C00";
    //ctx.fillText("Credits :",250,90);
   // ctx.fillText("A new implementation of Brick-Breaker game in HTML5 and JavaScript ",30,90);
    ctx.fillText("Game developed by",150,90);
    ctx.font = "bold italic 20px Times";
    ctx.fillText("Mohammad Salah",170,150);
    ctx.fillText("Maisa Mohamed",170,180);
    ctx.fillText("Mohab Mahmoud",170,210);
    ctx.fillText("Maryam Badreldin",170,240);
    ctx.fillText("ITI intake-38 OpenSource",650,340);
}
