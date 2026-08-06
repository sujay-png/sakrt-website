interface WPGraphQLParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  const wpUrl = "https://sakrt.in/graphql";

  try {
    const response = await fetch(wpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      console.error(await response.text());
      return { posts: { nodes: [] } };
    }

    const json = await response.json();
    
    if (json.errors) {
      console.error(json.errors);
      return { posts: { nodes: [] } };
    }

    return json.data;
  } catch (error) {
    console.error("Fetch API Error:", error);
    return { posts: { nodes: [] } };
  }
}