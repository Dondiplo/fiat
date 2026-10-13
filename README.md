# Fiat Justitia Attorneys: website

Next.js 16 (App Router) + Tailwind CSS v4. Light theme, navy accent, gold details.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # all pages prerender as static HTML
```

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | Firm name, email, phone numbers, nav |
| `src/data/people.ts` | Lawyer profiles |
| `src/data/practices.ts` | Practice areas and services |
| `src/data/sectors.ts` | Sectors |
| `src/data/insights.ts` | Articles, news, deals, events |
| `src/app/globals.css` | Design tokens (`@theme`) and type scale |
| `public/brand/` | Logo: `logo-full` (footer), `logo-mark` (emblem, used alone on phones), `logo-name` (header wordmark) |

## Before launch: replace placeholders

- **People** are invented sample profiles. Replace them with real lawyers, and add photos where `Avatar` renders initials.
- **Phone numbers** in `site.ts` are placeholders. The firm publishes no physical address.
- **Insights** are sample articles. Replace them with the firm's own.
- **Contact form** opens the visitor's email client. Connect it to a server action or a form service (e.g. Resend, Formspree).
- **Legal page** needs the firm's full privacy notice (NDPA 2023) and disclaimer.
