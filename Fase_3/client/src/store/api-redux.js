import api from "../api/products_api";
import {push} from "connected-react-router"

const asignarProductos = (payload) => ({
    type: "asignar-productos",
    payload
})

const apiMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case "obtener-productos":{
            const productos = await api.getAllProducto();
            store.dispatch(asignarProductos(productos))
            break;
        }
        case "producto-agregado":{
            const producto = await api.postProducto(action.payload);
            store.dispatch(push("/"))
            break;
        }
        case "producto-modificado":{
            await api.postProducto(action.payload);
            const productos = await api.getAllProducto();
            store.dispatch({
                type: "asignar-productos",
                payload: productos
            })
            break;
        }
        default:
            next(action);
            break;
    }
}

export default apiMiddleware;