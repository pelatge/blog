<script context="module">
import client, { defaultRequestConfig as reqConfig } from '../storyblokClient'

export async function preload(page, session) {
  const response = await client.getAll('cdn/stories', reqConfig)

  return { stories: response || [] }
}
</script>

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

export let stories
  console.log(stories)
</script>
