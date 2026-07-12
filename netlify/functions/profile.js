// Netlify Function: server-side proxy to the Google Sheets API using a
// service account. The private key lives only in Netlify env vars — never
// in the browser bundle. The client (src/lib/fetchProfile.js) calls this
// endpoint on every page load instead of talking to Google directly.

import { getAccessToken } from "../../src/lib/googleAuth.js";
import {
  TABS,
  transform,
  valueRangesToByTab,
} from "../../src/lib/transform.js";

export async function handler() {
  try {
    const sheetId = process.env.SHEET_ID;
    const rawCredentials = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

    if (!sheetId || !rawCredentials) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Missing SHEET_ID or GOOGLE_SERVICE_ACCOUNT_JSON env vars",
        }),
      };
    }

    const credentials = JSON.parse(rawCredentials);
    const accessToken = await getAccessToken(credentials);

    const params = new URLSearchParams();
    TABS.forEach((tab) => params.append("ranges", tab));
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values:batchGet?${params}`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!res.ok) {
      return { statusCode: res.status, body: await res.text() };
    }

    const data = await res.json();
    const profile = transform(valueRangesToByTab(data.valueRanges ?? []));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=0, s-maxage=30",
      },
      body: JSON.stringify(profile),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
