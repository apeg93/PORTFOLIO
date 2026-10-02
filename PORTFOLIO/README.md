# Angel Peguero Jr — Portfolio

Modern, responsive portfolio built with vanilla HTML5, CSS3, and JavaScript. Showcases projects, skills, and interactive features.

## Features

- **Profile Section** — Bio, avatar, and skill icons (HTML5, CSS3, JavaScript, Node.js, React, Git, GitHub, Figma)
- **Story Cards** — Three interactive lesson cards (Leisure, Growth, Software Engineering) with like functionality
- **Projects Showcase** — Spots (photo app) and Coffee Shop with live links
- **Music Playlists** — Embedded Spotify and Apple Music with full controls
- **Contact Form** — Real-time validation, email submission via FormSubmit.co
- **Image Modal** — Full-page overlay preview with fixed positioning
- **Responsive Design** — Optimized across all screen sizes (400px–1280px)

## Tech Stack

- **Frontend**: HTML5, CSS3 (Flexbox, Grid, Keyframe animations), Vanilla JavaScript ES6+
- **Styling**: Modular CSS architecture (15 separate blocks for maintainability)
- **Services**: FormSubmit.co (email notifications for form + likes)
- **Music APIs**: Spotify & Apple Music embed providers

## Project Structure

```
portfolio/
├── index.html                 # Main page
├── README.md                  # This file
├── css/blocks/               # Modular CSS files
│   ├── variables.css         # Color palette & CSS variables
│   ├── reset.css             # Browser resets
│   ├── animations.css        # Keyframes & page background
│   ├── nav.css               # Navigation styling
│   ├── header.css            # Header & banner
│   ├── content.css           # Content wrapper & typography
│   ├── profile.css           # Profile section
│   ├── cards.css             # Story cards & animations
│   ├── projects.css          # Project cards
│   ├── about.css             # About section
│   ├── playlist.css          # Music embeds
│   ├── form.css              # Contact form & validation
│   ├── footer.css            # Footer
│   ├── modal.css             # Image preview modal
│   └── responsive.css        # Media queries
├── js/
│   ├── index.js              # Main app logic
│   ├── validation.js         # Form validation
│   └── playlists.js          # Spotify/Apple Music handling
└── images/                   # Photo assets
    ├── avatar.jpg
    ├── SPOTS 6.jpg
    └── cofeeshop.png
```

## Key Features

### Story Cards

- Click on card images to open full-screen preview modal
- Click heart button (♡) to like and send email notification to angel.peguero14@gmail.com
- Animated neon glow effect on like action

### Projects

- Live project thumbnails with hover effects
- Direct links to project pages

### Contact Form

- Real-time email/phone validation
- Smooth error messages
- Success animation on submit
- Email sent to angel.peguero14@gmail.com via FormSubmit.co

### Playlists

- Full Spotify & Apple Music embeds
- No internal scrolling needed
- 450px height optimized for mobile & desktop

### Modal Preview

- Fixed dark overlay (#000000cc)
- Image scrolls as user scrolls page
- 750px top padding for optimal positioning
- Close on Escape key or overlay click

## Color Palette

- **Primary**: Hunter Green (#1b4332)
- **Accent**: Medium Green (#2d6a4f)
- **Light**: Mint Green (#52b788)
- **Text**: Dark Gray (#1a2e1a), Muted Gray (#3d5c3d)
- **Overlay**: Black with transparency

## Responsive Breakpoints

- 1280px+ — Desktop (full layout)
- 1024px — Large tablets
- 900px — Tablets & landscape
- 768px — Medium devices
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
