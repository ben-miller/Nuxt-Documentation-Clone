<template>
  <div class="DefaultLayout">
    <NavBar />
    <main class="MainContainer text-gray-300">
      <LeftNav />
      <div class="bg-blue-950" style="background-color: #020420"><slot /></div>
      <RightNav />
    </main>
    <Footer />
  </div>
</template>

<style>
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
</style>
