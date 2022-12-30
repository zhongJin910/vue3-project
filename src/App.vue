<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/element">element</RouterLink>
      <RouterLink to="/method">method</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
