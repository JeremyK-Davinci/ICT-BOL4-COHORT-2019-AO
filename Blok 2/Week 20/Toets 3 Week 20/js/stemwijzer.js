var stellingHead;
var button1;
var button2;
var button3;
var objectArea = document.getElementById("stemWijzer");

var agree = 0;
var disagree = 0;
var partij;

var i = 0;

var stellingen = [
    "Nederland moet Terug naar de Gulden",
    "Er moet meer geld naar ontwikkelingshulp",
    "De overheid moet afslanken",
    "De AOW leeftijd moet terug naar 67 jaar",
    "Wietteelt moet worden gelegaliseerd",
    "We moeten minder geld aan het leger uitgeven",
    "Alle werkenden moeten minder loonbelasting betalen",
    "We moeten handel stoppen met corrupte landen",
    "We moeten maandag van de kalender verwijderen",
]

console.log(stellingen)

var currentStelling = stellingen[i]

function createElements(){
    stellingHead = document.createElement("h1");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    button3 = document.createElement("button");

    stellingHead.setAttribute("id", "stelling");
    button1.setAttribute("id", "btnEens");
    button2.setAttribute("id", "btnOneens");
    button3.setAttribute("id", "btnVolgende");

    stellingHead.innerHTML = "Nederland moet terug naar de Gulden";
    button1.innerHTML = "EENS";
    button2.innerHTML = "ONEENS";
    button3.innerHTML = "VOLGENDE";

    button3.style.display = "none";

    objectArea.appendChild(stellingHead);
    objectArea.appendChild(button1);
    objectArea.appendChild(button2);
    objectArea.appendChild(button3);

    stellingHead.innerHTML = stellingen[0]

    printStelling();
}

function printStelling() {
    stellingHead.innerHTML = stellingen[i];
}

function eens() {
    if(i<stellingen.length){
        agree++
        button3.style.removeProperty("display")
        console.log(agree + ", " + currentStelling + ", " + i)
        volgende();
    }
    if(i == stellingen.length){
        agree++
        console.log(agree + ", " + currentStelling + ", " + i)
        button1.onclick = finished();
        button1.innerHTML = "results";
        button2.style.display = "none";
        button3.style.display = "none";
    }
    if(i>stellingen.length){
        finished();
    }
}

function oneens() {
    if(i<stellingen.length){
        disagree++
        button3.style.removeProperty("display")
        console.log(disagree + ", " + currentStelling + ", " + i)
        volgende();
    }
    if(i == stellingen.length){
        disagree++
        console.log(disagree + ", " + currentStelling + ", " + i)
        button1.onclick = finished();
        button1.innerHTML = "results";
        button2.style.display = "none";
        button3.style.display = "none";
    }
    if(i>stellingen.length){
        finished();
    }
}

function volgende() {
    button3.style.removeProperty("display");

}

function partijCheck() {
    if(agree >= 8){
        partij = "D66"
    }
    if(agree == 5 && agree <= 7){
        partij = "Pvda"
    }
    if(agree == 2 && agree <= 4){
        partij = "VVD"
    }
    if(agree == 0 && agree <= 1){
        partij = "CDA"
    }
}

function finished() {
    partijCheck();
    console.log(partij)
    button1.style.display = "none"
    button2.style.display = "none"
    button3.style.display = "none"
    var resultText = document.createElement("p");
    resultText.setAttribute("id", "result");
    objectArea.appendChild(resultText);
    resultText.innerHTML = "U koos eens: " + agree + " keer. " + "U koos oneens: " + disagree + " keer. " + "De partij die het best bij u past is: " + partij;
}

createElements();
