<script setup lang="ts">
import TeleportElement from "@/components/Teleports.vue";
</script>
<template>
  <div class="element_layout">
    <h1>This is an elemen page</h1>
    <TeleportElement />
    <div class="scoll_box"></div>
  </div>
</template>

<style scoped >
.element_layout {
}
.scoll_box{
  height: 100vh;
  background-color: antiquewhite;
}
</style>
