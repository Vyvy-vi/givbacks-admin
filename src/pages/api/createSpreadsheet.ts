import { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('11111')
  const auth = new google.auth.GoogleAuth({
    keyFile: 'google-service-credentials.json',
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
    ],
  })

  const drive = google.drive({ version: 'v3', auth })
  const sheets = google.sheets({ version: 'v4', auth })

  try {
    const folderId = process.env.FOLDER_ID
    const spreadsheet = await sheets.spreadsheets.create({
      requestBody: {
        properties: {
          title: 'My New Spreadsheet',
        },
        sheets: [
          {
            properties: {
              title: 'Eligible Donations (G)',
            },
          },
          {
            properties: {
              title: 'Not Eligible Donations (G)',
            },
          },
          {
            properties: {
              title: 'Purple List Donations To Verified Projects (G&O)',
            },
          },
          {
            properties: {
              title: 'Purple List',
            },
          },
          {
            properties: {
              title: 'Name List',
            },
          },
          {
            properties: {
              title: '$nice List',
            },
          },
        ],
      },
    })
    const spreadsheetUrl = spreadsheet.data.spreadsheetUrl
    res.status(200).json({ spreadsheetUrl })
  } catch (error) {
    res.status(500).json({ error: 'Error creating spreadsheet' })
  }
}
