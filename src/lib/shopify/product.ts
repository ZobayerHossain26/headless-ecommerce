import { PRODUCTS_QUERY } from "./queries";
import { shopifyFetch } from "./client";

export async function getProducts(value=10) {
  const data=  await shopifyFetch({
        query: PRODUCTS_QUERY,
        variables: {first:value}
    })
    return data;
}