<script context="module">
import client, { defaultRequestConfig as reqConfig } from '../storyblokClient'

export async function preload(page, session) {
  const response = await client.getAll('cdn/stories', reqConfig)

  return { stories: response || [] }
}
</script>

<svelte:head>
	<title>Nusendra.com | Home</title>
</svelte:head>

<div class="container w-full md:max-w-3xl mx-auto pt-10 pb-10">
  <div class="w-full px-4 md:px-6 text-gray-800 leading-normal">
    <div class="text-sm text-gray-700 pb-5 font-mono">Recently Published</div>
    {#each stories as story}
      <div class="text-2xl text-gray-700 font-bold">{story.content.title}</div>
      <div class="text-1xl text-gray-700 font-medium">{story.content.intro}</div>
      <div class="text-xs text-gray-700 font-medium">{story.first_published_at}</div>
    {/each}
  </div>
</div>

<script lang="typescript">
  export let stories: Array<any>;
  console.log(stories)
</script>
