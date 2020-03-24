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
  item10 = {}, //Ammo bullet2
]
var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var number = Math.floor(Math.random() * 11);

function buttonReload(){
  choice1.style.removeProperty("display"),
  choice2.style.removeProperty("display"),
  choice3.style.removeProperty("display")
}

function level1(){
  buttonReload();
  title.innerHTML = "The Mist"
  desc.innerHTML = "I awoke alone with only a knife and a flashlight with 1 battery. I didn't remember anything all i knew is that i had to move, i just wish i knew where."
  background = document.onload = document.body.style.backgroundImage = "url('Img/HauntedForest1.jpg')"
    item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png",
    item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png",
    item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none",
    item4 = document.onload = document.getElementById("inventoryItem4").style.display = "none",
    item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none",
    item6 = document.onload = document.getElementById("inventoryItem6").style.display = "none",
    item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none",
    item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_art_battery.png",
    item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none",
    item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none",
  choice1.innerHTML = "Check for possible pathways";
  choice1.setAttribute("onclick", "level2()");
  choice2.innerHTML = "Run as fast as possible";
  choice2.setAttribute("onclick", "Dead()");
  choice3.innerHTML = "maybe if i wait, help will come";
  choice3.setAttribute("onclick", "Dead()");
  document.onload = console.log(title)
}

function level2(){
  buttonReload();
  title.innerHTML = "Degraded"
  desc.innerText = "I scanned for a safe path with my flashlight, i found the best path and as i walked along it i stumbled on an old book. Should i take it with me?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/HauntedForest2.jpg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightON.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
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
  choice2.setAttribute("onclick", "Dead()");
  choice3.innerHTML = "Stab the book"
  choice3.setAttribute("onclick", "bookStab()");
  document.onload = console.log(title)
}

function level3(){
  buttonReload();
  title.innerHTML = "Not Alone"
  desc.innerText = "I move on and see someone on the horizon. He turns around, his eyes bloodshot, skin flushed and a knife in hand. It's time to choose, fight or flight?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/ForestPerson.jpg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightON.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").style.removeProperty("display"), document.getElementById("inventoryItem3").src = "Img/Sprites/Book.png"
  item4 = document.onload = document.getElementById("inventoryItem4").style.display = "none"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.onload = document.getElementById("inventoryItem6").style.display = "none"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Fight it";
  choice1.setAttribute("onclick", "Dead()");
  choice2.innerHTML = "Run into the forest"
  choice2.setAttribute("onclick", "level4()");
  choice3.innerHTML = "Stare blankly at it"
  choice3.setAttribute("onclick", "Dead()");
  document.onload = console.log(title)
}

function level4(){
  buttonReload();
  title.innerHTML = "Got a Light?"
  desc.innerText = "It was best to just run, pride is worthless in survival. Yet as i walk thru the brush my flashlight fails just as i notice a toolbox on a stump. I open the toolbox and find a battery and Lighter. Now what do i do?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/HauntedForest.jpg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").style.removeProperty("display"), document.getElementById("inventoryItem3").src = "Img/Sprites/Book.png"
  item4 = document.onload = document.getElementById("inventoryItem4").style.display = "none"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.onload = document.getElementById("inventoryItem6").style.display = "none"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "follow the path again";
  choice1.setAttribute("onclick", "level5()");
  choice2.innerHTML = "Burn down the forest"
  choice2.setAttribute("onclick", "Dead()");
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function level5(){
  buttonReload();
  title.innerHTML = "Scared but alive"
  desc.innerText = "I happen to see a big stone structure, it seems like a sewer entrance. I feel like it's too convenient not too explore. Should i use my flashlight or just hope i don't fall"
  background = document.onload = document.body.style.backgroundImage = "url('Img/Dungeon.jpeg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").src = "Img/Sprites/Book.png"
  item4 = document.getElementById("inventoryItem4").style.removeProperty("display"), document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.onload = document.getElementById("inventoryItem6").style.display = "none"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Insert new battery and look for the path again";
  choice1.setAttribute("onclick", "level6()");
  choice2.innerHTML = "Try and find the path blind"
  choice2.setAttribute("onclick", "level6R2()");
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function level6(){ //Pussy route
  buttonReload();
  title.innerHTML = "Deceased"
  desc.innerText = "I was never 1 to take risks. After a long stairway down i see an open gate and a skeleton, because why wouldn't there be right? The skeleton is wearing a military vest with pistol clips which i take. And now Forwards or backwards?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/DungeonStairs.jpg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightON.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").src = "Img/Sprites/Book.png"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.onload = document.getElementById("inventoryItem6").style.display = "none"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.style.display = "none"
  choice2.innerHTML = "Move on throught the corridors with flashlight on"
  choice2.setAttribute("onclick", "level3()");
  choice3.innerHTML = "Cower in fear because you heard something"
  choice3.setAttribute("onclick", "Dead()");
  document.onload = console.log(title)
}

