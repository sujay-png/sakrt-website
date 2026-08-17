import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_fp6w2RgV.mjs";
import { t as $$CallToAction } from "./CallToAction_CsU2qwRX.mjs";
//#region src/components/Media/MediaHero.astro
var $$MediaHero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="media-hero-section" id="media-hero" data-astro-cid-hu26marr><!-- Interactive Ambient Spotlight Backdrop --><div class="ambient-glow" id="media-glow" data-astro-cid-hu26marr></div><!-- Hero Main Content --><div class="hero-container" data-astro-cid-hu26marr><div class="hero-content" data-astro-cid-hu26marr><!-- Tag / Category Header with Pulsing Dot --><div class="tag-wrapper animate-item" data-astro-cid-hu26marr><span class="pulsing-emerald" data-astro-cid-hu26marr></span><span class="category-tag" data-astro-cid-hu26marr>MEDIA & IMPACT</span><span class="tag-line" data-astro-cid-hu26marr></span></div><!-- Main Headline (Clipped Line Reveal) --><div class="title-mask" data-astro-cid-hu26marr><h1 class="hero-title animate-title" data-astro-cid-hu26marr>Watch Our Latest Public<br data-astro-cid-hu26marr>Appearance</h1></div><!-- Description Paragraphs (Staggered Blur & Fade-Up) --><div class="hero-description" data-astro-cid-hu26marr><p class="animate-para" style="--delay: 0.15s" data-astro-cid-hu26marr>Stay connected with SAKRT's growing presence in India's sustainability movement. Our media page brings together the latest press coverage, public appearances, and recognitions celebrating our commitment to eco-friendly polythene bags. From industry events to state-level sustainability awards, SAKRT continues to be recognized as a trusted name in <a href="/blog/food-packaging/compostable-cutlery-the-sustainable-shift" data-astro-cid-hu26marr>compostable packaging</a> manufacturing.</p><p class="animate-para" style="--delay: 0.28s" data-astro-cid-hu26marr>Based in Mangalore, Karnataka, SAKRT proudly represents Envirly Innovations Pvt Ltd, delivering government-certified compostable bags, polythene bagsfilms, pouches, and tableware to retailers and industrial enterprises across India. Our media features highlight the milestones that matter — from participation in World Environment Day celebrations at ICAR-CPCRI to being honored at eco-awareness events for our contribution to reducing plastic pollution.</p><p class="animate-para" style="--delay: 0.40s" data-astro-cid-hu26marr>Each feature reflects our core mission: helping businesses transition away from single-use plastics through certified, biodegradable alternatives that meet CPCB compliance standards. Whether it's a news article, a social media spotlight, or an award recognition, this page keeps you informed about SAKRT's expanding impact in sustainable packaging.</p><p class="animate-para" style="--delay: 0.52s" data-astro-cid-hu26marr>Follow our journey as we continue building partnerships with businesses ready to make the switch to eco-friendly solutions. Explore our latest media coverage below, and connect with us to learn how SAKRT's compostable products can support your sustainability&nbsp;goals.</p></div></div></div></header>${renderScript($$result, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/MediaHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/MediaHero.astro", void 0);
//#endregion
//#region src/components/Media/WorldEnvironmentCard.astro
createAstro("https://sakrt.in");
var $$WorldEnvironmentCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$WorldEnvironmentCard;
	const { tag = "NEWS UPDATE", date = "05.06.2026", title = "WORLD ENVIRONMENT DAY 2026 Celebration at ICAR-CPCRI", description = "SAKRT proudly represents Envirly Innovations Pvt Ltd, delivering government-certified compostable solutions across India.", imageSrc = "/media/world-env-day.webp", readMoreLink = "https://www.facebook.com/cpcrikasaragod.kerala/posts/pfbid02iupD8AKPYjbpddwPacdMP72a8SxWYj4j2gosz77ZZNhFjWgf8TGueQoaCNDUGdRRl?rdid=3kXyGqdVH2zgoX6v#" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="news-featured-card" data-astro-cid-3juj2pca><!-- Background Image --><img${addAttribute(imageSrc, "src")}${addAttribute(title, "alt")} class="card-bg-image" loading="lazy" data-astro-cid-3juj2pca><!-- Dark Gradient Overlay --><div class="card-overlay" data-astro-cid-3juj2pca></div><!-- Content Container --><div class="card-content" data-astro-cid-3juj2pca><div class="card-tag" data-astro-cid-3juj2pca><span class="tag-text" data-astro-cid-3juj2pca>${tag}</span><span class="tag-divider" data-astro-cid-3juj2pca>—</span><span class="tag-date" data-astro-cid-3juj2pca>${date}</span></div><h2 class="card-title" data-astro-cid-3juj2pca>${title}</h2><p class="card-description" data-astro-cid-3juj2pca>${description}</p><a${addAttribute(readMoreLink, "href")} target="_blank" rel="noopener noreferrer" class="read-more-btn" data-astro-cid-3juj2pca><span data-astro-cid-3juj2pca>Read Full Story</span><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3juj2pca><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3juj2pca></path></svg></a></div></div>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/WorldEnvironmentCard.astro", void 0);
//#endregion
//#region src/components/Media/InstagramReelCard.astro
createAstro("https://sakrt.in");
var $$InstagramReelCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$InstagramReelCard;
	const { tag = "YOUTUBE VIDEO", title = "SAKRT Honored at State-Level Eco Awareness Event", videoThumbnail = "src/images/choose-sustainable.webp", youtubeUrl = "https://youtu.be/A6YEPwwKUEk" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="video-card" data-astro-cid-cvzp2f7t><span class="card-tag" data-astro-cid-cvzp2f7t>${tag}</span><h3 class="card-title" data-astro-cid-cvzp2f7t>${title}</h3><!-- Embedded YouTube Video --><div class="iframe-container" data-astro-cid-cvzp2f7t><iframe width="100%" height="100%" src="https://www.youtube.com/embed/A6YEPwwKUEk?si=3zK_01SnUWebn2Wb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-astro-cid-cvzp2f7t></iframe></div><!-- Footer Link --><a${addAttribute(youtubeUrl, "href")} target="_blank" rel="noopener noreferrer" class="video-footer-link" data-astro-cid-cvzp2f7t><span data-astro-cid-cvzp2f7t>WATCH ON YOUTUBE</span><svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-cvzp2f7t><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cvzp2f7t></path></svg></a></div>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/InstagramReelCard.astro", void 0);
//#endregion
//#region src/components/Media/MediaHighlights.astro
var $$MediaHighlights = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="media-highlights-section" data-astro-cid-4b4xbj7y><div class="media-grid" data-astro-cid-4b4xbj7y><div class="main-card-col" data-astro-cid-4b4xbj7y>${renderComponent($$result, "WorldEnvironmentCard", $$WorldEnvironmentCard, { "data-astro-cid-4b4xbj7y": true })}</div><div class="side-card-col" data-astro-cid-4b4xbj7y>${renderComponent($$result, "InstagramReelCard", $$InstagramReelCard, { "data-astro-cid-4b4xbj7y": true })}</div></div></section>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/MediaHighlights.astro", void 0);
//#endregion
//#region src/components/Media/RecognitionCard.astro
createAstro("https://sakrt.in");
var $$RecognitionCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RecognitionCard;
	const { tag = "RECOGNITION", title = "SAKRT Wins Public Praise for Commitment to Eco-Friendly Innovation", description = "Helping businesses transition away from single-use plastics through certified, biodegradable alternatives that meet CPCB compliance standards.", buttonText = "View Public Recognition", buttonLink = "https://www.instagram.com/reel/DTrm_4QgLCf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="recognition-card animate-card" data-parallax-card data-astro-cid-xpz5cjib><!-- Background Image with Counter-Parallax Scale --><div class="card-bg-image" data-astro-cid-xpz5cjib></div><div class="card-overlay" data-astro-cid-xpz5cjib></div><!-- Animated Border Glow Trace --><div class="border-glow-trace" data-astro-cid-xpz5cjib></div><!-- Foreground Content Floating Layers --><div class="card-content" data-astro-cid-xpz5cjib><div class="tag-badge-wrapper" data-astro-cid-xpz5cjib><span class="card-tag" data-astro-cid-xpz5cjib><span class="glow-ring" data-astro-cid-xpz5cjib></span>${tag}</span></div><h2 class="card-title" data-astro-cid-xpz5cjib>${title}</h2><p class="card-description" data-astro-cid-xpz5cjib>${description}</p></div><div class="action-wrapper" data-astro-cid-xpz5cjib><a${addAttribute(buttonLink, "href")} target="_blank" rel="noopener noreferrer" class="magnetic-btn" data-astro-cid-xpz5cjib><span class="btn-text" data-astro-cid-xpz5cjib>${buttonText}</span><div class="btn-icon-circle" data-astro-cid-xpz5cjib><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-xpz5cjib><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-xpz5cjib></line><polyline points="12 5 19 12 12 19" data-astro-cid-xpz5cjib></polyline></svg></div></a></div></div>${renderScript($$result, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/RecognitionCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/RecognitionCard.astro", void 0);
//#endregion
//#region src/components/Media/ImpactLocationCard.astro
createAstro("https://sakrt.in");
var $$ImpactLocationCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ImpactLocationCard;
	const { title = "Sustainable Impact in Mangalore", description = "Based in Mangalore, Karnataka, SAKRT features highlight the milestones that matter — from participation in World Environment Day celebrations to reducing plastic pollution across the state.", mapImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dYnJ7iL5siLUsk1ajb-wfuupyqs1CugNycT7iGxxhHP0MNegNP0__qI&s", mapAlt = "Mangalore Location Map Graphic" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="impact-card" data-astro-cid-5mnr6pis><div class="text-content" data-astro-cid-5mnr6pis><h2 class="card-title" data-astro-cid-5mnr6pis>${title}</h2><p class="card-description" data-astro-cid-5mnr6pis>${description}</p></div><div class="map-graphic-wrapper" data-astro-cid-5mnr6pis><div class="map-circle" data-astro-cid-5mnr6pis><img${addAttribute(mapImageSrc, "src")}${addAttribute(mapAlt, "alt")} class="map-image" loading="lazy" data-astro-cid-5mnr6pis></div></div></div>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/ImpactLocationCard.astro", void 0);
//#endregion
//#region src/components/Media/SecondaryMediaSection.astro
var $$SecondaryMediaSection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="secondary-media-section" data-astro-cid-6ox7fdnl><div class="cards-grid" data-astro-cid-6ox7fdnl><div class="left-col" data-astro-cid-6ox7fdnl>${renderComponent($$result, "RecognitionCard", $$RecognitionCard, { "data-astro-cid-6ox7fdnl": true })}</div><div class="right-col" data-astro-cid-6ox7fdnl>${renderComponent($$result, "ImpactLocationCard", $$ImpactLocationCard, { "data-astro-cid-6ox7fdnl": true })}</div></div></section>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Media/SecondaryMediaSection.astro", void 0);
//#endregion
//#region src/pages/media/index.astro
var media_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Media & Press | SAKRT Sustainability News",
		"description": "Stay updated with the latest press coverage, public appearances, and recognitions of SAKRT in India's sustainability movement."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "MediaHero", $$MediaHero, {})}${renderComponent($$result, "MediaHighlights", $$MediaHighlights, {})}${renderComponent($$result, "SecondaryMediaSection", $$SecondaryMediaSection, {})}${renderComponent($$result, "CallToAction", $$CallToAction, {})}</main>` })}`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/media/index.astro", void 0);
var $$file = "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/pages/media/index.astro";
var $$url = "/media";
//#endregion
//#region \0virtual:astro:page:src/pages/media/index@_@astro
var page = () => media_exports;
//#endregion
export { page };
