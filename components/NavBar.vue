<template>
  <header class="sticky top-0 z-50 backdrop-blur">
    <div class="h-[--header-height] mx-auto px-4 lg:px-8 max-w-7xl flex items-center justify-between gap-3">
      <div class="NuxtLogo">
        Nuxt logo
      </div>
      <div class="HeaderLinks">
        <ul>
          <li>
            <NuxtLink to="/">Nuxt<span class="i-ph-caret-down w-4 h-4" /></NuxtLink>
            <NuxtLink to="/docs">Docs</NuxtLink>
            <NuxtLink to="/integrations">Integrations</NuxtLink>
            <NuxtLink to="/resources">Resources</NuxtLink>
            <NuxtLink to="/showcase">Showcase</NuxtLink>
            <NuxtLink to="/enterprise">Enterprise</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="UpperRightButtons">
        Search, Dark Mode, GitHub
      </div>
    </div>
  </header>
</template>

<style scoped>
header li a {
  @apply px-3 text-sm/6 font-semibold;
}
</style>
