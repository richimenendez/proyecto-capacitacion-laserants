const ui = {
    onProductSubmit: (codigo, cantidad) => {},
    renderProducto
}

const formProducto = document.getElementById('form');
const prodName = document.getElementById('prodName');
const prodImg= document.getElementById('prodImg');
const prodVentas = document.getElementById('prodVentas');
const prodDesc = document.getElementById('prodDesc');
const prodPrice = document.getElementById('prodPrice');
const prodCant = document.getElementById('prodCant');
const prodButton = document.getElementById('prodButton');
const prodCats = document.getElementById('prodCats');

function renderProducto(producto){
    console.log(producto);
    formProducto.action = "./product.html?id="+producto.codigo;
    prodName.innerHTML = producto.nombre || "";
    prodImg.src = producto.imagen || "";
    prodDesc.innerHTML = producto.descripcion || "";
    prodVentas.innerHTML = "#" + (producto.ventas || "") + " Ventas";
    prodPrice.innerHTML ="Q"+ (producto.precio || "") +" c/u";
    prodCats.innerHTML = "Categorias: "+ (producto.categorias.map(cat => cat ) || "");
}

function onProductSubmit(event) {
    event.preventDefault();
    anadirItemCarrito(
        codigo,
        cantidad
    )
    console.log(getCarrito());
}