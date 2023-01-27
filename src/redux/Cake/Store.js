import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import cakeReducer from "./CakeReducer";
import IceCreamReducer from "../IceCream/IceCreamReducer";
import userReducer from "../Users/UserReducer";
import thunk from "redux-thunk";
const combine = combineReducers({
  cake: cakeReducer,
  ice: IceCreamReducer,
  user: userReducer,
});
const store = legacy_createStore(combine, applyMiddleware(thunk));
export default store;