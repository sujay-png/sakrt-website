import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$Layout } from "./Layout_fp6w2RgV.mjs";
import { t as $$CallToAction } from "./CallToAction_CsU2qwRX.mjs";
import { t as biodegradable_greybags_default } from "./biodegradable_greybags_DNR_6fMS.mjs";
import { t as $$ModernFAQ } from "./ModernFAQ_CmfQA5zM.mjs";
import { t as $$CategoryGrid } from "./CategoryGrid_CxY5iq_T.mjs";
//#region src/pages/compostable-product/compostable-pouches/index.astro
var compostable_pouches_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const pouchProducts = [{
		name: "Stand-up Pouch",
		slug: "stand-up-pouch",
		category: "compostable-pouches",
		image: biodegradable_greybags_default.src
	}];
	const faqs = [
		{
			question: "What makes these pouches compostable?",
			answer: "Our pouches are made from plant-based barrier laminates that break down fully under industrial composting conditions without leaving toxic residues."
		},
		{
			question: "Are they safe for food packaging?",
			answer: "Yes, they are 100% food-safe and maintain a high moisture and oxygen barrier to keep contents like coffee, dry goods, and snacks fresh."
		},
		{
			question: "Can I customize the printing?",
			answer: "Absolutely. We offer custom branding and printing options using eco-friendly compostable inks."
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Stand-up Pouches | SAKRT",
		"data-astro-cid-244vxjgk": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="category-page" data-astro-cid-244vxjgk><div class="category-header" data-astro-cid-244vxjgk><h1 class="category-title" data-astro-cid-244vxjgk>Stand-up Pouches</h1></div>${renderComponent($$result, "CategoryGrid", $$CategoryGrid, {
		"products": pouchProducts,
		"data-astro-cid-244vxjgk": true
	})}${renderComponent($$result, "ModernFAQ", $$ModernFAQ, {
		"title": "FAQs on compostable Pouches",
		"faqs": faqs,
		"data-astro-cid-244vxjgk": true
	})}${renderComponent($$result, "CallToAction", $$CallToAction, { "data-astro-cid-244vxjgk": true })}</main>` })}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/compostable-pouches/index.astro", void 0);
var $$file = "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/compostable-pouches/index.astro";
var $$url = "/compostable-product/compostable-pouches";
//#endregion
//#region \0virtual:astro:page:src/pages/compostable-product/compostable-pouches/index@_@astro
var page = () => compostable_pouches_exports;
//#endregion
export { page };
