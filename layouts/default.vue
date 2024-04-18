<template>
  <div class="DefaultLayout">
    <NavBar />
    <div class="MainContainer">
      <LeftNav />
      <div class="bg-slate-100"><slot /></div>
      <RightNav />
    </div>
    <Footer />
  </div>
</template>

