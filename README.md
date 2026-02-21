# BAAM Materials Ltd — Company Website

Static website for **BAAM Materials Ltd** (baammaterials.co.uk), a direct-to-site construction materials supplier.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | Products & Services |
| `contact.html` | Contact Us |
| `styles.css` | All styles |
| `main.js` | Scroll header, mobile menu, fade-in animations |

## Deployment

Hosted via **GitHub Pages**. To enable:
1. Go to your repository → Settings → Pages
2. Set Source to `main` branch, root folder
3. Site will be live at `https://yourusername.github.io/BAAM`

## Contact Form

The contact form currently shows a success message client-side only. To make it send real emails:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy your form ID
3. In `contact.html`, set `action="https://formspree.io/f/YOUR_ID"` on the `<form>` tag
4. In `main.js`, remove the `e.preventDefault()` line in the contact form handler

## Brand

- **Black:** `#1a1a1a`
- **Gold:** `#D4A017` → `#F5C842` (gradient)
- **White:** `#ffffff`
- **Fonts:** Montserrat (headings) + Open Sans (body) via Google Fonts
