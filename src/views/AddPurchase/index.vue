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
interface ApiReturn {
  success: boolean;
  data: any;
}

const handleClick = async () => {
  const { success, data } = await api();
  if (success) {
    console.log(data);
    switchs.value = !switchs.value;
  }
};

const api = ():any => {
  return new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(() => {
      resolve({
        success: true,
        data: "要返回的数据可以任何数据例如接口返回数据",
      });
    }, 2000);
  });
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
