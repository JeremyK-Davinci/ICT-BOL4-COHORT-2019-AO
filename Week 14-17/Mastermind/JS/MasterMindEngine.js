dragElement(elmnt = document.getElementById("mydiv"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function gameStart() {
var board = document.getElementById("board");
for(var a = 0; a < 12; a++){
    for(var b = 0; b < 4; b++){
        var peg = document.createElement("div");
        peg.setAttribute("id", "box_" + a + "_" + b);
        board.appendChild(peg)
        peg.style.borderRadius = "50px";
        peg.style.backgroundColor = "black";
        peg.style.width = "50px";
        peg.style.height = "50px";
        peg.style.display = "inline-block";
        peg.style.marginLeft = "30px";
        peg.style.marginTop = "4px";
        }
    }
}
gameStart();
