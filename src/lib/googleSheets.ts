import { google } from 'googleapis';

export async function appendToGoogleSheet(payload: any) {
  try {
    const serviceAccountEmail = import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = import.meta.env.GOOGLE_PRIVATE_KEY;
    const sheetId = import.meta.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !privateKey || !sheetId) {
      console.error('Google Sheets credentials not fully set. Skipping sheets append.');
      return { success: false, error: 'Credentials missing' };
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        // Replace escaped newlines if they are passed in from env
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:J', // Adjust range if your sheet name is different
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            payload.name || payload.fullName || '',
            (payload.phone || payload.phoneNumber) ? `'${payload.phone || payload.phoneNumber}` : '',
            payload.company || payload.companyName || '',
            payload.email || payload.businessEmail || '',
            payload.product_category || payload.productCategory || '',
            payload.product_name || payload.productName || '',
            payload.item_quantity || payload.itemQuantity || '',
            payload.message || ''
          ]
        ],
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error('Failed to append to Google Sheets:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
