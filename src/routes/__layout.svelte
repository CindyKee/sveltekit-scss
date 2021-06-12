<svelte:head>
	<title>Wishlist Home</title>
</svelte:head>

<script>
  // Preferred place to import styles - not app.html
  import "../styles/global.scss"
  import Hero from "$lib/Hero.svelte";
</script>

<Hero />

<main>
  <slot />
</main>
