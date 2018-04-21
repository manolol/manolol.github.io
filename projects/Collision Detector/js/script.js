var ball = document.getElementById('ball');
var ball_2 = document.getElementById('ball_2');
var ballDiameter = parseInt(window.getComputedStyle(ball).getPropertyValue('width'));
var style = window.getComputedStyle(ball); //gets the ball's style
var style_2 = window.getComputedStyle(ball_2);
var step = 3;

document.addEventListener('keydown', function(e) {

    console.log("key pressed's code: " + e.keyCode);

    // left (ball)
    if(e.keyCode === 37) {
        ball.style.left = (parseInt(style.left) - step + "px");
    }
    // up (ball)
    else if(e.keyCode === 38) {
        ball.style.top = (parseInt(style.top) - step + "px");
    }
    // right (ball)
    else if(e.keyCode === 39){
        ball.style.left = (parseInt(style.left) + step + "px");
    }
    // down (ball)
    else if(e.keyCode === 40){
        ball.style.top = (parseInt(style.top) + step + "px")
    }
    //left 'a' (ball 2)
    else if(e.keyCode === 65){
        ball_2.style.left = (parseInt(style_2.left) - step + "px");
    }
    //up 'w' (ball 2)
    else if(e.keyCode === 87){
        ball_2.style.top = (parseInt(style_2.top) - step + "px");
    }
    // right 'd' (ball 2)
    else if(e.keyCode === 68){
        ball_2.style.left = (parseInt(style_2.left) + step + "px");
    }
    // down 's' (ball 2)
    else if(e.keyCode === 83){
        ball_2.style.top = (parseInt(style_2.top) + step + "px");
    }

    // collision test
    function collisionTest(){
        if(parseInt(style.left) <= parseInt(style_2.left) + ballDiameter && parseInt(style.left) + ballDiameter >= parseInt(style_2.left) && parseInt(style.top) <= parseInt(style_2.top) + ballDiameter && parseInt(style.top) + ballDiameter >= parseInt(style_2.top)){
            document.getElementById('collision').innerHTML = "The balls collided!";
            document.getElementsByTagName('body')[0].style="background-color: black; color: white;";
        }
        else{
            document.getElementById('collision').innerHTML = "";
            document.getElementsByTagName('body')[0].style="background-color: white; color: black;";
        }
    }
    collisionTest();

    // update balls' position
    document.getElementById('blue').innerHTML = "Blue ball's position:  left = " + style.left + ", top = " + style.top;
    document.getElementById('red').innerHTML = "Red ball's position:  left = " + style_2.left + ", top = " + style_2.top;
});

// test
var ballHeight = window.getComputedStyle(ball).getPropertyValue("height");
var ballWidth = window.getComputedStyle(ball).getPropertyValue("width");
var ballBR = window.getComputedStyle(ball).getPropertyValue("border-radius");
var ballBC = window.getComputedStyle(ball).getPropertyValue("background-color");
var ballPosition = window.getComputedStyle(ball).getPropertyValue("position");
var ballTop = window.getComputedStyle(ball).getPropertyValue("top");
var ballLeft = window.getComputedStyle(ball).getPropertyValue("left");
var ballTransform = window.getComputedStyle(ball).getPropertyValue("transform");
console.log("height: " + ballHeight);
console.log("width: " + ballWidth);
console.log("border-radius: " + ballBR);
console.log("background-color: " + ballBC);
console.log("position: " + ballPosition);
console.log("top: " + ballTop);
console.log("left: " + ballLeft);
console.log("transform: " + ballTransform);
console.log("ball diameter: " + window.getComputedStyle(ball).getPropertyValue('width'));