const lista1 = [
    100,
    200,
    500,
    40000000,
];

const  mitadLista1 = parseInt(lista1.length / 2);
let mediana;

    function esPar(numerito){
        if(numerito % 2 === 0){
            return true
        }else{
            return false
        }
    };

if(esPar(lista1.length)){ //necesitamos saber si nuestra lista es par
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioEle1y2 = (elemento1 + elemento2) /2
    mediana = promedioEle1y2;
    //necesitamos 2 elemento
    // el promedio
    //mediana    
} else {// y si no es par (es impar)
    mediana = lista1[mitadLista1];
    //posición mitadLista1 dentro de lista1
    // mediana
} 