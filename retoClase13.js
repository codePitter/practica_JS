function aplicarCupon(){
    const precio = document.getElementById('inputPrice').value;;
    const descuento = document.getElementById('inputGroupSelect04').value;
    const resultado = (precio * (100 - descuento)) / 100;
    document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
};