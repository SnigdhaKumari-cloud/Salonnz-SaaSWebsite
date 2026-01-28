---
description: how to deploy the application to Vercel
---

This workflow deploys the Salonnz SaaS website to Vercel.

## Prerequisites
- Vercel CLI installed (`npm i -g vercel`)
- Logged into Vercel account (`vercel login`)
- Project linked to Vercel (`vercel link`)

## Steps

1. Ensure all changes are committed to git

2. Run local build to verify no build errors: `npm run build`

3. Review the build output for any warnings or errors

4. If build succeeds, proceed with deployment

// turbo
5. Deploy to preview environment: `vercel`

6. Review the preview deployment URL and test the application

7. If preview looks good, deploy to production: `vercel --prod`

8. Verify the production deployment at the live URL

9. Test key functionality on the production site

## Expected Result
- Successful build without errors
- Preview deployment accessible and functional
- Production deployment live and working correctly

## Troubleshooting
- If build fails, check Next.js configuration and component errors
- If 404 errors occur, verify routing configuration and file structure
- If environment variables are missing, check Vercel project settings
- For deployment failures, check Vercel deployment logs
