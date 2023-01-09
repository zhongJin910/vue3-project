// 元素曝光
class TargetExposure {
  saveArr: any[];
  shenceParams?: object;
  fn: (() => any) | undefined;
  constructor(target: string, shenceParams?: object, fn?: () => any) {
    this.saveArr = [];
    this.shenceParams = shenceParams;
    this.fn = fn;
    this.init(target);
  }
  init(target: string): void {
    const self = this;
    try {
      const targetList: NodeListOf<Element> = document.querySelectorAll(target);
      targetList.forEach((item) => {
        const observer = new IntersectionObserver(this.intersect.bind(self));
        observer.observe(item);
      });
    } catch (error) {
      console.log(error);
    }
  }
  intersect(entries: any): void {
    try {
      if (!entries[0].isIntersecting) return;
      const id: any = entries[0].target.dataset.id;
      const opt: object = JSON.parse(entries[0].target.dataset.opt || "{}");
      const shenceOpt: object = this.shenceParams || opt;
      if (this.saveArr.includes(id)) return;
      console.log(id, shenceOpt, "shenceOpt");
      if (typeof this.fn === "function") return this.fn();
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
