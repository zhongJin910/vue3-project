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

const targetExposure = (
  target: string,
  shenceParams?: object,
  fn?: () => any
): TargetExposure => {
  return new TargetExposure(target, shenceParams, fn);
};

export { targetExposure };
