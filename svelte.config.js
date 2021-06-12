import sveltePreprocess from 'svelte-preprocess'
import path from 'path'
import adapter from '@sveltejs/adapter-static'
//import scss from 'svelte-preprocess'
//import node from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess for more information about preprocessors
	preprocess: [

		// Auto-preprocess mode - no need for specifying standlone SCSS preprocesors, etc.
		// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#auto-preprocessing
		// sveltePreprocess()
		sveltePreprocess({
			defaults: {
				// Remove the need to add the `lang=` tag for each type.
				// Not recommended because not all tooling understands this
				style: 'scss',
				script: 'typescript',
				markup: 'html'
			},
			scss: {
				// We can use a path relative to the root because svelte-preprocess automatically adds
				// it to `includePaths` if none is defined.
				// This allows us to use the variables in our components - don't turn on unless really need it
				// prependData: `@import 'src/styles/_variables.scss';`,

				// Docs say renderSync is faster for Dart Sass which I am using
				// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#scss-sass
				renderSync: true,

				// Dart Sass recognizes 'expanded' and 'compressed'
				outputStyle: 'expanded'
			}
		}),

		// Standalone preprocessors go here for customized configurations.
		// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#stand-alone-processors
		// scss(),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// This is the static adapter
		adapter: adapter(),

		// This is the node adapter
		//adapter: node(),

		vite: {
			resolve: {
				alias: {
					$bootstrap: path.resolve('./node_modules/bootstrap/scss')
				}
			}
		}
	}
}

export default config
