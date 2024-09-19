import woocommerce from "@/app/_utils/woocommerce";
import { ProductContent } from "@/app/_sections";

async function getProduct(id) {
  const { data: product } = await woocommerce.get(`/products/${id}`);
  return product;
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  //   console.log(product);
  return <ProductContent product={product} />;
}
