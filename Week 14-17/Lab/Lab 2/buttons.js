var container = document.getElementById("container");
var arrayLength = 30;
var init1 = 0;
var temp;
function buttons() {
  for (i = 0; i < arrayLength; i++) {
    temp = document.createElement("button");
    temp.setAttribute("id", "button-" + i + "-" + init1);
    temp.innerHTML = [i + 1];
    container.appendChild(temp)
    temp.style.backgroundColor = ("green");
    temp.style.width = ("75px");
    temp.style.height = ("50px");
    temp.style.marginLeft = ("12px");
    temp.style.marginTop = ("5px");
    temp.style.border = ("none");
    if(init1 = 0){
      temp.onclick("temp.style.backgroundColor = ('red')");
      init1++;
    }
  }
}

buttons();