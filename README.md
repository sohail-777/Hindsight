# Hindsight: SaaS Landing Page

A responsive landing page for **Hindsight**, an invented SaaS product that gives every team decision an expiry date.

## The idea

Teams write down *what* they decided, but the reasons behind a decision quietly go out of date. Hindsight records each decision together with the **assumptions** it depends on (for example "monthly churn stays under 3%"), gives every assumption an owner and an expiry date, and prompts the owner to confirm it or reopen the decision when it expires.

The hero section has a working example: drag the **Fast-forward time** slider and watch each assumption change from *Holding* to *Expires soon* to *Expired*.

## Setup

Requirements: [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173
```

Other commands:

```bash
npm run build      # create a production build in /dist
npm run preview    # serve the production build locally
```

## Technologies used

- **React 18** (function components and hooks)
- **Vite 5** (dev server and build tool)
- **HTML5**, **CSS3** (hand-written, CSS variables, Grid and Flexbox, no UI framework)
- **JavaScript (ES modules)**
- Google Fonts: Bricolage Grotesque and Public Sans

No backend, database, login, payment, API keys or credentials are used.

## Requirements checklist

| Requirement | Where |
| --- | --- |
| Navigation bar with logo, links, Get started button | `components/Navbar.jsx` |
| Hero with headline, description, CTA and visual | `components/Hero.jsx`, `components/DecisionDemo.jsx` |
| At least three features | `components/Features.jsx` (4 features) |
| About / How it works | `components/HowItWorks.jsx` |
| At least two pricing plans | `components/Pricing.jsx` (3 plans, monthly/yearly toggle) |
| Contact / demo request and footer | `components/Contact.jsx`, `components/Footer.jsx` |
| Nav links scroll to sections | `Navbar.jsx`, `utils.js` (`scrollToSection`) |
| Buttons do something meaningful | Hero buttons scroll; plan buttons scroll to the form and pre-select the plan; "Notify owners" and the pricing toggle change state |
| Form validation and success message | `Contact.jsx` (name, email, team size, message length) |
| Responsive on mobile and desktop | `styles.css` (breakpoints at 1024px, 860px, 560px, hamburger menu on small screens) |

## Project structure

```
hindsight-landing/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # entry point
    ├── App.jsx             # page layout and plan selection state
    ├── data.js             # all copy: nav links, features, steps, plans
    ├── utils.js            # scrollToSection helper
    ├── styles.css          # all styling and design tokens
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── DecisionDemo.jsx
        ├── Features.jsx
        ├── HowItWorks.jsx
        ├── Pricing.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Logo.jsx
        └── Icons.jsx
```

## Design and accessibility notes

- Colors are defined once as CSS variables at the top of `styles.css`. Status is never shown by color alone: every state also has a text label.
- Skip link, visible keyboard focus, labelled form fields with `aria-invalid` and error messages, `aria-live` status updates, and `prefers-reduced-motion` support.
- Edit page text in `src/data.js` without touching the components.

## Notes

The email address, phone number and company details are placeholders. The demo form does not send data anywhere; it validates the input and shows a success message.
