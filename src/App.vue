<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <router-link class="link" active-class="active" to="/element"
        >element</router-link
      >
      <router-link class="link" active-class="active" to="/method"
        >method</router-link
      >
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  width: 160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
nav a {
  padding: 0 12px;
  border-radius: 5px;
}
.link {
  color: #000;
}
.active {
  color: #00bd7e;
  background-color: rgba(0, 189, 126, 0.2);
}
</style>
