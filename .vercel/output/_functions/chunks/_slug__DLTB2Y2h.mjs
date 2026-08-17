import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_fp6w2RgV.mjs";
import { t as wpquery } from "./wordpress_Bi7eyiBd.mjs";
//#region src/pages/blog/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://sakrt.in");
async function getStaticPaths() {
	return (await wpquery({ query: `
      query GetAllSlugs {
        posts(first: 100) {
          nodes {
            slug
            title
            content
            excerpt
            date
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
    ` })).posts.nodes.map((post) => ({
		params: { slug: post.slug },
		props: { post }
	}));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { post } = Astro.props;
	const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, "").substring(0, 155) + "..." : `Read about ${post.title} on SAKRT's blog.`;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, {
		"title": `${post.title} | Sakrt`,
		"description": cleanExcerpt,
		"image": post.featuredImage?.node?.sourceUrl,
		"ogType": "article",
		"data-astro-cid-zg7dkzxc": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="single-post-container" data-astro-cid-zg7dkzxc><article data-astro-cid-zg7dkzxc><header class="post-header" data-astro-cid-zg7dkzxc><div class="post-meta" data-astro-cid-zg7dkzxc>${post.categories?.nodes?.map((category) => renderTemplate`<span class="category-badge" data-astro-cid-zg7dkzxc>${category.name}</span>`)}<span class="date" data-astro-cid-zg7dkzxc>${formattedDate}</span></div><h1 class="post-title" data-astro-cid-zg7dkzxc>${post.title}</h1></header>${post.featuredImage?.node && renderTemplate`<div class="hero-image" data-astro-cid-zg7dkzxc><img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} data-astro-cid-zg7dkzxc></div>`}<!-- Render the WordPress HTML content safely with closing tag --><div class="post-content wp-content" data-astro-cid-zg7dkzxc>${unescapeHTML(post.content)}</div></article><div class="back-link" data-astro-cid-zg7dkzxc><a href="/blog" data-astro-cid-zg7dkzxc>← Back to all Journals</a></div></main>` })}<!-- Use is:global to allow these styles to penetrate the injected WordPress HTML --><!-- Add this script to make third-party div blocks interactive -->${renderScript($$result, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/blog/[slug].astro", void 0);
var $$file = "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/blog/[slug].astro";
var $$url = "/blog/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
