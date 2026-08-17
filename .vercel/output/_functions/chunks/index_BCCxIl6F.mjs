import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_fp6w2RgV.mjs";
import { t as $$CallToAction } from "./CallToAction_CsU2qwRX.mjs";
import { t as biodegradable_water_default } from "./biodegradable_water_RH-yNE-5.mjs";
//#region src/components/Product/AllProductsGrid.astro
var $$AllProductsGrid = createComponent(($$result, $$props, $$slots) => {
	const products = [
		{
			title: "Biodegradable Water Bottle",
			url: "/compostable-product/biodegradable-water-bottles",
			image: biodegradable_water_default.src
		},
		{
			title: "Compostable Bag",
			url: "/compostable-product/carry-bags/compostable-bag",
			image: "/compostable-bags/imgi_4_biodegradable-bags-compostable-products-ecofriendly-bags-1-1.webp"
		},
		{
			title: "Compostable Nursery Bags",
			url: "/compostable-product/carry-bags/compostable-nursery-bags",
			image: "/compostable-bags/imgi_7_Compostable-grow-bags-e1780576071172.webp"
		},
		{
			title: "Compostable Grocery Bag",
			url: "/compostable-product/carry-bags/compostable-grocery-bag",
			image: "/compostable-bags/imgi_12_biodegradable-bags-compostable-products-eco-products-3.webp"
		},
		{
			title: "Compostable Medical Waste Bags",
			url: "/compostable-product/carry-bags/compostable-medical-waste-bags",
			image: "/compostable-bags/imgi_8_biodegradable-bags-compostable-products-ecofriendly-bags-1-3.webp"
		},
		{
			title: "Compostable Mailer Bags",
			url: "/compostable-product/carry-bags/compostable-mailer-bags",
			image: "/compostable-bags/imgi_11_courier-bags.webp"
		},
		{
			title: "Stand-up Pouches",
			url: "/compostable-product/compostable-pouches/stand-up-pouch",
			image: "src/images/biodegradable_greybags.png"
		},
		{
			title: "Compostable Garment Bags",
			url: "/compostable-product/carry-bags/compostable-garment-bags",
			image: "/compostable-bags/imgi_9_biodegradable-bags-compostable-products-ecofriendly-bags-2-1.webp"
		},
		{
			title: "Compostable Dona Bowl",
			url: "/compostable-product/food-packaging-boxes/compostable-dona-bowl",
			image: "/tableware/imgi_12_biodegradable-bags-compostable-products-eco-product-1.webp"
		},
		{
			title: "Compostable Plates",
			url: "/compostable-product/food-packaging-boxes/compostable-food-plates",
			image: "/tableware/imgi_7_biodegradable-bags-compostable-products-eco-product.-1.webp"
		},
		{
			title: "Compostable Bowls",
			url: "/compostable-product/food-packaging-boxes/compostable-bowl",
			image: "/tableware/imgi_6_biodegradable-bags-compostable-products-eco-product.webp"
		},
		{
			title: "Compostable Round Cup",
			url: "/compostable-product/food-packaging-boxes/compostable-round-cup",
			image: "/tableware/imgi_5_biodegradable-bags-compostable-products-eco-products.webp"
		},
		{
			title: "Compostable Compartment Trays",
			url: "/compostable-product/food-packaging-boxes/compostable-compartment-plate",
			image: "/tableware/imgi_13_biodegradable-bags-compostable-products-eco-products-1.webp"
		},
		{
			title: "Compostable Cutlery",
			url: "/compostable-product/food-packaging-boxes/compostable-cutleries",
			image: "/tableware/imgi_10_biodegradable-bags-compostable-products-eco-product.-2.webp"
		},
		{
			title: "Compostable Wrapping Films",
			url: "/compostable-product/compostable-films/compostable-wrapping-film",
			image: "/compostable-films/imgi_4_compostable-strecth-films.webp"
		},
		{
			title: "Compostable Heat Shrink Films",
			url: "/compostable-product/compostable-films/compostable-heat-shrink-films",
			image: "/compostable-films/imgi_6_Shirnk-films.webp"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="all-products-section" data-astro-cid-zxztez4z><div class="grid-container" data-astro-cid-zxztez4z><div class="product-grid" id="productGrid" data-astro-cid-zxztez4z>${products.map((product, index) => renderTemplate`<div class="product-card"${addAttribute(index, "data-index")} data-astro-cid-zxztez4z><a${addAttribute(product.url, "href")} class="card-image-box" data-astro-cid-zxztez4z><img${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")} loading="lazy" data-astro-cid-zxztez4z></a><div class="card-content" data-astro-cid-zxztez4z><h3 class="product-title" data-astro-cid-zxztez4z>${product.title}</h3><a${addAttribute(product.url, "href")} class="view-details-btn" data-astro-cid-zxztez4z>View Details</a></div></div>`)}</div><div class="toggle-wrapper" data-astro-cid-zxztez4z><button id="toggleGridBtn" class="toggle-link" data-astro-cid-zxztez4z>VIEW MORE <span class="arrow" data-astro-cid-zxztez4z>↓</span></button></div></div></section>${renderScript($$result, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Product/AllProductsGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Product/AllProductsGrid.astro", void 0);
//#endregion
//#region src/pages/compostable-product/index.astro
var compostable_product_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Compostable Products Catalog | Eco-Friendly Bags & Tableware | SAKRT",
		"description": "Explore our full catalog of certified compostable products, including carry bags, pouches, films, and eco-friendly tableware. Government approved.",
		"schema": {
			"@context": "https://schema.org",
			"@type": "ItemList",
			"name": "Compostable Products Catalog",
			"description": "Explore our full catalog of certified compostable products, including carry bags, pouches, films, and eco-friendly tableware.",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Compostable Food Packaging Boxes",
					"url": "https://www.sakrt.in/compostable-product/food-packaging-boxes"
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Compostable Films",
					"url": "https://www.sakrt.in/compostable-product/compostable-films"
				},
				{
					"@type": "ListItem",
					"position": 3,
					"name": "Compostable Pouches",
					"url": "https://www.sakrt.in/compostable-product/compostable-pouches"
				},
				{
					"@type": "ListItem",
					"position": 4,
					"name": "Compostable Carry Bags",
					"url": "https://www.sakrt.in/compostable-product/carry-bags"
				},
				{
					"@type": "ListItem",
					"position": 5,
					"name": "Biodegradable Water Bottles",
					"url": "https://www.sakrt.in/compostable-product/biodegradable-water-bottles"
				}
			]
		},
		"data-astro-cid-cfdn3cum": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="products-page" data-astro-cid-cfdn3cum><!-- New Header Section --><section class="products-header" data-astro-cid-cfdn3cum><div class="header-container" data-astro-cid-cfdn3cum><h1 class="main-title" data-astro-cid-cfdn3cum>Govt Approved Certified <br data-astro-cid-cfdn3cum>Compostable / Biodegradable Products Manufacturer In India</h1><p class="subtitle" data-astro-cid-cfdn3cum>SAKRT is one of India, Bangalore's fastest-growing Supplier in Products Compostable in Nature and Premium quality distribution.</p><div class="tag-line" data-astro-cid-cfdn3cum><span class="tag-line-text" data-astro-cid-cfdn3cum>Eco-Friendly Solutions</span></div></div></section><!-- Unified Product Grid -->${renderComponent($$result, "AllProductsGrid", $$AllProductsGrid, { "data-astro-cid-cfdn3cum": true })}<!-- Information Sections --><section class="info-section" data-astro-cid-cfdn3cum><div class="info-container" data-astro-cid-cfdn3cum><div class="info-block" data-astro-cid-cfdn3cum><h2 data-astro-cid-cfdn3cum>What Are Bioplastic Products?</h2><p data-astro-cid-cfdn3cum>Bioplastics include a diverse family of materials with differing properties. There are three main types of bioplastics: biobased or partially biobased, biodegradable, and those that are both biobased and biodegradable. Our materials focus on the latter, ensuring that they return to the earth without leaving microplastics.</p><p data-astro-cid-cfdn3cum>Compared to conventional plastics which are made from fossil fuels, bioplastics are made from renewable resources such as corn starch, sugarcane, or cellulose. They offer a sustainable alternative to traditional plastics, significantly reducing greenhouse gas emissions and fossil fuel consumption during the manufacturing process.</p><p data-astro-cid-cfdn3cum>As environmental awareness grows, both consumers and businesses are increasingly seeking out bioplastic solutions. At SAKRT, we are committed to providing high-quality, durable, and fully compostable products that meet the rigorous demands of modern supply chains while protecting the environment for future generations. Our biological matrix is engineered to degrade quickly in composting environments.</p></div><div class="info-block" data-astro-cid-cfdn3cum><h2 data-astro-cid-cfdn3cum>What Are Compostable Products?</h2><p data-astro-cid-cfdn3cum>Compostable products are items that break down completely in a composting environment, leaving no toxic residue behind. Unlike regular biodegradable items, which can take decades to decompose, compostable materials transform into nutrient-rich soil at a much faster rate.</p><p data-astro-cid-cfdn3cum>True compostability requires specific conditions, including the right balance of heat, moisture, and microorganisms. All SAKRT products are certified to decompose fully within 180 days in industrial composting facilities, complying strictly with global environmental standards. This ensures a true closed-loop lifecycle for packaging and single-use items, preventing long-term pollution in our oceans and landfills.</p></div><div class="info-block" data-astro-cid-cfdn3cum><h2 data-astro-cid-cfdn3cum>Advantages and Disadvantages</h2><p class="sub-heading" data-astro-cid-cfdn3cum>Advantages of bioplastics and compostable products:</p><ul class="styled-list" data-astro-cid-cfdn3cum><li data-astro-cid-cfdn3cum>Lower carbon footprint compared to traditional petroleum-based plastics.</li><li data-astro-cid-cfdn3cum>Reduces reliance on non-renewable fossil fuels by utilizing agricultural byproducts.</li><li data-astro-cid-cfdn3cum>Breaks down into non-toxic, organic matter that enriches the soil.</li><li data-astro-cid-cfdn3cum>Helps companies meet their sustainability and ESG goals while appealing to eco-conscious consumers.</li><li data-astro-cid-cfdn3cum>Fully compliant with recent government regulations banning single-use plastics.</li></ul><p class="sub-heading" data-astro-cid-cfdn3cum>Disadvantages:</p><ul class="styled-list" data-astro-cid-cfdn3cum><li data-astro-cid-cfdn3cum>Currently more expensive to manufacture than conventional plastics.</li><li data-astro-cid-cfdn3cum>Requires specific industrial composting facilities for optimal degradation.</li><li data-astro-cid-cfdn3cum>Can cause issues if mistakenly placed into standard plastic recycling streams.</li><li data-astro-cid-cfdn3cum>Slightly lower shelf-life for certain highly sensitive perishable goods.</li></ul></div><div class="info-block" data-astro-cid-cfdn3cum><h2 data-astro-cid-cfdn3cum>Conclusion</h2><p data-astro-cid-cfdn3cum>Compostable and bio-based products are a critical component of the global shift towards a circular economy. While challenges exist regarding infrastructure and cost, the environmental benefits far outweigh the drawbacks. By transitioning to certified compostable solutions, businesses can dramatically reduce their environmental impact. SAKRT is dedicated to leading this transition, providing innovative, reliable, and truly sustainable alternatives to conventional plastics.</p></div></div></section><!-- Call To Action --><div class="cta-wrapper" data-astro-cid-cfdn3cum>${renderComponent($$result, "CallToAction", $$CallToAction, { "data-astro-cid-cfdn3cum": true })}</div></main>` })}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/index.astro", void 0);
var $$file = "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/compostable-product/index.astro";
var $$url = "/compostable-product";
//#endregion
//#region \0virtual:astro:page:src/pages/compostable-product/index@_@astro
var page = () => compostable_product_exports;
//#endregion
export { page };