function level7(){
  buttonReload();
  title.innerHTML = "Tactically Frightend"
  desc.innerText = "i felt a bit safer with something protecting my body. but as i turn the corridor i see the thing i heard, or rather things. A heap of rats. This is not happening."
  background = document.onload = document.body.style.backgroundImage = "url('Img/DungeonHallway.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightON.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").src = "Img/Sprites/Book.png"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.getElementById("inventoryItem6").style.removeProperty("display"), document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.getElementById("inventoryItem9").style.removeProperty("display"), document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Set the book on fire and throw it";
  choice1.setAttribute("onclick", "level8()");
  choice2.innerHTML = "Fight them of with your knife"
  choice2.setAttribute("onclick", "Dead()");
  choice3.innerHTML = "Run back up"
  choice3.setAttribute("onclick", "RunUp()");
  document.onload = console.log(title)
}

function level8(){
  buttonReload();
  title.innerHTML = "Die in a fire"
  desc.innerText = "The fire seemed to work. They fled in seconds when i threw the book. And what did they reveal but a skeleton, this one with full military gear. I grabbed what i could and was at a crossroads. Left or Right?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/DungeonHallway.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Left?";
  choice1.setAttribute("onclick", "leftTurn()");
  choice2.innerHTML = "Right?"
  choice2.setAttribute("onclick", "level9()");
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function level9(){
  buttonReload();
  title.innerHTML = "Pure Shade"
  desc.innerText = "The right turn felt kinda wierd, the second i turned a long hallway lit up. At the end was a 3 way split in the path. Left, Right or Head on?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/DungeonHallway.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").style.removeProperty("display"), document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").style.removeProperty("display"), document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Left";
  choice1.setAttribute("onclick", "leftTurn()");
  choice2.innerHTML = "Head on"
  choice2.setAttribute("onclick", "level10()");
  choice3.innerHTML = "Right"
  choice3.setAttribute("onclick", "rightTurn()");
  document.onload = console.log(title)
}

function level10(){
  buttonReload();
  title.innerHTML = "Redemption"
  desc.innerText = "I run straight on right into the abyss. Eventually i see a light, i run towards it. As i finally step into the light a figure greets me. He said he has followed me every step of the way and knows what i have done. He takes a stance and as if ready to fight."
  background = document.onload = document.body.style.backgroundImage = "url('Img/BossRoom.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Fight";
  choice1.setAttribute("onclick", "level10O2()");
  choice2.innerHTML = "Run"
  choice2.setAttribute("onclick", "Dead()");
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function level10O2(){
  buttonReload();
  title.innerHTML = "Redemption"
  desc.innerText = "I stand ready to fight him."
  background = document.onload = document.body.style.backgroundImage = "url('Img/BossRoom.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.style.display = "none"
  choice2.innerHTML = "Shoot him"
  choice2.setAttribute("onclick", "Dead()");
  choice3.innerHTML = "Stab him"
  choice3.setAttribute("onclick", "Dead()");
  document.onload = console.log(title)
}


function level6R2(){ //Risk Taker route
  buttonReload();
  if(number <= 5){
  title.innerHTML = "Deceased"
  desc.innerText = "This might be worth it later. After a long stairway down i see an open gate and a skeleton, because why wouldn't there be right? The skeleton is wearing a military vest with pistol clips which i take. And now Forwards or backwards?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/DungeonStairs.jpg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").src = "Img/Sprites/Book.png"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.onload = document.getElementById("inventoryItem6").style.display = "none"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.getElementById("inventoryItem8").style.removeProperty("display"), document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Move on through the corridors";
  choice1.setAttribute("onclick", "level7R2()");
  choice2.innerHTML = "Move on throught the corridors with flashlight on"
  choice2.setAttribute("onclick", "level7()");
  choice3.innerHTML = "Cower in fear because you heard something"
  choice3.setAttribute("onclick", "Dead()");
  document.onload = console.log(title)
  }
  else{
    Dead();
  }
}

