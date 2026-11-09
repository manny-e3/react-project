# Nova Cloud OS — React Landing Page

A modern, responsive, high-performance landing page built with **React 19**, **Vite**, and **Tailwind CSS v4**.

## ✨ Features

- **Responsive Navigation**: Sticky header with announcement banner, brand identity, navigation anchor links, and mobile menu drawer.
- **Hero Section**: High-converting headline, ambient glow backdrops, dual call-to-actions, and an interactive simulated edge cloud telemetry dashboard.
- **Social Proof & Logo Cloud**: Trusted partner brand badges with interactive hover states.
- **Feature Grid**: Modular, high-impact feature cards highlighting speed, automated CI/CD, zero-trust security, observability, and scaling.
- **Interactive Developer Showcase**: Interactive tab switcher with code snippets (CLI deployment, Edge Workers, and Configuration schema) with one-click clipboard copy.
- **Metrics / Stats Counter**: Clean metrics grid with key performance indicators.
- **Dynamic Pricing**: Toggle between Monthly and Annual billing (with a 20% discount badge), highlighted Pro tier, and detailed feature breakdowns.
- **Customer Testimonials**: Social proof cards with 5-star ratings, quotes, and customer profile details.
- **Expandable FAQ Accordion**: Interactive accordion allowing users to inspect answers to common questions.
- **High-Impact CTA Banner**: Newsletter & free trial onboarding box with interactive submission feedback.
- **Comprehensive Footer**: Categorized site directory, SVG social links, and live uptime indicator.

---

## 🚀 Getting Started

### 1. Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the URL displayed in your terminal).

### 2. Production Build
To generate an optimized production bundle:
```bash
npm run build
```

### 3. Preview Production Build
To preview the generated build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
reactproject/
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration with Tailwind CSS v4 plugin
└── src/
    ├── main.jsx                 # React root mount
    ├── index.css                # Global styles & Tailwind CSS import
    ├── App.jsx                  # Main page assembler
    └── components/              # Modular landing page sections
        ├── Navbar.jsx           # Header & navigation
        ├── Hero.jsx             # Hero & interactive dashboard preview
        ├── LogoCloud.jsx        # Partner logos
        ├── Features.jsx         # Feature grid
        ├── InteractiveShowcase.jsx # Interactive code / CLI preview
        ├── Stats.jsx            # Key performance metrics
        ├── Pricing.jsx          # Pricing plans & monthly/annual toggle
        ├── Testimonials.jsx     # User reviews & ratings
        ├── Faq.jsx              # Expandable accordion
        ├── CtaBanner.jsx        # Lead capture & CTA box
        └── Footer.jsx           # Footer navigation & social links
```
