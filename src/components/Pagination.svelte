<script>
  import {
    posts as postStore,
    chunkedPosts as chunkedPostsStore,
  } from "../stores";

  export let posts = [];
  let currentPage = 1;
  let numberPerPage = 10;
  let begin = 0;
  let end = begin + numberPerPage;

  let chunkedPosts = [];

  const updatePage = () => {
    begin = (currentPage - 1) * numberPerPage;
    end = begin + numberPerPage;
    chunkedPostsStore.set(posts.slice(begin, end));
  };

  postStore.subscribe((value) => {
    posts = value;
    updatePage();
  });

  chunkedPostsStore.subscribe((value) => {
    chunkedPosts = value;
  });

  const numberOfPages = () => {
    return Math.ceil(posts.length / numberPerPage);
  };

  const next = () => {
    currentPage += 1;
    updatePage();
  };

  const previous = () => {
    currentPage -= 1;
    updatePage();
  };

  const first = () => {
    currentPage = 1;
    updatePage();
  };

  const last = () => {
    currentPage = numberOfPages();
    updatePage();
  };
</script>

<div class="flex justify-between">
  <h3>Page : {currentPage}</h3>
  <div>
    <button
      on:click={first}
      class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md disabled:opacity-50"
      disabled={currentPage == 1}>First</button
    >
    <button
      on:click={previous}
      class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md disabled:opacity-50"
      disabled={currentPage == 1}>Previous</button
    >
    <button
      on:click={next}
      class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md disabled:opacity-50"
      disabled={currentPage == numberOfPages()}>Next</button
    >
    <button
      on:click={last}
      class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md disabled:opacity-50"
      disabled={currentPage == numberOfPages()}>Last</button
    >
  </div>
</div>
