# Aurix Website

The Aurix website is a modern marketing and product site built with Next.js. It presents Aurix's product, features, pricing, download options, company information, support resources, and release history through a shared navigation and footer layout.

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4 with PostCSS
- Motion for animations
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

From the `aurixapp` directory, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Website Routes

| Route | Purpose |
| --- | --- |
| `/` | Aurix homepage |
| `/about` | Company and mission information |
| `/careers` | Career opportunities |
| `/contact` | Contact information and form |
| `/download` | Application download information |
| `/features` | Product features |
| `/help` | Help and support resources |
| `/privacy` | Privacy policy |
| `/products` | Product overview and capabilities |
| `/subscription` | Subscription plans and account information |
| `/version` | Version history and release information |

## Project Structure

```text
src/app/
├── Components/       Reusable page and layout components
├── about/            About page
├── careers/          Careers page
├── contact/          Contact page
├── download/         Download page
├── features/         Features page
├── help/             Help page
├── privacy/          Privacy page
├── products/         Products page
├── subscription/     Subscription page
├── version/          Version history page
├── globals.css       Global styles
├── layout.tsx        Shared site layout and metadata
└── sitemap.ts        Sitemap configuration
```

Static assets are stored in `public/`, including the SVG assets used throughout the site.

## Development Notes

- Shared navigation and footer elements live in `src/app/Components/layout/`.
- Page-specific components are grouped under `src/app/Components/` by route.
- Add new pages inside `src/app/` using the Next.js App Router conventions.
- Run `npm run lint` before opening a pull request.
