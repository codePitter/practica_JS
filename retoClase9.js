/* Calcular la altura de un triángulo isósceles
Sabemos que:
h = √((lado²)-(base²/4))
*/
//Datos: ladoA, ladoB, ladoC


function alturaTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const lado3 = document.getElementById("lado3").value;
    if(lado1 === lado2){
        var base = lado3;
        var ladoA = lado1;
        var ladoB = lado2;
        const alturaT = Math.sqrt((ladoA * ladoB)-((base * base)/4));
        alert(alturaT);
    
    }else if(lado2 === lado3){
        var base = lado1;
        var ladoA = lado2;
        var ladoB = lado3;
        const alturaT = Math.sqrt((ladoA * ladoB)-((base * base)/4));
        alert(alturaT);
    
    }else if(lado1 === lado3){
        var base = lado2;
        var ladoA = lado1;
        var ladoB = lado3;
        const alturaT = Math.sqrt((ladoA * ladoB)-((base * base)/4));
        alert(alturaT);
    } else {
        alert("No es un triángulo isósceles, por favor ingresa al menos 2 valores de lado iguales.");
    };
};

//    const resultado = alturaTriangulo();
//    alert(resultado);
