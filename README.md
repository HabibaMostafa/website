# Habiba's Portfolio

A modern, production-ready portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Animated Hero Section** with rotating keywords showcasing different roles
- **Interactive Project Cards** with smooth hover effects and animations
- **Expandable Skills Categories** with accordion-style interactions
- **Light/Dark Mode Toggle** with persistent theme preference
- **Fully Responsive Design** optimized for all screen sizes
- **Smooth Animations** powered by Framer Motion
- **Accessible** with semantic HTML and ARIA labels
- **Production-Ready** and optimized for Vercel deployment

## Tech Stack

- **Next.js 15** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd experiment
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
experiment/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and Tailwind directives
├── components/
│   ├── ThemeProvider.tsx    # Theme context and dark mode logic
│   ├── Navigation.tsx       # Navigation bar with theme toggle
│   ├── Hero.tsx             # Hero section with animated keywords
│   ├── Work.tsx             # Projects/work section
│   ├── Skills.tsx           # Skills section with expandable categories
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Update Personal Information

1. **Contact Email**: Edit the email address in `components/Contact.tsx`:
   ```tsx
   <a href="mailto:your.email@example.com">
   ```

2. **Social Links**: Update social media URLs in `components/Contact.tsx`

3. **Projects**: Modify project data in `components/Work.tsx`:
   ```tsx
   const projects = [
     {
       title: 'Your Project',
       description: 'Project description',
       link: 'https://...',
       gradient: 'from-purple-500 to-purple-700',
     },
   ]
   ```

4. **Keywords**: Update rotating keywords in `components/Hero.tsx`:
   ```tsx
   const keywords = [
     'Builder',
     'Your Custom Keyword',
     // Add more...
   ]
   ```

5. **Skills**: Edit skill categories in `components/Skills.tsx`

### Theme Colors

Customize theme colors in `tailwind.config.js`:

```js
colors: {
  light: {
    bg: '#fafafa',
    accent: '#8b7eb8',
    // ...
  },
  dark: {
    bg: '#0a0a0a',
    accent: '#a599d4',
    // ...
  },
}
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

## Credits

Built with intention by Habiba.
