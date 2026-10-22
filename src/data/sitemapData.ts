export const ecoFriendlyStates = [
  "Karnataka", "Kerala", "Telangana", "Andhra Pradesh", "Tamil Nadu", "Goa", 
  "Maharashtra", "West Bengal", "Odisha", "Pune", "Mumbai", "Gujarat", 
  "Uttar Pradesh", "Rajasthan", "Haryana", "Uttarakhand", "Punjab", 
  "Madya Pradesh", "Bihar", "Sikkim", "Chennai", "Ahmedabad"
];

export const karnatakaCities = [
  "Mangaluru", "Mysore", "Bengaluru", "Udupi", "Shivamogga", "Belagavi", 
  "Dharwad", "Bagalkote"
];

export const mostSoldProductCities = [
  "Mangaluru", "Mysore", "Bengaluru"
];

export interface PopularProduct {
  name: string;
  slug: string;
}

export const popularProducts: PopularProduct[] = [
  { name: "Compostable Bags", slug: "carry-bag" },
  { name: "Tableware's", slug: "food-packaging-boxes" },
  { name: "Compostable Films", slug: "compostable-films" },
  { name: "Biodegradable Pouches", slug: "packaging-pouches" },
  { name: "Food Containers", slug: "food-container-box" },
  { name: "Disposable plates", slug: "compostable-plates" },
  { name: "Biodegradable Water Bottles", slug: "biodegradable-water-bottles" }
];

// Helper to get all location slugs for dynamic routing
export const getAllLocations = () => {
  const allLocations = new Set([...ecoFriendlyStates, ...karnatakaCities, ...mostSoldProductCities, "Mangalore", "Bangalore"]);
  return Array.from(allLocations).map(loc => ({
    name: loc,
    slug: loc.toLowerCase().replace(/\s+/g, '-')
  }));
};
