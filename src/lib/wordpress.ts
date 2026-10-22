// src/lib/wordpress.ts

interface WPGraphQLParams {
  query: string;
  variables?: object;
}

// 1. THE CORE FETCHER
export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  const wpUrl = "https://sakrt.in/graphql";

  try {
    const response = await fetch(wpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // BYPASS CACHE: This ensures new posts appear immediately
      cache: "no-store",
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      console.error("[GraphQL Network Error]:", await response.text());
      return { posts: { nodes: [], pageInfo: { hasNextPage: false, endCursor: null } } };
    }

    const json = await response.json();
    
    if (json.errors) {
      console.error("[GraphQL Errors]:", json.errors);
      return { posts: { nodes: [], pageInfo: { hasNextPage: false, endCursor: null } } };
    }

    return json.data;
  } catch (error) {
    console.error("Fetch API Error:", error);
    return { posts: { nodes: [], pageInfo: { hasNextPage: false, endCursor: null } } };
  }
}

// 2. TYPESCRIPT INTERFACES
export interface WPPageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface WPPostNode {
  databaseId: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    }
  };
}

export interface WPPaginatedResponse {
  pageInfo: WPPageInfo;
  nodes: WPPostNode[];
}

// 3. THE PAGINATION FUNCTION
export async function getPaginatedPosts(
  first: number = 9, 
  after: string = ""
): Promise<WPPaginatedResponse> {
  
  const query = `
    query GetPaginatedPosts($first: Int!, $after: String) {
      posts(
        first: $first, 
        after: $after, 
        where: { orderby: { field: DATE, order: DESC } }
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          databaseId
          slug
          date
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const data = await wpquery({ 
    query, 
    variables: { first, after } 
  });

  return data?.posts || { 
    nodes: [], 
    pageInfo: { hasNextPage: false, endCursor: null } 
  };
}

// 4. URL SLUG AND BLOG URL HELPERS
export function slugifyCategory(category?: string): string {
  if (!category) return 'general';
  return category
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '') || 'general';
}

export function getBlogUrl(postOrCategory: any, maybeSlug?: string): string {
  if (typeof postOrCategory === 'string' && maybeSlug) {
    const categorySlug = slugifyCategory(postOrCategory);
    const postSlug = maybeSlug.replace(/^\/+|\/+$/g, '');
    return `/blog/${categorySlug}/${postSlug}`;
  }

  const post = postOrCategory;
  if (!post) return '/blog';
  const categoryName = post.categories?.nodes?.[0]?.name || post.category || 'general';
  const categorySlug = slugifyCategory(categoryName);
  const postSlug = (post.slug || '').replace(/^\/+|\/+$/g, '');
  return `/blog/${categorySlug}/${postSlug}`;
}