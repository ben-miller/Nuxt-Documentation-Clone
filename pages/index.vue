<script setup>
  //const { sayHello } = useUtils();
  //sayHello();

  definePageMeta({
    middleware: 'auth'
  });
  
  const response = await $fetch('/api/hello');
  console.log(response);
</script>

<template>
  <div>Index.vue</div>
  <ContentDoc />
</template>
