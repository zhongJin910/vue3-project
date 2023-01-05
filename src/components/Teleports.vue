<script setup lang="ts">
import { $ref } from "vue/macros";
const show = $ref(false);
</script>
<template>
  <ul>
    <li>
      <h2>vue Teleport 组件测试</h2>
      <button @click="show = true">Open Modal</button>
      <Teleport to="body">
        <div v-if="show" class="modal_box">
          <div class="modal">
            <p>Hello from the modal!</p>
            <button @click="show = false">Close</button>
          </div>
        </div>
      </Teleport>
    </li>
  </ul>
</template>

<style scoped>
.modal_box {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 12px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 10px 21px 0px rgba(3, 3, 87, 0.1);
}
</style>
