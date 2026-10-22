// src/lib/products.ts

/**
 * Builds dynamic product URLs from product data (slug, object with slug, or popular product name)
 * and always guarantees a trailing slash.
 * Produces: /compostable-product/[slug]/
 * Example: Compostable Films -> /compostable-product/compostable-films/
 * Example: compostable-bag -> /compostable-product/compostable-bag/
 */
export function getProductUrl(productOrSlug?: string | { slug?: string; name?: string }): string {
  if (!productOrSlug) return "/compostable-product/";

  // Extract string value from argument
  const input = typeof productOrSlug === "string" 
    ? productOrSlug.trim() 
    : (productOrSlug.slug || productOrSlug.name || "").trim();

  if (!input) return "/compostable-product/";

  // Known mappings for Popular Products list (and category / display names)
  const popularMapping: Record<string, string> = {
    "Compostable Bags": "carry-bag",
    "Tableware's": "food-packaging-boxes",
    "Compostable Films": "compostable-films",
    "Biodegradable Pouches": "packaging-pouches",
    "Biodegradable Water Bottles": "biodegradable-water-bottles",
    "Food Containers": "food-container-box",
    "Disposable plates": "compostable-plates",
  };

  if (input in popularMapping) {
    const mappedSlug = popularMapping[input];
    return mappedSlug ? `/compostable-product/${mappedSlug}/` : "/compostable-product/";
  }

  // If input is an existing path like "/compostable-product/carry-bags/compostable-bag/"
  // Strip leading/trailing slashes and get the final product slug
  const segments = input.replace(/^\/+|\/+$/g, "").split("/");
  const slug = segments.pop() || "";

  if (!slug || slug === "compostable-product") {
    return "/compostable-product/";
  }

  return `/compostable-product/${slug}/`;
}

/**
 * Convenience alias for Popular Product list items. Uses getProductUrl.
 */
export function getPopularProductUrl(productName: string): string {
  return getProductUrl(productName);
}
