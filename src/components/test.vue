<template>
  <div class="test" @click="testfn">test</div>
  <div @click="() => scrollTo()">Top</div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useBodyDisableScrolling } from "@/utils/hooks/hook";

useBodyDisableScrolling();
const is = ref(true);
const testfn = () => {
  is.value = !is.value;
  const body = document.querySelector("body");
  const disableIosCanPlay = (overflows) => {
    body.style.overflow = overflows;
  };
  is.value ? disableIosCanPlay("hidden") : disableIosCanPlay("auto");
};

const scrollTo = inject("public_scrollTo");
</script>

<style scoped>
.test {
  height: 200vh;
}
</style>
