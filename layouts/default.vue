<script setup>
const docsNavLinks = [
  { id: 'get_started', text: 'Get Started', href: 'https://nuxt.com/docs/getting-started/introduction' },
  { id: '', text: 'Guide', href: '' },
  { id: '', text: 'API', href: '' },
  { id: '', text: 'Examples', href: '' },
  { id: '', text: 'Community', href: '' },
  ];

const docsGettingStartedLinks = [
  { id: '', text: 'Introduction', href: '' },
  { id: '', text: 'Installation', href: '' },
  { id: '', text: 'Configuration', href: '' },
  { id: '', text: 'Views', href: '' },
  { id: '', text: 'Assets', href: '' },
  { id: '', text: 'Styling', href: '' },
  { id: '', text: 'Routing', href: '' },
  { id: '', text: 'SEO and Meta', href: '' },
  { id: '', text: 'Transitions', href: '' },
  { id: '', text: 'Data fetching', href: '' },
  { id: '', text: 'State Management', href: '' },
  { id: '', text: 'Error Handling', href: '' },
  { id: '', text: 'Server', href: '' },
  { id: '', text: 'Layers', href: '' },
  { id: '', text: 'Deployment', href: '' },
  { id: '', text: 'Testing', href: '' },
  { id: '', text: 'Upgrade Guide', href: '' },
];

const tableOfContentsLinks = [
  { id: '', text: 'Automation and Conventions', href: '' },
  { id: '', text: 'Server-side rendering', href: '' },
  { id: '', text: 'Server engine', href: '' },
  { id: '', text: 'Production-ready', href: '' },
  { id: '', text: 'Modular', href: '' },
  { id: '', text: 'Architecture', href: '' },

  { id: '', text: 'Automation and Conventions', href: '' },
  { id: '', text: 'Server-side rendering', href: '' },
  { id: '', text: 'Server engine', href: '' },
  { id: '', text: 'Production-ready', href: '' },
  { id: '', text: 'Modular', href: '' },
  { id: '', text: 'Architecture', href: '' },
  { id: '', text: 'Automation and Conventions', href: '' },
  { id: '', text: 'Server-side rendering', href: '' },
  { id: '', text: 'Server engine', href: '' },
  { id: '', text: 'Production-ready', href: '' },
  { id: '', text: 'Modular', href: '' },
  { id: '', text: 'Architecture', href: '' },
  { id: '', text: 'Automation and Conventions', href: '' },
  { id: '', text: 'Server-side rendering', href: '' },
  { id: '', text: 'Server engine', href: '' },
  { id: '', text: 'Production-ready', href: '' },
  { id: '', text: 'Modular', href: '' },
  { id: '', text: 'Architecture', href: '' },
  { id: '', text: 'Automation and Conventions', href: '' },
  { id: '', text: 'Server-side rendering', href: '' },
  { id: '', text: 'Server engine', href: '' },
  { id: '', text: 'Production-ready', href: '' },
  { id: '', text: 'Modular', href: '' },
  { id: '', text: 'Architecture', href: '' },
];
</script>

<template>
  <div class="DefaultLayout text-gray-300" style="background-color: #020420">
    <NavBar />
    <main class="min-h-[calc(100vh-var(--header-height))]">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-2">
            <aside class="overflow-y-auto max-h-[calc(100vh-var(--header-height))] top-[var(--header-height)] sticky">
              <div>
                <li v-for="item in docsNavLinks">
                  {{ item.text }}
                </li>
                <div class="flex mb-6">
                  <div class="flex border-gray-800 w-full border-t border-dashed"></div>
                </div>
                <nav>
                  <li v-for="item in docsGettingStartedLinks">
                    {{ item.text }}
                  </li>
                </nav>
              </div>
            </aside>
          </div>
          <div class="lg:col-span-8">
            <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
              <div class="lg:col-span-8">
                <slot />
              </div>
              <div class="lg:col-span-2 order-first lg:order-last overflow-y-auto max-h-[calc(100vh-var(--header-height))] top-[var(--header-height)] sticky">
                <nav>
                  <li v-for="item in tableOfContentsLinks">
                    {{ item.text }}
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="relative">
      <div class="border-t border-gray-200">
        <div class="FooterLinksContainer mx-auto px-4 lg:px-8 py-8 lg:py-12 max-w-7xl flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8">
          <div class="FooterCommunityLinksContainer">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="https://nuxters.nuxt.com/">Nuxters</a>
              </li>
              <li>
                <a href="https://nuxters.nuxt.com/">Nuxt on GitHub</a>
              </li>
              <li>
                <a href="https://nuxters.nuxt.com/">Team</a>
              </li>
              <li>
                <a href="https://nuxters.nuxt.com/">Design Kit</a>
              </li>
            </ul>
          </div>
          <div class="FooterEnterpriseLinksContainer">
            <h3>Enterprise</h3>
          </div>
          <div class="FooterSolutionsLinksContainer">
            <h3>Solutions</h3>
          </div>
        </div>
        <div class="SubscribeToNewsletter">
          Newsletter!
        </div>
      </div>
      <div class="FooterBase border-t">
        <div class="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between py-6">
          <p>Copyright © 2016-2024 Nuxt - MIT License</p>
          <div>X, Discord, GitHub</div>
        </div>
      </div>
    </footer>
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
footer {
  h3 {
    @apply text-sm/6 font-semibold text-white
  }
  a {
    @apply text-sm
  }
}
</style>

