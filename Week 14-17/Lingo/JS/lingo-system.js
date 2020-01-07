var input = ""
var split1 = ""
var rowCounter = 0;
var word = words[Math.floor(Math.random()*words.length)];
var split2 = word.split('');
var btn = document.getElementById("submit");
btn.setAttribute("onclick", "submit()");

function startGame(){
	var container = document.getElementById("wrapper");
	for(var a=0; a<5; a++){
		for(var i=0; i<5; i++){
			var menu = document.createElement("div");
			menu.setAttribute("id", "box_" + [a] + "_" + [i]);
			container.appendChild(menu);
			menu.style.backgroundColor = ("#06a4ff");
			menu.style.color = ("black");
			menu.style.border = ("1px solid black");
			menu.style.padding = ("5px 5px 5px 5px");
			menu.style.justifyContent = ("center");
			menu.style.fontSize = ("70px");
			menu.style.fontFamily = ("Arial");
			menu.style.fontWeight = ("600");
			menu.style.textTransform = ("uppercase");
		}
	}
	document.onload = document.getElementById("box_" + [0] + "_" + [0]).innerText = split2[0];
	document.onload = document.getElementById("box_" + [0] + "_" + [0]).style.backgroundColor = ("rgb(17, 199, 17)");
}
function submit() {
	input = document.getElementById("input").value;
	split1 = input.split('');
	if(rowCounter < 4){
		for(var i = 0; i<split1.length; i++){
			document.getElementById("box_" + [rowCounter] + "_" + [i]).innerText = split1[i];
			if(split1[i] === split2[i]){
				document.getElementById("box_" + [rowCounter] + "_" + [i]).style.backgroundColor = ("rgb(17, 199, 17)");
			}
			else if(split2.includes(split1[i])){
				document.getElementById("box_" + [rowCounter] + "_" + [i]).style.backgroundColor = ("yellow");
				document.getElementById("box_" + [rowCounter] + "_" + [i]).style.borderRadius = ("50%");
			}
			else{
				document.getElementById("box_" + [rowCounter] + "_" + [i]).style.backgroundColor = ("#06a4ff");
			}
		}
	rowCounter++;
	}
	else{
		document.getElementById("Header").innerHTML = "Lost, word was " + word;
		btn.innerHTML = "Restart";
		btn.setAttribute("onclick", "location.reload()");
	}
	if(split1 === split2 || word === input){
		document.getElementById("Header").innerHTML = "Winner";
		btn.innerHTML = "Restart";
		btn.setAttribute("onclick", "location.reload()");
	}
}
startGame();