function level7R2(){
  buttonReload();
  title.innerHTML = "Tactically Frightend"
  desc.innerText = "i felt a bit safer with something protecting my body. but as i turn the corridor i see the thing i heard, or rather things. A heap of rats. This is not happening."
  background = document.onload = document.body.style.backgroundImage = "url('Img/DungeonHallway.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.getElementById("inventoryItem3").src = "Img/Sprites/Book.png"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.getElementById("inventoryItem6").style.removeProperty("display"), document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").style.removeProperty("display"), document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Set the book on fire and throw it";
  choice1.setAttribute("onclick", "level8R2()");
  choice2.innerHTML = "Fight them of with your knife"
  choice2.setAttribute("onclick", "Dead()");
  choice3.innerHTML = "Run back up"
  choice3.setAttribute("onclick", "RunUp()");
  document.onload = console.log(title)
}

function level8R2(){
  buttonReload();
  title.innerHTML = "Die in a fire"
  desc.innerText = "The fire seemed to work. They fled in seconds when i threw the book. And what did they reveal but a skeleton, this one with full military gear. I grabbed what i could and was at a crossroads. Left or Right?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/DungeonHallway.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.onload = document.getElementById("inventoryItem5").style.display = "none"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.onload = document.getElementById("inventoryItem7").style.display = "none"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Left?";
  choice1.setAttribute("onclick", "leftTurn()");
  choice2.innerHTML = "Right?"
  choice2.setAttribute("onclick", "level9R2()");
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function level9R2(){
  buttonReload();
  title.innerHTML = "Pure Shade"
  desc.innerText = "The right turn felt kinda wierd, the second i turned a long hallway lit up. At the end was a 3 way split in the path. Left, Right or Head on?"
  background = document.onload = document.body.style.backgroundImage = "url('Img/DungeonHallway.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").style.removeProperty("display"), document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").style.removeProperty("display"), document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Left";
  choice1.setAttribute("onclick", "leftTurn()");
  choice2.innerHTML = "Head on"
  choice2.setAttribute("onclick", "level10R2()");
  choice3.innerHTML = "Right"
  choice3.setAttribute("onclick", "rightTurn()");
  document.onload = console.log(title)
}

