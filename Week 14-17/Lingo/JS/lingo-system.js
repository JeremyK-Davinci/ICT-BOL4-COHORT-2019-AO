var input = "";
var split1 = "";
var rowCounter = 0;
var word = words[Math.floor(Math.random()*words.length)];
var split2 = word.split('');
var speelMenu = document.getElementById("menu");
var speelMenu2 = document.getElementById("menu2");
var playerCount = 0;
var menuScores = document.getElementById("scoreMenu");
var playerScores = "";
var names = [];
var btn = document.getElementById("submit");
var container = document.getElementById("wrapper");

function startGame(){
	console.log(playerScores);
	btn.setAttribute("onclick", "submit(eEgg)");
	speelMenu.style.removeProperty("display");
	menuScores.style.removeProperty("display");
	speelMenu2.style.display = "none";
	for(var a=0; a<5; a++){
		for(var i=0; i<5; i++){
			var menu = document.createElement("div");
			menu.setAttribute("id", "box_" + [a] + "_" + [i]);
			container.appendChild(menu);
			menu.style.backgroundColor = ("#06a4ff");
			menu.style.color = ("black");
			menu.style.display = ("flex");
			menu.style.border = ("1px solid black");
			menu.style.padding = ("5px 5px 5px 5px");
			menu.style.justifyContent = ("center");
			menu.style.fontSize = ("70px");
			menu.style.fontFamily = ("Arial");
			menu.style.fontWeight = ("600");
			menu.style.textTransform = ("uppercase");
			menu.style.alignItems = ("center");
		}
	}
	var eEgg = document.createElement("input");
	eEgg.style.visibility = "0.0";
	eEgg.style.width = "50px";
	eEgg.style.height = "10px";
	container.appendChild(eEgg);
	document.onload = document.getElementById("box_" + [0] + "_" + [0]).innerText = split2[0];
	document.onload = document.getElementById("box_" + [0] + "_" + [0]).style.backgroundColor = ("rgb(17, 199, 17)");
}

function submit(eEgg) {
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
		btn.setAttribute("onclick", "startGame()");
	}
	if(split1 === split2 || word === input){
		document.getElementById("Header").innerHTML = "Winner";
		btn.innerHTML = "Restart";
		btn.setAttribute("onclick", "startGame()");
		playerScores++
	}
	if(eEgg.value === "answer"){
		document.getElementById("box_" + [0] + "_" + [0]).innerText = split2[0];
		document.getElementById("box_" + [1] + "_" + [1]).innerText = split2[1];
		document.getElementById("box_" + [2] + "_" + [2]).innerText = split2[2];
		document.getElementById("box_" + [3] + "_" + [3]).innerText = split2[3];
		document.getElementById("box_" + [4] + "_" + [4]).innerText = split2[4];
		document.getElementById("Header").innerHTML = "Winner";
		btn.innerHTML = "Restart";
		btn.setAttribute("onclick", "startGame()");
	}
	else{
		alert("Fuck off");
	}
}

function userCheck() {
	menuScores.style.display = "none";
	speelMenu.style.display = "none";
	var input1 = document.createElement("input");
	var confirm1 = document.createElement("button");
	var txt1 = document.createElement("p");
	var txt2 = document.createElement("h2");

	speelMenu2.appendChild(txt2);
	speelMenu2.appendChild(txt1);
	speelMenu2.appendChild(input1);
	speelMenu2.appendChild(confirm1);

	txt1.innerHTML = "The point of the game is to quess the word as fast as possible," + "<br>" + "if you guess the word you get a point." + "<br>" + "How many players are there?" + "<br>";
	txt2.innerHTML = "Welcome to Lingo." + "<br>";
	input1.placeholder = "Max. Players: 16";
	confirm1.innerHTML = "Click";

	
	//Styling after this line//
	txt1.style.fontSize = "26px";
	txt1.style.fontWeight = "600";
	txt1.style.textAlign = "center";
	txt1.style.marginBottom = "50px";

	txt2.style.fontSize = "36px";
	txt2.style.fontWeight = "700";
	txt2.style.textAlign = "center";
	txt2.style.marginBottom = "25px";

	input1.style.fontSize = "16px";
	input1.style.fontWeight = "600";
	input1.style.width = "250px";
	input1.style.height = "25px";
	input1.style.border = "2px solid black";
	input1.style.borderRadius = "10px";
	input1.style.marginLeft = "265px";
	input1.style.marginRight = "285px";

	confirm1.style.marginLeft = "317px";
	confirm1.style.marginTop = "10px";
	confirm1.style.width = "150px";
	confirm1.style.height = "30px";
	confirm1.onclick = function(){
		nameInput(txt2,txt1,input1,confirm1);
	};
}

function nameInput(txt2, txt1, input1,confirm1){
	var name = [];
	playerCount = input1.value;
	speelMenu2.removeChild(txt2);
	speelMenu2.removeChild(txt1);
	speelMenu2.removeChild(input1);
	speelMenu2.removeChild(confirm1);
	console.log(playerCount);

	for(var i=0; i<playerCount; i++){
		var input2 = document.createElement("input");
		speelMenu2.appendChild(input2);
		input2.setAttribute("id", "Player_" + i);
	}
	var confirm2 = document.createElement("button");
	confirm2.innerHTML = "Cookie Clicker";
	speelMenu2.appendChild(confirm2);
	confirm2.onclick = function (){
		scores(name);
	};
}

function scores() {
	startGame();
	for(i = 0; i<playerCount; i++){
		name = document.getElementById("Player_" + i).value;
		names.push(name);
	}
	for(b=0; b<names.length; b++){
		playerScores = 0;
	}
	console.log(names);
	for(var a = 0; a<names.length; a++){
		var text = document.createElement("p");
		text.innerText = names[a] + " : " + playerScores;
		menuScores.appendChild(text);
	}
}

userCheck();