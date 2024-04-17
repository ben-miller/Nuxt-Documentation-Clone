<script setup lang="ts">
const { $sayHello } = useNuxtApp();
console.log($sayHello('bro'));
</script>

<template>
  <Angel />
  <div>ProfileHeader component</div>
</template>

<style lang="scss"></style>
