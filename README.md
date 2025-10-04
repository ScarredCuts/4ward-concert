# 4ward VRChat Concert Microsite

Static site promoting the October 17 4ward VRChat concert with anime.js microinteractions.

## GitHub Pages Deployment (Free Hosting)

1. **Create a GitHub repository**
   - On GitHub, click *New repository* and name it e.g. `4ward-concert`.
   - Leave it public (Pages is free for public repos) and **do not** add an initial README.

2. **Push this project**
   ```bash
   git init
   git add .
   git commit -m "Initial 4ward site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repo → *Settings* → *Pages*.
   - Under *Build and deployment*, choose **GitHub Actions** (the workflow in `.github/workflows/deploy.yml` handles the rest).

4. **Wait for the workflow**
   - Check the *Actions* tab for “Deploy 4ward Concert Site”. Once it finishes, your site is live at `https://<your-username>.github.io/<repo-name>/`.

## Quick Alternative: Netlify Drop

If you prefer a zero-git option:

1. Visit [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire `4ward-concert` folder into the browser window.
3. Netlify will provision a free URL instantly. You can customize the subdomain after logging in.

## Local Preview

Open `index.html` directly in a browser or serve the folder with any static server (e.g. `npx serve`).
