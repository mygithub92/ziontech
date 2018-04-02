import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ProductReducer from "./reducer_product";
import RoleReducer from "./reducer_role";

const rootReducer = combineReducers({
  products: ProductReducer,
  role: RoleReducer,
  form: formReducer
});

export default rootReducer;
