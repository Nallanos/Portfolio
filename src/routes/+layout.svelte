<script>
  import Dino from "$lib/dino.svelte";
  import About from "$lib/aboutme.svelte";
  import Header from "$lib/header.svelte";
</script>

<body>
  <Header />
  <About />
  <Dino />
  <slot />
</body>

<style>
  body {
    background-color: #15111d;
    text-decoration: none;
    color: white;
    max-width: 100%;
  }
</style>
