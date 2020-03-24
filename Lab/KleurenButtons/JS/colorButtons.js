var container = document.getElementById("container");
var button = {};
var clicks = 0;

function createButtons() {
    for(a=0; a<5; a++){
        for(i = 0; i<6; i++){
            button = document.createElement("button");
            button.setAttribute("id", "button" + a + "_" + i);
            button.innerHTML = (a + "_" + i);
            button.style.backgroundColor = ("green");
            button.style.display = ("inline-block")
            button.style.width = ("75px");
            button.style.height = ("50px");
            button.style.border = ("2px solid black")
            container.appendChild(button)
            button.onclick = function() {
                buttonFunction(button);
            };
        }
    }
}

function buttonFunction(button) {
    if(clicks === 0){
    }
}

createButtons();