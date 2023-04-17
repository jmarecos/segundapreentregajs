class Compra {
    constructor(producto, cantidad, cliente) {
      this.producto = producto;
      this.cantidad = cantidad;
      this.cliente = cliente;
    }
  
    // Método para buscar una compra por nombre de producto
    static buscarCompraPorProducto(compras, nombreProducto) {
      return compras.find(compra => compra.producto.nombre === nombreProducto);
    }
  
    // Método para filtrar compras por nombre de cliente
    static filtrarComprasPorCliente(compras, nombreCliente) {
      return compras.filter(compra => compra.cliente.nombre === nombreCliente);
    }
  
    // Método para finalizar la compra
    static finalizarCompra(compras) {
      // Realizar operaciones necesarias para finalizar la compra, como actualizar inventario y generar factura
      console.log('Compra finalizada.');
    }
  }
  
  // objetos de productos de seguro
  let seguroAuto = { nombre: 'Seguro de automóvil', precio: 25850 };
  let seguroHogar = { nombre: 'Seguro de hogar', precio: 45120 };
  let seguroVida = { nombre: 'Seguro de vida', precio: 9580 };
  let seguroMoto = { nombre: 'Seguro de moto', precio: 10000 };
  let seguroComercial = { nombre: 'Seguro comercial', precio: 22750 };
  let seguroFamilia = { nombre: 'Seguro de familia', precio: 40180 };
  let seguroLaptop = { nombre: 'Seguro de laptop', precio: 7450 };
  // objetos de clientes
  let cliente1 = { nombre: 'Juan', edad: 35 };
  let cliente2 = { nombre: 'María', edad: 28 };
  let cliente3 = { nombre: 'Pedro', edad: 42 };
  
  let carrito = [];
  
  function agregarProductoAlCarrito(producto, cantidad, cliente) {
    let compraExistente = Compra.buscarCompraPorProducto(carrito, producto.nombre);
    if (compraExistente) {
      compraExistente.cantidad += cantidad;
    } else {
      carrito.push(new Compra(producto, cantidad, cliente));
    }
  }
  
  agregarProductoAlCarrito(seguroAuto, 2, cliente1);
  agregarProductoAlCarrito(seguroHogar, 1, cliente2);
  agregarProductoAlCarrito(seguroAuto, 1, cliente3);
  agregarProductoAlCarrito(seguroVida, 3, cliente1);
  
 
  let compraSeguroAuto = Compra.buscarCompraPorProducto(carrito, 'Seguro de automóvil');
  console.log(compraSeguroAuto);
  
 
  let comprasJuan = Compra.filtrarComprasPorCliente(carrito, 'Juan');
  console.log(comprasJuan);
  
  // Finalizar la compra
  Compra.finalizarCompra(carrito);