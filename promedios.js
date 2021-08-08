function CalcularMediaAritmetica(){
    const listaInput = document.getElementById('inputLista').value;
    const lista = listaInput.split(',');
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++){
        sumaLista += parseInt(lista[i]);
    };
    const promedioLista = Math.round((sumaLista / lista.length) *100) /100;

    document.getElementById('promedioResult').innerHTML = promedioLista;
};

//Mediana de un array
function medianaDeLista(){
    const listaInput = document.getElementById('inputLista').value;
    const lista = listaInput.split(',');
    let mediana;
     lista.sort(
         function(a, b){
             return a - b;
         }
     );
     const mitadLista = parseInt((lista.length) / 2);

     function esPar(numer){
         if(numer % 2 === 0){
             return true;
         }else {
             return false;
         };
     };
     if(esPar(lista.length)){
         elemento1 = lista[mitadLista];
         elemento2 = lista[mitadLista - 1];
         mediana = (parseInt(elemento1) + parseInt(elemento2)) / 2;
         document.getElementById('medianaResult').innerHTML = mediana;
     } else{
         mediana = lista[mitadLista];
         document.getElementById('medianaResult').innerHTML = mediana;
     };
 };
// Moda de un Array
 function calcularModa(){
    const listaInput = inputLista.value;
    const listaI = listaInput.split(',');
    
    const lista = listaI.map(Number);
     let listaCount = {};
     lista.map(
         function (var1) {
             if (listaCount[var1]){
                 listaCount[var1] += 1;
             }else{
                 listaCount[var1] = 1;
             }
         }
     );
     const listaArray = Object.entries(listaCount).sort(
         function(valorAcumulado, ValorB){
             return valorAcumulado[1] - ValorB[1];
         }
     );
     const moda = listaArray[listaArray.length - 1];
     const valorModa = Object.values(moda);
     if(valorModa[1] === 1){
        document.getElementById('modaResult').innerHTML = "No existe una moda. Ningún valor se repite.";
     } else {
        document.getElementById('modaResult').innerHTML = "La moda es " + valorModa[0] + " y se repite " + valorModa[1] + " veces";
     };
 };
// Media Geométrica
// function calcularMediaGeo(){
//     const listaIn = inputLista.value;
//     const listaI = listaIn.split(',');
//     lista = listaI.map(Number);
//     let productLista = 1;
//     for (let i = 0; i < lista.length; i++){
//         productLista = productLista * parseInt(lista[i]);
//     };
//     const mediaGeometrica =Math.round(Math.pow(productLista, 1 / lista.length)* 100) /100;
//     document.getElementById('mediaGeoResult').innerHTML = mediaGeometrica;
// }


// Media Geométrica con .reduce()

function calcularMediaGeo() {
    const listaIn = inputLista.value;
    const listaI = listaIn.split(',');
    lista = listaI.map(Number);
    const producto = lista.reduce(
        function (a, b) {
            return a * b;
        }
    );
    document.getElementById('mediaGeoResult').innerHTML = Math.round(Math.pow(producto, 1 / lista.length) * 100) /100;
}