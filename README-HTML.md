# Eridecommerce Website - HTML Version

A professional, modern, and conversion-focused static website for Eridecommerce - an Amazon FBA Private Label & Wholesale Management agency.

## ✅ Features

- ✅ Modern, responsive design with unique color palette
- ✅ Home page with hero section, services overview, and performance metrics
- ✅ About Us page
- ✅ Services page with detailed offerings
- ✅ Case Studies page with editable Before/After cards (loaded from JSON)
- ✅ Contact Us page with email form
- ✅ Newsletter signup
- ✅ Chat widget
- ✅ All footer links (Careers, Blog, FAQs, Reviews)

## 🚀 How to Open

### Option 1: Direct Browser Opening
Simply double-click on `index.html` to open it in your default web browser.

### Option 2: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Python Simple Server (if Python is installed)
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## 📁 File Structure

```
ErideCommerce/
├── index.html              # Home page
├── about.html              # About Us
├── services.html           # Services
├── case-studies.html       # Case Studies (loads from JSON)
├── contact.html            # Contact Us
├── careers.html            # Careers
├── blog.html               # Blog
├── faqs.html               # FAQs
├── reviews.html            # Reviews
├── styles.css              # All styles
├── script.js               # JavaScript functionality
└── data/
    └── caseStudies.json    # Editable case studies data
```

## ✏️ Customization

### Case Studies
Edit `data/caseStudies.json` to update:
- Client names and industries
- Before/after images
- All metrics (revenue, profit margins, ACOS, conversion rates, rankings)
- Duration and highlights

### Colors
Edit `styles.css` and change the CSS variables in the `:root` selector:
- `--primary-600` - Main brand color (blue)
- `--secondary-600` - Secondary color (purple)
- `--accent-500` - Accent color (orange)

### Content
Simply edit the HTML files directly to change any text, images, or content.

## 📧 Contact Form

The contact form currently uses a `mailto:` link as a fallback. To integrate with an email service:
1. Sign up for EmailJS or another email service
2. Update the contact form JavaScript in `contact.html`

## 🎨 Images

Currently using Unsplash placeholder images. Replace with your own images by:
1. Saving images to an `images/` folder
2. Updating image paths in the HTML files

## 📱 Fully Responsive

The website is fully responsive and works on:
- Desktop
- Tablet
- Mobile phones

## 🌐 Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

---

**Note**: This is a static HTML website - no server or Node.js required! Just open `index.html` in your browser.




