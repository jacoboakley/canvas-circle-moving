var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "white";

var randomY = 250;
var randomX = 250;    


    
setInterval (function () {
  randomX = Math.floor((Math.random() * 500) + 1);
  randomY = Math.floor((Math.random() * 500) + 1);
  
  ctx.fillStyle = "white";
  ctx.fillRect (0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "red";
  var ball = ctx.beginPath ();
           ctx.arc (randomX, randomY, 20, 0, 2*Math.PI);
           ctx.fill ();
}, 1000);