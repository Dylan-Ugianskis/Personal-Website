---
description: How to deploy a static React/Vite site to DigitalOcean App Platform
---

# Deploying to DigitalOcean App Platform

Since this is a static site (React + Vite), the easiest and most cost-effective way to host it on DigitalOcean is using their **App Platform**.

## Prerequisites

1.  **GitHub Account**: Your code must be pushed to a GitHub repository.
2.  **DigitalOcean Account**: You need an active DO account.

## Step 1: Push Code to GitHub

If you haven't already, you need to push your local code to a GitHub repository.

1.  Create a new repository on GitHub (e.g., `portfolio-v4`).
2.  Run the following commands in your project terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-v4.git
git push -u origin main
```

*(Replace `YOUR_USERNAME` and `portfolio-v4` with your actual details)*

## Step 2: Create App in DigitalOcean

1.  Log in to your [DigitalOcean Control Panel](https://cloud.digitalocean.com/).
2.  Click **Apps** in the left sidebar.
3.  Click **Create App**.
4.  **Service Provider**: Select **GitHub**.
5.  **Repository**: Select the repository you just created (`portfolio-v4`).
6.  **Branch**: Select `main` (or `master`).
7.  **Source Directory**: Leave as `/` (default).
8.  Click **Next**.

## Step 3: Configure Resources

DigitalOcean should automatically detect that this is a static site.

1.  **Resource Type**: Ensure it says **Static Site**.
2.  **Build Command**: It should auto-detect `npm run build`. If not, enter it manually.
3.  **Output Directory**: It should auto-detect `dist`. If not, enter `dist`.
4.  **Plan**: Select the **Starter** plan (Free for up to 3 static sites).
5.  Click **Next**.

## Step 4: Environment Variables (Optional)

If you had any `.env` variables (you currently don't for this static build), you would add them here.
Click **Next**.

## Step 5: Review and Create

1.  Review the details.
2.  Click **Create Resources**.

## Step 6: Go Live!

DigitalOcean will now build your site. This usually takes 1-2 minutes.
Once finished, you will see a "Live App" URL (e.g., `https://portfolio-v4-xyz.ondigitalocean.app`).

You can later add your custom domain (like `dylanugianskis.com`) in the **Settings** tab of your app.
