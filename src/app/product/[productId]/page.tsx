import Arrow from "@/components/ui/icons/Arrow";
import styles from "../../../assets/productDetails.module.css"
import LeftArrow from "@/components/ui/icons/LeftArrow";
import ProductAction from "./ProductAction";


const ProductDetails = async ({ params }: any) => {
  const Params = await params;
  const { productId } = Params
  console.log(productId)
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
              <img src="/product_1.png" alt="products image" />
            </div>
            <div className={styles.imageList}>
              <div className={styles.item}><img src="/product_1.png" alt="" /></div>
              <div className={styles.item}><img src="/product_1.png" alt="" /></div>
              <div className={styles.item}><img src="/product_1.png" alt="" /></div>
              <div className={styles.item}><img src="/product_1.png" alt="" /></div>
            </div>
            <div className={`${styles.arrow} ${styles.right}`}>
              <Arrow className={styles.icon} />
            </div>
          </div>
          <div className="content_wrapper">
            <div className="content_info">
              <h3 className="title">Gazelle Grenoble C7+ HMB</h3>
              <p className="price">250$</p>
            </div>
            <div className="variant">
              variant list
            </div>
            <ProductAction  id={productId}/>
          </div>
        </div>
      </div>
    </section>
  )
};
export default ProductDetails