function level10R2(){
  buttonReload();
  title.innerHTML = "Redemption"
  desc.innerText = "I run straight on right into the abyss. Eventually i see a light, i run towards it. As i finally step into the light a figure greets me. He said he has followed me every step of the way and knows what i have done. He takes a stance and as if ready to fight."
  background = document.onload = document.body.style.backgroundImage = "url('Img/BossRoom.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Fight";
  choice1.setAttribute("onclick", "level10R2O2()");
  choice2.innerHTML = "Run"
  choice2.setAttribute("onclick", "Dead()");
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function level10R2O2(){
  buttonReload();
  title.innerHTML = "Redemption"
  desc.innerText = "I stand ready to fight him."
  background = document.onload = document.body.style.backgroundImage = "url('Img/BossRoom.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightOFF.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.getElementById("inventoryItem8").src = "Img/Sprites/Pixel_Art_Battery.png"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Shine your flashlight in his face";
  choice1.setAttribute("onclick", "level10R2O3()");
  choice2.innerHTML = "Shoot him"
  choice2.setAttribute("onclick", "Dead()");
  choice3.innerHTML = "Stab him"
  choice3.setAttribute("onclick", "Dead()");
  document.onload = console.log(title)
}

function level10R2O3(){
  buttonReload();
  title.innerHTML = "Redemption"
  desc.innerText = "I shine my flashlight straight in his face as he lunges at me. He stumbles away dazed and blinded."
  background = document.onload = document.body.style.backgroundImage = "url('Img/BossRoom.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightON.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.getElementById("inventoryItem9").src = "Img/Sprites/GlockMag1.png"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Stab him";
  choice1.setAttribute("onclick", "Dead()");
  choice2.innerHTML = "Shoot him"
  choice2.setAttribute("onclick", "level10R2O4()");
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function level10R2O4(){
  buttonReload();
  title.innerHTML = "Redemption"
  desc.innerText = "I empty my pistol into his chest. He stumbles slightly towards me before collapsing on the ground."
  background = document.onload = document.body.style.backgroundImage = "url('Img/BossRoom.png')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightON.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Stab him";
  choice1.setAttribute("onclick", "Winner()");
  choice2.style.display = "none"
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function Winner(){
  buttonReload();
  title.innerHTML = "Redemption"
  desc.innerText = "As i deliver the final blow the sky lights up. There was no dungeon im in the middle of the forest. I see a sign of civilization on the horizon."
  background = document.onload = document.body.style.backgroundImage = "url('Img/ForestClearing.jpg')"
  item1 = document.getElementById("inventoryItem1").src = "Img/Sprites/FlashlightON.png"
  item2 = document.getElementById("inventoryItem2").src = "Img/Sprites/Pixel_art_knife.png"
  item3 = document.onload = document.getElementById("inventoryItem3").style.display = "none"
  item4 = document.getElementById("inventoryItem4").src = "Img/Sprites/Lighter Temp.png"
  item5 = document.getElementById("inventoryItem5").src = "Img/Sprites/Glock.png"
  item6 = document.getElementById("inventoryItem6").src = "Img/Sprites/Vest.png"
  item7 = document.getElementById("inventoryItem7").src = "Img/Sprites/Helmet.jpg"
  item8 = document.onload = document.getElementById("inventoryItem8").style.display = "none"
  item9 = document.onload = document.getElementById("inventoryItem9").style.display = "none"
  item10 = document.onload = document.getElementById("inventoryItem10").style.display = "none"
  choice1.innerHTML = "Go home";
  choice1.setAttribute("onclick", "location.reload()");
  choice2.style.display = "none"
  choice3.style.display = "none"
  document.onload = console.log(title)
}

function Dead(){
  title.innerHTML = "Dead"
  desc.innerText = "You died"
  background = document.onload = document.body.style.backgroundImage = "url('Img/Dead.jpg')"
  choice1.innerHTML = "Restart";
  choice1.setAttribute("onclick", "location.reload()");
  choice2.style.display = "none"
  choice3.style.display = "none"
}

function bookStab(){
  title.innerHTML = "Dead"
  desc.innerText = "I stabbed the book. The second i did i realised im not harry potter there is no cursed book and i kill myself in fear of someone finding me."
  background = document.onload = document.body.style.backgroundImage = "url('Img/Bookstab.jpg')"
  choice1.innerHTML = "Restart";
  choice1.setAttribute("onclick", "location.reload()");
  choice2.style.display = "none"
  choice3.style.display = "none"
}

function RunUp(){
  title.innerHTML = "Dead"
  desc.innerText = "I run back up the stairs. As i carelessly run up the stairs i slip and fall back down. The last thing i heard was a snap."
  background = document.onload = document.body.style.backgroundImage = "url('Img/Dead.jpg')"
  choice1.innerHTML = "Restart";
  choice1.setAttribute("onclick", "location.reload()");
  choice2.style.display = "none"
  choice3.style.display = "none"
}

level1();