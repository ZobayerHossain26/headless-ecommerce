const domain = process.env.SHOPIFY_STORE!;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const apiVersion = process.env.API_VERSION!;

interface FetchParams<TVariables> {
    query: string,
    variables?: TVariables
}
export async function shopifyFetch<TVariables>({ query, variables }: FetchParams<TVariables>) {
    const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": accessToken,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        cache: "no-store",
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch Shopify data: ${res.status} ${res.statusText} - ${errorText}`);
    }
    const value = await res.json()

    return value.data.products.edges;
}
