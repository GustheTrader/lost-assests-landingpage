# Lost Assets — Vercel deployment guide

This project is configured as a Next.js application for Vercel. The repository also retains its existing Sites configuration; Vercel ignores those platform-specific files through `.vercelignore`.

## Plan requirement

This is a commercial business website. Vercel's current terms restrict the free Hobby plan to personal, non-commercial use. Use a Vercel Pro or Enterprise account for the production deployment, or keep the existing Sites deployment.

## Recommended Vercel settings

- Framework Preset: `Next.js`
- Root Directory: repository root (`./`)
- Install Command: `npm ci`
- Build Command: `npm run build:vercel`
- Output Directory: leave blank; use the Next.js default
- Node.js Version: `22.x`
- Environment Variables: none required

These settings are already recorded in `vercel.json` and `package.json`. Do not set the Output Directory to `dist`, `build`, or `.next`.

## Deploy through Git

1. Create a private GitHub, GitLab, or Bitbucket repository and add the contents of this package.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Confirm that Vercel detects **Next.js** and shows the settings above.
4. Choose a Pro team/account for production commercial use, then select **Deploy**.
5. After deployment, open **Project → Settings → Domains** to add the desired domain.

Every later push to the production branch will trigger a new deployment automatically.

## Contact form behavior

The inquiry form prepares a message in the visitor's email application addressed to `psewal@adauditservintl.com`. It does not store submissions or require environment variables. A server-side form inbox can be added later if desired.

## Pre-deployment review

Confirm that AASI authorizes use of its name, contact information, and division relationship. Have probate and recovery service language reviewed by the applicable licensed attorney before public launch.
