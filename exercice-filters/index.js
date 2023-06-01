window.addEventListener("DOMContentLoaded", function() {
    sortList();
});

function sortList() {
    let filters = document.querySelectorAll("#filters li");
    let items = document.querySelectorAll("#items li");
    
    for (let i=0; i<filters.length; i++) {
        filters[i].addEventListener("click", function(event) {
            let click = event.target;
            
            for(item of items) {
                let list = click.getAttribute("data-color");
                console.log(list);
            }
            
        });
    }
}