let lancioGiocatore;
let lancioComputer;
let vincitore;

console.log("implementazione variabili");


lancioGiocatore = parseInt((6 * Math.random()) + 1);
lancioComputer = parseInt((6 * Math.random()) + 1);

console.log("definizione numero random");

if(lancioGiocatore > lancioComputer){
    vincitore = "Giocatore";
}else if(lancioGiocatore < lancioComputer){
    vincitore = "Computer";
}else{
    vincitore = "Riprovare";
}

console.log("implementazione condizioni");

document.getElementById("lanciogiocatore").innerHTML = lancioGiocatore;
document.getElementById("lanciocomputer").innerHTML = lancioComputer;
document.getElementById("vincitore").innerHTML = vincitore;

console.log("definizione elementi per id");