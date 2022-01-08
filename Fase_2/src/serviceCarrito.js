
 const anadirItemCarrito = (_id, cantidad) =>{
    let _carrito = localStorage.getItem('carrito');
    if(!_carrito)
        _carrito =  new Set();
    else 
        _carrito = JSON.parse(_carrito);
        
    if(_carrito[_id])
        _carrito[_id]+=cantidad;
    else 
        _carrito[_id] = cantidad;
    
    localStorage.setItem('carrito',JSON.stringify(_carrito));
    
    return true;
}


const eliminarItemCarrito = (_id) => {
    let _carrito = JSON.parse(localStorage.getItem('carrito'));
    delete _carrito[_id];
    localStorage.setItem('carrito',JSON.stringify(_carrito));
    console.log("Item eliminado",_id);
    return true;
}

const editarItemCarrito = (_id, cantidad) => {
    let _carrito = JSON.parse(localStorage.getItem('carrito'));
    if(_carrito[_id])
        _carrito[_id]=cantidad;
    
    localStorage.setItem('carrito',JSON.stringify(_carrito));
    console.log("item editado", _id, cantidad );
    return true;
}

const getCarrito = () =>{
    console.log("Mostrar carrito");
    return JSON.parse(localStorage.getItem('carrito'))||{};
}

const borrarCarrito = () => {
    localStorage.removeItem('carrito');
    console.log("Carrito borrado");
    return true;
}