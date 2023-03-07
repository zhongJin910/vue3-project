import { ref, onUnmounted, onMounted, nextTick } from "vue";

// 禁用ios外层回弹（锁死body滚动）
export const useBodyDisableScrolling = () => {
  const body = <HTMLElement>document.querySelector("body");
  const observer: any = ref(null);
  const setOverflow = (overflows: string): void => {
    body.style.overflow = overflows;
  };

  // 监听body元素属性变化
  const onMtObserver = (): void => {
    observer.value = new MutationObserver((mutations: any): void => {
      const _overflow = mutations[0].target?.style.overflow;
      if (_overflow === "auto") setOverflow("hidden");
    });
    observer.value.observe(body, { attributes: true });
  };

  nextTick(() => {
    onMtObserver();
    setOverflow("hidden");
  });

  onUnmounted(() => {
    setOverflow("auto");
    observer.value.disconnect();
  });
};
