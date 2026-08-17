import { m as maybeRenderHead, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
//#region src/components/Shared/ModernFAQ.astro
createAstro("https://sakrt.in");
var $$ModernFAQ = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ModernFAQ;
	const { title, faqs } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="faq-container" data-astro-cid-jxqay6yy><h2 class="faq-title" data-astro-cid-jxqay6yy>${title}</h2><div class="faq-list" data-astro-cid-jxqay6yy>${faqs.map((faq, index) => renderTemplate`<details class="faq-item" name="faq-accordion" data-astro-cid-jxqay6yy><summary class="faq-question" data-astro-cid-jxqay6yy><span class="question-text" data-astro-cid-jxqay6yy><strong data-astro-cid-jxqay6yy>${index + 1}.</strong> ${faq.question}</span><span class="faq-icon" data-astro-cid-jxqay6yy><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron" data-astro-cid-jxqay6yy><polyline points="6 9 12 15 18 9" data-astro-cid-jxqay6yy></polyline></svg></span></summary><div class="faq-answer" data-astro-cid-jxqay6yy><div class="faq-answer-inner" data-astro-cid-jxqay6yy><p data-astro-cid-jxqay6yy>${faq.answer}</p></div></div></details>`)}</div></div>`;
}, "/Users/sujaykumar/Documents/GitHub/108medz/sakrt-website/src/components/Shared/ModernFAQ.astro", void 0);
//#endregion
export { $$ModernFAQ as t };
