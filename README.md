# Kamesh J – Luxury "Black & Gold" Portfolio Website

> A production-ready, ultra-responsive single-page portfolio crafted for **Kamesh J** — showcasing **Full Stack Developer (MERN)**, **QA Automation Engineer**, and **Software Developer (SDE)** capabilities with an opulent black-and-gold design aesthetic, silky smooth animations, and role switching.

---

## ✨ Features & Design Highlights

- **Luxury Black & Gold Aesthetics**: Deep obsidian and charcoal background (`#070707`, `#111111`) complemented by metallic gold gradients (`#D4AF37`, `#F5D77A`, `#B8860B`, `#FFF1B8`), frosted glassmorphism, and subtle ambient glows.
- **Dynamic 3-Domain Role Switcher**:
  - Seamlessly toggle across **Full Stack Developer**, **QA Automation Engineer**, and **Software Developer**.
  - Automatically re-orders featured projects and technical skills.
  - Dynamically updates the hero tagline, bio summary, rotating roles, and resume download button (**MERN Resume**, **QA Resume**, **SDE Resume**).
  - Mode pill in the navbar and mobile menu reflects active domain: `Mode: Full Stack`, `Mode: QA`, `Mode: SDE`.
- **Profile Photo Avatar**:
  - Premium circular avatar frame with a rotating gold gradient ring and subtle float animation.
  - Image loaded from `/public/profile.jpg` (or graceful fallback monogram `K` if missing).
- **Smooth 60fps Animations**:
  - SVG stroke drawing gold monogram ("K") preloader curtain.
  - Inertia-tracked custom gold cursor with interactive hover growth (auto-disabled on touch devices).
  - High-performance gold-dust canvas background.
  - Scroll progress bar at the top with spring physics.
  - Lenis smooth scrolling for luxury editorial feel.
- **Featured Projects**:
  - **PMSS Scholarship Portal** (Full Stack MERN & Automated Playwright test suites; custom SDE architectural summary in SDE mode)
  - **Lapwise** (Intelligent Laptop Recommendation System & QA Boundary testing)
  - Detailed modal view for reviewing architecture, locators, and workflows.
  - In SDE mode: LeetCode profile highlight card linking to `https://leetcode.com/u/kamesh_55/`.
- **Interactive Lightbox Previews**:
  - Clickable certificate modal with credential verification links for **Cognifyz Technologies** (Internship), **Infosys Springboard** (Playwright with JavaScript), and **Udemy** (JavaScript).
- **Working Contact Form**:
  - Delivers messages directly to `kameshj001@gmail.com` via Formspree API with client-side validation, spam honeypot, loading state, animated success message, error retry, and mailto fallback.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Typography**: *Cormorant Garamond* (Serif display), *Plus Jakarta Sans* (Body), *JetBrains Mono* (Code)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your machine.

### 2. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 3. Running Locally
Start the development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the URL printed in the terminal).

### 4. Building for Production
To generate an optimized production bundle:
```bash
npm run build
```
Preview the built bundle locally:
```bash
npm run preview
```

---

## ✉️ Setting Up Formspree for Contact Form

Follow these steps to have contact submissions delivered to `kameshj001@gmail.com`:

1. Go to [https://formspree.io](https://formspree.io) and register for a free account using **kameshj001@gmail.com**.
2. Click **+ New Form**, name it (e.g., `Kamesh Portfolio`), and set the target email to `kameshj001@gmail.com`.
3. Copy the resulting endpoint URL (e.g. `https://formspree.io/f/xyzabkd`).
4. In your project root, create a file named `.env` (or copy from `.env.example`):
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
5. Restart your development server (`npm run dev`).
6. Send a test message through the contact form on your portfolio website.
7. Check your Gmail inbox (`kameshj001@gmail.com`) including the Spam folder to confirm receipt.

*(Note: If the endpoint is not set up, the form automatically falls back to opening a prefilled email client draft to `kameshj001@gmail.com`.)*

---

## 🖼️ How to Add / Replace Profile Photo & Resume Links

### 1. Profile Photo
Replace `/public/profile.jpg` with your own square photo (at least 600×600 px). The avatar in the Hero and About sections automatically displays it with a rotating gold gradient ring.

### 2. SDE Resume Link
Open `src/data/portfolioData.js` and edit the `SDE_RESUME_URL` constant:
```js
export const SDE_RESUME_URL = "https://drive.google.com/file/d/YOUR_SDE_LINK/view?usp=drive_link";
```
You can also place a PDF at `/public/resumes/Kamesh_SDE_Resume.pdf`.

---

## 📁 File Structure

```
├── public/
│   ├── favicon.svg              # Gold 'K' monogram favicon
│   ├── profile.jpg              # Profile photo (with elegant fallback)
│   └── certificates/            # High-resolution SVG / image certificates
│       ├── cognifyz-internship.svg
│       ├── infosys-playwright.svg
│       └── udemy-javascript.svg
├── src/
│   ├── components/
│   │   ├── Avatar.jsx           # Gold shimmering ring photo avatar
│   │   ├── Preloader.jsx        # SVG stroke drawing 'K' monogram
│   │   ├── CustomCursor.jsx     # Inertia spring gold cursor
│   │   ├── ScrollProgress.jsx   # Top gold progress bar
│   │   ├── Navbar.jsx           # Floating glass navbar + 3-mode selector
│   │   ├── RoleSwitcher.jsx     # 3-domain toggle pill
│   │   ├── GoldCanvas.jsx       # 60fps gold dust particles
│   │   ├── ProjectModal.jsx     # Detailed project modal
│   │   ├── CertificateLightbox.jsx # Certificate preview lightbox
│   │   └── Footer.jsx           # Brand footer & back to top
│   ├── context/
│   │   └── RoleContext.jsx      # Role state management ('fullstack' | 'qa' | 'sde')
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content
│   ├── sections/
│   │   ├── Hero.jsx             # Hero with avatar, no clipping, honest stats
│   │   ├── About.jsx            # Dynamic role bio + avatar + quick facts
│   │   ├── Skills.jsx           # Categorized skills with dynamic sorting
│   │   ├── Projects.jsx         # Project cards + LeetCode highlight
│   │   ├── Experience.jsx       # Cognifyz internship & SIH hackathon
│   │   ├── Education.jsx        # Gold timeline with scores
│   │   ├── Certifications.jsx   # Grid of 3 certificates with lightbox
│   │   ├── CodingProfiles.jsx   # LeetCode & GitHub cards
│   │   └── Contact.jsx          # Formspree form + mailto fallback
│   ├── App.jsx                  # Main single-page application & Lenis
│   ├── main.jsx                 # Entry point
│   └── index.css                # Custom gold utilities & styles
├── .env.example                 # Formspree configuration template
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```
# kamesh-portfolio
