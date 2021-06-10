import preprocess from 'svelte-preprocess'
import scss from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			// defaults: {
			//	// Remove the need to add the `lang=` tag for each type.
			//	// Not recommended because not all tooling understands this
			// 	style: 'scss'
			//	script: 'typescript',
			//	markup: 'html'
			// },
			scss: {
				// We can use a path relative to the root because
				// svelte-preprocess automatically adds it to `includePaths`
				// if none is defined.
				// This allows us to use the variables in our components
				prependData: `@import 'src/styles/_variables.scss';`,
				// Docs say it is faster for Dart Sass which I am using
				// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#scss-sass
				renderSync: true,
				outputStyle: 'compressed'
			}
		}),
		// Since we have scss processing in the preprocess function above, we don't need this here.
		// If we remove the prependData/preprocessor above, use this instead.
		//scss(),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

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
