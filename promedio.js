// const lista1 = [
//      100,
//      200,
//      300,
//      500,
// ];

// let sumaLista1 = 0;


// Forma 1
// for (let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];
// };
// const promedioLista1 = sumaLista1 / lista1.length

// function CalcularMediaAritmetica(){
//     let sumaLista = 0;

//     for (let i = 0; i < lista.length; i++){
//         sumaLista1 = sumaLista + lista[i];
//     };

//     const promedioLista1 = sumaLista / lista.length

//     return promedioLista1
// };

// Forma 2
// for (let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];
// };
// const promedioLista1 = sumaLista1 / lista1.length


// PROMEDIO
function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length

    return promedioLista
};

