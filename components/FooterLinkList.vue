<script setup>
defineProps({
  title: String,
  links: Array
})
</script>

<template>
  <h3>{{ title }}</h3>
  <div class="FooterCommunityLinksContainer">
    <h3>Community</h3>
    <ul>
      <li v-for="link in links">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

