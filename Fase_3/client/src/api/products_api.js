import axios from "axios";
const url = 'http://localhost:5001';

async function request(httpCall) {
    const response = await httpCall();
    return response.data;
}

// async function getAllProducto(){
//     return request(() =>  axios.get(`${url}/producto/`));
// }

const getAllProducto =() => request(() =>  axios.get(`${url}/producto/`));

 async function getAllProductos(){
    // try {
        const response = await axios.get(`${url}/producto/`)
        const productos = response.data;
        return productos;
    // } catch (error) {
    //     console.error("Error en el request: ", error);
    //     throw error;
    // }
}

 async function getProducto(codigo){
    const response = await axios.get("http://localhost:5001/productos/"+codigo);
    return response.data;
}

 async function postProducto(producto){
    const response = await axios.post("http://localhost:5001/productos/", producto);
    return response.data;
}

async function putProducto({codigo, ...producto}){
    const response = await axios.post("http://localhost:5001/productos/", producto);
    return response.data;
}


export default {
    getAllProducto,
    getAllProductos,
    getProducto,
    postProducto
}