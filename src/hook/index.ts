import { ref, watch, onUnmounted, nextTick } from "vue";
import type { Ref } from "vue";

import { throttle } from "lodash";

export type result = {
  isRoll: Ref<boolean>;
  isTarget: Ref<boolean>;
  backTopFun: () => void;
};

type WEle = Window | Document | HTMLElement;

export type useOnRoll = (hShow: number, target?: string) => result;

const cubic = (value: number) => Math.pow(value, 3);
const easeInOutCubic = (value: number) =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;

export const useOnRoll: useOnRoll = (hShow, target): result => {
  let container: WEle;
  let element: any;
  let timer: any;

  const isRoll: Ref<boolean> = ref(false);
  const isTarget: Ref<boolean> = ref(false);
  const oldScrollTop: Ref<number> = ref(0);
  const eleScrollTop: Ref<number> = ref(0);

  const backTopFun = (): void => {
    if (target) {
      const beginTime = Date.now();
      const beginValue: any = element.scrollTop || eleScrollTop;
      const rAF =
        window.requestAnimationFrame || ((func) => setTimeout(func, 16));
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          element.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          rAF(frameFunc);
        } else {
          element.scrollTop = 0;
        }
      };
      rAF(frameFunc);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const listenScrollingFn = throttle(() => {
    eleScrollTop.value =
      element.scrollTop || window.scrollY || window.pageYOffset;
    isTarget.value = eleScrollTop.value >= hShow;
  }, 300);

  watch(eleScrollTop, (newValue, oldValue) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (newValue === eleScrollTop.value) {
        isRoll.value = false;
        oldScrollTop.value = newValue;
      }
    }, 600);
    if (oldScrollTop.value === oldValue) isRoll.value = true;
  });

  nextTick(() => {
    container = window || document;
    element = document.documentElement || document.body;
    if (target) {
      element = document.querySelector(target);
      if (!element) throw new Error(`target is not existed: ${target}`);
      container = element;
    }
    container.addEventListener("scroll", listenScrollingFn);
  });

  onUnmounted(() => {
    container.removeEventListener("scroll", listenScrollingFn);
  });
  return { isRoll, isTarget, backTopFun };
};
