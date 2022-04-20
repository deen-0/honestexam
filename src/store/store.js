import { createStore } from "redux"
import { applyMiddleware ,compose} from "redux";
import thunk from "redux-thunk";
//Store.js this is our Store
import globalReducer from "./reducers/Reducer"
const enhancer=[applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];
const store=createStore(globalReducer,compose(...enhancer));
export default store;   