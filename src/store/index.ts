import { applyMiddleware, createStore, Store } from "redux";

import createSagaMiddleware from "redux-saga";

import { Cart } from "./actions/cart_actions";

import reducer, { CartAction, DispatchType } from "./reducers/cart_reducer";


const sagaMiddleware = createSagaMiddleware();
const store: Store<Cart, CartAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(sagaMiddleware))
  
// sagaMiddleware.run();

export default store;
