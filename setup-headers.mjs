import { google } from 'googleapis';

async function setupHeadersAndFormat() {
  try {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !privateKey || !sheetId) {
      throw new Error('Google Sheets credentials missing in .env');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 1. Write the Headers
    const headers = [
      'Timestamp',
      'Name',
      'Phone',
      'Company',
      'Email',
      'Product Category',
      'Product Name',
      'Quantity',
      'Message'
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:I1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [headers],
      },
    });

    console.log('Headers successfully added to Google Sheet!');

    // 2. Get the actual sheetId for Sheet1 to format it
    const spreadsheetInfo = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
    const actualSheetId = spreadsheetInfo.data.sheets[0].properties.sheetId;

    // 3. Format the spreadsheet
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: sheetId,
      requestBody: {
        requests: [
          // Freeze the top row so it's always visible when scrolling
          {
            updateSheetProperties: {
              properties: {
                sheetId: actualSheetId,
                gridProperties: {
                  frozenRowCount: 1,
                },
              },
              fields: 'gridProperties.frozenRowCount',
            },
          },
          // Make the header row bold, centered, with a light gray background
          {
            repeatCell: {
              range: {
                sheetId: actualSheetId,
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 9,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.9, green: 0.9, blue: 0.9 },
                  textFormat: { bold: true, fontSize: 11 },
                  horizontalAlignment: 'CENTER',
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)',
            },
          },
          // Set text wrapping for the entire sheet so long messages expand the row height
          {
            repeatCell: {
              range: {
                sheetId: actualSheetId,
                startRowIndex: 0,
                startColumnIndex: 0,
                endColumnIndex: 9,
              },
              cell: {
                userEnteredFormat: {
                  wrapStrategy: 'WRAP',
                },
              },
              fields: 'userEnteredFormat.wrapStrategy',
            },
          },
          // Auto-resize the columns to fit the header text nicely
          {
            autoResizeDimensions: {
              dimensions: {
                sheetId: actualSheetId,
                dimension: 'COLUMNS',
                startIndex: 0,
                endIndex: 9,
              },
            },
          },
        ],
      },
    });

    console.log('Spreadsheet formatting applied! Headers are frozen, bolded, and text wrapping is enabled.');
  } catch (error) {
    console.error('Failed to setup formatting:', error);
  }
}

setupHeadersAndFormat();
