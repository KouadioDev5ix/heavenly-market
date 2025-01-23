import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const recupererListesDesProduits = async () => {
  return axios.get(BASE_URL);
};

export const recupererDetailDunArticleParId = async (PdctsId) => {
  return axios.get(`${BASE_URL}/${PdctsId}`);
};
