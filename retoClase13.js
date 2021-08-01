const codeArray = [
    "PrimeraCompra",
    "CodigoRevista",
    "CodigoInfluencer"
];

function precioConDescuento(){
    //comprueba si dispone de descuento por usuario, siempre al devolver el resultado se muestra el botón de reset form
    if(document.getElementById('radio1').checked === true){
            const precio = document.getElementById('inputPrice').value;
            const descuento = document.getElementById('inputGroupSelect04').value;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
            document.getElementById("btno").style.visibility = 'visible';
    //comprueba si selecciono descuento por cupón y si tiene el primero del array        
    } else if(document.getElementById('radio2').checked === true){
        if(document.getElementById('inputCode').value === codeArray[0]){
            const precio = document.getElementById('inputPrice').value;
            const descuento = 10;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
            document.getElementById("btno").style.visibility = 'visible';
            //comprueba si selecciono descuento por cupón y si tiene el segundo del array 
        }else if(document.getElementById('inputCode').value === codeArray[1]){
            const precio = document.getElementById('inputPrice').value;
            const descuento = 25;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
            document.getElementById("btno").style.visibility = 'visible';
            //comprueba si selecciono descuento por cupón y si tiene el tercero del array
        }else if(document.getElementById('inputCode').value === codeArray[2]){
            const precio = document.getElementById('inputPrice').value;
            const descuento = 35;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = Number(resultado);
            document.getElementById("btno").style.visibility = 'visible';
            //si el código ingresado no esta definido da el valor de 0 a las variables precio y descuento
        }else if(document.getElementById('inputCode').value === undefined){
            const precio = 0;
            const descuento = 0;
            const resultado = (precio * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = resultado;
            document.getElementById("btno").style.visibility = 'visible';
            //comprueba si el resultado del cupon aplicado esta indefinido y si el cupon ingresado es distinto de 0 devuelve cupón no válido y muestra botón de reset form
        }else if (document.getElementById('resultadoCuponDescuento').value === undefined && document.getElementById('inputCode').value !== 0){
            document.getElementById('codeValidation').innerHTML = "*Cupón no válido";
            document.getElementById("btno").style.visibility = 'visible';
        };
    };
};
//función para ocultar el botón reset form al clickear en el mismo botón, también borra el contenido de resultado de decuento y del contenido del input del código de cupón.
function ocultarbtno(){
    document.getElementById("btno").style.visibility = 'hidden';
    document.getElementById('resultadoCuponDescuento').innerHTML = "";
    document.getElementById('codeValidation').innerHTML = "";
};

