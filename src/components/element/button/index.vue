<template>
  <button>
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
});
</script>

<style scoped></style>
