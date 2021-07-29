//Función para aplicar descuento por usuario
// function aplicarCupon(){
//     const precio = document.getElementById('inputPrice').value;;
//     const descuento = document.getElementById('inputGroupSelect04').value;
//     const resultado = (precio * (100 - descuento)) / 100;
//     document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
// };

const codeArray = [
    "PrimeraCompra",
    "CodigoRevista",
    "CodigoInfluencer"
];

function precioConDescuento(){
    if(document.getElementById('radio1').checked === true){
            const precio = document.getElementById('inputPrice').value;
            const descuento = document.getElementById('inputGroupSelect04').value;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
            document.getElementById("btno").style.visibility = 'visible';
    } else if(document.getElementById('radio2').checked === true){
        if(document.getElementById('inputCode').value === codeArray[0]){
            const precio = document.getElementById('inputPrice').value;
            const descuento = 10;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
            document.getElementById("btno").style.visibility = 'visible';
        }else if(document.getElementById('inputCode').value === codeArray[1]){
            const precio = document.getElementById('inputPrice').value;
            const descuento = 25;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
            document.getElementById("btno").style.visibility = 'visible';
        }else if(document.getElementById('inputCode').value === codeArray[2]){
            const precio = document.getElementById('inputPrice').value;
            const descuento = 35;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
            document.getElementById("btno").style.visibility = 'visible';
        }else if(document.getElementById('inputCode').value === isNaN){
            const precio = 0;
            const descuento = 0;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = resultado;
            document.getElementById("btno").style.visibility = 'visible';
        }
    };
};

function ocultarbtno(){
    document.getElementById("btno").style.visibility = 'hidden';
    document.getElementById('resultadoCuponDescuento').innerHTML = "";
};

