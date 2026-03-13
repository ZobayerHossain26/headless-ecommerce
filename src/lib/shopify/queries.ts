// export const PRODUCTS_QUERY = ` 
//     query Products {
//       products(first: 10) {
//         edges {
//           node {
//             id
//             title
//             featuredImage {
//               url
//               altText
//             }
//             priceRange {
//               minVariantPrice {
//                 amount
//                 currencyCode
//               }
//             }
//             variants(first: 3) {
//               edges {
//                 node {
//                   id
//                   title
//                   price {
//                     amount
//                     currencyCode
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `;
  
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

