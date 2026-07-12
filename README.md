# portfolio

A developer portfolio built with React that pulls its content from a Google Sheet — no database, no CMS. Edit a spreadsheet, refresh the page, see the change. No rebuild needed.

Built by [fabrizio-fatecha](https://github.com/fabrizio-fatecha). Feel free to use this as a template for your own portfolio.

## How it works

1. You keep your info (profile, skills, experience, projects...) in a Google Sheet.
2. Every time someone opens your site, the browser calls a small serverless function.
3. That function fetches the latest data from your Sheet and sends it back as JSON.
4. React renders the page with that data.

```
Browser  →  Netlify Function  →  Google Sheets API  →  your Sheet
   ↑                                                        |
   └────────────────── live data, no rebuild ───────────────┘
```

If the live fetch ever fails (no internet, Sheet misconfigured, etc.), the site falls back to a cached copy of your data so it never shows a broken page.

## Tech stack

- React + Vite
- Google Sheets API (read-only)
- Netlify Functions (keeps your Google credentials off the browser)
- Plain CSS, no UI framework

## Use this as your own portfolio

### 1. Get the code
```bash
git clone <this-repo-url>
cd portfolio
npm install
```

### 2. Create your Google Sheet
Make a new Google Sheet with one tab per section, named exactly:

`Profile`, `Skills`, `Experience`, `Projects`, `Education`, `Certifications`, `Languages`

The `sheet-import/` folder has a sample CSV for each tab — import them (File → Import → Upload) to get the right columns, then replace the sample rows with your own info.

### 3. Create a Google service account
This is what lets your site read the Sheet securely, without making it public.

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → create a project (or use an existing one).
2. Enable the **Google Sheets API** for that project.
3. Go to **APIs & Services → Credentials → Create Credentials → Service Account**.
4. Open the new service account → **Keys → Add Key → Create new key → JSON**. This downloads a `.json` file — keep it private, never commit it.
5. Copy the `client_email` from that file, then open your Google Sheet → **Share** → paste that email → give it **Viewer** access.

### 4. Configure your environment
```bash
cp .env.example .env
```
Fill in `.env` with:
- `SHEET_ID` — the long ID in your Sheet's URL (`.../spreadsheets/d/THIS_PART/edit`)
- `GOOGLE_SERVICE_ACCOUNT_JSON` — the entire contents of the JSON key file, on a single line

### 5. Run it locally
```bash
npm run dev        # fast UI iteration, uses cached sample data
npm run dev:full    # full setup, actually talks to your Google Sheet (needs Netlify CLI)
```

### 6. Deploy to Netlify
1. Push your repo to GitHub and import it in [Netlify](https://app.netlify.com) as a new site.
2. Netlify auto-detects the build settings from `netlify.toml` — nothing to change there.
3. In **Site settings → Environment variables**, add the same `SHEET_ID` and `GOOGLE_SERVICE_ACCOUNT_JSON` from your `.env`.
4. Deploy. Your site is now live and reading from your Sheet.

## Updating your content

Just edit the Google Sheet. Refresh your site — the change is already there. No git commit, no rebuild, no redeploy.

## Project structure

```
scripts/                 helper scripts (not required to run the site)
netlify/functions/       the serverless function that talks to Google Sheets
src/
  components/            one file per portfolio section
  styles/                one CSS file per component
  lib/                   fetch + data-transform logic
  data/profile.json      cached fallback data
sheet-import/            sample CSVs matching the expected Sheet structure
```
