---
description: how to run the project locally
---

This workflow starts the local development environment for the Salonnz SaaS website.

## Prerequisites
- Node.js and npm installed
- Dependencies installed (`npm install`)

## Steps

1. Check if dependencies are installed by verifying `node_modules` exists

2. If not installed, run `npm install` to install all dependencies

// turbo
3. Start the development server with `npm run dev`

4. Wait for the server to start (usually takes 5-10 seconds)

5. Verify the application is running by checking the terminal output for the local URL (typically http://localhost:3000)

6. Open the browser to the provided URL to confirm the application loads

## Expected Result
- Development server running without errors
- Application accessible in the browser
- Hot reload working for file changes

## Troubleshooting
- If port 3000 is in use, check for other running processes and kill them
- If dependencies fail, try deleting `node_modules` and `package-lock.json`, then reinstall
- Check for any port conflicts with backend services
