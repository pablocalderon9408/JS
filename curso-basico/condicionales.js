var edad;

function verificarEdad(edad){
    if (edad==18){
        return "Puede votar por primera vez"
    } else if(edad <18 ){
        return "No puede votar este pelotudo"
    }
    else{
        return "Con toda mor"
    }

}

verificarEdad(16)

// condition ? true : false

function ageVerification(edad){
    edad == 18 ? console.log("Sisas") : console.log("No mi fai")
}

ageVerification(18)