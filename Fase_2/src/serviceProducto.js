

const getProducto = (codigo) =>{
    return productos.find( producto => producto.codigo == codigo);
}

const getProductos = () =>{
    return productos;
}

// añadir compra (ventas)
// calificar