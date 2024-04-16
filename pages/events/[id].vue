<script setup>
const route = useRoute();
console.log('id.vue:' + route.params.id);
const nuxt = useNuxtApp();
console.log(nuxt);
</script>

<template>
  <div>[id].vue: {{ $route.params.id }}</div>
</template>
