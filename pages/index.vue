<script setup>
  const { sayHello } = useUtils();
  sayHello();

  definePageMeta({
    middleware: 'auth'
  });
</script>

<template>
  <div>Index.vue</div>
</template>
