<script setup>
import { PhCaretDown } from '@phosphor-icons/vue';
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur">
    <div class="h-[--header-height] mx-auto px-4 lg:px-8 max-w-7xl flex items-center justify-between gap-3">
      <div class="NuxtLogo">
        Nuxt logo
      </div>
      <div class="HeaderLinks">
        <ul class="lg:flex">
          <li>
            <NuxtLink to="/docs">
            Docs
              <ph-caret-down :size="16" class="flex-shrink-0 w-4 h-4" />
            </NuxtLink>
            <NavDropdown />
          </li>
          <li>
            <NuxtLink to="/integrations">
            Integrations
              <ph-caret-down :size="16" class="flex-shrink-0 w-4 h-4" />
            </NuxtLink>
            <NavDropdown />
          </li>
          <li>
            <NuxtLink to="/resources">
            Resources
              <ph-caret-down :size="16" class="flex-shrink-0 w-4 h-4" />
            </NuxtLink>
            <NavDropdown />
          </li>
          <li>
            <NuxtLink to="/showcase">
            Showcase
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/enterprise">
            Enterprise
              <ph-caret-down :size="16" class="flex-shrink-0 w-4 h-4" />
            </NuxtLink>
            <NavDropdown />
          </li>
          <li>
            <NuxtLink to="/blog">
            Blog
            </NuxtLink>
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
header li {
  position: relative;
}
header li:hover .NavDropdown {
  visibility: visible;
}
header li a {
  @apply px-3 text-sm/6 font-semibold flex items-center gap-1;
}
</style>
