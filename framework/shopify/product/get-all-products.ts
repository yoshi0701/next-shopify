import fetchApi from "../utils/fetch-api";

import getAllProductsQuery from "../utils/queries/get-all-products";
import { normalizeProduct } from "../utils/normalized";

// get type from schema file
import { ProductConnection } from "../schema";
import { Product } from "../../common/types/products";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? []; // in case return data is null or undefined

  return products;
};

export default getAllProducts;
