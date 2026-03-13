export async function GET() {
  const SHOPIFY_STORE = process.env.SHOPIFY_STORE;
  const STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!SHOPIFY_STORE || !STOREFRONT_ACCESS_TOKEN) {
    return new Response(
      JSON.stringify({ error: "Shopify store or storefront access token not set" }),
      { status: 500 }
    );
  }

  const query = ` 
    query Products {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            featuredImage {
              url
              altText
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants(first: 3) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(
      `https://${SHOPIFY_STORE}/api/2026-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({ query }),
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok || data.errors) {
      return new Response(
        JSON.stringify({
          error: data.errors || "Failed to fetch products",
        }),
        { status: res.status || 500 }
      );
    }

    return new Response(JSON.stringify(data.data.products.edges), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong", details: String(error) }),
      { status: 500 }
    );
  }
}