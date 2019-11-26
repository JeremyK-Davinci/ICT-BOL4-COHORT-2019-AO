var title = document.getElementById("title")
var desc = document.getElementById("description")
var background = {}
var inventory = [
  item1 = {}, //Flashlight
  item2 = {}, //Knife
  item3 = {}, //Book
  item4 = {}, //Lighter
  item5 = {}, //Pistol
  item6 = {}, //armor helmet
  item7 = {}, //armor vest
  item8 = {}, //Ammo battery
  item9 = {}, //Ammo bullet1
  item10 = {} //Ammo bullet2
]
var choice1 = document.getElementById("button1")
var choice2 = document.getElementById("button2")
var choice3 = document.getElementById("button3")

function level1(){
  title.innerHTML = "The Mist"
  desc.innerHTML = "I awoke alone with only a knife and a flashlight with 1 battery. I didn't remember anything all i knew is that i had to move, i just wish i knew where."
  background = document.onload = document.body.style.backgroundImage = "url('Img/HauntedForest1.jpg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightSprite.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").src = "Img/Sprites/Pixel_art_battery.png"
  item4 = document.onload = document.getElementById("inventoryItem4").style.display = "none"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.onload = document.getElementById("inventoryItem6").style.display = "none"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Check for possible pathways";
  choice1.setAttribute("onclick", "level2()");
  choice2.innerHTML = "Run as fast as possible";
  choice2.setAttribute("onclick", "alert('Dead')");
  choice3.innerHTML = "maybe if i wait, help will come";
  choice3.setAttribute("onclick", "alert('Dead')");
}

function level2(){
  title.innerHTML = "Degraded"
  desc.innerText = "I scanned for a safe path with my flashlight, i found the best path and as i walked along it i stumbled on an old book. Should i take it with me?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/HauntedForest2.jpg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightSprite.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").src = "Img/Sprites/Pixel_art_battery.png"
  item4 = document.onload = document.getElementById("inventoryItem4").style.display = "none"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.onload = document.getElementById("inventoryItem6").style.display = "none"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Take the Book and move on";
  choice1.setAttribute("onclick", "level3()");
  choice2.innerHTML = "Leave the book and don't look back"
  choice2.setAttribute("onclick", "level3()");
  choice3.innerHTML = "Stab the book"
  choice3.setAttribute("onclick", "bookStab()");
}

function level3(){
  
}

function level4(){

}

function level5(){

}

function level6(){

}

function level7(){

}

function level8(){

}

function level9(){

}

function level10(){

}

function fail(){

}

function bookStab(){
  
}

level1();