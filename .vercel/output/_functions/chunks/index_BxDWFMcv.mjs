import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$Layout } from "./Layout_fp6w2RgV.mjs";
import { t as $$CallToAction } from "./CallToAction_CsU2qwRX.mjs";
import { t as $$ModernFAQ } from "./ModernFAQ_CmfQA5zM.mjs";
import { t as $$CategoryGrid } from "./CategoryGrid_CxY5iq_T.mjs";
//#region src/pages/compostable-product/compostable-films/index.astro
var compostable_films_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const filmProducts = [
		{
			name: "Compostable Wrapping Film",
			slug: "compostable-wrapping-film",
			category: "compostable-films",
			image: "/compostable-films/imgi_4_compostable-strecth-films.webp"
		},
		{
			name: "Compostable Mulch Films",
			slug: "compostable-mulch-films",
			category: "compostable-films",
			image: "/compostable-films/imgi_5_biodegradable-bags-compostable-products-ecofriendly-bags-1.webp"
		},
		{
			name: "Compostable Heat Shrink Films",
			slug: "compostable-heat-shrink-films",
			category: "compostable-films",
			image: "/compostable-films/imgi_6_Shirnk-films.webp"
		}
	];
	const faqs = [
		{
			question: "What are compostable films",
			answer: "Compostable films are made from materials that come from plants or are bio–based, like PLA (polylactic acid), PBAT (polybutylene adipate terephthalate), or cellulose. These materials are created to decompose into harmless organic in a composting setup, especially in industrial composting plant"
		},
		{
			question: "What are the difference between biodegradable and compostable plates",
			answer: "The key difference between biodegradable and compostable materials is the time it takes for them to break down. Biodegradable materials can take varying amounts of time to decompose, while compostable materials are designed to break down into natural elements within a specific timeframe. However, for compostable materials to decompose properly, they require specific conditions, such as those found in industrial composting facilities."
		},
		{
			question: "What material is 100% biodegradable?",
			answer: "Materials like PLA (Polylactic Acid), PBAT, and starch-based bioplastics are 100% biodegradable and compostable."
		},
		{
			question: "What are compostable plates made of?",
			answer: "Compostable plates offer a more sustainable alternative to disposable plates. Made from materials such as sugarcane bagasse, bamboo, or palm leaves, these plates are designed to break down naturally and quickly, without leaving harmful residues behind."
		},
		{
			question: "Is stretch film eco-friendly?",
			answer: "One of the downsides of traditional stretch film is its environmental impact. As it is made from non-renewable resources, it is not biodegradable and can take hundreds of years to decompose in landfills. Additionally, its production and disposal can release harmful chemicals and greenhouse gases into the environment."
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Compostable Films | SAKRT",
		"data-astro-cid-kwkeuoq5": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="category-page" data-astro-cid-kwkeuoq5><div class="category-header" data-astro-cid-kwkeuoq5><h1 class="category-title" data-astro-cid-kwkeuoq5>Compostable Films</h1></div>${renderComponent($$result, "CategoryGrid", $$CategoryGrid, {
		"products": filmProducts,
		"data-astro-cid-kwkeuoq5": true
	})}${renderComponent($$result, "ModernFAQ", $$ModernFAQ, {
		"title": "FAQs on compostable Films",
		"faqs": faqs,
		"data-astro-cid-kwkeuoq5": true
	})}${renderComponent($$result, "CallToAction", $$CallToAction, { "data-astro-cid-kwkeuoq5": true })}</main>` })}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/compostable-films/index.astro", void 0);
var $$file = "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/compostable-films/index.astro";
var $$url = "/compostable-product/compostable-films";
//#endregion
//#region \0virtual:astro:page:src/pages/compostable-product/compostable-films/index@_@astro
var page = () => compostable_films_exports;
//#endregion
export { page };
