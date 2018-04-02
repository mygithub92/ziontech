import _ from "lodash";
import { FETCH_USER_ROLE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_ROLE:
      return action.payload.data;
    default:
      return state;
  }
}
