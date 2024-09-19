import woocommerce from "@/app/_utils/woocommerce";
import { CartContent } from "@/app/_sections";
async function getTagIdBySlug(tagSlug) {
  const { data: tags } = await woocommerce.get("/products/tags", {
    params: { slug: tagSlug },
  });

  if (tags && tags.length > 0) {
    return tags[0].id;
  }

  throw new Error(`Tag with slug "${tagSlug}" not found.`);
}

// Fetch products with a specific tag and filter them by average rating
async function getPopularRatedProducts(minRating = 4) {
  try {
    // Get the "popular" tag ID
    const tagId = await getTagIdBySlug("popular");

    // Fetch products with the "popular" tag
    const { data: products } = await woocommerce.get("/products", {
      params: {
        tag: tagId,
        per_page: 4,
      },
    });

    // Filter products with an average rating of >= 4
    const filteredProducts = products.filter(
      (product) => product.average_rating >= minRating
    );

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }
}
export default async function Cart() {
  const popularProducts = await getPopularRatedProducts(4);

  return <CartContent popularProducts={popularProducts} />;
}
