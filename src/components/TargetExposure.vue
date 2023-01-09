<script setup lang="ts">
import { nextTick } from "vue";
import { $ref, $computed } from "vue/macros";
import { targetExposure } from "@/utils";
// nextTick(() => targetExposure(".exposure"));
nextTick(() => targetExposure(".exposure1", undefined, handleMakeChangeFn));

const list1 = Array.from(Array(5).keys(), (n) => n + 1);
const list2 = Array.from(Array(100).keys(), (n) => n + 1);
let indexs = $ref(0);
const handleMakeChangeFn = () => {
  indexs += 5;
  if (indexs >= list2.length) indexs = 0;
  console.log(indexs);
};
const list3 = $computed(() => list2.slice(indexs, indexs + 5));
</script>
<template>
  <h2>元素曝光方法测试</h2>
  <div class="layout">
    <ul>
      <li v-for="it in list1" :key="it" :data-id="it" class="exposure"></li>
    </ul>
    <ul>
      <li v-for="it in list3" :key="it">{{ it }}</li>
      <li class="exposure1" style="height: 0"></li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  width: 200px;
  height: 600px;
  overflow-y: overlay;
  overscroll-behavior-y: contain;
}
ul li {
  width: 200px;
  height: 600px;
  background-color: aqua;
  margin-top: 10px;
}
.layout {
  display: flex;
}
</style>
