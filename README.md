# Blue Ridge Champions Trophy 2026 – Season 3 Website

A vibrant Next.js single-page website for the Blue Ridge Sports community event.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel

---

## Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Deploy to Vercel via GitHub

### Step 1 – Push to GitHub

In VS Code terminal:
```bash
git init
git add .
git commit -m "Initial commit: BR Sports Season 3 website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/br-sports.git
git push -u origin main
```

> Replace YOUR_USERNAME with your GitHub username and create a new repo at https://github.com/new first.

### Step 2 – Deploy on Vercel

1. Go to https://vercel.com and log in
2. Click "Add New Project"
3. Import your br-sports GitHub repository
4. Keep all default settings (Vercel auto-detects Next.js)
5. Click "Deploy"

Your site will be live in about 1 minute!

### Step 3 – Future Updates

Any time you push to main, Vercel auto-redeploys:
```bash
git add .
git commit -m "Update contact details"
git push
```

---

## Customization

- app/components/Contacts.tsx  → Update coordinator names & phones
- app/components/Sports.tsx    → Add/remove sports
- app/components/Hero.tsx      → Update event title, sponsor
- app/components/Community.tsx → Update WhatsApp link
- app/globals.css              → Change colors/fonts
