import Arrow from "@/components/ui/icons/Arrow";
import styles from "../../../assets/productDetails.module.css"
import LeftArrow from "@/components/ui/icons/LeftArrow";
import ProductAction from "./ProductAction";
import { getProductByID } from "@/lib/shopify/product";
import { ProductsDetailsType } from "@/lib/types/type";


const ProductDetails = async ({ params }: any) => {
  const Params = await params;
  const { productId } = Params;
  let id = "gid://shopify/Product/" + productId
  const productDetails: ProductsDetailsType = await getProductByID(id)
  return (
    <section>
      <div className="container">
        <div className="breadcrumb">
          <a href="/" className="breadcrumb--item">Home</a>
          <span aria-hidden="true" className="breadcrumb--separator">
            <Arrow />
          </span>
          <a href="/collection" className="breadcrumb--item">collection</a>
          <span aria-hidden="true" className="breadcrumb--separator">
            <Arrow />
          </span>
          <span className="breadcrumb--item">handle title</span>
        </div>
        <div className="wrapper">
          <div className={styles.media}>
            <div className={`${styles.arrow} ${styles.left}`}>
              <LeftArrow className={styles.icon} />
            </div>
            <div className={styles.image}>
              <img src={productDetails.images?.edges[0]?.node.url} alt={productDetails.images?.edges[0]?.node.altText || productDetails.title} />
            </div>
            <div className={styles.imageList}>
              <div className={styles.item}><img src={productDetails.images?.edges[1]?.node.url} alt="" /></div>
              <div className={styles.item}><img src={productDetails.images?.edges[2]?.node.url} alt="" /></div>
              <div className={styles.item}><img src={productDetails.images?.edges[0].node.url} alt="" /></div>
            </div>
            <div className={`${styles.arrow} ${styles.right}`}>
              <Arrow className={styles.icon} />
            </div>
          </div>
          <div className="content_wrapper">
            <div className="content_info">
              <h3 className="title">{productDetails.title}</h3>
              <p className="price">{productDetails.variants?.edges[0]?.node.price.amount} <span>{productDetails.variants?.edges[0].node.price.currencyCode}</span></p>
            </div>
            <div className="variant">
              {productDetails.description}
            </div>
            <ProductAction id={productId} />
          </div>
        </div>
      </div>
    </section>
  )
};
export default ProductDetails