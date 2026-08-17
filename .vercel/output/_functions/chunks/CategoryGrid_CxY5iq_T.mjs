import { g as addAttribute, m as maybeRenderHead, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
//#region src/components/Shared/CategoryGrid.astro
createAstro("https://sakrt.in");
var $$CategoryGrid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CategoryGrid;
	const { products } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="category-grid-container" data-astro-cid-3tt2kbh7><div class="category-grid" data-astro-cid-3tt2kbh7>${products.map((product) => renderTemplate`<div class="product-card" data-astro-cid-3tt2kbh7><div class="image-wrapper" data-astro-cid-3tt2kbh7><img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} loading="lazy" data-astro-cid-3tt2kbh7></div><div class="product-info" data-astro-cid-3tt2kbh7><h3 class="product-name" data-astro-cid-3tt2kbh7>${product.name}</h3><a${addAttribute(`/compostable-product/${product.category}/${product.slug}`, "href")} class="view-details-btn" data-astro-cid-3tt2kbh7>View Details</a></div></div>`)}</div></div>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Shared/CategoryGrid.astro", void 0);
//#endregion
export { $$CategoryGrid as t };
