var container = document.getElementById("container");

function createButtons() {
    for(i = 0; i<30; i++){
        var button = document.createElement("button");
        button.setAttribute("id", "button" + i);
        button.style.height("50px");
        button.style.width("75px");
        button.style.backgroundColor("green");
        button.style.border("2px solid black");
    }
    container.appendChild(button)
}

createButtons();