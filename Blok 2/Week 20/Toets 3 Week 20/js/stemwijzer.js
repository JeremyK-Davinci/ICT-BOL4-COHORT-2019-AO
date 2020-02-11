var stellingHead = document.getElementById("stelling");
var button1 = document.getElementById("btnEens");
var button2 = document.getElementById("btnOneens");
var button3 = document.getElementById("btnVolgende");
var objectArea = document.getElementById("stemWijzer");

var agree = 0;
var disagree = 0;
var skip = 0;
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

var filtered = stellingen.filter(function (TTD){
    return TTD != null;
});

console.log(filtered)

var currentStelling = stellingen[i]

document.onload = stellingHead.innerHTML = filtered[0]

function printStelling() {
    stellingHead.innerHTML = filtered[i];
    if(filtered[i] == undefined){
        stellingHead.innerText = "Klaar! Dit is de uitslag";
    }
}

function eens() {
    if(i<filtered.length){
        agree++
        i++
        button3.style.removeProperty("display")
        console.log(agree + ", " + currentStelling + ", " + i)
        printStelling();
    }
    if(i == filtered.length){
        agree++
        i++
        console.log(agree + ", " + currentStelling + ", " + i)
        button1.onclick = finished();
        button1.innerHTML = "results";
        button2.style.display = "none";
        button3.style.display = "none";
    }
    if(i>filtered.length){
        finished();
    }
}

function oneens() {
    if(i<filtered.length){
        disagree++
        i++
        button3.style.removeProperty("display")
        console.log(disagree + ", " + currentStelling + ", " + i)
        printStelling();
    }
    if(i == filtered.length){
        disagree++
        i++
        console.log(disagree + ", " + currentStelling + ", " + i)
        button1.onclick = finished();
        button1.innerHTML = "results";
        button2.style.display = "none";
        button3.style.display = "none";
    }
    if(i>filtered.length){
        finished();
    }
}

function skipped() {
    if(i<filtered.length){
        skip++
        i++
        button3.style.display = "none";
        console.log(skip + ", " + currentStelling + ", " + i)
        printStelling();
    }
    if(i == filtered.length){
        skip++
        i++
        console.log(skip + ", " + currentStelling + ", " + i)
        button1.onclick = finished();
        button1.innerHTML = "results";
        button2.style.display = "none";
        button3.style.display = "none";
    }
    if(i>filtered.length){
        finished();
    }
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
    resultText.innerHTML = "U koos eens: " + agree + " keer. " + "U koos oneens: " + disagree + " keer. " + "U sloeg " + skip + " vragen over." + "De partij die het best bij u past is: " + partij;
}

printStelling();
