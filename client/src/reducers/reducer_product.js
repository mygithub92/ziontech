import _ from "lodash";
import { FETCH_PRODUCTS, FETCH_PRODUCT, DELETE_PRODUCT } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_PRODUCT:
      return _.omit(state, action.payload);
    case FETCH_PRODUCT:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
}
