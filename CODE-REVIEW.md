# Code review completed

## HTML
- Added semantic page structure.
- Added viewport and descriptions.
- Added accessible button labels.
- Removed inline layout styling from the main pages.
- Kept navigation consistent across every page.
- Avoided claiming planned work is completed.

## CSS
- One shared stylesheet for the whole project.
- Removed excessive gradients, cards and decorative effects.
- Responsive breakpoints reviewed for tablet/mobile.
- Added reduced-motion support.
- Consistent spacing, typography, borders and color tokens.

## JavaScript
- Theme preference is persisted.
- Mobile menu closes after navigation.
- Scroll UI is passive.
- IntersectionObserver has a fallback.
- Project filters work from `data-category`.
- Contact form validates required fields and uses a real `mailto:` action.
- No fake API/backend submission.
- Current year is generated automatically.

## Content
The portfolio is not limited to recent projects. It includes:
- Task Manager
- BrewLab
- Shoe Webpage
- URL QR Generator
- Business Ledger System (clearly marked planned)
- Python/AI practice work

Only information already supplied for the portfolio was used; uncertain links remain placeholders.

## Latest revision
- Removed CGPA from portfolio content.
- Added the supplied LinkedIn profile URL.
- Replaced the About-page education marks/score presentation with a visual three-stage education tree.
- Education order: Buddha Jyoti School → New Horizon College (+2) → Nagarjuna College of Management.

## Project page spacing revision
- Filter controls now have proper pill styling instead of browser-default buttons.
- Project rows have more vertical breathing room, wider gaps and clearer metadata separation.
- Mobile project rows were reworked to avoid cramped columns.

## Project showcase revision
- Removed the easy URL QR Generator from the main showcase.
- Replaced the previous project selection with stronger security, networking, API and full-stack repositories visible in the user's project list.
- Kept Simple IP Sweep lower in the archive because it is a smaller networking utility.
- Avoided claiming features that were not visible in the supplied repository list; descriptions are intentionally concise and portfolio-safe.

## Repository links revision
- Stronger projects are now linked directly to their GitHub repositories.
- The project title/text is intentionally not one giant clickable area.
- Each project has a dedicated **Go to repo** button, making the action obvious and keeping the typography clean.
- External repository links open in a new tab with `noopener noreferrer`.

## Contact link revision
- Replaced `mailto:` contact links with Gmail web Compose links.
- Clicking the email icon/contact email now opens Gmail in the browser with Tusar's email already in the recipient field.
- The contact form also opens Gmail Compose with the subject and message pre-filled.
- This avoids the Windows/Brave `Open Outlook (new)?` application prompt caused by `mailto:`.
