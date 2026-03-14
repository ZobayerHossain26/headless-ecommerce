export const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
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


// export const PRODUCT_BY_ID = `query ProductById($id: ID!) {
//   product(id: $id) {
//     id
//     title
//     description
//     vendor
//     productType
//     createdAt
//     handle
//     tags
//     status
//     variants(first: 10) {
//       edges {
//         node {
//           id
//           title
//           price
//           sku
//           inventoryQuantity
//         }
//       }
//     }
//     images(first: 5) {
//       edges {
//         node {
//           id
//           url
//           altText
//         }
//       }
//     }
//   }
// }`
export const PRODUCT_BY_ID = `
query ProductById($id: ID!) {
  product(id: $id) {
    id
    title
    description
    vendor
    productType
    handle
    tags

    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          quantityAvailable
          price {
            amount
            currencyCode
          }
          sku
        }
      }
    }

    images(first: 5) {
      edges {
        node {
          id
          url
          altText
        }
      }
    }
  }
}
`;