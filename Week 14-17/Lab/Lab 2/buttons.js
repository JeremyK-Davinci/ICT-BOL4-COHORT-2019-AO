var container = document.getElementById("container");
var buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var arrayLength = buttons.length;
var temp;

for (i = 0; i < arrayLength; i++) {
  temp = document.createElement("button");
  temp.className = 'buttons';
  temp.innerHTML = buttons[i];
  document.getElementsByTagName('div')[0].appendChild(temp);
  temp.style.backgroundColor = ("green");
  temp.style.width = ("75px");
  temp.style.height = ("50px");
  temp.style.marginLeft = ("12px");
  temp.style.marginTop = ("5px");
  temp.style.border = ("none");
  for(a = 0; a < arrayLength; a++){
    temp.setAttribute("onclick", "temp.style.backgroundColor = ('red')");
    console.log("color")
  }
}