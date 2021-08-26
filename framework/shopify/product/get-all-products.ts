import fetchApi from "../utils/fetch-api";

import getAllProductsQuery from "../utils/queries/get-all-products";

// get type from schema file
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  // normalize and return new data
  return data.products;
};

export default getAllProducts;
