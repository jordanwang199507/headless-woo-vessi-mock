// app/page.js
import woocommerce from "@/app/_utils/woocommerce";
import { ShopContent } from "@/app/_sections";

async function getProducts() {
  const { data: products } = await woocommerce.get("/products");
  return products;
}

export default async function Shop() {
  const products = await getProducts();

  return <ShopContent products={products} />;
}
