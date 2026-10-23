// src/lib/products.ts

/**
 * Official 24 Product URLs as defined in the master spreadsheet:
 * 1.  /compostable-product/biodegradable-water-bottles/
 * 2.  /compostable-product/carry-bag/
 * 3.  /compostable-product/agriculture-mulch-films/
 * 4.  /compostable-product/nursery-bag/
 * 5.  /compostable-product/wrapping-film/
 * 6.  /compostable-product/packaging-pouches/
 * 7.  /compostable-product/disposable-cups/
 * 8.  /compostable-product/bowls/
 * 9.  /compostable-product/pet-poop-bags/
 * 10. /compostable-product/compostable-plates/
 * 11. /compostable-product/dona-bowls/
 * 12. /compostable-product/spoons/
 * 13. /compostable-product/bag-pouches/
 * 14. /compostable-product/meal-plates/
 * 15. /compostable-product/food-container-box/
 * 16. /compostable-product/clamshell-box/
 * 17. /compostable-product/compostable-bio-medical-waste-bags/
 * 18. /compostable-product/garment-bags/
 * 19. /compostable-product/garbage-bag/
 * 20. /compostable-product/eco-friendly-straws/
 * 21. /compostable-product/heat-shrink-films/
 * 22. /compostable-product/courier-bags/
 * 23. /compostable-product/grocery-bag/
 * 24. /compostable-product/eco-friendly-round-plate/
 */
export const officialProductSlugMap: Record<string, string> = {
  // 1. Biodegradable Water Bottles
  "biodegradable-water-bottles": "biodegradable-water-bottles",
  "biodegradable-water-bottle": "biodegradable-water-bottles",
  "biodegradable water bottles": "biodegradable-water-bottles",
  "biodegradable water bottle": "biodegradable-water-bottles",

  // 2. Compostable Bags -> carry-bag
  "compostable-bag": "carry-bag",
  "compostable-bags": "carry-bag",
  "carry-bag": "carry-bag",
  "Carry-Bag": "carry-bag",
  "carry bag": "carry-bag",
  "compostable bag": "carry-bag",
  "compostable bags": "carry-bag",

  // 3. Compostable Mulch Films -> agriculture-mulch-films
  "compostable-mulch-films": "agriculture-mulch-films",
  "agriculture-mulch-films": "agriculture-mulch-films",
  "mulch-film-roll": "agriculture-mulch-films",
  "mulch film roll": "agriculture-mulch-films",
  "compostable mulch films": "agriculture-mulch-films",

  // 4. Compostable Nursery Bags -> nursery-bag
  "compostable-nursery-bags": "nursery-bag",
  "nursery-bag": "nursery-bag",
  "grow-bags": "nursery-bag",
  "grow bags": "nursery-bag",
  "compostable nursery bags": "nursery-bag",

  // 5. Compostable Wrapping Film -> wrapping-film
  "compostable-wrapping-film": "wrapping-film",
  "wrapping-film": "wrapping-film",
  "wrapping-films": "wrapping-film",
  "wrapping films": "wrapping-film",
  "compostable wrapping film": "wrapping-film",

  // 6. Compostable pouches -> packaging-pouches
  "stand-up-pouch": "packaging-pouches",
  "stand-up-pouches": "packaging-pouches",
  "packaging-pouches": "packaging-pouches",
  "biodegradable-pouch": "packaging-pouches",
  "biodegradable pouch": "packaging-pouches",
  "compostable pouches": "packaging-pouches",

  // 7. Compostable round cup -> disposable-cups
  "compostable-round-cup": "disposable-cups",
  "disposable-cups": "disposable-cups",
  "disposable cups": "disposable-cups",
  "compostable round cup": "disposable-cups",

  // 8. Compostable bowl -> bowls
  "compostable-bowl": "bowls",
  "compostable-bowls": "bowls",
  "bowls": "bowls",
  "disposable-bowls": "bowls",
  "disposable bowls": "bowls",
  "compostable bowl": "bowls",

  // 9. Compostable pet poop bag -> pet-poop-bags
  "compostable-pet-poop-bags": "pet-poop-bags",
  "pet-poop-bags": "pet-poop-bags",
  "poop-bag": "pet-poop-bags",
  "poop bag": "pet-poop-bags",
  "compostable pet poop bag": "pet-poop-bags",

  // 10. Compostable square plate -> compostable-plates
  "compostable-square-plate": "compostable-plates",
  "compostable-plates": "compostable-plates",
  "compostable plates": "compostable-plates",
  "compostable square plate": "compostable-plates",

  // 11. Compostable dona bowl -> dona-bowls
  "compostable-dona-bowl": "dona-bowls",
  "dona-bowls": "dona-bowls",
  "biodegradable-bowl": "dona-bowls",
  "biodegradable bowl": "dona-bowls",
  "compostable dona bowl": "dona-bowls",

  // 12. Compostable cutleries -> spoons
  "compostable-cutleries": "spoons",
  "compostable-cutlery": "spoons",
  "spoons": "spoons",
  "biodegradable-spoons": "spoons",
  "biodegradable spoons": "spoons",
  "compostable cutleries": "spoons",

  // 13. Compostable custom made bag -> bag-pouches
  "compostable-custom-made-bag": "bag-pouches",
  "bag-pouches": "bag-pouches",
  "compostable-pla-bags": "bag-pouches",
  "compostable pla bags": "bag-pouches",
  "compostable custom made bag": "bag-pouches",

  // 14. Compostable compartment plate -> meal-plates
  "compostable-compartment-plate": "meal-plates",
  "compostable-compartment-trays": "meal-plates",
  "meal-plates": "meal-plates",
  "meal plates": "meal-plates",
  "compostable compartment plate": "meal-plates",

  // 15. Compostable packaging -> food-container-box
  "compostable-packaging": "food-container-box",
  "food-container-box": "food-container-box",
  "food-containers": "food-container-box",
  "food containers": "food-container-box",
  "food container box": "food-container-box",
  "compostable packaging": "food-container-box",

  // 16. Compostable clam shell -> clamshell-box
  "compostable-clam-shell": "clamshell-box",
  "clamshell-box": "clamshell-box",
  "compostable-clam-shells": "clamshell-box",
  "compostable clam shells": "clamshell-box",
  "compostable clam shell": "clamshell-box",

  // 17. Bio medical waste bag -> compostable-bio-medical-waste-bags
  "compostable-medical-waste-bags": "compostable-bio-medical-waste-bags",
  "compostable-bio-medical-waste-bags": "compostable-bio-medical-waste-bags",
  "bio-medical-waste-bag": "compostable-bio-medical-waste-bags",
  "bio medical waste bag": "compostable-bio-medical-waste-bags",

  // 18. Compostable garment bag -> garment-bags
  "compostable-garment-bags": "garment-bags",
  "garment-bags": "garment-bags",
  "garment-bag": "garment-bags",
  "garment bag": "garment-bags",
  "compostable garment bag": "garment-bags",

  // 19. Compostable garbage bag -> garbage-bag
  "bio-compostable-garbage-bags": "garbage-bag",
  "garbage-bag": "garbage-bag",
  "garbage bag": "garbage-bag",
  "compostable garbage bag": "garbage-bag",

  // 20. Compostable drinking straws -> eco-friendly-straws
  "compostable-drinking-straws": "eco-friendly-straws",
  "eco-friendly-straws": "eco-friendly-straws",
  "eco-friendly straws": "eco-friendly-straws",
  "compostable drinking straws": "eco-friendly-straws",

  // 21. Compostable heat shrink films -> heat-shrink-films
  "compostable-heat-shrink-films": "heat-shrink-films",
  "heat-shrink-films": "heat-shrink-films",
  "shrink-films": "heat-shrink-films",
  "shrink films": "heat-shrink-films",
  "compostable heat shrink films": "heat-shrink-films",

  // 22. Compostable courier bag -> courier-bags
  "compostable-mailer-bags": "courier-bags",
  "courier-bags": "courier-bags",
  "courier-bag": "courier-bags",
  "courier bag": "courier-bags",
  "compostable courier bag": "courier-bags",

  // 23. Compostable grocery bag -> grocery-bag
  "compostable-grocery-bag": "grocery-bag",
  "grocery-bag": "grocery-bag",
  "grocery bag": "grocery-bag",
  "compostable grocery bag": "grocery-bag",

  // 24. Compostable round plate -> eco-friendly-round-plate
  "compostable-food-plates": "eco-friendly-round-plate",
  "eco-friendly-round-plate": "eco-friendly-round-plate",
  "round-plate": "eco-friendly-round-plate",
  "round plate": "eco-friendly-round-plate",
  "compostable round plate": "eco-friendly-round-plate",
};

