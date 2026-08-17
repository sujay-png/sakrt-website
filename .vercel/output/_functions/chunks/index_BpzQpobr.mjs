import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$Layout } from "./Layout_fp6w2RgV.mjs";
import { t as wpquery } from "./wordpress_Bi7eyiBd.mjs";
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = (await wpquery({ query: `
    query GetBlogs {
      posts(first: 100) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  ` })).posts.nodes;
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return {
			day: date.getDate().toString().padStart(2, "0"),
			monthYear: `${date.toLocaleString("default", { month: "short" }).toUpperCase()} '${date.getFullYear().toString().slice(-2)}`
		};
	};
	const allCategories = /* @__PURE__ */ new Set();
	posts.forEach((post) => {
		if (post.categories && post.categories.nodes) post.categories.nodes.forEach((cat) => {
			allCategories.add(cat.name);
		});
	});
	const categories = Array.from(allCategories);
	const slugify = (text) => text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, {
		"title": "Sustainability & Eco-Packaging Blog | SAKRT Journals",
		"description": "Read SAKRT's latest journals and articles on sustainability, compostable materials, and the shift towards eco-friendly packaging in India.",
		"data-astro-cid-x255k2k2": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="blog-container" data-astro-cid-x255k2k2><!-- Top Level Header --><header class="blog-main-header" data-astro-cid-x255k2k2><h1 class="main-title" data-astro-cid-x255k2k2>Blog Articles</h1><p class="main-desc" data-astro-cid-x255k2k2>Explore how biodegradable product blogs can transform your lifestyle, support zero-waste initiatives, and contribute to a healthier planet. Make the switch today and be a part of the movement towards sustainability.</p></header><header class="blog-section-header" data-astro-cid-x255k2k2><h2 class="section-title" data-astro-cid-x255k2k2>Sustainability & Compostable Packaging Insights</h2><div class="filters" data-astro-cid-x255k2k2><a href="/blog" class="filter-btn active" data-astro-cid-x255k2k2>All</a>${categories.map((cat) => renderTemplate`<a${addAttribute(`/blog/category/${slugify(cat)}`, "href")} class="filter-btn" data-astro-cid-x255k2k2>${cat}</a>`)}</div></header><section class="post-list" data-astro-cid-x255k2k2>${posts.map((post) => {
		const { day, monthYear } = formatDate(post.date);
		return renderTemplate`<article class="post-item"${addAttribute(post.categories?.nodes.map((c) => c.name).join(",") || "", "data-categories")} data-astro-cid-x255k2k2><div class="post-date" data-astro-cid-x255k2k2><span class="day" data-astro-cid-x255k2k2>${day}</span><span class="month-year" data-astro-cid-x255k2k2>${monthYear}</span></div><div class="post-content" data-astro-cid-x255k2k2><div class="post-categories" data-astro-cid-x255k2k2>${post.categories.nodes.map((category, index) => renderTemplate`<span${addAttribute(`category-badge ${index === 1 ? "badge-filled" : ""}`, "class")} data-astro-cid-x255k2k2>${category.name}</span>`)}</div><a${addAttribute(`/blog/category/${encodeURIComponent((post.categories?.nodes?.[0]?.name || "general").toLowerCase().replace(/\s+/g, "-"))}/${post.slug}`, "href")} class="post-link" data-astro-cid-x255k2k2><h3 class="post-title" data-astro-cid-x255k2k2>${unescapeHTML(post.title)}</h3></a><div class="post-excerpt" data-astro-cid-x255k2k2>${unescapeHTML(post.excerpt)}</div></div><div class="post-image-wrapper" data-astro-cid-x255k2k2>${post.featuredImage?.node ? renderTemplate`<a${addAttribute(`/blog/category/${encodeURIComponent((post.categories?.nodes?.[0]?.name || "general").toLowerCase().replace(/\s+/g, "-"))}/${post.slug}`, "href")} data-astro-cid-x255k2k2><img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} class="post-thumbnail" data-astro-cid-x255k2k2></a>` : renderTemplate`<a${addAttribute(`/blog/category/${encodeURIComponent((post.categories?.nodes?.[0]?.name || "general").toLowerCase().replace(/\s+/g, "-"))}/${post.slug}`, "href")} class="placeholder-image" data-astro-cid-x255k2k2><svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1" fill="none" data-astro-cid-x255k2k2><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-x255k2k2></rect><circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-x255k2k2></circle><polyline points="21 15 16 10 5 21" data-astro-cid-x255k2k2></polyline></svg></a>`}</div></article>`;
	})}</section></main>` })}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/blog/index.astro", void 0);
var $$file = "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
