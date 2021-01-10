<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`post.json`)
      .then((r) => r.json())
      .then((posts) => {
        const xml = this.fetch("sitemap.xml");
        return { posts, xml };
      });
  }
</script>

<script>
  import { onMount } from "svelte";
  import {
    posts as postStore,
    chunkedPosts as chunkedPostsStore,
  } from "../stores";
  import Pagination from "../components/Pagination.svelte";

  export let posts;
  let chunkedPosts;

  onMount(() => {
    postStore.set(posts);
  });

  chunkedPostsStore.subscribe((value) => {
    chunkedPosts = value;
  });
</script>

<svelte:head>
  <title>Nusendra Hanggarawan - Software Developer</title>
</svelte:head>

{#each chunkedPosts as { title, printDate, slug, description, tags }, index}
  <div class="max-w-8xl px-10 py-6 bg-white rounded-lg shadow-md mb-5">
    <div class="flex justify-between">
      <span class="font-light text-gray-600">{printDate}</span>
      <div>
        {#each tags as tag}
          <span
            class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 mx-1">
            {tag}
          </span>
        {/each}
      </div>
    </div>
    <div class="mt-2">
      <a
        href="post/{slug}"
        class="text-2xl text-gray-700 font-bold hover:underline">{title}</a
      >
      <p class="mt-2 text-gray-600">
        {description}
      </p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <a href="post/{slug}" class="text-blue-500 hover:underline">Read more</a>
    </div>
  </div>
{/each}

<Pagination {posts} />
