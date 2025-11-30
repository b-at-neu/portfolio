# Portfolio Website

A modern portfolio website built with Next.js, Tailwind CSS, and Prisma.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Database ORM:** [Prisma 7](https://www.prisma.io/) with SQLite
- **Language:** TypeScript

## Features

- Responsive design with mobile-first approach
- Dark mode support (system preference)
- Smooth scroll navigation
- Contact form with form validation
- Projects showcase section
- Skills and about section

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/b-at-neu/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section with skills
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with social links
├── lib/
│   └── prisma.ts        # Prisma client instance
└── generated/
    └── prisma/          # Generated Prisma client (gitignored)
prisma/
├── schema.prisma        # Database schema
└── migrations/          # Database migrations
```

## Database Schema

The Prisma schema includes models for:
- **Project:** Portfolio projects with title, description, tags, and links
- **ContactMessage:** Contact form submissions

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License
