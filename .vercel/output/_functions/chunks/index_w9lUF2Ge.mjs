import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$Layout } from "./Layout_fp6w2RgV.mjs";
import { t as $$CallToAction } from "./CallToAction_CsU2qwRX.mjs";
import { t as $$ModernFAQ } from "./ModernFAQ_CmfQA5zM.mjs";
import { t as $$CategoryGrid } from "./CategoryGrid_CxY5iq_T.mjs";
//#region src/pages/compostable-product/food-packaging-boxes/index.astro
var food_packaging_boxes_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const tablewareProducts = [
		{
			name: "Compostable Food Plates",
			slug: "compostable-food-plates",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_4_biodegradable-bags-compostable-products-eco-product-1-2.webp"
		},
		{
			name: "Compostable Round Cup",
			slug: "compostable-round-cup",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_5_biodegradable-bags-compostable-products-eco-products.webp"
		},
		{
			name: "Compostable Bowl",
			slug: "compostable-bowl",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_6_biodegradable-bags-compostable-products-eco-product.webp"
		},
		{
			name: "Compostable Square Plate",
			slug: "compostable-square-plate",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_7_biodegradable-bags-compostable-products-eco-product.-1.webp"
		},
		{
			name: "Compostable Drinking Straws",
			slug: "compostable-drinking-straws",
			category: "food-packaging-boxes",
			image: "/tableware/drinking-straws.jpg"
		},
		{
			name: "Compostable Clam Shell",
			slug: "compostable-clam-shell",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_9_biodegradable-bags-compostable-products-eco-product-2-1.webp"
		},
		{
			name: "Compostable Cutleries",
			slug: "compostable-cutleries",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_10_biodegradable-bags-compostable-products-eco-product.-2.webp"
		},
		{
			name: "Compostable Packaging",
			slug: "compostable-packaging",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_11_biodegradable-bags-compostable-products-ecofriendly-bags-2.webp"
		},
		{
			name: "Compostable Dona Bowl",
			slug: "compostable-dona-bowl",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_12_biodegradable-bags-compostable-products-eco-product-1.webp"
		},
		{
			name: "Compostable Compartment Plate",
			slug: "compostable-compartment-plate",
			category: "food-packaging-boxes",
			image: "/tableware/imgi_13_biodegradable-bags-compostable-products-eco-products-1.webp"
		}
	];
	const faqs = [
		{
			question: "What are Biodegradable tableware?",
			answer: "Compostable tableware refers to plates, bowls, cups, cutlery, and other dining items that are designed to break down naturally into organic matter when disposed of in a composting environment — leaving no toxic residue behind."
		},
		{
			question: "What are the difference between biodegradable and compostable plates?",
			answer: "The key difference between biodegradable and compostable materials is the time it takes for them to break down. Biodegradable materials can take varying amounts of time to decompose, while compostable materials are designed to break down into natural elements within a specific timeframe. However, for compostable materials to decompose properly, they require specific conditions, such as those found in industrial composting facilities."
		},
		{
			question: "What is eco-friendly tableware?",
			answer: "The main difference between biodegradable and compostable materials lies in the time it takes for them to break down. Biodegradable materials can decompose over varying lengths of time, while compostable materials are designed to break down into natural elements within a specific timeframe. However, compostable materials require certain conditions to decompose properly, such as those typically found in industrial composting facilities."
		},
		{
			question: "What are compostable plates made of?",
			answer: "Compostable plates offer a more sustainable alternative to disposable plates. Made from materials such as sugarcane bagasse, bamboo, or palm leaves, these plates are designed to break down naturally and quickly, without leaving harmful residues behind."
		},
		{
			question: "Why should businesses switch to compostable packaging?",
			answer: "Switching to compostable products helps businesses build a sustainable image, comply with eco-friendly regulations, and reduce plastic waste generation."
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Table Ware | SAKRT",
		"data-astro-cid-jucld3rl": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="category-page" data-astro-cid-jucld3rl><div class="category-header" data-astro-cid-jucld3rl><h1 class="category-title" data-astro-cid-jucld3rl>Table Ware</h1></div>${renderComponent($$result, "CategoryGrid", $$CategoryGrid, {
		"products": tablewareProducts,
		"data-astro-cid-jucld3rl": true
	})}${renderComponent($$result, "ModernFAQ", $$ModernFAQ, {
		"title": "FAQs on compostable tableware products",
		"faqs": faqs,
		"data-astro-cid-jucld3rl": true
	})}${renderComponent($$result, "CallToAction", $$CallToAction, { "data-astro-cid-jucld3rl": true })}</main>` })}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/food-packaging-boxes/index.astro", void 0);
var $$file = "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/food-packaging-boxes/index.astro";
var $$url = "/compostable-product/food-packaging-boxes";
//#endregion
//#region \0virtual:astro:page:src/pages/compostable-product/food-packaging-boxes/index@_@astro
var page = () => food_packaging_boxes_exports;
//#endregion
export { page };
