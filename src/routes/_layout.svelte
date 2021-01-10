<script>
  import GoogleAnalytics from "../components/GoogleAnalytics.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<GoogleAnalytics />

<Nav />

<div class="bg-gray-200 overflow-x-hidden">
  <div class="px-2 py-8">
    <div class="flex justify-center container mx-auto">
      <div class="mx-3 w-3/12 hidden lg:block">
        <div class="px-2">
          <div
            class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md"
          >
            <figure class="bg-gray-100 rounded-xl p-8">
              <img
                class="w-36 h-36 rounded-full mx-auto"
                src="/images/profile-photo.jpg"
                alt=""
                width="384"
                height="512"
              />
              <div class="pt-6 space-y-4 font-medium text-center">
                <blockquote>
                  <p class="text-lg font-semibold">
                    “Conveys even one function”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Nusendra H.</div>
                  <div class="text-gray-500">Software Developer</div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12">
        <slot />
      </div>
    </div>
  </div>
</div>

<a href="post" />

<div class="bg-gray-100">
  <div
    class="flex justify-center pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
  >
    <div class="mt-2">© Copyright 2021. All Rights Reserved.</div>
  </div>
</div>
