<script lang="ts">
  import { ref, onMounted, defineComponent } from 'vue'

  export default defineComponent({
    name: 'QzdNotifys',
    props: {
      // 提示消息
      message: {
        type: String,
        default: '',
        required: true,
      },
      // Notifys类型
      type: String,
      duration: Number,
      position: String,
      zIndex: Number,
      switchBut: Boolean,
      btnText: String,
      callback: Function,
      transition: Boolean,
      distance: Number,
    },
    setup(props) {
      const isShow = ref(false)
      onMounted(() => {
        isShow.value = true
        if (props.duration) setTimeout(() => (isShow.value = false), props.duration)
      })

      const handleButFn = () => {
        if (props.callback && props.callback instanceof Function) props.callback()
      }

      return { isShow, handleButFn }
    },
  })
</script>

<template>
  <Transition :name="transition && !distance ? `notifys_${position}` : ''">
    <div
      class="qzd-notifys_message"
      :class="`notifys_${position}`"
      v-show="isShow"
      :style="{ zIndex, [`${position}`]: distance + 'px' }"
    >
      <span class="text double-line-ellipsis">{{ message }}</span>
      <template v-if="switchBut">
        <p class="but" @click="handleButFn">{{ btnText }}</p>
      </template>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
  .notifys_top-enter-from,
  .notifys_top-leave-to {
    transform: translateY(-78px);
    opacity: 0;
  }

  .notifys_bottom-enter-from,
  .notifys_bottom-leave-to {
    transform: translateY(78px);
    opacity: 0;
  }

  .notifys_top-enter-active,
  .notifys_bottom-enter-active {
    transition: all 0.8s;
  }

  .notifys_top-leave-active,
  .notifys_bottom-leave-active {
    transition: all 0.5s;
  }

  .notifys_top-enter-to,
  .notifys_bottom-enter-to,
  .notifys_top-leave-from,
  .notifys_bottom-leave-from {
    opacity: 1;
  }

  .qzd-notifys_message {
    width: calc(100vw - 48px);
    position: fixed;
    left: 24px;
    line-height: 50px;
    padding: 16px 16px 18px;
    background: #ffffff;
    border: 1px solid rgba(174, 207, 255, 1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      margin-right: 4px;
      vertical-align: middle;
    }

    .text {
      font-size: 28px;
      color: #63656a;
      line-height: 36px;
      font-weight: 400;
      vertical-align: middle;
    }

    .but {
      width: 144px;
      height: 56px;
      background: #3981f4;
      border-radius: 8px;
      font-size: 24px;
      color: #ffffff;
      text-align: center;
      line-height: 58px;
      font-weight: 400;
      flex-shrink: 0;
      margin-left: 24px;
    }
  }

  .notifys_bottom {
    bottom: 78px;
  }

  .notifys_top {
    top: 78px;
  }
</style>
