import ActionTypes from "./action-types";


// REDUCER
const reducerProducto = (state, action) =>{
    switch (action.type) {
        case ActionTypes.ProductoEliminado:
            return productoEliminadoReducer(state, action);
        case ActionTypes.ProductoModificado:
            return productoModificadoReducer(state, action);
        case ActionTypes.CarritoBorrado:
            return carritoEliminadoReducer();
        case ActionTypes.CarritoComprado:
            return carritoCompradoReducer();
            case ActionTypes.AsignarProductos:
                return {
                    ...state,
                    productos: action.payload
                };
        default:
            return state;
    }
}

const reducer = (state, action) =>{
    switch (action.type) {
        case ActionTypes.ProductoEliminado:
            return productoEliminadoReducer(state, action);
        case ActionTypes.ProductoModificado:
            return productoModificadoReducer(state, action);
        case ActionTypes.CarritoBorrado:
            return carritoEliminadoReducer();
        case ActionTypes.CarritoComprado:
            return carritoCompradoReducer();
            case ActionTypes.AsignarProductos:
                return {
                    ...state,
                    productos: action.payload
                };
        default:
            return state;
    }
}

// ACTION TYPES 
const productoEliminado = (codigo) => ({
    type: ActionTypes.ProductoEliminado,
    payload: {
        codigo
    }
})

const productoModificado = (codigo, cantidad) => ({
    type: ActionTypes.ProductoModificado,
    payload: {
        codigo,
        cantidad
    }
})

const carritoComprado = () => ({
    type: ActionTypes.CarritoComprado
})


const carritoEliminado = () => ({
    type: ActionTypes.carritoEliminado
})

// MIDDLEWARES

const loggerMiddleware = store => next => action => {
    console.log("Dispatching", action);
    const result = next(action);
    console.log("State", store.getState());
    return result;
}

// REDUCERS

function productoEliminadoReducer(state, action) {
    const codigo = action.payload.codigo;
    // eliminarItemCarrito(codigo)
    return {
        ...state,
        // carrito: getCarrito()
    }
}

function productoModificadoReducer(state, action) {
    const codigo = action.payload.codigo;
    const cantidad = action.payload.cantidad;
    // editarItemCarrito(codigo,cantidad)
    return {
        ...state,
        // carrito: getCarrito()
    }
}

function carritoEliminadoReducer(state, action) {
    // borrarCarrito()
    window.alert("Carrito eliminado!")
    // const carrito = state.carrito.filter((item) => item.producto != codigo);
    return {
        ...state,
        // carrito: getCarrito()
    }
}

function carritoCompradoReducer(state, action) {
    // borrarCarrito()
    window.alert("Compra realizada!")
    // const carrito = state.carrito.filter((item) => item.producto != codigo);
    return {
        ...state,
        // carrito: getCarrito()
    }
}

export {
    reducer,
    reducerProducto,
    loggerMiddleware,
}