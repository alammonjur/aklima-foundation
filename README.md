# Aklima Progressive Foundation Website

A modern, responsive website for the Aklima Progressive Foundation with content management capabilities and Azure hosting.

## Project Structure

- `frontend/` - Next.js website with responsive design
- `admin/` - Simple content management interface
- `content/` - JSON-based content storage
- `infra/` - Azure infrastructure configuration
- `.github/workflows/` - Deployment automation

## Features

- 🎨 Modern, responsive design inspired by leading foundations
- 📝 Easy content management without technical knowledge
- ☁️ Azure Static Web Apps hosting
- 🚀 Automated deployment with GitHub Actions
- 📱 Mobile-first responsive design
- ⚡ Fast loading and SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+
- Azure account
- GitHub account

### Local Development

1. Clone this repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open admin panel: `npm run admin`

### Deployment

The website automatically deploys to Azure Static Web Apps when you push to the main branch.

## Content Management

Edit content through the simple admin interface at `/admin` or by modifying JSON files in the `content/` directory.

## Technology Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Hosting**: Azure Static Web Apps
- **Content**: File-based CMS with JSON storage
- **Deployment**: GitHub Actions
