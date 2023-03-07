export const easeInOutCubic = (v: number): number => {
  const up = Math.pow(v * 2, 3);
  const down = Math.pow((1 - v) * 2, 3);
  return v < 0.5 ? up / 2 : 1 - down / 2;
};

const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16));

// 回到顶部
export const scrollTo = (target: string): void => {
  if (target) {
    let ele = <HTMLElement>document.querySelector(target);
    if (!ele) throw new Error(`target is not existed: ${target}`);
    const oldTime: number = Date.now();
    const frameFunc = (): void => {
      const progress = (Date.now() - oldTime) / 500;
      if (progress < 1) {
        ele.scrollTop = ele.scrollTop * (1 - easeInOutCubic(progress));
        rAF(frameFunc);
      } else {
        ele.scrollTop = 0;
      }
    };
    rAF(frameFunc);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
