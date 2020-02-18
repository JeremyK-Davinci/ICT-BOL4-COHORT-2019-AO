var objectArea = document.getElementById("stemWijzer");
var stellingHead = document.createElement("h1");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");

    stellingHead.setAttribute("id", "stelling");
    button1.setAttribute("id", "btnEens");
    button2.setAttribute("id", "btnOneens");
    button3.setAttribute("id", "btnVolgende");

    stellingHead.innerHTML = "Nederland moet terug naar de Gulden";
    button1.innerHTML = "EENS";
    button2.innerHTML = "ONEENS";
    button3.innerHTML = "VOLGENDE";

    objectArea.appendChild(stellingHead);
    objectArea.appendChild(button1);
    objectArea.appendChild(button2);
    objectArea.appendChild(button3);

var agree = 0;
var disagree = 0;
var partij;

var i = 0;
var a = 0;
var b = 0;

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

stellingHead.innerHTML = stellingen[0]

function printStelling() {
    if(a > 0){
        agree++;
    }
    if(b > 0){
        disagree++
    }
    stellingHead.innerHTML = stellingen[i];
    button1.style.removeProperty("display");
    button2.style.removeProperty("display");
    button2.innerHTML = "ONEENS"
    button3.style.display = "none";
    button1.onclick = eens;
    button2.onclick = oneens;
    a = 0;
    b = 0;
}

function onzekerPrint() {
    i--;
    a = 0;
    b = 0;
    printStelling();
}

function eens() {
    if(i<stellingen.length){
        a++
        console.log(agree + ", " + currentStelling + ", " + i)
        volgende();
    }
    if(i>stellingen.length){
        finished();
    }
}

function oneens() {
    if(i<stellingen.length){
        b++
        console.log(disagree + ", " + currentStelling + ", " + i)
        volgende();
    }
    if(i>stellingen.length){
        finished();
    }
}

function partijCheck() {
    if(agree >= 8){
        partij = "D66";
    }
    if(agree == 5 && agree <= 7){
        partij = "Pvda";
    }
    if(agree == 2 && agree <= 4){
        partij = "VVD";
    }
    if(agree == 0 && agree <= 1){
        partij = "CDA";
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
    stellingHead.innerHTML = "Uw partij is: " + partij
    resultText.innerHTML = "U koos eens: " + agree + " keer. " + "U koos oneens: " + disagree + " keer. " + "De partij die het best bij u past is: " + partij;
}

function volgende() {
    i++
    button1.style.display = "none";
    button3.style.removeProperty("display");
    button2.innerHTML = "vorige";
    button2.onclick = onzekerPrint;
    button3.innerHTML = "volgende";
    button3.onclick = printStelling;
    stellingHead.innerHTML = "Weet u het zeker?";
    if(i == stellingen.length){
        button3.innerHTML = "results";
        button3.onclick = finished;
    }
}

printStelling();
