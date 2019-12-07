var title = document.getElementById("title")
var desc = document.getElementById("description")
var background = {}
var levels = [
   {desc : "HAHAHAHAHAHAHA", title : "Painfull", image : "Img/Sprites/FlashlightOFF.jpg"}, //Flashlight
   {desc : "HAHAHAHAHAHAHA", title : "Painful", image : "Img/Sprites/FlashlightOFF.jpg"}, //Knife
   {desc : "HAHAHAHAHAHAHA", title : "Painfu", image : "Img/Sprites/FlashlightOFF.jpg"}, //Book
   {desc : "HAHAHAHAHAHAHA", title : "Painf", image : "Img/Sprites/FlashlightOFF.jpg"}, //Lighter
   {desc : "HAHAHAHAHAHAHA", title : "Pain", image : "Img/Sprites/FlashlightOFF.jpg"}, //Pistol
   {desc : "HAHAHAHAHAHAHA", title : "Pai", image : "Img/Sprites/FlashlightOFF.jpg"}, //armor helmet
   {desc : "HAHAHAHAHAHAHA", title : "Pa", image : "Img/Sprites/FlashlightOFF.jpg"}, //armor vest
   {desc : "HAHAHAHAHAHAHA", title : "P", image : "Img/Sprites/FlashlightOFF.jpg"}, //Ammo battery
   {desc : "HAHAHAHAHAHAHA", title : "No", image : "Img/Sprites/FlashlightOFF.jpg"}, //Ammo bullet1
   {desc : "HAHAHAHAHAHAHA", title : "yes", image : "Img/Sprites/FlashlightOFF.jpg"} //Ammo bullet2
]
console.log(inventory)
var choice1 = document.getElementById("button1")
var choice2 = document.getElementById("button2")
var choice3 = document.getElementById("button3")
  choice1.innerHTML = "Check for possible pathways";
  choice1.setAttribute("onclick", "level(1)");

var LeveL = 0;
var levelContent = [
    title.html = {}
]
function level(level){
    console.log(inventory[level])
}

//document.createElement("img")