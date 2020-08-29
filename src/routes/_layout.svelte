<main>
  <body class="bg-gray-200 font-sans leading-normal tracking-normal">
    <Nav />
    <slot />
    <Footer />
  </body>
</main>

<script>
import Nav from '../components/Nav.svelte';
import Footer from '../components/Footer.svelte';
</script>
