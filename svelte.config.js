import preprocess from 'svelte-preprocess'
import scss from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		//preprocess({
			// defaults: {
			// 	style: 'scss'
			// },
			// scss: {
			// 	// We can use a path relative to the root because
			// 	// svelte-preprocess automatically adds it to `includePaths`
			// 	// if none is defined.
			// 	// This allows us to use the variables in our components
			// 	prependData: `@import '/src/styles/variables/index.scss';`,
			// 	outputStyle: 'compressed',
			// }
		//}),
		scss(),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
}

export default config
