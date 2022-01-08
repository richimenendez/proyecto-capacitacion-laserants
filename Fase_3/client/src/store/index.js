import {applyMiddleware, combineReducers, createStore} from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router"
import apiMiddleware from "./api-redux";
import * as storage from "./store";

const history = createBrowserHistory();

const preloadedState = {
    producto: {},
    carrito: []
}

const middlewares =  applyMiddleware(
    storage.loggerMiddleware,
    routerMiddleware(history),
    apiMiddleware
);

const reducer2 = combineReducers({
    router: connectRouter(history),
    producto: storage.reducerProducto,

})

const store = createStore(storage.reducer, preloadedState, middlewares);




storage.dispatch({
    type:"producto"
})

export {history};
export default store;
