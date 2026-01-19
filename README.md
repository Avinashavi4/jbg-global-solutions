# JBG Global Solutions - Professional Website

A modern, responsive website for JBG Global Solutions, a professional software development and IT services company. Built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean and professional design with gradient elements
- **Multiple Pages**:
  - Home: Hero section with services overview
  - About: Company information, mission, vision, and team
  - Services: Detailed service offerings
  - Portfolio: Project showcase with filtering
  - Contact: Contact form and information

- **Interactive Elements**:
  - Smooth navigation and scrolling
  - Portfolio filtering by category
  - Responsive contact form
  - Mobile hamburger menu
  - Scroll animations

## Project Structure

```
JBG Solutions/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page
├── assets/
│   ├── css/
│   │   └── style.css  # Main stylesheet
│   ├── js/
│   │   └── script.js  # Main JavaScript
│   └── images/
│       └── logo.png   # Company logo (add your image here)
└── README.md          # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone or download the project files
2. Replace the logo placeholder with your actual logo in `assets/images/logo.svg` (or update references to use `logo.png`)
3. Update contact information in the footer and contact page
4. Customize colors and content as needed

### Running the Website

Simply open `index.html` in your web browser. No server setup is required for local viewing.

For production deployment:
- Upload all files to your web hosting server
- Ensure all file paths are correct
- Set up a backend service for the contact form submission

## Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #0052a3;      /* Main blue */
    --secondary-color: #00a8e8;    /* Light blue */
    --accent-color: #00c9ff;       /* Accent cyan */
    /* ... other variables ... */
}
```

### Content
- Edit HTML files directly to change text and structure
- Update navigation links if you change page names
- Modify footer information in all pages

### Logo
- Replace `assets/images/logo.png` with your company logo
- Recommended size: 200x200px or larger
- Formats: PNG, JPG, SVG (SVG preferred for scalability)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## Contact Form

The contact form includes client-side validation. To enable email sending, you'll need to:
1. Set up a backend service (Node.js, PHP, Python, etc.)
2. Update the form submission handler in `assets/js/script.js`
3. Process form data and send emails on the server side

## Performance

- Minify CSS and JavaScript for production
- Optimize images before deployment
- Use a CDN for Font Awesome icons (already included)
- Consider lazy loading for images

## Future Enhancements

- Add a blog section
- Implement testimonials/reviews
- Add case study pages
- Integrate email newsletter signup
- Add live chat support
- Implement analytics tracking

## License

This website template is provided as-is for JBG Global Solutions use.

## Support

For customization or technical support, contact your development team.

---

**Last Updated**: December 2025
**Version**: 1.0
