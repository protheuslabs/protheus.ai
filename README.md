# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.15.1 create --template minimal --types ts --add tailwindcss="plugins:none" eslint prettier --install npm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## GitHub Pages Deployment (protheus.ai)

This repository is now configured for GitHub Pages deployment:

- SvelteKit adapter switched to `@sveltejs/adapter-static` in `svelte.config.js`
- Pages workflow added at `.github/workflows/deploy.yml`
- Custom domain file added at `static/CNAME` with `protheus.ai`

### Push to the target repo

1) Set the remote to the target repository:

```sh
git remote set-url origin https://github.com/protheuslabs/protheus.ai.git
```

2) Push your main branch:

```sh
git push -u origin main
```

If your branch is `master`, use `git push -u origin master`.

GitHub will run the workflow and publish `/build` to Pages on every push.

### Domain settings you should apply for protheus.ai

In DNS (Squarespace or your current DNS host), replace the root/domain records that currently point to Squarespace with GitHub Pages records:

- A `@` -> `185.199.108.153`
- A `@` -> `185.199.109.153`
- A `@` -> `185.199.110.153`
- A `@` -> `185.199.111.153`
- CNAME `www` -> `protheuslabs.github.io`

Keep Squarespace defaults for the old service host out; these are for Squarespace hosting.

Then, in the GitHub repo settings, set:
- Pages source: GitHub Actions
- Custom domain: `protheus.ai`
- Enforce HTTPS

After DNS propagation, the site should be reachable at `https://protheus.ai`.
