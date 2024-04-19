<template>
  <header class="h-[--header-height]">
    <ul>
      <li>
        <NuxtLink to="/">Nuxt</NuxtLink>
        <NuxtLink to="/docs">Docs</NuxtLink>
        <NuxtLink to="/integrations">Integrations</NuxtLink>
        <NuxtLink to="/resources">Resources</NuxtLink>
        <NuxtLink to="/showcase">Showcase</NuxtLink>
        <NuxtLink to="/blog">Enterprise</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header li a {
  @apply px-3;
}
</style>
