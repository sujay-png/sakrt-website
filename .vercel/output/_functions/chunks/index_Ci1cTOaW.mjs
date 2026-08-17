import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$Layout } from "./Layout_fp6w2RgV.mjs";
import { t as $$CallToAction } from "./CallToAction_CsU2qwRX.mjs";
import { t as $$ModernFAQ } from "./ModernFAQ_CmfQA5zM.mjs";
import { t as $$CategoryGrid } from "./CategoryGrid_CxY5iq_T.mjs";
//#region src/pages/compostable-product/carry-bags/index.astro
var carry_bags_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const bagProducts = [
		{
			name: "Compostable Bag",
			slug: "compostable-bag",
			category: "carry-bags",
			image: "/compostable-bags/imgi_4_biodegradable-bags-compostable-products-ecofriendly-bags-1-1.webp"
		},
		{
			name: "Compostable Pet Poop Bags",
			slug: "compostable-pet-poop-bags",
			category: "carry-bags",
			image: "/compostable-bags/imgi_5_compostable-table-wares-Biodegradable-bag-biodegradable-bag-carry-bags-2.webp"
		},
		{
			name: "Compostable Custom Made Bag",
			slug: "compostable-custom-made-bag",
			category: "carry-bags",
			image: "/compostable-bags/imgi_6_biodegradable-bags-compostable-products-eco-product.-3.webp"
		},
		{
			name: "Compostable Nursery Bags",
			slug: "compostable-nursery-bags",
			category: "carry-bags",
			image: "/compostable-bags/imgi_7_Compostable-grow-bags-e1780576071172.webp"
		},
		{
			name: "Compostable Medical Waste Bags",
			slug: "compostable-medical-waste-bags",
			category: "carry-bags",
			image: "/compostable-bags/imgi_8_biodegradable-bags-compostable-products-ecofriendly-bags-1-3.webp"
		},
		{
			name: "Compostable Garment Bags",
			slug: "compostable-garment-bags",
			category: "carry-bags",
			image: "/compostable-bags/imgi_9_biodegradable-bags-compostable-products-ecofriendly-bags-2-1.webp"
		},
		{
			name: "Bio Compostable Garbage Bags",
			slug: "bio-compostable-garbage-bags",
			category: "carry-bags",
			image: "/compostable-bags/imgi_10_biodegradable-bags-compostable-products-ecofriendly-bags-1-2.webp"
		},
		{
			name: "Compostable Mailer Bags",
			slug: "compostable-mailer-bags",
			category: "carry-bags",
			image: "/compostable-bags/imgi_11_courier-bags.webp"
		},
		{
			name: "Compostable Grocery Bag",
			slug: "compostable-grocery-bag",
			category: "carry-bags",
			image: "/compostable-bags/imgi_12_biodegradable-bags-compostable-products-eco-products-3.webp"
		}
	];
	const faqs = [
		{
			question: "What are compostable bags",
			answer: "Compostable bags are eco-friendly alternatives to traditional plastic bags, made from plant-based materials like corn starch that break down fully into organic compost."
		},
		{
			question: "Are compostable bags really better?",
			answer: "Switching from single–use plastic bags to compostable ones might be a good way to greatly cut down on the plastic waste we make. It could also help fix some of the health and environmental problems that come with using plastic."
		},
		{
			question: "What material is 100% biodegradable?",
			answer: "100% biodegradable packaging is created from materials that can be broken down by microorganisms into natural components such as water, carbon dioxide, and biomass, without leaving any harmful leftovers. This type of packaging is commonly made from paper, cardboard, and bioplastics derived from renewable sources like cornstarch or sugarcane."
		},
		{
			question: "How do I know if my bag is compostable?",
			lookFor: "Products with this label have been tested and approved to break down in commercial composting conditions. If a bag doesn’t have this logo—even if it says “biodegradable,” “plant–based,” or “compost-friendly”—it probably won’t break down properly in our system because the material used isn’t compostable.ds.",
			answer: "Products with this label have been tested and approved to break down in commercial composting conditions. If a bag doesn’t have this logo—even if it says “biodegradable,” “plant–based,” or “compost-friendly”—it probably won’t break down properly in our system because the material used isn’t compostable.ds."
		},
		{
			question: "Is compostable plastic free?",
			answer: "Most bioplastic that is labeled as home compostable is made partly from plants, but not entirely. The plant–based part can be as low as 0% and as high as 50%, while the rest is made from plastic that comes from petroleum."
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Compostable Bags | SAKRT",
		"data-astro-cid-pniadgnr": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="category-page" data-astro-cid-pniadgnr><div class="category-header" data-astro-cid-pniadgnr><h1 class="category-title" data-astro-cid-pniadgnr>Compostable Bags</h1></div>${renderComponent($$result, "CategoryGrid", $$CategoryGrid, {
		"products": bagProducts,
		"data-astro-cid-pniadgnr": true
	})}${renderComponent($$result, "ModernFAQ", $$ModernFAQ, {
		"title": "FAQs on compostable Bags",
		"faqs": faqs,
		"data-astro-cid-pniadgnr": true
	})}${renderComponent($$result, "CallToAction", $$CallToAction, { "data-astro-cid-pniadgnr": true })}</main>` })}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/carry-bags/index.astro", void 0);
var $$file = "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/carry-bags/index.astro";
var $$url = "/compostable-product/carry-bags";
//#endregion
//#region \0virtual:astro:page:src/pages/compostable-product/carry-bags/index@_@astro
var page = () => carry_bags_exports;
//#endregion
export { page };
