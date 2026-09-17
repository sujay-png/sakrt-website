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

export const popularProducts = [
  "Compostable Bags",
  "Tableware's",
  "Compostable Films",
  "Biodegradable Pouches",
  "Food Containers",
  "Disposable plates",
  "Biodegradable Water Bottles"
];

// Helper to get all location slugs for dynamic routing
export const getAllLocations = () => {
  const allLocations = new Set([...ecoFriendlyStates, ...karnatakaCities, ...mostSoldProductCities]);
  return Array.from(allLocations).map(loc => ({
    name: loc,
    slug: loc.toLowerCase().replace(/\s+/g, '-')
  }));
};
