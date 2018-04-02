import axios from "axios";

export const FETCH_PRODUCTS = "fetch_products";
export const FETCH_PRODUCT = "fetch_product";
export const CREATE_PRODUCT = "create_product";
export const DELETE_PRODUCT = "delete_product";

const ROOT_URL = "/get_all_tuna";
const API_KEY = "?key=PAPERCLIP1234";

export function fetchProducts() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function createProduct(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_PRODUCT,
    payload: request
  };
}

export function fetchProduct(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_PRODUCT,
    payload: request
  };
}

export function deleteProduct(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_PRODUCT,
    payload: id
  };
}
