import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/lib/googleSheets.ts
async function appendToGoogleSheet(payload) {
	try {
		console.error("Google Sheets credentials not fully set. Skipping sheets append.");
		return {
			success: false,
			error: "Credentials missing"
		};
	} catch (error) {
		console.error("Failed to append to Google Sheets:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Unknown error"
		};
	}
}
//#endregion
//#region src/pages/api/enquiry.ts
var enquiry_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const sheetResult = await appendToGoogleSheet(await request.json());
		if (!sheetResult.success) return new Response(JSON.stringify({
			success: false,
			error: "Google Sheets failed",
			details: sheetResult.error
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
		return new Response(JSON.stringify({
			success: true,
			sheetResult
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("API Route Error:", error);
		return new Response(JSON.stringify({
			success: false,
			error: "Internal Server Error"
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/enquiry@_@ts
var page = () => enquiry_exports;
//#endregion
export { page };
