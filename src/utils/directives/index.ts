import contrastAnimateAction from "./animant.js";

const throttle = (fn: any, delay: any) => {
  // 设置一个触发开关
  let canUse = true;
  return function () {
    //如果为true，就触发技能，否则就不能触发
    if (canUse) {
      fn();
      //触发技能后，关闭开关
      canUse = false;
      //在3秒后打开开关
      setTimeout(() => (canUse = true), delay);
    }
  };
};

const api = (): any => {
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

export const addGoods = {
  mounted(el: any, binding: any) {
    el.__vueClickOutSwitch__ = binding.value;
    const handlerClick = async () => {
      const { success, data } = await api();
      if (success) {
        // el.contains(e.target) 判断点击的元素是否是本身
        if (el.__vueClickOutSwitch__ && binding.modifiers.switch) {
          contrastAnimateAction(el, { type: "add" });
        } else if (!binding.modifiers.switch) {
          contrastAnimateAction(el, { type: "add" });
        }
      }
    };

    // 给当前元素绑定个私有变量，方便在unmounted中可以解除事件监听
    el.__vueClickAddPurchase__ = throttle(handlerClick, 1000);
    el.addEventListener("click", el.__vueClickAddPurchase__);
  },
  updated(el: any, binding: any) {
    el.__vueClickOutSwitch__ = binding.value;
  },
  unmounted(el: any) {
    // 解除事件监听
    document.removeEventListener("click", el.__vueClickAddPurchase__);
    delete el.__vueClickAddPurchase__;
  },
};
