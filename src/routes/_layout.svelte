<script>
    import GoogleAnalytics from "../components/GoogleAnalytics.svelte";
    import Nav from "../components/Nav.svelte";
</script>

<GoogleAnalytics />

<Nav />

<div class="bg-gray-200 overflow-x-hidden">
    <div class="px-2 py-8">
        <div class="flex justify-between container mx-auto">
            <div class="mx-8 w-12/12 hidden lg:block">
                <div class="px-2">
                    <div class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
                        <figure class="bg-gray-100 rounded-xl p-8">
                          <img class="w-36 h-36 rounded-full mx-auto" src="/images/profile-photo.jpg" alt="" width="384" height="512">
                          <div class="pt-6 space-y-4 font-medium text-center">
                            <blockquote>
                              <p class="text-lg font-semibold">
                                “Conveys even one function”
                              </p>
                            </blockquote>
                            <figcaption class="font-medium">
                              <div class="text-cyan-600">
                                  Nusendra H.
                              </div>
                              <div class="text-gray-500">
                                  Software Developer
                              </div>
                            </figcaption>
                          </div>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-12/12">
                <div>
                    <div class="max-w-8xl px-10 py-6 bg-white rounded-lg shadow-md">
                        <div class="flex justify-between items-center"><span class="font-light text-gray-600">Jun 1,
                                2020</span><a href="#"
                                class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Laravel</a>
                        </div>
                        <div class="mt-2"><a href="#" class="text-2xl text-gray-700 font-bold hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a>
                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                        </div>
                        <div class="flex justify-between items-center mt-4"><a href="#"
                                class="text-blue-500 hover:underline">Read more</a>
                            <div><a href="#" class="flex items-center"><img
                                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                        alt="avatar" class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block">
                                    <h1 class="text-gray-700 font-bold hover:underline">Alex John</h1>
                                </a></div>
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <div class="flex">
                        <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed">
                            previous
                        </a>
                    
                        <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                            1
                        </a>
                    
                        <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                            2
                        </a>
                    
                        <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                            3
                        </a>
                    
                        <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div>
  <main>
    <div id="homepage">
      <div class="container">
        <div class="small">
          <div class="page-title">
            <div class="name">
              <a href="/">
                <h1>Nusendra Hanggarawan</h1>
              </a>
            </div>
            <div>
              <a href=".">Home /</a>
              <a href="about">About /</a>
              <a href="online-course">Online Course</a>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <slot />

      <!-- The link below is just for allow expost static post -->
      <a href="post"></a>
    </div>
  </main>

  <footer class="container" style="margin-top: 50px;">
    <div class="footer">
      <div class="container">
        <div class="small">
          <div class="social">
            <span>
              &copy; {new Date().getFullYear()} Nusendra.com Powered by
              <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
