import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";


const sagaMiddleware = createSagaMiddleware();

// const store = createStore([], applyMiddleware(sagaMiddleware));

// sagaMiddleware.run([]);

// export default store;
