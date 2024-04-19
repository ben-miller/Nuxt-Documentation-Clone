<script setup>
const docsNavLinks = [
  { id: 'get_started', text: 'Get Started', href: 'https://nuxt.com/docs/getting-started/introduction' },
  { id: '', text: 'Guide', href: '' },
  { id: '', text: 'API', href: '' },
  { id: '', text: 'Examples', href: '' },
  { id: '', text: 'Community', href: '' },
  ];
</script>

<template>
  <div class="DefaultLayout text-gray-300" style="background-color: #020420">
    <NavBar />
    <main>
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7x1">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-2">
            <aside>
              <li v-for="item in docsNavLinks">
                {{ item.text }}
              </li>
            </aside>
          </div>
          <div class="lg:col-span-8">
            <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
              <div class="lg:col-span-8">
                <slot />
              </div>
              <div class="lg:col-span-2 order-first lg:order-last">
                Right Nav
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
:root {
  --header-height: 4rem;
}
main {
  h1 {
    @apply text-gray-100 text-4xl font-semibold;
  }
  h2 {
    @apply text-gray-100 text-2xl font-semibold;
  }
  p {
    @apply text-base font-thin my-5;
  }
  p a {
    @apply text-emerald-500;
  }
  li {
    @apply my-2;
  }
}
</style>
