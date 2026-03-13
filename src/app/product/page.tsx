import Card from "@/components/ui/Card"
import { getProducts } from "@/lib/shopify/product"


export default async function ProductsPage() {
  const products = await getProducts(10)
  return (
    <div className="container" >
      <div className="wrapper">
        {products.map((product: any) => (
          <Card key={product.node.id} product={product.node} />

        ))}
      </div>
    </div>
  )
}