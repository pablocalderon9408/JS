console.group("Cuadrado");
// const ladoCuadrado = 10;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado * 4;
}

console.log("El perimetro del cuadrado es: " + perimetroCuadrado);

function areaCuadrado(lado){
    return lado * lado;
}

console.log("El area del cuadrado es: " + areaCuadrado);

// const pi = Math.PI;
// console.log("El valor de pi es: " + pi);

console.groupEnd();


// Interacción con el html:

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es: ${perimetro}`);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`El area del cuadrado es: ${area}`);
}