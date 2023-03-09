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

// 元素曝光
class TargetExposure {
  private saveArr: any[];
  private unObserve: IntersectionObserver[];
  private shenceParams?: object;
  private entries: any[];
  callback: (() => any) | undefined;

  constructor(target: string, shenceParams?: object, fn?: () => any) {
    this.saveArr = [];
    this.unObserve = [];
    this.shenceParams = shenceParams;
    this.entries = [];
    this.callback = fn;
    this.install(target);
  }
  install(target: string): void {
    const self = this;
    try {
      const targetList: NodeListOf<Element> = document.querySelectorAll(target);
      targetList.forEach((item) => {
        const observer = new IntersectionObserver(this.intersect.bind(self));
        observer.observe(item);
        this.unObserve.push(observer);
      });
    } catch (error) {
      console.log(error);
    }
  }
  uninstall() {
    this.unObserve.map((item) => {
      item.unobserve(this.entries[0].target);
    });
  }
  intersect(entries: any): void {
    this.entries = entries;
    try {
      if (!entries[0].isIntersecting) return;
      const id: any = entries[0].target.dataset.id;
      console.log(entries[0].target, "entries[0].target.dataset");

      const opt: object = JSON.parse(entries[0].target.dataset.opt || "{}");
      const shenceOpt: object = this.shenceParams || opt;
      if (this.saveArr.includes(id)) return;
      console.log(id, shenceOpt, "shenceOpt");
      if (typeof this.callback === "function") return this.callback();
      this.saveArr.push(id);
      // shenceReport({ ...shenceOpt });
    } catch (error) {
      console.log(error);
    }
  }
}

export const targetExposure = (
  target: string,
  shenceParams?: object,
  fn?: () => any
): TargetExposure => {
  return new TargetExposure(target, shenceParams, fn);
};
