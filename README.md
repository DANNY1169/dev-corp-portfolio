# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9b5f1468-00ae-4b2e-be1e-c6d386b727ee

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9b5f1468-00ae-4b2e-be1e-c6d386b727ee) and start prompting.

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

# Step 4: Set up environment variables
# Copy .env.example to .env (if you haven't already)
# The .env file is already configured with Gmail credentials

# Step 5a: Start only the frontend (without contact form functionality)
npm run dev

# Step 5b: Start both frontend and backend server (for contact form to work)
npm run dev:all

# Alternative: Run frontend and backend in separate terminals
# Terminal 1: npm run dev
# Terminal 2: npm run server
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

**Frontend:**
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

**Backend:**
- Express.js
- Nodemailer (for contact form email functionality)
- CORS

## Features

### 1. **Individual Client Logos**
The clients section now displays individual company logos (CORVA, Meituan, g:plans) as SVG components with smooth scrolling animation.

### 2. **Enhanced Hero Section**
- More vivid background images with CSS filters
- Better opacity controls with smooth transitions
- Layered gradient overlays for depth
- Auto-rotating background slideshow

### 3. **Working Contact Form**
The contact form is now fully functional with:
- Form validation
- Email sending via Gmail
- Loading states and error handling
- Toast notifications for success/error messages
- Service selection options

**To use the contact form:**
1. Start both frontend and backend servers: `npm run dev:all`
2. The backend server runs on `http://localhost:3001`
3. The frontend communicates with the backend API
4. Emails are sent using the configured Gmail account

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9b5f1468-00ae-4b2e-be1e-c6d386b727ee) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
