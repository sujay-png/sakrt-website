//#region src/lib/wordpress.ts
async function wpquery({ query, variables = {} }) {
	const wpUrl = "https://sakrt.in/graphql";
	try {
		const response = await fetch(wpUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			cache: "no-store",
			body: JSON.stringify({
				query,
				variables
			})
		});
		if (!response.ok) {
			console.error("[GraphQL Network Error]:", await response.text());
			return { posts: {
				nodes: [],
				pageInfo: {
					hasNextPage: false,
					endCursor: null
				}
			} };
		}
		const json = await response.json();
		if (json.errors) {
			console.error("[GraphQL Errors]:", json.errors);
			return { posts: {
				nodes: [],
				pageInfo: {
					hasNextPage: false,
					endCursor: null
				}
			} };
		}
		return json.data;
	} catch (error) {
		console.error("Fetch API Error:", error);
		return { posts: {
			nodes: [],
			pageInfo: {
				hasNextPage: false,
				endCursor: null
			}
		} };
	}
}
//#endregion
export { wpquery as t };
