# Redesign TODO (Bento Landing, Short One-Page)

Goal: make the site feel **shorter** while keeping it a **single-page landing**. Use a **clean product UI** bento layout and **project modals** (no inline long sections).

## Target IA (max 4 scroll sections)

1) **Hero (Bento)**
- Title: **Full-Stack Software Engineer**
- Subline: 1 sentence (startup-ready full-stack focus)
- CTAs: **View Projects** (primary) + **Contact Me** (secondary) + Resume (tertiary)
- Right-side 2x2 mini-tiles:
  - Internship: **Edubricz Technologies · Full-Stack Developer**
  - Target: **Startup Full-Stack roles**
  - Stack: concise (to decide in copy)
  - Availability: concise (to decide in copy)

2) **Work (Projects grid)**
- Show exactly **4** project cards: **HOST**, **Sales Tracking**, **RecruiterRisk**, **YTLLM**
- Each card shows: 1-line summary + tech chips + “Open →”
- Clicking opens an **in-page modal** with:
  - Unsplash hero image (for now)
  - What it is (2–3 lines)
  - What you built (3–5 bullets)
  - Tech stack (chips)
  - Links (GitHub/Live if exists)
  - Optional: architecture highlights (3 bullets)
- Modal UX:
  - Close: X + click outside + Esc
  - Focus trap, restore focus to triggering card
  - Lock background scroll
  - Deep-link: `#project=<id>` (share/reload reopens modal)

3) **Proof (Compact strip)**
- Replace separate full sections (Skills/About/Credentials/Areas/Process)
- Keep 3–5 proof items only (internship, graduation year, primary stack, resume, availability)
- No long lists on the main scroll

4) **Contact**
- Primary methods: **Email + LinkedIn + Phone**
- Keep content compact; optional simple form allowed

## Implementation checklist

- [x] Remove/merge long sections so home scroll has only: Hero, Work, Proof strip, Contact
- [x] Update navigation to only: Work, Contact (+ Resume)
- [x] Rebuild Projects into a 4-card grid + modal details
- [x] Keep dark/light theme working and consistent
- [x] Ensure anchors work: `#work`, `#contact`
- [x] Validate: `npm run build` and `npm run preview`

## Done

- Refactored landing sections in src/App.jsx
- Added compact proof strip in src/components/ProofStrip.jsx
- Rebuilt Work section to 4 project cards + modal in src/components/Projects.jsx
- Simplified nav to Work/Contact + Resume in src/components/Navigation.jsx

## Follow-ups (June 1, 2026)

- [x] Remove redundant hero right-side tiles (internship/graduation/target/resume)
- [x] Enlarge hero so above-the-fold feels stronger (closer to full viewport)
- [x] Add “More projects” toggle that reveals a scrollable list of all other projects
- [x] Update hero headline/subheadline to match resume
- [x] Update featured project content from resume (HOST/Sales Tracking/RecruiterRisk)
- [x] Show Live button on project cards (top-right)
