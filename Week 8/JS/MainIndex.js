var takeOrder = true
var receipt =  document.getElementById("receipt");

var bierAmnt = "";
var wijnAmnt = "";
var frisAmnt = "";
var snackAmnt = "";
var snack8 = "";
var snack16 = "";

const BIERPRIJS = 295;
const WIJNPRIJS = 395;
const FRISPRIJS = 195;
const SNACKPRIJS8 = 495;
const SNACKPRIJS16 = 995;

function order() {
    
    console.log(takeOrder);
    console.log("Order Up!");

    while(takeOrder == true){
    
    var TypeOrder = prompt("Wat wilt u bestellen? Opties: Bier, Fris, Wijn en snacks (8 of 16). Om te stoppen type stop");

    if(TypeOrder == "Bier"){
        bierAmnt = prompt("Hoeveel Bier wilt u?");
        console.log("You ordered bier");
    }
    
    else if(TypeOrder == "Wijn"){
        wijnAmnt = prompt("Hoeveel wijn wilt u?");
        console.log("You ordered wijn");
    }
    else if(TypeOrder == "Fris"){
        frisAmnt = prompt("Hoeveel Fris wilt u?");
        console.log("You ordered fris");
        
    }
    else if(TypeOrder == "Snacks"){
        snackAmnt = prompt("Hoeveel snacks wilt u 8 of 16?");
        console.log("You ordered Snacks")
        if(snackAmnt == "8"){
            snack8 = prompt("Hoeveel keer wilt u 8 snacks bestellen?");
        }
        if(snackAmnt == "16"){
            snack16 = prompt("Hoeveel keer wilt u 16 snacks bestellen?");
        }
        else{
            alert("kan alleen 8 of 16 kiezen");
        }
    }

    else if(TypeOrder == "stop"){
        alert("Order Finished, Your order will be brought to your table.");
        takeOrder = false
        orderTotal();
       
    }
    else{
        alert("Invalid Argument");
    }
    
}
}

function orderTotal() {

    var totalPrice = bierAmnt*BIERPRIJS + wijnAmnt*WIJNPRIJS + frisAmnt*FRISPRIJS + snack8*SNACKPRIJS8 + snack16*SNACKPRIJS16;
    var receiptBuilder = "";
    receiptBuilder += "<h1> Marios payment</h1>";
    receiptBuilder += "Aantal bier: " + bierAmnt +" totaal bierprijs: €"+ bierAmnt*(BIERPRIJS/100)+ "<br>";
    receiptBuilder += "Aantal wijn: " + wijnAmnt +" totaal wijnprijs: €"+ wijnAmnt*(WIJNPRIJS/100)+ "<br>";
    receiptBuilder += "Aantal fris: " + frisAmnt +" totaal frisprijs: €"+ frisAmnt*(FRISPRIJS/100)+ "<br>";
    receiptBuilder += "Aantal 8 snacks: " + snack8 +" totaal prijs 8 snacks: €"+ snack8*(SNACKPRIJS8/100)+ "<br>";
    receiptBuilder += "Aantal 16 snacks: " + snack16 +" totaal prijs 16 snacks: €"+ snack16*(SNACKPRIJS16/100)+ "<br>";
    receiptBuilder += "----------------------------------- + <br>";
    receiptBuilder += "Subtotaal: €" + (totalPrice/100);

    receipt.innerHTML =  receiptBuilder;
}