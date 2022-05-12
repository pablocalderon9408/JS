console.group("Descuento");

function calcularPrecioFinal(precio_inicial, descuento){
    return  precio_inicial * ((100-descuento)/100);
    
}
console.groupEnd();

function calcularValorfinal(){
    const id_precio = document.getElementById("precioProducto");
    console.log(id_precio);
    const id_descuento = document.getElementById("descuento");
    console.log(id_descuento);
    const precio = id_precio.value;
    const descuento = id_descuento.value;
    const id_code = document.getElementById("code");
    const code = id_code.value;
    console.log(code);
    const isCouponValueValid = validatePromotionalCodeVersion2(code);
    console.log(isCouponValueValid);
    if (isCouponValueValid){
        const valor_final = calcularPrecioFinal(precio, isCouponValueValid);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + valor_final;
    }
    else{
        const valor_final = calcularPrecioFinal(precio, descuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + valor_final;
    }
}

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 90,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function validatePromotionalCode(code){
    const valid = coupons.find(function(coupon){
        return coupon.name === code
    })
    if (!valid){
        return false
    }
    else {
        return true
    }
}
function validatePromotionalCodeVersion2(code){
    const valid = coupons.find((element) => element.name === code);
    if (!valid){
        return false
    }
    else {
        const code_discount = valid.discount;
        console.log(code_discount);
        return code_discount
    }
}