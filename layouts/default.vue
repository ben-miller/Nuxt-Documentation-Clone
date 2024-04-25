<script setup>
const docsNavLinks = [
  { id: 'get_started', text: 'Get Started', href: 'https://nuxt.com/docs/getting-started/introduction', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Guide',                  href: '',                                                   icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'API',                    href: '',                                                   icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Examples',               href: '',                                                   icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Community',              href: '',                                                   icon: 'i-ph-rocket-launch-duotone' },
  ];

const docsGettingStartedLinks = [
  { id: '', text: 'Introduction',     href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Installation',     href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Configuration',    href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Views',            href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Assets',           href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Styling',          href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Routing',          href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'SEO and Meta',     href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Transitions',      href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Data fetching',    href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'State Management', href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Error Handling',   href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Server',           href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Layers',           href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Deployment',       href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Testing',          href: '', icon: 'i-ph-rocket-launch-duotone' },
  { id: '', text: 'Upgrade Guide',    href: '', icon: 'i-ph-rocket-launch-duotone' },
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

const communityLinks = [
  { id: '', text: 'Nuxters', href: '' },
  { id: '', text: 'Nuxt on GitHub', href: '' },
  { id: '', text: 'Team', href: '' },
  { id: '', text: 'Design Kit', href: '' },
];

const enterpriseLinks = [
  { id: '', text: 'Automation and Conventions', href: '' },
  { id: '', text: 'Server-side rendering', href: '' },
  { id: '', text: 'Server engine', href: '' },
  { id: '', text: 'Production-ready', href: '' },
];

const solutionsLinks = [
  { id: '', text: 'Nuxt Content', href: '' },
  { id: '', text: 'Nuxt DevTools', href: '' },
  { id: '', text: 'Nuxt Image', href: '' },
  { id: '', text: 'Nuxt UI', href: '' },
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
                <ul>
                  <li v-for="item in docsNavLinks">
                    <span class="w-5 h-5" :class="item.icon"></span>
                    {{ item.text }}
                  </li>
                </ul>
                <div class="flex mb-6">
                  <div class="flex border-gray-800 w-full border-t border-dashed"></div>
                </div>
                <nav>
                  <ul>
                    <li v-for="item in docsGettingStartedLinks">
                      <span class="w-5 h-5" :class="item.icon"></span>
                      {{ item.text }}
                    </li>
                  </ul>
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
            <FooterLinkList :title="Community", :links="communityLinks" />
          </div>
          <div class="FooterEnterpriseLinksContainer">
            <FooterLinkList :title="Enterprise", :links="enterpriseLinks" />
          </div>
          <div class="FooterSolutionsLinksContainer">
            <FooterLinkList :title="Solutions", :links="solutionsLinks" />
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
  --background-color: #020420;
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

