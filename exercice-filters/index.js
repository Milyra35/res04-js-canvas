window.addEventListener("DOMContentLoaded", function() {
    // sortList();
    list();
});

function sortList() {
    let filters = document.querySelectorAll("#filters li");
    let items = document.querySelectorAll("#items li");
    
    for (let i=0; i<filters.length; i++) {
        filters[i].addEventListener("click", function(event) {
            let tableColor = [];
            let click = event.target;
            let color = click.getAttribute("data-color");
            filters[i].classList.toggle('inactive');
            
            for(let item of items) {
                let color2 = item.getAttribute("data-color");
                
                if (color === color2) 
                {
                    tableColor.push(item);
                    item.classList.toggle("transparent");
                    
                    item.addEventListener("transitionend", function(event) {
                        item.classList.toggle('inactive');
                    });
                    item.classList.remove("inactive");
                }
            }
            // console.log(tableColor);
        });
    }
}

function list() {
    let items = [  
        {  
            color : "red",  
            element : null,  
        },  
        {  
            color : "blue",  
            element : null,  
        },  
        {  
            color : "yellow",  
            element : null,  
        },  
        {  
            color : "purple",  
            element : null,  
        },  
        {  
            color : "green",  
            element : null,  
        },  
        {  
            color : "black",  
            element : null,  
        },  
        {  
            color : "pink",  
            element : null,  
        },  
        {  
            color : "green",  
            element : null,  
        },  
        {  
            color : "black",  
            element : null,  
        },  
        {  
            color : "purple",  
            element : null,  
        },  
        {  
            color : "red",  
            element : null,  
        },  
        {  
            color : "blue",  
            element : null,  
        },  
        {  
            color : "pink",  
            element : null,  
        },  
        {  
            color : "purple",  
            element : null,  
        },  
        {  
            color : "yellow",  
            element : null,  
        },  
        {  
            color : "green",  
            element : null,  
        },  
        {  
            color : "black",  
            element : null,  
        },  
        {  
            color : "blue",  
            element : null,  
        },  
        {  
            color : "red",  
            element : null,  
        },  
        {  
            color : "pink",  
            element : null,  
        }  
    ];
    
    let ul = document.getElementById("items");
    
    for (let i=0; i<items.length; i++)
    {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.setAttribute("data-color", items[i].color);
        li.id = `box-${i}`;
    }
    
    let filters = document.querySelectorAll("#filters li");
    let boxes = document.querySelectorAll("#items li");
    
    for (let i=0; i<filters.length; i++) {
        filters[i].addEventListener("click", function(event) {
            let tableColor = [];
            let click = event.target;
            let color = click.getAttribute("data-color");
            filters[i].classList.toggle('inactive');
            
            
            for (let i=0; i<boxes.length - 1; i++) 
            {
                let color2 = boxes[i].getAttribute("data-color");
                let currentBox = boxes[i].getBoundingClientRect();
                // console.log(currentBox);
                let nextBox = boxes[i+1].getBoundingClientRect();
                // console.log(nextBox);
                
                let moveX = currentBox.x - nextBox.x;
                let moveY = currentBox.y - nextBox.y;
                
                if(color === color2)
                {
                    tableColor.push(boxes[i]);
                    boxes[i].classList.toggle("transparent");
                    if (nextBox)
                    {
                        boxes[i+1].style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
                    }
                }
                
                for (let j=i+1; j<boxes.length; j++)
                {
                    boxes[j].style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
                }
            }
        });
    }
}