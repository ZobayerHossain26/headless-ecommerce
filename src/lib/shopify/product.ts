import { PRODUCTS_QUERY, PRODUCT_BY_ID } from "./queries";
import { shopifyFetch } from "./client";

export async function getProducts(value = 10) {
    const data = await shopifyFetch({
        query: PRODUCTS_QUERY,
        variables: { first: value }
    })
    return data.products.edges;
}

export async function getProductByID(id:string) {
    const data = await shopifyFetch({
        query: PRODUCT_BY_ID,
        variables: {id}
    })
    return data.product
}