# 🎨 Angel Peguero Jr — Portfolio

**🌐 [Live Site](https://apeg93.github.io/PORTFOLIO/)**

A modern, responsive portfolio website built with vanilla HTML5, CSS3, and JavaScript. Showcases projects, skills, interactive story cards, and contact integration.

---

## ✨ Features

### Core Sections

- **Profile Section** — Bio, avatar, and skill icons (HTML5, CSS3, JavaScript, Node.js, React, Git, GitHub, Figma)
- **Story Cards** — Three interactive lesson cards with like functionality and email notifications
- **Projects Showcase** — Live project links with hover effects and descriptions
- **Music Playlists** — Embedded Spotify and Apple Music players with full controls
- **Contact Form** — Real-time validation with email submission via FormSubmit.co
- **Image Modal** — Full-screen overlay preview with keyboard navigation
- **Social Links** — Direct links to Instagram, YouTube, and other social profiles
- **Responsive Design** — Fully optimized for all screen sizes (400px–1280px+)

---

## 🛠 Tech Stack

| Layer            | Technology                                                       |
| ---------------- | ---------------------------------------------------------------- |
| **Frontend**     | HTML5, CSS3 (Flexbox, Grid, Animations), Vanilla JavaScript ES6+ |
| **Architecture** | Modular CSS (15 separate blocks); BEM naming convention          |
| **Forms**        | FormSubmit.co for email notifications                            |
| **Embeds**       | Spotify & Apple Music API integrations                           |
| **Typography**   | Google Fonts (Noto Serif, JetBrains Mono)                        |

---

## 📁 Project Structure

```
portfolio/
├── index.html                      # Main application page
├── README.md                       # Documentation
├── css/blocks/                     # Modular CSS architecture
│   ├── variables.css              # CSS custom properties & color palette
│   ├── reset.css                  # Browser normalization
│   ├── animations.css             # Keyframes & page transitions
│   ├── nav.css                    # Navigation bar styling
│   ├── header.css                 # Hero section
│   ├── content.css                # Main content wrapper
│   ├── profile.css                # Profile card & skills
│   ├── cards.css                  # Story cards with animations
│   ├── projects.css               # Project showcase grid
│   ├── about.css                  # About section
│   ├── playlist.css               # Music embed styling
│   ├── form.css                   # Form & validation styles
│   ├── footer.css                 # Footer & social links
│   ├── modal.css                  # Image preview modal
│   └── responsive.css             # Mobile-first media queries
├── js/
│   ├── index.js                   # Core app logic
│   ├── validation.js              # Form validation
│   └── playlists.js               # Playlist functionality
└── images/                        # Assets directory
    ├── MEPR.jpg
    ├── SPOTS 6.jpg
    └── coffeeshop.png
```

---

## Notes

- All modal functionality is centralized in `js/index.js`
- Form validation is reusable across all forms via `js/validation.js`
- Playlist functionality is self-contained in `js/playlists.js`
- CSS is organized by component with clear section comments
- Responsive design is handled in media queries at the bottom of `css/styles.css`
