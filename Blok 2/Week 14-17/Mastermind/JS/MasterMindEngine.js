var board = document.getElementById("board");

var colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "white",
  "purple"
]
for(i=0; i<4; i++){
var gameCode = colors[Math.floor(Math.random() * colors.length)];
console.log(gameCode)
}


function gameStart() {
for(var a = 0; a < 12; a++){
    for(var b = 0; b < 4; b++){
        var peg = document.createElement("button");
        peg.setAttribute("id", "box_" + a + "_" + b);
        peg.addEventListener("click")
        peg.onclick = peg.style.backgroundColor = "red"
        peg.style.borderRadius = "50px";
        peg.style.backgroundColor = "black";
        peg.style.width = "50px";
        peg.style.height = "50px";
        peg.style.display = "inline-block";
        peg.style.marginLeft = "30px";
        peg.style.marginTop = "4px";
        peg.style.border = "none"
        board.appendChild(peg)
        }
    }
}
gameStart();

function input() {

}