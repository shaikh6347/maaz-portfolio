# Maaz Shaikh — AI Digital Identity Portfolio

A premium, futuristic Next.js portfolio with:

- Centralized profile, project, skill, certificate, education and journey data
- AI portfolio assistant with strict knowledge grounding
- Server-side AI API route with a no-key fallback
- Contact/inquiry form with Zod validation
- Resend email notifications
- Optional Telegram notifications
- Resume and certificate asset support
- Project filtering and detail modal
- Command palette with Ctrl+K / Cmd+K
- Responsive, accessible dark glass/cinematic UI
- SEO sitemap and robots routes
- Vercel-ready server routes

## Requirements

Next.js 16.3.x requires Node.js 20.9 or newer. Use a current LTS Node.js release.

## Install

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Configure

Copy `.env.example` to `.env.local` and fill only the secrets you actually have.

Do not commit `.env.local`.

## Personal data

Edit:

- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/certificates.ts`
- `src/data/experience.ts`
- `src/data/education.ts`

## Assets

- Profile photo: `public/images/profile.jpg`
- Project images: `public/projects/`
- Certificates: `public/certificates/`
- Resume: `public/resume/resume.pdf`

Missing images are intentionally handled without inventing a face or project screenshot.

## AI

The AI route is `src/app/api/ai/route.ts`.

It receives the centralized portfolio data and instructs the model to answer only from that data. If `OPENAI_API_KEY` is absent, a deterministic keyword fallback is used.

## Contact

The contact route is `src/app/api/contact/route.ts`.

It validates input on the server, then attempts the configured Resend and Telegram notification services.

For reliable production notifications, configure both services. If no notification provider is configured, the form still validates and returns a successful receipt, but there is no external delivery.

## Security

Never use `NEXT_PUBLIC_` for secrets. AI keys, email API keys and Telegram tokens must remain server-only.

Never upload Aadhaar, PAN, bank details, passwords, private IDs or a private home address to the public `public/` folder.

## GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

`.env.local` is ignored by `.gitignore`.

## Vercel

Import the GitHub repository in Vercel, then add the same environment variables from `.env.local` under Project Settings → Environment Variables. Redeploy after changing variables.

## Important email note

The email string supplied in the profile configuration is:

`shake ma7 to7 to@gmail.com`

That string is not valid standard email syntax. The UI preserves it exactly as supplied, but Resend cannot send to it. Before enabling production email notifications, replace `CONTACT_NOTIFICATION_EMAIL` in Vercel with the correct valid email address.

## Customization

The UI reads from the `src/data/` files, so most content changes do not require editing components.
