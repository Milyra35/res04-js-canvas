window.addEventListener("DOMContentLoaded", function() {
    playGame();
});

function playGame() {
    let ball = {
        color:"red",
        radius:10,
        x:100,
        y:100,
        direction:-1
    };
    
    let game = {
        color:"999",
        width:200,
        height:200
    };
    
    let canvasDom = document.getElementById("canvas");
    let ctx = canvasDom.getContext('2d');
    
    function moveBall() {
        // Draw the rectangle
        ctx.fillStyle = "#999";
        ctx.fillRect(0,0, canvasDom.width, canvasDom.height);
        ctx.fillStyle = game.color;
        
        // The direction of the ball
        ball.y += 1 * ball.direction;
        
        // Draw the ball
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fill();
        
        // Condition to change the ball's direction
        if (ball.y <= 10 || ball.y >= 190)
        {
            ball.direction = ball.direction * (-1);
        }
        requestAnimationFrame(moveBall);
    }
    requestAnimationFrame(moveBall);
}