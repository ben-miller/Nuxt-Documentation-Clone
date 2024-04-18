<template>
  <div class="DefaultLayout">
    <NavBar />
    <div class="MainContainer">
      <LeftNav />
      <slot />
      <RightNav />
    </div>
    <Footer />
  </div>
</template>

