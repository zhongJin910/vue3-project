import { Ref, ref, onUnmounted, nextTick } from "vue";

// 禁用ios外层回弹（锁死body滚动）
export const useNoScroll = () => {
  const bodyEl = document.querySelector("body") as HTMLElement;

  const observer = ref() as Ref<MutationObserver>;

  const setLayout = (overflows: string): void => {
    bodyEl.style.overflow = overflows;
  };

  // 监听body元素属性变化
  const onMtObserver = (): void => {
    observer.value = new MutationObserver(
      (mutations: MutationRecord[] | any): void => {
        const _overflow = mutations[0].target?.style.overflow;
        if (_overflow === "auto") setLayout("hidden");
      }
    );
    observer.value.observe(bodyEl, { attributes: true });
  };

  nextTick(() => {
    onMtObserver();
    setLayout("hidden");
  });

  onUnmounted(() => {
    setLayout("auto");
    observer.value.disconnect();
  });
};
