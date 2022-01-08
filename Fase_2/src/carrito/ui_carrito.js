const ui = {
    comprarCarrito: () => {},
    borrarCarrito: () => {},
    onEditarProducto: (codigo, cantidad) => {},
    onEliminarProducto: (codigo) => {},
    renderCarrito
}

// ELEMENTOS DE LA INTERFAZ
const divCarrito = document.getElementById('divCarrito');
const hSubtotal = document.getElementById('subtotal');
const hSubtotal2 = document.getElementById('subtotal2');
const btnComprar = document.getElementById('btnComprar');
const btnEliminar = document.getElementById('btnEliminar');

function renderProducto (producto,cantidad) {
    const cad = `<!-- ItemCarrito -->
    <div class="container">
        <div class="link-carrito" onclick="navigate()">
            <div class="row">
                <div class="col-lg-2 d-flex align-items-center justify-content-center">
                    <img src=${producto.imagen} class="prod-img-carrito"/>
                </div>
                <div class = "col-lg-4">
                    <div class="row">
                        <div class="col-12 item-carrito">${producto.nombre}</div>
                    </div>
                    <div class="row">
                        <div class="col-12 "><h4> <span class="italic-text">Q</span><span class="bold-text">${producto.precio}</span></h4></div>
                    </div>
                </div>
                <div class = "col-lg-3 ">
                    <div class="row ">
                        <div class="col-12 item-carrito ">
                            <input type="number" class="form-control inp-car" value=${cantidad} style="width:50%; margin-inline: 25%; " onclick="modificarProducto2(event,${producto.codigo},this.value);"  onchange="modificarProducto(event,${producto.codigo},this.value);">
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-12  ls-btn-carrito  align-items-center justify-content-center">
                            <button class="btn btn-danger align-self-center" onclick="borrarProducto(event,${producto.codigo}); (event)=>event.stopPropagation();"> <i class="bi bi-x-circle-fill"></i> </button>
                        </div>
                    </div>
                </div>
                <div class = "col-lg-3 d-flex align-items-center justify-content-center"><h3><span class="italic-text">Q</span><span class="bold-text">${(producto.precio*cantidad).toFixed(2)}</span></h3>
                </div>
            </div>
        </div>
        <hr style="margin-left: 5%;">
    </div>
    `;
    return cad;
}

// EVENTOS

    // REALIZAR COMPRA
    btnComprar.addEventListener("click",(event)=>{
        event.preventDefault();
        store.dispatch({
            type: "carrito-comprado"
        })
    })
    // ELIMINAR CARRITO
    btnEliminar.addEventListener("click",(event)=>{
        event.preventDefault();
        store.dispatch({
            type: "carrito-borrado"
        })
    })

    // ELIMINAR PRODUCTO
    function borrarProducto(event,codigo) {
        event.stopPropagation();
        store.dispatch({
            type: "producto-eliminado",
            payload:{
                codigo
            }
        })
    }
    // MODIFICAR CANTIDAD
    function modificarProducto(event, codigo, cantidad) {
        window.alert(cantidad);
        event.stopPropagation();
        store.dispatch({
            type: "producto-modificado",
            payload:{
                codigo,
                cantidad
            }
        })
    }
    
    function modificarProducto2(event) {
        event.stopPropagation();
    }


    function navigate(id){
        window.open("product.html?id="+id,"_self");
    }
// RENDERS
    function renderCarrito(products) {
        let suma = 0;
        let items = [];
        for (const [key, value] of Object.entries(products)) {
          items.push({producto:key, cantidad:value})
        }
        console.log(items);
        const productos = items.map((prod)=>{
            const div = document.createElement("div");
            const producto = getProducto(prod.producto);
            if(producto){
            div.innerHTML = renderProducto(producto,prod.cantidad);
            console.log(producto);
            suma+=producto.precio * prod.cantidad;
            return div;
            }
        })
        divCarrito.innerHTML = "";
        productos.forEach(producto => {
            divCarrito.appendChild(producto);
        });
        hSubtotal.innerHTML = (suma).toFixed(2);
        hSubtotal2.innerHTML = "Q"+(suma.toFixed(2));
    }