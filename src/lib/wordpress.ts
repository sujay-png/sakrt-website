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
    return `/blog/${categorySlug}/${postSlug}/`;
  }

  const post = postOrCategory;
  if (!post) return '/blog/';
  const categoryName = post.categories?.nodes?.[0]?.name || post.category || 'general';
  const categorySlug = slugifyCategory(categoryName);
  const postSlug = (post.slug || '').replace(/^\/+|\/+$/g, '');
  return `/blog/${categorySlug}/${postSlug}/`;
}

// 5. ELEMENTOR FORM SUBMISSION HELPER
export async function submitToWordPressElementor(data: Record<string, any>) {
  // If a dedicated webhook URL is set in environment, use it
  const webhookUrl = import.meta.env.WORDPRESS_FORM_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resText = await response.text();
      console.log("[WordPress Webhook Response]:", response.status, resText);
      return { success: response.ok, status: response.status, data: resText };
    } catch (err: any) {
      console.error("[WordPress Webhook Sync Error]:", err);
      return { success: false, error: err?.message || "Webhook error" };
    }
  }

  // Native Elementor Form Submission via admin-ajax.php
  const wpAjaxUrl = "https://sakrt.in/wp-admin/admin-ajax.php";

  const params = new URLSearchParams();
  params.append("action", "elementor_pro_forms_send_form");
  
  // Page ID: 385 for Contact Us, 8587 for Popup Enquiry
  const wpPostId = data.post_id || (data.form_type === "popup" ? "8587" : "385");
  const wpFormId = data.form_id || "contactus";
  
  params.append("post_id", String(wpPostId));
  params.append("queried_id", String(wpPostId));
  params.append("form_id", String(wpFormId));
  params.append("referer_title", data.form_type === "popup" ? "Product Popup Enquiry" : "Contact Us");

  const name = data.name || data.fullName || "";
  const phone = data.phone || data.phoneNumber || "";
  const company = data.company || data.companyName || "";
  const email = data.email || data.businessEmail || "";
  const productName = data.product_name || data.productName || "";
  const itemQuantity = data.item_quantity || data.itemQuantity || "";
  const message = data.message || "";

  if (name) params.append("form_fields[name]", String(name));
  if (phone) params.append("form_fields[phone]", String(phone));
  if (company) params.append("form_fields[company]", String(company));
  if (email) params.append("form_fields[email]", String(email));
  if (productName) params.append("form_fields[product_name]", String(productName));
  if (itemQuantity) params.append("form_fields[item_quantity]", String(itemQuantity));
  if (message) params.append("form_fields[message]", String(message));

  try {
    const response = await fetch(wpAjaxUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: params.toString(),
    });

    const resultText = await response.text();
    console.log("[WordPress Elementor Response]:", {
      status: response.status,
      body: resultText,
    });

    return { success: response.ok, data: resultText };
  } catch (error: any) {
    console.error("[WordPress Elementor Form Sync Error]:", error);
    return { success: false, error: error?.message || "Unknown error" };
  }
}