/**
 * Category mappings for category index pages
 */
export const categorySlugMap: Record<string, string> = {
  "tableware": "food-packaging-boxes",
  "tableware's": "food-packaging-boxes",
  "food-packaging-boxes": "food-packaging-boxes",
  "compostable-films": "compostable-films",
  "compostable films": "compostable-films",
  "compostable-pouches": "compostable-pouches",
  "compostable pouches": "compostable-pouches",
  "carry-bags": "carry-bags",
  "carry bags": "carry-bags",
  "eco-water-bottles": "biodegradable-water-bottles",
};

export function getProductUrl(productOrSlug?: string | { slug?: string; name?: string }): string {
  if (!productOrSlug) return "/compostable-product/";

  const rawInput = typeof productOrSlug === "string" 
    ? productOrSlug.trim() 
    : (productOrSlug.slug || productOrSlug.name || "").trim();

  if (!rawInput) return "/compostable-product/";

  // Strip leading/trailing slashes and extract final segment
  const segments = rawInput.replace(/^\/+|\/+$/g, "").split("/");
  const lastSegment = segments.pop() || "";
  const cleanKey = lastSegment.toLowerCase();

  // 1. Direct lookup in official product slug map
  if (cleanKey in officialProductSlugMap) {
    return `/compostable-product/${officialProductSlugMap[cleanKey]}/`;
  }

  // 2. Direct lookup in category slug map
  if (cleanKey in categorySlugMap) {
    return `/compostable-product/${categorySlugMap[cleanKey]}/`;
  }

  // 3. Fallback raw string lookup (handles human product names like "Compostable Bags")
  const lowerRaw = rawInput.toLowerCase();
  if (lowerRaw in officialProductSlugMap) {
    return `/compostable-product/${officialProductSlugMap[lowerRaw]}/`;
  }
  if (lowerRaw in categorySlugMap) {
    return `/compostable-product/${categorySlugMap[lowerRaw]}/`;
  }

  if (!lastSegment || lastSegment === "compostable-product") {
    return "/compostable-product/";
  }

  return `/compostable-product/${lastSegment}/`;
}

/**
 * Convenience alias for Popular Product list items. Uses getProductUrl.
 */
export function getPopularProductUrl(productName: string): string {
  return getProductUrl(productName);
}
