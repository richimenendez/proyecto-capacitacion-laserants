const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(renderProducto(getProducto(id)));