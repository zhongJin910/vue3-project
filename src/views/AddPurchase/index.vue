<template>
  <div>
    <v-button v-addGoods.switch="switchs" @click="handleClick">{{
      text
    }}</v-button>
    <v-button v-addGoods>加入</v-button>
    <div id="shopCart">购物车</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
const switchs = ref(false);
const handleClick = async () => {
  switchs.value = !switchs.value;
};

const text = computed(() => (switchs.value ? "取消" : "加入"));
</script>

<style scoped>
#shopCart {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: antiquewhite;
  position: fixed;
  bottom: 200px;
  right: 0px;
  font-size: 12px;
  line-height: 50px;
  text-align: center;
}
</style>
