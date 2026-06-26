# Deep Birwadkar — Portfolio

A premium, modern developer portfolio built with React.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🌙 Dark / Light mode toggle
- ⚡ Particle canvas hero with typewriter animation
- 🎨 Glassmorphism cards and premium glassmorphism UI
- 🎬 Framer Motion page animations and micro-interactions
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖱️ Cursor glow effect (desktop)
- 🔄 Loading screen with progress bar
- 🧭 Active nav link tracking on scroll
- 💌 Contact form with animated states
- 📊 Skill bars with category filter

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky nav with scroll spy
│   │   ├── Hero.jsx        # Full-screen hero with particles
│   │   ├── About.jsx       # About section with traits
│   │   ├── Skills.jsx      # Skills grid with filter
│   │   ├── Projects.jsx    # Project cards with links
│   │   ├── Education.jsx   # Timeline + certifications
│   │   ├── Contact.jsx     # Contact form + social
│   │   ├── Footer.jsx      # Footer
│   │   ├── Loader.jsx      # Loading screen
│   │   └── CursorGlow.jsx  # Mouse glow effect
│   ├── context/
│   │   └── ThemeContext.jsx # Dark/light mode context
│   ├── data.js             # All portfolio content
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Update your info
Edit `src/data.js` to change:
- Your name, bio, and career objective
- Skills and proficiency levels
- Projects (title, description, links, tags)
- Education history
- Certifications

### Change colors
Edit `src/index.css` CSS variables and `tailwind.config.js` theme colors.

### Add your photo
In `src/components/Hero.jsx`, replace the `DB` text avatar with:
```jsx
<img src="/your-photo.jpg" alt="Deep Birwadkar" className="w-full h-full object-cover rounded-full" />
```

### Update contact links
In `src/components/Contact.jsx`, update the `contacts` array with your real links.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styling |
| Framer Motion 11 | Animations |
| React Icons 5 | Icons |

## 📦 Deploy

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drop the dist/ folder on netlify.com
```

---

Built with ❤️ by Deep Birwadkar
