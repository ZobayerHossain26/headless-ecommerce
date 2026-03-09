const ProductDetails = async ({ params }:any) => {
    const Params= await params;
      const { productId } =Params
    console.log(params)
    return( <div>Products page {productId}</div>)
};
export default ProductDetails