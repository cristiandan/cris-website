# cris.sh Remaining TODOs

*Compiled 2026-03-04 during Phase 6 final polish*
*Source: Phase 1-6 audits + codebase scan*

---

## 🔴 Critical (Should Fix Before Major Marketing Push)

| Issue | Location | Notes |
|-------|----------|-------|
| Image bloat: 52MB total, 6 files >2MB | `/public/images/` | Largest: 6.6MB. Compressing to WebP could reduce 70-80% |
| No WebP/AVIF image optimization | Site-wide | Modern formats supported by all major browsers |

---

## 🟡 Medium Priority (Improve Quality/SEO)

### Content Gaps

| Issue | Location | Notes |
|-------|----------|-------|
| Elektrik Network sparse | `src/constants/projects.ts` | Missing: solution field, images, press, videos |
| clawdev.to sparse | `src/constants/projects.ts` | Missing: solution field, quantified metrics |
| Hero subheadline uses Option A | `src/components/hero.tsx` | ROADMAP specified Option C |

### SEO & Discoverability

| Issue | Location | Notes |
|-------|----------|-------|
| No JSON-LD structured data | Site-wide | Need Person + WebSite schemas |
| No analytics configured | Site-wide | Consider Plausible or Vercel Analytics |
| 3 broken external links | `src/constants/press.ts` | G4Media 404, PwC 404, Vimeo 401 |

### Accessibility

| Issue | Location | Notes |
|-------|----------|-------|
| Icon links lack aria-labels | Footer social links | Screen readers need labels |
| Buttons/links need accessible names | Various components | Lighthouse flagged |

### Security

| Issue | Location | Notes |
|-------|----------|-------|
| Missing security headers | Netlify config | CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy |

### UX Polish

| Issue | Location | Notes |
|-------|----------|-------|
| About/Press pages are dead ends | `/about`, `/press` | No CTA to Contact or Work |
| No related projects on detail pages | `/work/[slug]` | Could improve navigation |
| Press items don't link to related projects | `/press` | Missed cross-linking opportunity |

---

## 🟢 Low Priority (Nice to Have)

### Code Cleanup

| Issue | Location | Notes |
|-------|----------|-------|
| Orphan: `contact-form.tsx` | `src/components/` | Mock API, never imported. Delete or implement. |
| Orphan: `landing-blogs.tsx` | `src/components/` | Blog never implemented. Delete. |
| Orphan: `cta.tsx` | `src/components/` | Has fake email "tyler@durden.com". Delete. |
| Orphan: `testimonials.tsx` | `src/components/` | Placeholder "Manu" content. Delete. |
| Orphan: `collage.tsx` | `src/components/` | Stock Unsplash images. Delete. |
| Duplicate icon libs | Dependencies | @tabler (13 icons) + lucide (2 icons). Consolidate. |
| `@tailwindcss/typography` unused | `package.json` | Imported but prose classes never used |
| Debug console.log in strava.ts | `src/lib/strava.ts` | Lines 291, 296, 312 have debug logs |

### Animation Cleanup

| Issue | Location | Notes |
|-------|----------|-------|
| Missing `viewport={{ once: true }}` | `projects.tsx` | Animations may re-trigger |
| Missing `once: true` | `section-heading.tsx` (Background) | Same issue |
| Broken `group-hover` | `project-card.tsx` | Arrow icon hover - parent missing `group` class |

### Semantic HTML

| Issue | Location | Notes |
|-------|----------|-------|
| SectionHeading uses h2 but styled as body | `section-heading.tsx` | Semantic mismatch |
| Links lack consistent underline pattern | Various | Hover states inconsistent |

---

## ✅ Resolved During This Review

| Issue | Resolution | Date |
|-------|------------|------|
| siteConfig.url = netlify preview | Fixed to cris.sh | 2026-03-04 |
| No robots.txt | Created src/app/robots.ts | 2026-03-04 |
| No sitemap.xml | Created src/app/sitemap.ts | 2026-03-04 |
| No canonical URLs | Added to all pages | 2026-03-04 |
| Meta descriptions missing | Added to all pages | 2026-03-04 |
| Alt text missing on images | Added descriptive alts | 2026-03-04 |

---

## Testing Gaps

| Test | Status | Notes |
|------|--------|-------|
| Real mobile devices | ⏳ Pending | F6-02 blocked - user can test manually |
| Safari (real WebKit) | ⏳ Partial | Tested via Playwright WebKit, not real Safari |
| Firefox (real Gecko) | ⏳ Partial | Same - functional expected |

---

## Recommended Phase I4 (Improvements) Task Order

1. **Image optimization** — biggest impact on performance
2. **Delete orphan components** — clean up codebase
3. **Fix broken external links** — quick wins
4. **Add JSON-LD structured data** — SEO boost
5. **Add analytics** — track traffic
6. **Flesh out Elektrik/clawdev.to content** — portfolio completeness
7. **Security headers** — hardening
8. **A11y fixes** — accessibility compliance
9. **Animation cleanup** — polish
10. **Dead-end page CTAs** — UX improvement

---

*This document serves as the single source of truth for remaining work on cris.sh*
*Update as issues are resolved*
