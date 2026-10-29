import type { APIRoute } from 'astro';
import { appendToGoogleSheet } from '../../lib/googleSheets';
import { submitToWordPressElementor } from '../../lib/wordpress';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    console.log('[Enquiry API] Received form submission:', data);
    
    // 1. Save to Google Sheets
    const sheetResult = await appendToGoogleSheet(data);
    console.log('[Enquiry API] Google Sheets result:', sheetResult);

    // 2. Sync to WordPress Elementor Form
    const wpResult = await submitToWordPressElementor(data);
    console.log('[Enquiry API] WordPress Elementor result:', wpResult);

    return new Response(JSON.stringify({ 
      success: true, 
      sheetResult,
      wpResult 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('[Enquiry API Error]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
