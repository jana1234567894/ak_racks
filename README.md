# AK Racks - Supermarket & Storage Rack Manufacturers

A professional B2B manufacturing website for AK Racks, a supermarket and storage rack manufacturer based in Trichy, Tamil Nadu, India.

## Features

### 🎨 Design
- **Industrial Professional Theme**: Clean, trustworthy design with dark blue, charcoal, and steel gray color palette
- **Modern Typography**: Google Fonts (Inter & Space Grotesk) for premium feel
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Premium Aesthetics**: Professional gradients, smooth animations, and micro-interactions

### 📱 Pages
1. **Home** - Hero section, product showcase, features, gallery preview
2. **About Us** - Company overview, expertise, service area
3. **Products** - Detailed product catalog with specifications
   - Supermarket Display Racks
   - Department Store Racks
   - Vegetable & Fruit Racks
   - Warehouse Storage Racks
   - Custom Rack Solutions
4. **Gallery** - Project installations and factory photos
5. **Contact** - Multiple contact methods, form, and Google Maps

### 🚀 Key Features
- **WhatsApp Integration**: Sticky button + CTAs throughout
- **SEO Optimized**: 
  - Semantic HTML5
  - Meta tags and descriptions
  - LocalBusiness schema markup
  - Proper heading hierarchy
  - Image alt text
- **Performance Optimized**:
  - Lazy loading images
  - Debounced scroll events
  - Optimized animations
  - Clean, minimal JavaScript
- **Interactive Elements**:
  - Smooth scrolling
  - Active navigation highlighting
  - Image lightbox in gallery
  - Scroll-to-top button
  - Mobile hamburger menu

### 💬 WhatsApp Integration
- Pre-filled messages for different products
- Form submissions via WhatsApp
- Sticky floating button
- Multiple CTA placements

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks, lightweight
- **Google Fonts** - Inter & Space Grotesk
- **Google Maps** - Embedded location map

## File Structure

```
AK_Racks/
├── index.html              # Home page
├── about.html              # About Us
├── products.html           # Products catalog
├── gallery.html            # Project gallery
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # Interactive functionality
│   └── images/             # Product and gallery images
└── README.md               # This file
```

## Local Development

### Option 1: Python Server
```bash
# Navigate to project directory
cd /Users/jayaprakash/Sites/AK_Racks

# Start Python server (Python 3)
python3 -m http.server 8000

# Open browser to http://localhost:8000
```

### Option 2: PHP Server
```bash
php -S localhost:8000
```

### Option 3: VS Code Live Server
- Install Live Server extension
- Right-click on index.html
- Select "Open with Live Server"

## Deployment

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy (automatic builds on push)

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source

## Customization

### Update Contact Information
Replace placeholder phone number **+91-98765-43210** with actual number in:
- All HTML files (search for `919876543210`)
- WhatsApp CTAs
- Footer sections

### Update Address
Replace "Industrial Area, Trichy, Tamil Nadu 620001" with actual address in:
- Footer sections
- Contact page
- Schema markup in index.html

### Update Email
Replace `info@akracks.com` with actual email address

### Update Google Maps
In `contact.html`, update the iframe src with coordinates of actual location

### Change Colors
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
  --primary-dark: #1a2332;
  --accent-orange: #ff6b35;
  /* ... other colors */
}
```

## SEO Checklist

- ✅ Meta titles and descriptions
- ✅ Schema.org LocalBusiness markup
- ✅ Semantic HTML structure
- ✅ Image alt attributes
- ✅ Mobile-responsive
- ✅ Fast loading
- ✅ SEO-friendly URLs
- ✅ Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## Performance

- Optimized images (resize to appropriate dimensions)
- Consider WebP format for better compression
- Lazy loading implemented
- Minimal JavaScript
- No external dependencies except fonts

## License

© 2026 AK Racks. All rights reserved.

## Contact

For questions or support:
- Phone: +91-98765-43210
- Email: info@akracks.com
- Location: Trichy, Tamil Nadu, India
