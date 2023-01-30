import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Authreducer/auth.reducer";
import { ProductReducer } from "./Appreducer/Product/reducer";
const rootReducer = combineReducers({
  ProductReducer,
  authReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
