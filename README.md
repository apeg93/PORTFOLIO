# 🎨 Angel Peguero Jr — Portfolio

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

## 🚀 Quick Start

### View Locally

1. Clone or download this repository
2. Open `index.html` in your browser
3. No build process or dependencies required — pure vanilla stack

### Make It Your Own

1. Replace profile image (`images/MEPR.jpg`)
2. Update contact email in `js/validation.js`
3. Customize colors in `css/blocks/variables.css`
4. Update project links and descriptions in `index.html`
5. Replace social media URLs in the footer section

---

## 🎯 Key Functionality

### Story Cards (Like Feature)

- Click card images to open full-screen preview
- Click heart icon to like and trigger email notification
- Animated neon glow effect with visual feedback
- Notifications sent to: `angel.peguero14@gmail.com`

### Contact Form

- **Real-time validation** — Email & phone format checking
- **Error messages** — Clear feedback on invalid input
- **Success animation** — Confirmation feedback on submission
- **Email delivery** — Powered by FormSubmit.co

### Music Playlists

- Spotify & Apple Music full-player embeds
- Optimized for mobile & desktop viewing
- No scrolling within embeds (450px height)

### Image Modal

- Click project/story card images to preview fullscreen
- Dark overlay (#000000cc) with fixed positioning
- Close with Escape key or overlay click
- Smooth scroll behavior

---

## 🎨 Design System

### Color Palette

| Color         | Hex               | Usage                       |
| ------------- | ----------------- | --------------------------- |
| Primary Green | `#1b4332`         | Headings, primary elements  |
| Accent Green  | `#2d6a4f`         | Borders, secondary elements |
| Light Green   | `#52b788`         | Highlights, hovers          |
| Text Dark     | `#1a2e1a`         | Body text                   |
| Text Muted    | `#3d5c3d`         | Secondary text              |
| Glass Overlay | `rgba(0,0,0,0.8)` | Modals, overlays            |

### Responsive Breakpoints

```
Desktop      1280px+
Tablet       900px-1279px
Mobile       768px-899px
Small Mobile 400px-767px
```

---

## ⚙️ Configuration

### Email Notifications

Update the email recipient in `index.html` form action:

```html
<!-- Form: action="https://formsubmit.co/YOUR_EMAIL_HERE" -->
```

### Custom Colors

Edit CSS variables in `css/blocks/variables.css`:

```css
:root {
  --color-primary: #1b4332;
  --color-accent: #2d6a4f;
  /* ... more variables ... */
}
```

### Social Links

Update URLs in the footer section of `index.html`:

```html
<a href="https://your-social-url" class="footer__social-link">Platform Name</a>
```

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔧 Development Notes

- Uses **ES6+ JavaScript** with modern syntax
- **BEM CSS methodology** for maintainable styles
- **Flexbox & CSS Grid** for responsive layouts
- **CSS animations** for performance (GPU-accelerated)
- **FormSubmit.co** integration for serverless form handling
- **No external frameworks** — lightweight & fast

---

## 📄 License

© 2026 Angel Peguero Jr. All rights reserved.

---

## 📞 Connect

- **YouTube**: [@angelpeguerojr](https://www.youtube.com/@angelpeguerojr)
- **Instagram**: [@peguero_27](https://www.instagram.com/peguero_27)
- **Email**: angel.peguero14@gmail.com
- 630px — Large phones
- 480px — Standard phones
- 400px — Small phones (iPhone SE)

## How to Deploy

### GitHub Pages

1. Create a new repository named `username.github.io`
2. Push this portfolio to the repo
3. Enable GitHub Pages in repo settings
4. Your portfolio is live at `https://username.github.io`

### Custom Domain

1. Update DNS settings to point to GitHub Pages IP
2. Add your domain in GitHub Pages settings
3. Update form submission email if needed

## Development

### Local Testing

Open `index.html` directly in a browser or use a local server:

```bash
python -m http.server 8000
# Visit localhost:8000
```

### Modifying Styles

Edit individual CSS files in `css/blocks/` instead of one large stylesheet. Each file handles one component or feature.

### Adding New Content

- **Cards**: Edit HTML in story cards section
- **Projects**: Add new project-card elements
- **Images**: Add files to `images/` folder and update HTML paths
- **Playlists**: Update Spotify/Apple Music embed URLs

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Author

Angel Peguero Jr — Software Engineer  
[GitHub](https://github.com) • [Email](mailto:angel.peguero14@gmail.com)

---

_Last updated: April 3, 2026_

- `thumbnail_IMG_0109.jpg` - Story card image (Leisure Pursuits)
- `thumbnail_IMG_0353.jpg` - Story card image (Growth)
- `thumbnail_IMG_0112.jpg` - Story card image (Software Engineering)
- `raul-lopez-jimenez-DWpVbMjVd3A-unsplash.jpg` - Header background image

## How to Work with These Files

### Editing Styles

1. Open `css/styles.css`
2. Find the relevant section (search for component name like `.card`, `.modal`, etc.)
3. Make your CSS changes
4. Save and reload the browser

### Adding New Features

1. **JavaScript logic** → Add to or create new files in `js/`
2. **Styling** → Add to `css/styles.css`
3. **HTML elements** → Add to `index.html` and import in JS

### Example: Adding a New Modal

1. Add HTML modal markup to `index.html`
2. Add CSS styles to `css/styles.css`
3. Add event listeners and logic to `js/index.js`
4. Use existing modal functions: `openModal()` and `closeModal()`

## Load Order

**IMPORTANT**: Scripts must load in this order to avoid dependencies:

1. `js/validation.js` (provides form validation utilities)
2. `js/playlists.js` (handles playlist embeds independently)
3. `js/index.js` (main app - requires validation.js functions)

This order is already set in `index.html` at the bottom of the file.

## Working with Individual Files

### If you want to focus on styling

- Edit only `css/styles.css`
- No need to touch JS files
- Changes apply immediately on refresh

### If you want to add interactivity

- Add JavaScript to appropriate file in `js/` folder
- Most common: `js/index.js` for core functionality
- Keep validation logic in `js/validation.js`
- Keep playlist logic in `js/playlists.js`

### If you want to add new sections

- Add HTML to `index.html`
- Add CSS to `css/styles.css`
- Add functionality to `js/index.js` or create new file

## Next Steps

1. **Add images** to the `images/` folder (referenced in HTML)
2. **Update colors/fonts** in `css/styles.css` `:root` variables
3. **Add new functionality** by extending files in `js/` folder
4. **Create additional JS modules** as needed for specific features

## Notes

- All modal functionality is centralized in `js/index.js`
- Form validation is reusable across all forms via `js/validation.js`
- Playlist functionality is self-contained in `js/playlists.js`
- CSS is organized by component with clear section comments
- Responsive design is handled in media queries at the bottom of `css/styles.css`
