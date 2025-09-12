# Aklima Progressive Foundation - Deployment Guide

## 🎉 Website Based on Your HTML Template

Your website has been created to match your beautiful `html/index_polished.html` template with:

- ✅ **Emerald green color scheme** - matches your original design
- ✅ **Same typography** - Inter font and exact styling
- ✅ **All content sections** - Mission, Focus Areas, Programs, Impact, Governing Body
- ✅ **Real foundation data** - Tazneem & Dr. Monjur Alam, Magrahat location
- ✅ **Independence Day Initiative** - 350 school bags, 6 tricycles
- ✅ **Responsive design** - works perfectly on mobile and desktop

## Quick Start

### Prerequisites
- Node.js 18+
- Azure account
- GitHub account

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **View the website:**
   Open http://localhost:3000 in your browser

4. **Access admin panel:**
   ```bash
   npm run admin
   ```
   Open http://localhost:3001 in your browser

### Adding Your Images

1. **Add your images to:** `frontend/public/images/`
2. **Required images:**
   - `indp.jpg` - Independence Day Initiative photo (from your HTML)
   - Any additional program or hero images

### Content Structure (matches your HTML)

All content is stored in `content/site-content.json` and includes:

- **Foundation Info:** Name, mission, founders (Tazneem & Dr. Monjur)
- **Hero Section:** Badge, titles, Independence Day Initiative card
- **Focus Areas:** 6 areas with emojis (🎓, ♿, 🚧, 🩺, 👩‍👩‍👧, 🌱)
- **Programs:** 4 current programs with call-to-action buttons
- **Impact Stats:** 350 bags, 6 tricycles, 2-3km roads, 10 students
- **Governing Body:** 4 members as listed in your HTML
- **Donation Info:** Offline process with impact amounts

### Deployment to Azure

#### Option 1: Using Azure Developer CLI (Recommended)

1. **Install Azure Developer CLI:**
   - Windows: Download from https://aka.ms/azd-install
   - macOS: `brew tap azure/azd && brew install azd`
   - Linux: `curl -fsSL https://aka.ms/install-azd.sh | bash`

2. **Login to Azure:**
   ```bash
   azd auth login
   ```

3. **Initialize and deploy:**
   ```bash
   azd init
   azd up
   ```

#### Option 2: Manual Azure Static Web Apps Setup

1. **Create Azure Static Web App:**
   - Go to Azure Portal
   - Create new Static Web App
   - Connect to your GitHub repository
   - Set build configuration:
     - App location: `/`
     - Output location: `out`

2. **GitHub repository setup:**
   - Push this code to a GitHub repository
   - Azure will automatically set up GitHub Actions for deployment

### Content Management

#### Editing Content via Admin Panel
1. Access the admin panel at `/admin`
2. Use the sidebar to navigate between sections:
   - **Dashboard:** Overview and quick actions
   - **Hero Section:** Edit main banner content
   - **Programs:** Manage foundation programs
   - **News:** Add and edit news articles
   - **Testimonials:** Manage testimonials
   - **Settings:** Update foundation information

#### Direct File Editing
Content is stored in JSON files in the `content/` directory:
- `site-content.json`: Main website content (hero, programs, foundation info)
- `dynamic-content.json`: News, testimonials, team members

### Project Structure

```
aklima-foundation/
├── frontend/              # Next.js website
│   ├── app/              # App router pages
│   ├── components/       # React components
│   └── lib/             # Utilities and content loading
├── admin/               # Content management interface
├── content/             # JSON content files
├── infra/              # Azure infrastructure (Bicep)
├── .github/workflows/  # GitHub Actions
└── out/                # Built static files
```

### Customization Guide

#### Changing Colors and Branding
1. Edit `tailwind.config.js` to modify the color palette
2. Update the foundation name in `content/site-content.json`
3. Replace logo and images in the `public/` directory

#### Adding New Sections
1. Create new components in `frontend/components/`
2. Add content structure to JSON files
3. Update the admin interface to manage new content

#### Modifying Programs
1. Edit the programs array in `content/site-content.json`
2. Add new program icons to the iconMap in `frontend/app/page.tsx`
3. Create detailed program pages if needed

### Environment Variables

Create a `.env.local` file for local development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_URL=http://localhost:3001
```

For production, set these in your Azure Static Web App configuration.

### Troubleshooting

#### Build Issues
- Ensure Node.js 18+ is installed
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check that all dependencies are properly installed

#### Deployment Issues
- Verify GitHub repository is properly connected to Azure Static Web App
- Check GitHub Actions logs for build errors
- Ensure `out/` directory is generated during build

#### Content Not Updating
- Verify JSON files are properly formatted
- Check browser cache (hard refresh with Ctrl+F5)
- Ensure content files are committed to the repository

### Support and Maintenance

#### Regular Updates
- Keep dependencies updated: `npm audit && npm update`
- Monitor Azure costs and usage
- Regular content backups

#### Performance Optimization
- Optimize images before uploading
- Use Next.js Image component for better performance
- Monitor Core Web Vitals in Azure

### Security Considerations
- Regularly update dependencies
- Use Azure Static Web Apps authentication for admin access (optional)
- Implement proper HTTPS redirects
- Regular security scans

### Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
