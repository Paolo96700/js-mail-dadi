
//inserisci la tua mail
const mail = prompt('inserisci la tua mail');

//Iscritti
const iscritti = ["luca.iscritto@gmail.com", "marco.iscritto@gmail.com", "paolo.iscritto@gmail.com"];

for (let i = 0; i < iscritti.length; i++) {
    //Stampa iscritti
    console.log(iscritti[i]);

    if (mail == iscritti[i]){
        console.log (iscritti);
    }

    else if (iscritti != iscritti[i]){
        const errormail=alert("email non valida")    
    }
}








