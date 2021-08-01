// var Coupon = document.getElementById('inputCode').value;
const coupons = [
    {name:"PrimeraCompra", discount: 15},
    {name:"CodigoInfluencer", discount: 25},
    {name:"CanjePuntos", discount: 35},
];


function aplicarCupon(){
    const couponValue = document.getElementById('inputCode').value;
    const priceValue = document.getElementById('inputPrice').value;

    const IsCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    };
    console.log(coupons.find(IsCouponValueValid));

    const userCoupon = coupons.find(IsCouponValueValid);


        if (!userCoupon) {
        console.log("El cupón " + userCoupon + " no es válido");
    }else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        function calcularPrecioConDescuento(priceValue, descuento){
            const resultP = (priceValue * (100 - descuento)) / 100;
            document.getElementById('resultadoCuponDescuento').innerHTML = resultP;

        };
    };

}