var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
var x = 240;
var y = 160;
var playerRadius = 20;
var playerStatus = true;
var right = false;
var left = false;
var up = false;
var score = 0;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        right = true;
    }
    else if(e.keyCode == 37) {
        left = true;
    }
  else if(e.keyCode = 38){
    up = true;
  }
}
function start(){
  x=240;
  y=160;
  playerStatus = true;
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        right = false;
    }
    else if(e.keyCode == 37) {
        left = false;
    }
    else if(e.keyCode = 38){
    up = false;
  }
}
function edgeColl (){
  if(x>canvas.width-playerRadius){
    x-=2;
  }
  if(x<playerRadius){
    x+=2;
  }
  if(y<playerRadius){
    y+=4;
  }
}
function dispScore(){
  ctx.beginPath();
  ctx.font = "20px Arial"
  ctx.fillText("Score: "+Math.floor(score),0,20);
  ctx.fillStyle = "white"
  ctx.fill();
  ctx.closePath();
}
function deathMessage (){
  ctx.beginPath();
  ctx.font = "40px Times"
  ctx.fillText("YOU DIED",140,160);
  ctx.fillStyle = "red"
  ctx.fill();
  ctx.closePath();
}
function drawPlayer() {
  ctx.beginPath();
  ctx.arc(x, y, playerRadius, 0, Math.PI*2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}
function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(playerStatus==true){
    drawPlayer();
    dispScore();
    edgeColl();
  }
  if(playerStatus==false){
    score = 0;
    deathMessage();
  }
  
  y+=2;
  if(y > canvas.height-playerRadius){
    playerStatus = false;
    score = 0;
  }
  if(up==true){
    y-=4;
  }
  if(right==true){
    x+=2;
  }
  if(left==true){
    x-=2;
  }
  score += 0.01;
}
setInterval(draw,10);
