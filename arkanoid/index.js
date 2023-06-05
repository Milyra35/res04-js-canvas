window.addEventListener("DOMContentLoaded", function() {
    playGame();
    //initGame();
});

function playGame() {
    let ball = {
        color:"red",
        radius:10,
        x:100,
        y:100,
        directionX:0,
        directionY:-1,
    };
    
    let game = {
        color:"999",
        width:200,
        height:200
    };
    
    let paddle = {
        color:"black",
        x:75,
        y:190,
        width:50,
        height:10,
        speed:4,
        direction:1
    };
    
    let canvasDom = document.getElementById("canvas");
    let ctx = canvasDom.getContext('2d');
    
    function moveBall() {
        // Draw the rectangle
        ctx.fillStyle = "#999";
        ctx.fillRect(0,0, canvasDom.width, canvasDom.height);
        ctx.fillStyle = game.color;
        
        // The direction of the ball
        ball.x += 1.5 * ball.directionX;
        ball.y += 1.5 * ball.directionY;
        
        // Draw the ball
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fill();
        
        let gameIsOver = false;
        
        function detectCollisions() {
            // Condition to change the ball's direction when it hits the top
            if (ball.y <= 10)
            {
                ball.directionY = ball.directionY * (-1);
            }
            // Condition when it hits the sides
            else if (ball.x <= 10)
            {
                ball.directionX = 1;
            }
            else if (ball.x >= 190)
            {
                ball.directionX = -1;
            }
            // Condition when it hits the paddle
            else if (ball.y >= paddle.y - ball.radius && ball.x >= paddle.x && ball.x <= (paddle.x + paddle.width))
            {
                ball.directionY = ball.directionY * (-1);
                
                if (ball.x < paddle.x + (paddle.width / 2))
                {
                    ball.directionX = -1;
                }
                else if (ball.x > paddle.x + (paddle.width / 2))
                {
                    ball.directionX = 1;
                }
            }
            // Condition if it falls
            else if (ball.y > 200)
            {
                gameIsOver = true;
                if (gameIsOver === true)
                {
                    ctx.font = "bold 20px sans-serif";
                    ctx.fillStyle = "red";
                    ctx.fillText("Game over !", 45, 100);
                    return;
                }
            }
        }
        detectCollisions();
        
        // Draw the paddle
        ctx.fillStyle = "A5702C";
        ctx.fillStyle = paddle.color;
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
        
        requestAnimationFrame(moveBall);
    }
    
    window.addEventListener("keydown", function(event) {
        // console.log(event.code);
        if (event.code === "ArrowRight")
        {
            paddle.x += paddle.speed * paddle.direction;
            
            if (paddle.x >= 150)
            {
                paddle.x = 0;
            }
        }
        else if (event.code === "ArrowLeft")
        {
            paddle.x -= paddle.speed * paddle.direction;
            
            if (paddle.x <= 0)
            {
                paddle.x = 200;
            }
        }
    });
    
    requestAnimationFrame(moveBall);
}

// function initGame() {
//     let paddle = {
//         color:"A5702C",
//         x:75,
//         y:190,
//         width:50,
//         height:10,
//         speed:2,
//         direction:1
//     };
    
//     window.addEventListener("keydown", function(event) {
//         console.log(event.code);
//         if (event.code === "ArrowRight")
//         {
//             paddle.x += 1 * paddle.direction;
//         }
        
//     });
// }