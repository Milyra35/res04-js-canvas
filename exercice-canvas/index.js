function exercice6()
{
    let yellow = {
        color:"#FFD65B",
        radius:100,
        x:110,
        y:110
    };
    
    let canvasDom = document.getElementById("ex6");
    let ctx = canvasDom.getContext('2d');
    
    
    
    let pacman = new Image();
    pacman.src = 'pacman.png';
    let isPacman = true;
    
    setInterval(function() {
        ctx.fillStyle = "grey";
        ctx.fillRect(0,0, canvasDom.width, canvasDom.height);
        
        if(isPacman)
        {
            ctx.drawImage(pacman, 10, 10);
        }
        else 
        {
            ctx.fillStyle = yellow.color;
            ctx.beginPath();
            ctx.arc(yellow.x, yellow.y, yellow.radius, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        isPacman = !isPacman;
    }, 500);
}

function exercice5()
{
    let circleBlue = {
        color:"blue",
        radius:10,
        x:150,
        y:150
    };
    
    let canvasDom = document.getElementById("ex5");
    let ctx = canvasDom.getContext('2d');
    
    function grow() {
        circleBlue.radius = circleBlue.radius + 10;
    
        ctx.fillStyle = "#fff";
        ctx.fillRect(0,0, canvasDom.width, canvasDom.height);
        ctx.fillStyle = circleBlue.color;
        ctx.beginPath();
        ctx.arc(circleBlue.x, circleBlue.y, circleBlue.radius, 0, 2 * Math.PI);
        ctx.fill();
        
        if (circleBlue.radius >= 135)
        {
            clearInterval(interval);
        }
    }
    let interval = setInterval(grow, 100);
}

function exercice4()
{
    let circleBlue = {
        color:"blue",
        radius:100,
        x:150,
        y:100
    };
    
    let canvasDom = document.getElementById("ex4");
    let ctx = canvasDom.getContext('2d');
    
    
    function moveCircle() {
        circleBlue.x = circleBlue.x - 10;
    
        ctx.fillStyle = "#fff";
        ctx.fillRect(0,0, canvasDom.width, canvasDom.height);
        ctx.fillStyle = circleBlue.color;
        ctx.beginPath();
        ctx.arc(circleBlue.x, circleBlue.y, circleBlue.radius, 0, 2 * Math.PI);
        ctx.fill();
        console.log(circleBlue.x);
        
        if (circleBlue.x <= 0)
        {
            clearInterval(interval);
        }
    }
    let interval = setInterval(moveCircle, 100);
}


function exercice3()
{
    let canvasDom = document.getElementById("ex3");
    let ctx = canvasDom.getContext('2d');
    ctx.font = "bold 68px Montserrat";
    ctx.fillStyle = "black";
    ctx.fillText('Geometry.io', 10, 50);
}

function exercice2()
{
    let circle = {
        color: "blue",
        radius:100,
        x:120,
        y:120
    };
    
    let canvasDom = document.getElementById("ex2");
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0, canvasDom.width, canvasDom.height);
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

function exercice1()
{
    let square = document.getElementById("ex1");
    let ctx = square.getContext('2d');
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 200, 200);
}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});