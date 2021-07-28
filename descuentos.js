// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
function calcularPrecioConDescuento(precio, descuento){
    const resultado = (precio * (100 - descuento)) / 100;
    return(resultado);
};

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('inputPrice').value;
    const inputDiscount = document.getElementById('inputDiscount').value;
    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
    document.getElementById('ResultPrice').innerText = "El precio con descuento es $ " + precioConDescuento;
};

