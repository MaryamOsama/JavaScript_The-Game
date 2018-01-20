function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
        
}
sound.prototype.play=function(){
    this.sound.play();
}
sound.prototype.stop=function(){
    this.sound.pause();
}
