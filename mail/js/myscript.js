let email = prompt("L'email dell'utente è:");
let verificata = false;
let emailVerificata;
let verifica;
let emailPresenti = ["tizio@virgilio.it", "caio@virgilio.it", "sempronio@virgilio.it", "cesare@virgilio.it", "pippo@virgilio.it"];

console.log("implementazione variabili");

for( let i = 0; i < emailPresenti.length; i++){
    if (email == emailPresenti[i]){
        verificata = true;
    }
}

console.log("definizione ciclo for");

if(verificata == true){
    emailVerificata= "SI";
    verifica = "L'email è stata approvata";
}else{
    emailVerificata = "NO";
    verifica = "L'email non è stata approvata";
}

console.log("implementazione condizioni");


document.getElementById("email").innerHTML = email;
document.getElementById("emailverificata").innerHTML = emailVerificata;
document.getElementById("alert").innerHTML = verifica;

console.log("inserimento elementi per id");