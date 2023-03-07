<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
  <NosrollLayout>
    <RouterView name="nosroll" />
  </NosrollLayout>
</template>
<script lang="ts" setup>
import DefaultLayout from "@/layout/default.vue";
import NosrollLayout from "@/layout/nosroll.vue";
</script>
<style></style>
