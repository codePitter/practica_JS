function perimetroCuadrado(lado){
    return lado * 4;
};

function superficieCuadrado(lado){
    return lado * lado;
};


// funciones para el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularSuperficieCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = superficieCuadrado(value);
    alert(perimetro);
};
//Triángulo
function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("lado1").value;
    const ladoB = document.getElementById("lado2").value;
    const ladoC = document.getElementById("lado3").value;
    const perimetro = Number(ladoA) + Number(ladoB) + Number(ladoC);
    alert(perimetro);
};

//función altura del triángulo
function calcularSuperficieTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const lado3 = document.getElementById("lado3").value;
    if(lado1 === lado2 && lado1 === lado3){
        const base = lado1;
        const ladoA = lado2;
        const alturaTEquilatero = Math.sqrt((3 * ladoA) / 2);
        const superficieTequilatero = (base * alturaTEquilatero) / 2;
        alert("Es un triángulo equilatero y su superficie es de: " + superficieTequilatero + " cm²");
    }else if(lado1 === lado2){
        var base = lado3;
        var ladoA = lado1;
        var ladoB = lado2;
        const alturaT = Math.sqrt((ladoA * ladoB)-((base * base)/4));
        const superficieT = (base * alturaT) / 2;
        alert("Es un triángulo isóceles y su superficie es de: " + superficieT + " cm²");
    
    }else if(lado2 === lado3){
        var base = lado1;
        var ladoA = lado2;
        var ladoB = lado3;
        const alturaT = Math.sqrt((ladoA * ladoB)-((base * base)/4));
        const superficieT = (base * alturaT) / 2;
        alert("Es un triángulo isóceles y su superficie es de: " + superficieT + " cm²");
    
    }else if(lado1 === lado3){
        var base = lado2;
        var ladoA = lado1;
        var ladoB = lado3;
        const alturaT = Math.sqrt((ladoA * ladoB)-((base * base)/4));
        const superficieT = (base * alturaT) / 2;
        alert("Es un triángulo isóceles y su superficie es de: " + superficieT + " cm²");
    }else {
        var perimetroTEscaleno = Number(lado1) + Number(lado2) + Number(lado3);
        const superficieTEscaleno = Math.sqrt((perimetroTEscaleno / 2) * ((perimetroTEscaleno / 2) - Number(lado1)) * ((perimetroTEscaleno / 2) - Number(lado2)) * ((perimetroTEscaleno / 2) - Number(lado3)))
        alert("Es un triángulo escaleno y su superficie es de: " + superficieTEscaleno + " cm²");
    };
};

//Función círculo
function calcularCircunsferenciaCirculo(){
    const radioC = document.getElementById("radio").value;
    const circunsferencia = Math.round((Number(radioC) + Number(radioC)) * Math.PI *100) / 100;
    alert(circunsferencia);
};

function calcularSuperficieCirculo(){
    const radioC = document.getElementById("radio").value;
    const superficieC = Math.round((Number(radioC) * Number(radioC)) * Math.PI * 100) / 100;
    alert(superficieC);
};
