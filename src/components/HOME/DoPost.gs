function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('your_spreadsheet_id').getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([data.name, data.email, data.message]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('An error occurred:', error);

    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
