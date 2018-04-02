import _ from "lodash";
import { FETCH_PRODUCTS, VINERY_UPDATE, BOTTLER_UPDATE, FETCH_USER_ROLE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case BOTTLER_UPDATE:
      return state;
    case VINERY_UPDATE:
      return state;
    case FETCH_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
}
