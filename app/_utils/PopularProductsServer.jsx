import woocommerce from "@/app/_utils/woocommerce";
import { PopularProducts } from "../_sections";

// Popular products are based on product with 5 stars review and has popular tag
// popular tag can be set in WordPress Admin -> WooCommerce -> All Products -> Specifict Product
// review can be initially added in from default template preview version of website (manually)

// Fetch the ID of the "popular" tag by its slug
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

export default async function PopularProductsServer() {
  const popularProducts = await getPopularRatedProducts(4);

  return <PopularProducts popularProducts={popularProducts} />;
}

// FOLLOWING RESULT GET PRODUCTS BY TAG = POPULAR
// import woocommerce from "@/app/_utils/woocommerce";
// import { PopularProducts } from "../_sections";

// // Fetch the ID of the "popular" tag by its slug
// async function getTagIdBySlug(tagSlug) {
//   const { data: tags } = await woocommerce.get("/products/tags", {
//     params: {
//       slug: tagSlug,
//     },
//   });

//   // Ensure the tag exists
//   if (tags && tags.length > 0) {
//     return tags[0].id;
//   }

//   throw new Error(`Tag with slug "${tagSlug}" not found.`);
// }

// // Fetch products using the tag ID
// async function getPopularProducts() {
//   try {
//     const tagId = await getTagIdBySlug("popular");

//     const { data: products } = await woocommerce.get("/products", {
//       params: {
//         tag: tagId,
//       },
//     });

//     return products;
//   } catch (error) {
//     console.error("Error fetching popular products:", error.message);
//     return [];
//   }
// }

// export default async function PopularProductsServer() {
//   const popularProducts = await getPopularProducts();

//   return <PopularProducts popularProducts={popularProducts} />;
// }
