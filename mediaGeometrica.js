// Media Geométrica
function resultado(){
    const listaIn = inputLista.value;
    const listaI = listaIn.split(',');
    lista = listaI.map(Number);
    let productLista = 1;
    for (let i = 0; i < lista.length; i++){
        productLista = productLista * parseInt(lista[i]);
    };
    const mediaGeometrica =Math.round(Math.pow(productLista, 1 / lista.length)* 100) /100;
    document.getElementById('mediaGeoResult').innerHTML = mediaGeometrica;
}

resultado();

