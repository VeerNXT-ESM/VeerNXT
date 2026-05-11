# VeerNXT Marketing Site

This repository contains the standalone marketing landing page for the VeerNXT platform—a transition support ecosystem designed for Agniveers to build successful civilian careers.

## Overview

The marketing site is built with a premium, glassmorphic aesthetic to provide a high-conversion and professional first impression. It serves as the primary entry point for candidates seeking career guidance, financial planning, and community support.

## Key Features

- **Multilingual Support**: Fully localized in 8+ languages (English, Hindi, Tamil, Bengali, Marathi, Malayalam, Telugu, Gujarati) using `i18next`.
- **Premium UI/UX**: Built with React and Tailwind CSS, featuring smooth animations powered by `Framer Motion`.
- **Live Job Board**: Integration with the VeerNXT Profiling Engine to display real-time government job notifications.
- **Service Showcases**: Dedicated sections for Career Mapping, Financial Guidance (Sewa Nidhi management), and Community Support.
- **Responsive Design**: Fully optimized for desktop and mobile viewing.

## Tech Stack

- **Core**: React 19 (TypeScript)
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (`motion/react`)
- **Localization**: i18next & react-i18next
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository (if standalone) or navigate to the `marketing` folder.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server on `http://localhost:3000`:
```bash
npm run dev
```

### Production Build

Create an optimized production bundle in the `dist` folder:
```bash
npm run build
```

## Configuration

Environment variables can be managed via `.env` files. Ensure you have the necessary API endpoints configured for the Job Board integration.

---

**Status**: Production Ready | SEO Optimized | Multilingual
