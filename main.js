function productos(id, producto, talla, stock, precio) {
    this.id = id
    this.producto = producto
    this.talla = talla
    this.stock = stock
    this.cantidad = 0
    this.precio = precio
}

const prenda = new productos(0, "blusa", "s", 4, 10)
const prenda1 = new productos(1, "pantalon marron", "28", 5, 25)
const prenda2 = new productos(2, "short", "28", 2, 20)
const prenda3 = new productos(3, "zapato", "36", 7, 35)
const prenda4 = new productos(4, "vestido", "m", 5, 20)
const prenda5 = new productos(5, "top", "s", 5, 10)
const prenda6 = new productos(6, "lentes", "0", 3, 12)
const prenda7 = new productos(7, "collar", "0", 8, 25)
const prenda8 = new productos(8, "pantalon negro", "38", 5, 25)
const prenda9 = new productos(9, "pantalon gris", "38", 3, 25)
const prenda10 = new productos(10, "blusa negra", "s", 2, 25)

let prods = [prenda, prenda1, prenda2, prenda3, prenda4, prenda5, prenda6, prenda7, prenda8, prenda9, prenda10]


let carrito = [];

console.table(prods);

let totalCarrito;
let cantidadSeleccionada;

function obtenerProductosSeleccionados(productosDisponibles) {

	const productosSeleccionados = {};
	let seguirAgregando = true;

	while (seguirAgregando) {
		let nombreProducto;
		prods.forEach((prod,index) => nombreProducto += `
		${index} ${prod.producto}`)
		let eleccion = parseInt(prompt("Seleccione un articulo: " + nombreProducto))

		let existeEnElCarrito = carrito.find(prod => prod.id === eleccion)

		if (existeEnElCarrito) {
			cantidadSeleccionada = parseInt(prompt("cuantas prendas deseas llevar ?"))
			existeEnElCarrito.cantidad += cantidadSeleccionada
		} else {

			let prodSeleccionado = prods.find(prod => prod.id === eleccion)
			cantidadSeleccionada = parseInt(prompt("cuantas prendas deseas llevar ?"))

			prodSeleccionado.cantidad = cantidadSeleccionada
			carrito.push(prodSeleccionado)
		}

		totalCarrito = carrito.reduce((acc,prod) => acc + (prod.precio * prod.cantidad),0)
		console.log(totalCarrito);

		const agregarOtroArticulo = prompt("¿deseas comprar mas articulos? (si-no)").toLowerCase();
		seguirAgregando = agregarOtroArticulo === "si";
	}
	console.table(carrito);
	totalCarrito = carrito.reduce((acc,prod) => acc + (prod.precio * prod.cantidad),0)
	alert("Total a pagar: " + totalCarrito)


	return productosSeleccionados;
}

const prueba = obtenerProductosSeleccionados(productos);
console.log(prueba)

function cobrarPago (){
    monto = prompt("ingrese monto a pagar");
    

    if(monto >= totalCarrito){ 
    vuelto = monto - totalCarrito;
    alert("compra exitosa, su vuelto es " + vuelto + "$")
}else{
    falta = totalCarrito - monto;
    alert("lo sentimos, te falta " + falta + "$");
    }
}

cobrarPago ();