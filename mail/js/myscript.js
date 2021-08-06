let email = prompt("L'email dell'utente è:");
let emailVerificata;
let verifica;
let emailPresenti = ["tizio@virgilio.it", "caio@virgilio.it", "sempronio@virgilio.it", "cesare@virgilio.it", "pippo@virgilio.it"];

console.log("implementaione variabili");

if(email == emailPresenti[0] || email == emailPresenti[1] || email == emailPresenti[2] || email == emailPresenti[3] || email == emailPresenti[4]){
    emailVerificata = "SI";
    verifica= "L'email è stata approvata";
}else{
    emailVerificata = "NO";
    verifica= "L'email non è stata approvata";
}

console.log("implementazione condizioni");


document.getElementById("email").innerHTML = email;
document.getElementById("emailverificata").innerHTML = emailVerificata;
document.getElementById("alert").innerHTML = verifica;

console.log("inserimento elementi per id");