var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var color = document.getElementById('color');
var background = document.getElementById('background');
var description = document.getElementById('description');

function redrawAvatar(bodyColor, backgroundColor, descriptionText) {
  
//draw background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, 400, 400);
  
//    draw text
  ctx.fillStyle = 'black';
  ctx.font = '18px "Courier New"';
  ctx.textAlign = 'center';
  ctx.fillText(descriptionText, canvas.width/2, 40);
    
//    draw avatar
// the triangle
ctx.beginPath();
ctx.moveTo(canvas.width/2, 100);
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.closePath();
 
// the outline
ctx.lineWidth = 10;
ctx.strokeStyle = 'black';
ctx.stroke();
 
// the fill color
ctx.fillStyle = bodyColor;
ctx.fill();
  

}

function changeStyleEventListener() {
    ctx.clearRect(0, 0, 400, 400);
    redrawAvatar(color.value, background.value, description.value); 
}

function addEventListener() {
    document.getElementById('menu').addEventListener('change', changeStyleEventListener);
}

function load() {
    redrawAvatar(color.value, background.value, description.value);
    addEventListener();
}

window.onload = load;