import { combineReducers } from "redux";
import BookReducer from "./BookReducer";
import CartReducer from "./CartReducer";
import CartItemReducer from "./CartItemReducer";
import OrderReducer from "./OrderReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
    BookReducer,CartReducer,CartItemReducer,OrderReducer,UserReducer
})

export default rootReducer;