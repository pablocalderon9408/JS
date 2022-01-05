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

// Piedra, papel o tijera

var choices = ["piedra", "papel", "tijera"]
var cpu_choice;
var my_choice;

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var choices_dic = {
    0: "Piedra",
    1: "Papel",
    2: "Tijera"
};

cpu_choice = choices_dic[randomInteger(0,2)];
my_choice = choices_dic[Number(prompt("Ingrese: 0 para piedra, 1 para papel, 2 para tijera "))]

console.log("La CPU escogió " + cpu_choice);
console.log(my_choice);

function piedraPapelTijera2(cpu_choice,my_choice){
    if (cpu_choice == my_choice){
        return "It is a tie."
    } else if((cpu_choice==choices_dic[0])&&(my_choice==choices_dic[1])){
        return "You won."
    } else if((cpu_choice==choices_dic[0])&&(my_choice==choices_dic[2])){
        return "Computer won."
    } else if((cpu_choice==choices_dic[1])&&(my_choice==choices_dic[0])){
        return "Computer won."
    } else if((cpu_choice==choices_dic[1])&&(my_choice==choices_dic[2])){
        return "You won."
    } else if((cpu_choice==choices_dic[2])&&(my_choice==choices_dic[0])){
        return "You won."
    } else if((cpu_choice==choices_dic[2])&&(my_choice==choices_dic[1])){
        return "Computer won."
    }
}

piedraPapelTijera2(cpu_choice,my_choice)