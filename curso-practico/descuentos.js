console.group("Descuento");

function calcularPrecioFinal(precio_inicial, descuento){
    return  precio_inicial * (1-descuento);
    
}
console.groupEnd();

function calcularValorfinal(){
    const id_precio = document.getElementById("precioProducto");
    const id_descuento = document.getElementById("descuento");
    const precio = id_precio.value;
    const descuento = id_descuento.value;
    const valor_final = calcularPrecioFinal(precio, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + valor_final;
}