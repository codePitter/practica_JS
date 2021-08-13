function mesActualSelected(){
    const localDate = new Date();
    const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
    ];
    let currentMonth = months[localDate.getMonth()];
    //document.getElementById('thisMonth').innerHTML = currentMonth;
    switch(currentMonth){
        case months[0]:
            document.getElementById('mes1').selected = "true";
        break;
        case months[1]:
            document.getElementById('mes2').selected = "true";
        break;
        case months[2]:
            document.getElementById('mes3').selected = "true";
        break;
        case months[3]:
            document.getElementById('mes4').selected = "true";
        break;
        case months[4]:
            document.getElementById('mes5').selected = "true";
        break;
        case months[5]:
            document.getElementById('mes6').selected = "true";
        break;
        case months[6]:
            document.getElementById('mes7').selected = "true";
        break;
        case months[7]:
            document.getElementById('mes8').selected = "true";
        break;
        case months[8]:
            document.getElementById('mes9').selected = "true";
        break;
        case months[9]:
            document.getElementById('mes10').selected = "true";
        break;
        case months[10]:
            document.getElementById('mes11').selected = "true";
        break;
        case months[11]:
            document.getElementById('mes12').selected = "true";
        break;

    }
}
function selectCurrentMonth() {
    document.getElementById("orange").selected = "true";
  }

function totalInvertido(){
    const resultInvercion = Number(inv1.value) + Number(inv2.value) +Number(inv3.value) +Number(inv4.value) +Number(inv5.value) +Number(inv6.value);
    return resultInvercion;
};

function capturarArrayInv(){
    arrayInversion = [
        {inv: Number(inv1.value), whereInv: whereInv1.value, rendInv: Number(rendInv1.value)},
        {inv: Number(inv2.value), whereInv: whereInv2.value, rendInv: Number(rendInv2.value)},
        {inv: Number(inv3.value), whereInv: whereInv3.value,rendInv: Number(rendInv3.value)},
        {inv: Number(inv4.value), whereInv: whereInv4.value, rendInv: Number(rendInv4.value)},
        {inv: Number(inv5.value), whereInv: whereInv5.value, rendInv: Number(rendInv5.value)},
        {inv: Number(inv6.value), whereInv: whereInv6.value, rendInv: Number(rendInv6.value)},
    ];
    return arrayInversion;
};

function procesarInversion(){
    capturarArrayInv();
    arrayInv = [];

    for( let i = 0; i < arrayInversion.length ; i++){
        arrayInv[i] = (arrayInversion[i].inv * arrayInversion[i].rendInv) /100;
    };
    const resultadodelainversion = arrayInv.reduce(
        function (a, b){
            return a + b;
        }
    );
    return resultadodelainversion;
};

function ahorroEinversion(){
    const resultado = (Number(sueldo.value) + Number(totalInvertido()) + Number(procesarInversion()) + Number(totalAhorro())) - Number(capital.value);
    document.getElementById('inMensual').innerHTML = parseInt(resultado);
};

function procesarInversionShow(){
    capturarArrayInv();
    arrayInv = [];

    for( let i = 0; i < arrayInversion.length ; i++){
        arrayInv[i] = (arrayInversion[i].inv * arrayInversion[i].rendInv) /100;
    };
    const resultadodelainversion = arrayInv.reduce(
        function (a, b){
            return a + b;
        }
    );
    document.getElementById('TotGanancia').innerHTML = resultadodelainversion;
};

function arrayInversionSorted(){
    const arrayISorted = arrayInversion.sort(
        function (a , b){
            return a.inv - b.inv;
        }
    )
    return arrayISorted;
};

function arrayInvFiltered(){
    arrayInversionSorted();
    arrayPorInv = [];
    var entradaDescartada = 0;
    function filterByInv (obj){
        if('inv' in obj && obj.inv !== 0){
            return true;
        } else {
            entradaDescartada++;
            return false;
        }
    }
    arrayPorInv = arrayInversion.filter(filterByInv);
    return arrayPorInv;    
};

function sumaArrayInv(){ 
    let suma = 0;
    for(let i = 0; i < arrayInversion.length; i++){
        suma += arrayInversion[i].inv;        
    }
    document.getElementById('TotInvertido').innerHTML = suma;
};

function promedioDeInversion(){
    arrayInvFiltered();
    resultadoPromInv = sumaArrayInv() / arrayPorInv.length;
    return resultadoPromInv; 
};
//Ahorro
function capturarArrayAhorro(){
    arrayAhorro = [
        {ahorro: Number(ahorro.value), whereIs: lugarAhorro.value},
        {ahorro: Number(ahorro1.value), whereIs: lugarAhorro1.value},
        {ahorro: Number(ahorro2.value), whereIs: lugarAhorro2.value},
        {ahorro: Number(ahorro3.value), whereIs: lugarAhorro3.value}, 
        {ahorro: Number(ahorro4.value), whereIs: lugarAhorro4.value}, 
    ];
    return arrayAhorro;
};

function totalAhorro(){
    capturarArrayAhorro();
    const result = arrayAhorro.reduce((a, b) => ({ ahorro: a.ahorro + b.ahorro }));
    return result.ahorro;   
};

function totalAhorroShow(){
    capturarArrayAhorro();
    const result = arrayAhorro.reduce((a, b) => ({ ahorro: a.ahorro + b.ahorro }));
    document.getElementById('TotAhorro').innerHTML = result.ahorro;   
};

function ArrayAhorroSorted(){
    arrayAhorro.sort(
        function(a, b){
            return a.ahorro - b.ahorro;
        }
    )
};

function InvertidoVsAhorro(){
    let suma = totalInvertido() + totalAhorro();
    console.log(suma);
    let resultado = (totalInvertido() * 100) / suma;
    console.log(resultado);
    document.getElementById('InvertidoVsAhorro').innerHTML = Math.round(resultado * 100) / 100 + "%";
    console.log(typeof(resultado));
};