



function reducirDescuento () {
    precio = prompt("Ingresar precio");
	cantidad = prompt("Ingresar cantidad");

	    compra = precio * cantidad;
	    descuento = compra * 0.30;
	    pagar = compra - descuento;

	console.log("El desceunto es: " + descuento + "&");
	console.log("El total a pagar es: " + pagar + "$");
}

function cobrarPago (){
    monto = prompt("ingrese monto a pagar");
    

    if(monto >= pagar){ 
    vuelto = monto - pagar;
    console.log("compra exitosa, su vuelto es " + vuelto + "$")
}else{
    falta = pagar - monto;
    console.log("lo sentimos, te falta " + falta + "$");
}

}

reducirDescuento ();
cobrarPago ();
