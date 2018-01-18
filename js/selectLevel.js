var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function selectLevel()
{
ctx.clearRect(0, 0, canvas.width, canvas.height);
	console.log("hereeeeeee2");

var  step1 = new Image();
step1.onload = function(){
                ctx.drawImage(step1, 0, 0);
	}
step1.src='img/bglevels.jpg';
ctx.drawImage(step1,0,0);

 var levelX=0,levelY=0;
 var levelWidth=134;
 var levelHeight=109;
canvas.addEventListener("click", levelClick);              

function levelClick(mouseEvent) {
    levelX=mouseEvent.clientX-this.offsetLeft;
    levelY=mouseEvent.clientY-this.offsetTop;
	                        
if (levelX> 148 && levelX < 148+levelWidth) {
                if (levelY > 460 && levelY < 460+levelHeight) {
        canvas.removeEventListener("click", levelClick);              
        draw();
	      }
            }
        
if (levelX> 283 && levelX < 283+levelWidth) {
                if (levelY > 351 && levelY < 351+levelHeight) {
        canvas.removeEventListener("click", levelClick);              
        drawlevel2();
	      }
            }
if (levelX> 419 && levelX < 419+levelWidth) {
                if (levelY > 242 && levelY < 242+levelHeight) {
        canvas.removeEventListener("click", levelClick);              
        drawlevel3();
	      }
            }

if (levelX> 551 && levelX < 551+levelWidth) {
                if (levelY > 134 && levelY < 134+levelHeight) {
        canvas.removeEventListener("click", levelClick);              
        drawlevel4();
	      }
            }


           }

}
selectLevel();
