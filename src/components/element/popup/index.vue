<template>
  <Teleport to="body">
    <div class="v-popup__box">
      <div class="v-popup__content" :class="`v-position_${'top'}`">0000</div>
      <div class="v-popup__mask"></div>
    </div>
  </Teleport>
</template>
<!-- <script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Popup",
});
</script> -->
<script lang="ts" setup>
// import { withDefaults } from "vue";
// interface Props {
//   position: "bottom" | "top";
// }
// const { position } = withDefaults(defineProps<Props>(), {
//   position: "bottom",
// });
</script>

<style lang="scss" scoped>
.v-popup__box {
  position: fixed;
  top: 0;
  left: 0;
  .v-popup__mask {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .v-popup__content {
    position: absolute;
    top: 0;
    z-index: 2;
    background-color: #fff;
    color: red;
  }
}
</style>
