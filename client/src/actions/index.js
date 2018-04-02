import axios from "axios";

export const FETCH_USER_ROLE = "fetch_user_role";
export const FETCH_PRODUCTS = "fetch_products";
export const CREATE_PRODUCT = "create_product";
export const VINERY_UPDATE = "vinery_update";
export const BOTTLER_UPDATE = "bottler_update";

const ROOT_URL = "/get_all_tuna";
const API_KEY = "?key=PAPERCLIP1234";

export function fetchUserRole() {
  const request = axios.get("/get_user_role");

  return {
    type: FETCH_USER_ROLE,
    payload: request
  };
}

export function fetchProducts() {
  const request = axios.get("/get_all_wine");

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function createProduct(values, callback) {
  console.log(values);
  const request = axios
    .post('/add_wine', values)
    .then(() => callback());

  return {
    type: CREATE_PRODUCT,
    payload: request
  };
}

export function vineryUpdate(key, values, callback) {
  values.key = key;
  console.log(values);
  const request = axios.post('/vinery', values).then(() => callback());

  return {
    type: VINERY_UPDATE,
    payload: request
  }
}

export function bottlerUpdate(key, values, callback) {
  values.key = key;
  console.log(values);
  const request = axios.post('/bottler', values).then(() => callback());

  return {
    type: BOTTLER_UPDATE,
    payload: request
  }
}

