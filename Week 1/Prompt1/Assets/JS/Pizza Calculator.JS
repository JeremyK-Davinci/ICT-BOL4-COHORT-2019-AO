//Pizza Calculator door J Korteland - Applicatie en Media-ontwikkelaar

//Prijzen van de pizza's
const PIZZASMALL = 699/100;
const PIZZAMEDIUM = 899/100;
const PIZZALARGE = 1199/100;

var element = document.getElementById('txtColor');

function order() {
    console.log('Someone ordered');
    
    //Hoeveelheid pizza's te bestellen
    var amountPizzaSmall = prompt("Hoeveel pizza small wilt u?");
    var amountPizzaMedium = prompt("Hoeveel pizza medium wilt u?");
    var amountPizzaLarge = prompt("Hoeveel pizza Large wilt u?");
    var total = amountPizzaSmall*PIZZASMALL + amountPizzaMedium*PIZZAMEDIUM + amountPizzaLarge*PIZZALARGE;

    //Prijs per pizza's en totaal prijs
    element.innerHTML = amountPizzaSmall + " Pizza Small : €" + amountPizzaSmall*PIZZASMALL+"<br>";
    element.innerHTML = amountPizzaMedium + " Pizza Medium : €" + amountPizzaMedium*PIZZAMEDIUM+"<br>";
    element.innerHTML = amountPizzaLarge + " Pizza Large : €" + amountPizzaLarge*PIZZALARGE+"<br>";
    element.innerHTML = "Total: €" + total;
}