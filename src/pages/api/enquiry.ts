import type { APIRoute } from 'astro';
import { appendToGoogleSheet } from '../../lib/googleSheets';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Save to Google Sheets
    const sheetResult = await appendToGoogleSheet(data);

    if (!sheetResult.success) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Google Sheets failed', 
          details: sheetResult.error
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(JSON.stringify({ success: true, sheetResult }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
