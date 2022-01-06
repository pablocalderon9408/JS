
var frutas = ["Manzana", "Banano", "Fresa"];

function saludarFruta(fruta){
    console.log(`Hola, ${fruta}`);
}

// opción con while
while(frutas.length>0){
    var fruta = frutas.pop()
    saludarFruta(fruta)

}

// opción 1 con for
for (var i = 0 ; i < frutas.length; i++){
    saludarFruta(frutas[i])
}

// opción 2 con for
for (var fruta of frutas){
    saludarFruta(fruta)
}


