import { cartActionType, cartInitialState, cartReducer } from "./cartReducer";
import combineReducers from "./combineReducers";
import {
  layoutActionType,
  layoutInitialState,
  layoutReducer,
} from "./layoutReducer";

export const initialState = {
  layout: layoutInitialState,
  cart: cartInitialState,
};

export const rootReducer = combineReducers({
  layout: layoutReducer,
  cart: cartReducer,
});
