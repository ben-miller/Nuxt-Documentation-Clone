<script setup>

  definePageMeta({
    middleware: 'auth',
    colorMode: 'dark'
  });
  
  const response = await $fetch('/api/hello');
  console.log(response);
</script>

<template>
  <div>Index.vue</div>
  <ContentDoc />
</template>
