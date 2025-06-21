# Dizme - Creative Designer Portfolio (Next.js)

A modern, responsive portfolio website built with Next.js 15, TypeScript, and React. This project is a complete conversion of an HTML/CSS/JS template into a modern Next.js application with dark mode functionality removed.

## ✨ Features

### 🎨 Design & Layout

- **Modern Landing Page** with hero section, portfolio, services, testimonials, and contact
- **Fully Responsive** design that works on all devices
- **Smooth Scrolling** navigation between sections
- **Interactive Animations** and hover effects
- **Professional Color Scheme** (Purple #8067f0 primary)

### 🚀 Technical Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **React Hooks** for state management
- **Optimized Images** with Next.js Image component
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with lazy loading and code splitting

### 📱 Sections Included

1. **Header** - Fixed navigation with scroll effects
2. **Hero** - Landing section with animated skills icons
3. **Process** - 3-step process showcase
4. **About** - Personal information with animated counters
5. **Portfolio** - Filterable project gallery
6. **Skills** - Animated progress bars
7. **Services** - Service offerings with pricing
8. **Testimonials** - Client reviews carousel
9. **Partners** - Client logos display
10. **News/Blog** - Blog posts section
11. **Subscribe** - Newsletter signup form
12. **Contact** - Contact form with validation

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd go-kids
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
go-kids/
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Fixed navigation
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About section
│   │   ├── Portfolio.tsx    # Portfolio gallery
│   │   ├── Skills.tsx       # Skills with progress bars
│   │   ├── Services.tsx     # Services section
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Partners.tsx     # Partner logos
│   │   ├── News.tsx         # Blog/news section
│   │   ├── Subscribe.tsx    # Newsletter signup
│   │   ├── Contact.tsx      # Contact form
│   │   └── MobileMenu.tsx   # Mobile navigation
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── public/                  # Static assets
│   ├── logo/               # Logo images
│   ├── slider/             # Hero section images
│   ├── portfolio/          # Portfolio images
│   ├── testimonials/       # Client photos
│   ├── skills/             # Skill icons (SVG)
│   ├── service/            # Service images
│   ├── partners/           # Partner logos
│   ├── news/               # Blog images
│   └── ...
└── package.json
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the content in each component file:

**Hero Section** (`app/components/Hero.tsx`):

```tsx
<h3>Your Name</h3>
<p>A <span className="greenText">Your Title</span> From <span className="purpleText">Your Location</span></p>
```

**About Section** (`app/components/About.tsx`):

- Update personal description
- Modify experience counters
- Change profile image

### 2. Images

Replace images in the `public/` directory:

**Required Images:**

- `public/logo/logo.png` - Your logo
- `public/slider/avatar.jpg` - Your profile photo
- `public/slider/1.jpg` - Hero background
- `public/portfolio/` - Your portfolio images
- `public/testimonials/` - Client photos
- `public/skills/` - Skill icons (SVG format recommended)

### 3. Portfolio Projects

Edit `app/components/Portfolio.tsx`:

```tsx
const portfolioItems = [
  {
    id: 1,
    category: "web",
    title: "Your Project Title",
    image: "/portfolio/your-image.jpg",
    description: "Project description...",
  },
  // Add more projects...
];
```

### 4. Services & Pricing

Update `app/components/Services.tsx`:

```tsx
const services = [
  {
    title: "Your Service",
    price: "$99",
    description: "Service description...",
    icon: "/svg/service/your-icon.svg",
  },
  // Add more services...
];
```

### 5. Skills

Modify `app/components/Skills.tsx`:

```tsx
const skills = [
  { name: "Your Skill", percentage: 90 },
  // Add more skills...
];
```

### 6. Color Scheme

Update colors in `app/globals.css`:

```css
.purpleText {
  color: #your-primary-color !important;
}
.greenText {
  color: #your-secondary-color !important;
}
.orangeText {
  color: #your-accent-color !important;
}
```

### 7. Fonts

The project uses Google Fonts (Jost & Open Sans). To change fonts, update the imports in `app/globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap");
```

## 📧 Contact Form Setup

The contact form is ready for integration with your backend. Update the form submission in `app/components/Contact.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add your form submission logic here
  // Example: send to your API endpoint
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
};
```

## 🔧 Technical Details

### Dependencies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **React** - UI library
- **Styled-JSX** - CSS-in-JS (built into Next.js)

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Features

- **Image Optimization** - Automatic image optimization with Next.js Image
- **Code Splitting** - Automatic code splitting for faster loading
- **Lazy Loading** - Components load as needed
- **SEO Optimized** - Proper meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Works with static export
- **AWS**: Deploy with Amplify or S3 + CloudFront
- **DigitalOcean**: Use App Platform

## 📝 Notes

- **Dark Mode Removed**: All dark mode functionality has been removed as requested
- **Mobile Responsive**: Fully responsive design with mobile-first approach
- **Accessibility**: Basic accessibility features included
- **SEO Ready**: Meta tags and structured data included

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is based on a premium HTML template. Please ensure you have proper licensing for commercial use.

---

**Need Help?** Check the component files for detailed implementation examples and styling patterns.
