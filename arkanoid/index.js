window.addEventListener("DOMContentLoaded", function() {
    playGame();
    //initGame();
});

function playGame() {
    let ball = {
        color:"red",
        radius:10,
        x:200,
        y:200,
        directionX:0,
        directionY:-1,
    };
    
    let game = {
        color:"999",
        width:400,
        height:400
    };
    
    let paddle = {
        color:"black",
        x:150,
        y:390,
        width:100,
        height:10,
        speed:6,
        direction:0
    };
    
    let canvasDom = document.getElementById("canvas");
    let ctx = canvasDom.getContext('2d');
    
    function moveBall() {
        // Draw the rectangle
        ctx.fillStyle = "#999";
        ctx.fillRect(0,0, canvasDom.width, canvasDom.height);
        ctx.fillStyle = game.color;
        
        // The direction of the ball
        ball.x += 2 * ball.directionX;
        ball.y += 2 * ball.directionY;
        
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
            else if (ball.x >= 390)
            {
                ball.directionX = -1;
            }
            // Condition when it hits the paddle
            else if (ball.y >= paddle.y - ball.radius && ball.x >= paddle.x && ball.x <= (paddle.x + paddle.width))
            {
                ball.directionY = ball.directionY * (-1);
                
                let relativePosition = (ball.x - paddle.x) / paddle.width;
    
                // Adjust the angle
                if (relativePosition < 0.5 && relativePosition < 0.25) 
                {
                    ball.directionX = -2;
                    ball.directionY = -2;
                } 
                else if (relativePosition > 0.5 && relativePosition > 0.75) 
                {
                    ball.directionX = 2;
                    ball.directionY = -2;
                }
                else if (relativePosition < 0.5 && relativePosition > 0.25)
                {
                    ball.directionX = -1;
                }
                else if (relativePosition > 0.5 && relativePosition < 0.75)
                {
                    ball.directionX = 1;
                }
                else 
                {
                    ball.directionX = 0;
                }
            }
            // Condition if it falls
            else if (ball.y > 400)
            {
                gameIsOver = true;
                if (gameIsOver)
                {
                    ctx.font = "bold 40px sans-serif";
                    ctx.fillStyle = "red";
                    ctx.fillText("Game over !", 75, 100);
                    
                    gameIsOver = false;
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
            paddle.direction =+ 1;
            paddle.x += paddle.speed * paddle.direction;
            
            if (paddle.x >= 400)
            {
                paddle.x = 0;
            }
        }
        else if (event.code === "ArrowLeft")
        {
            paddle.x -= paddle.speed * paddle.direction;
            
            if (paddle.x <= 0)
            {
                paddle.x = 400;
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




// if (ball.x < paddle.x + (paddle.width / 4))
// {
//     ball.directionX = -1;
//     ball.directionY = -2;
// }
// else if (ball.x < paddle.x + paddle.width / 4 && ball.x < 3 * (paddle.width / 4))
// {
//     ball.directionX = -2;
// }
// else if (ball.x > paddle.x + (paddle.width / 4))
// {
//     ball.directionX = 1;
//     ball.directionY = 2;
// }
// else if (ball.x > paddle.x + (paddle.width / 4) && ball.x > 3 * (paddle.width / 4))
// {
//     ball.directionX = 2;
// }
// else 
// {
//     ball.directionX = 0;
// }