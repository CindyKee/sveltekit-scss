# Note:
_I built this project with the SvelteKit Skeleton template (choose `skeleton` when prompted after issuing the command below to create a project.)_

_My goal with this project was to create a minimalist SvelteKit project that I could still use SCSS with, both globally and componenet-level and still have access to the variables and styles in all of the components._

_I chose to use the Dart-based Sass compiler instead of `node-sass` because I have heard that `node-sass` is deprecated. I am hoping this will keep the process simplified._

_One big thing I learned in fighting through this using VSCode as my editor is that any changes made to the `svelte.config.js` file require restarting the Svelte Language Server (Ctrl/Cmd+Shift+P => **Svelte: Restart**), then stopping and restarting `npm run dev`._

_I hope that publishing this to GitHub might help others wanting to use SCSS in their SvelteKit projects._

---


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
