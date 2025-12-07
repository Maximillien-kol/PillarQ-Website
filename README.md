# Maximillien Kolbe Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS featuring a newspaper-inspired design.

## Features

- 📱 Mobile-responsive design with hamburger navigation
- 📧 Contact form with email integration (Resend)
- 🎨 Newspaper-style layout and typography
- ⚡ Fast performance with Vite
- 🎯 Smooth scroll navigation
- 📬 Animated components and interactions

## Email Setup

This project uses [Resend](https://resend.com) for handling contact form submissions.

### Setup Instructions:

1. **Get a Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Go to API Keys and create a new key
   - Copy the API key

2. **Set up Environment Variables:**
   - Copy `.env.example` to `.env.local`
   - Add your Resend API key:
     ```
     RESEND_API_KEY=your_actual_api_key_here
     ```

3. **Domain Configuration:**
   - Verify a domain with Resend (required for sending emails)
   - Update the `from` field in `api/send-email.js` with your verified domain
   - Example: `from: 'Portfolio <noreply@yourdomain.com>'`

4. **Deploy to Vercel:**
   - Add the `RESEND_API_KEY` environment variable in your Vercel dashboard
   - The API route will be automatically deployed as a serverless function

## Project info

**URL**: https://lovable.dev/projects/3e9f0653-75fa-4b95-b4b3-0116a0448913

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3e9f0653-75fa-4b95-b4b3-0116a0448913) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3e9f0653-75fa-4b95-b4b3-0116a0448913) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
