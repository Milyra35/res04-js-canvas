window.addEventListener("DOMContentLoaded", function() {
    playGame();
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
        x:25,
        y:390,
        width:350,
        height:10,
        speed:6,
        direction:1
    };
    
    let bricks = [
        {
            color:"#855E2C",
            width:50,
            height:20,
            x:0,
            y:150
        },
        {
            color:"#855E2C",
            width:50,
            height:20,
            x:50,
            y:150
        },
        {
            color:"#855E2C",
            width:50,
            height:20,
            x:100,
            y:150
        },
        {
            color:"#855E2C",
            width:50,
            height:20,
            x:150,
            y:150
        },
        {
            color:"#855E2C",
            width:50,
            height:20,
            x:200,
            y:150
        },
        {
            color:"#855E2C",
            width:50,
            height:20,
            x:250,
            y:150
        },
        {
            color:"#855E2C",
            width:50,
            height:20,
            x:300,
            y:150
        },
        {
            color:"#855E2C",
            width:50,
            height:20,
            x:350,
            y:150
        }
    ];
    
    let canvasDom = document.getElementById("canvas");
    let ctx = canvasDom.getContext('2d');
    
    function moveBall() {
        // Draw the rectangle
        ctx.fillStyle = "#999";
        ctx.fillRect(0,0, canvasDom.width, canvasDom.height);
        ctx.fillStyle = game.color;
        
        // Create the bricks and detect the collisions with the ball
        for (let i=0; i<bricks.length; i++)
        {
            ctx.fillStyle = bricks[i].color;
            ctx.fillRect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
            ctx.strokeStyle = "#fff";
            ctx.strokeRect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
            
            // If the ball touches the bricks from the bottom
            if (ball.y <= bricks[i].y + bricks[i].height && ball.x >= bricks[i].x && ball.x <= (bricks[i].x + bricks[i].width))
            {
                ball.directionY = ball.directionY * (-1);
                ctx.clearRect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
                bricks.splice([i], 1);
            }
            
            // If the ball touches the bricks from the top
            else if (ball.y + ball.radius >= bricks[i].y && ball.y <= bricks[i].y + bricks[i].height && ball.x >= bricks[i].x && ball.x <= (bricks[i].x + bricks[i].width))
            {
                ball.directionY = ball.directionY * (-1);
                ctx.clearRect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
                bricks.splice([i], 1);
            }
        }
        
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
            }
        }
        detectCollisions();
        
        if (gameIsOver)
        {
            ctx.font = "bold 40px sans-serif";
            ctx.fillStyle = "red";
            ctx.fillText("Game over !", 75, 100);
            return;
        }
        
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
            if (paddle.x >= 350)
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