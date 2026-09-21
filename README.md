# AI Governance: A Research Agenda — Interactive Site

A small, self-contained website built for teaching Dafoe's "AI Governance: A Research
Agenda." No build tools, no frameworks, just plain HTML, CSS, and JavaScript, so it
deploys instantly on Vercel.

## What's in here

- `index.html` — Overview / landing page
- `technical-landscape.html`, `ai-politics.html`, `ai-ideal-governance.html` — the three
  main branches, each with tabs for its sub-groups and numbered subsections
- `summary.html` — closing synthesis page
- `credits.html` — attribution and disclaimer, linked from the "Credits" button in the
  top right corner of every page
- `css/styles.css` — all styling
- `js/app.js` — the tab-switching behavior
- `assets/GovAI-Research-Agenda.pdf` — a bundled copy of the reading. Every arrow
  button jumps straight to the matching page in this file. If you ever rename or
  replace this PDF, keep the filename the same, or update every
  `assets/GovAI-Research-Agenda.pdf#page=N` link in the HTML files to match.
- `assets/fhi-oxford-logos.png` — the Future of Humanity Institute / Oxford logo shown
  on the Credits page.

## Put it on GitHub (no command line needed)

1. Go to github.com and sign in (or create a free account).
2. Click the "+" in the top right, then "New repository." Give it a name like
   `govai-research-agenda`. Leave everything else as-is and click "Create repository."
3. On the new repo's page, click the link that says "uploading an existing file."
4. Unzip the file I sent you, then drag the whole contents (all the files and folders,
   not the zip itself) into the upload box.
5. Scroll down and click "Commit changes."

## Deploy it on Vercel

1. Go to vercel.com and sign in with your GitHub account.
2. Click "Add New..." then "Project."
3. Find and select the repository you just created, then click "Import."
4. Vercel will detect it's a static site automatically. Don't change any settings,
   just click "Deploy."
5. In about a minute you'll get a live link (something like
   `govai-research-agenda.vercel.app`) that you can share with your class.

Any time you want to change the text or a page number, edit the file on GitHub
directly (click the pencil icon on any file), commit the change, and Vercel will
automatically redeploy the new version within a minute or two.
