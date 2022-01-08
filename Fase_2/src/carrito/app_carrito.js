
const preloadedState = {
    producto: {},
    carrito: getCarrito()||[]
}

const middlewares =  Redux.applyMiddleware(
    loggerMiddleware
);

const store = Redux.createStore(reducer, preloadedState, middlewares);

store.subscribe(dispatchOnChange(store, (state)=> {
    ui.renderCarrito(state.carrito)
}))


function dispatchOnChange(store, dispatch) {
    let latestState;
    return function () {
        let currentState = store.getState();
        if(currentState != latestState) {
            latestState = currentState;
            dispatch(currentState);
        }
    }
    
}

store.dispatch({
    type:"producto"
})