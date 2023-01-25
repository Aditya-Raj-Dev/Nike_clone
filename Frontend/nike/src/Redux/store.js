import { legacy_createStore ,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "./Appreducer/Product/reducer";
const rootReducer=combineReducers({
    ProductReducer,
})

const store= legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store