class Animation {
  constructor(el, targetEl, option = null) {
    this.el = el;
    this.targetEl = targetEl;
    this.animateObj = "";
    this.option = option;
  }
  // 动画执行流程
  animate() {
    if (!this.option) return;
    this.startAnimate();
    this.endAnimate();
  }
  // 创建执行动画的物体
  create(createObj) {
    const isFunction =
      Object.prototype.toString.call(createObj).slice(8, -1) === "Function";
    if (!isFunction) return new Error(`TypeError: argument must be 'Function'`);
    this.animateObj = createObj(this.el);
    this.animate();
  }
  //  开启动画
  startAnimate() {
    requestAnimationFrame(() => {
      this.option.setDom(this.animateObj, this.targetEl);
    });
  }
  // 结束动画
  endAnimate() {
    let timer = setTimeout(() => {
      this.animateObj.remove();
      clearTimeout(timer);
    }, this.option.moveTime);
  }
}
function countActiveAdd() {
  // let dom = document.getElementById('qiye-contrast-count')
  // dom.classList.remove('reduceStyle')
  // dom.classList.remove('addStyle')
  // setTimeout(() => {
  //   dom.classList.add('addStyle')
  // }, 300)
}
function countActiveReduce() {
  // let dom = document.getElementById('qiye-contrast-count')
  // dom.classList.remove('addStyle')
  // dom.classList.remove('reduceStyle')
  // setTimeout(() => {
  //   dom.classList.add('reduceStyle')
  // }, 300)
}
// 对比配置项
const contrastAnimateOption = {
  url: "https://public-oss.qizhidao.com/APP/202204/1950041761fb41bf90c4a46ea34b4764.png",
  width: 52,
  height: 52,
  getContrastAnimateDom(el) {
    const { right, top, width, height } = el.getBoundingClientRect();
    let div = document.createElement("div");
    div.style.position = "fixed";
    div.style.zIndex = 2000;
    div.style.left = right - width / 2 - contrastAnimateOption.width / 2 + "px";
    div.style.top = top + height / 2 - contrastAnimateOption.height / 2 + "px";
    div.style.width = contrastAnimateOption.width + "px";
    div.style.height = contrastAnimateOption.height + "px";
    div.style.borderRadius = "50%";
    div.style.opacity = 0;
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.src = contrastAnimateOption.url;
    div.appendChild(img);
    div.style.transform = "scale(1)";
    div.style.transition =
      "left 0.65s linear 0.2s, top 0.65s cubic-bezier(0.35, 0, 0.73, 0.08) 0.2s, opacity 0.2s, transform 0.3s linear 0.85s";
    document.body.appendChild(div);
    return div;
  },
  setChangStyle(animateObj, targetEl) {
    let { left, top, width, height } = targetEl.getBoundingClientRect();
    animateObj.style.left =
      left + width / 2 - contrastAnimateOption.width / 2 + "px";
    animateObj.style.top =
      top + height / 2 - contrastAnimateOption.height / 2 + "px";
    animateObj.style.opacity = 1;
    animateObj.style.transform = "scale(0)";
    countActiveAdd();
  },
};
function contrastAnimateAction(el, animationOption) {
  if (animationOption.type === "reduce") {
    countActiveReduce();
  } else if (animationOption.type === "add") {
    // 设置初始化配置 getDom动画节点生成 setDom设置动画结束样式
    // 设置运动结束节点 targetEl
    let targetEl = document.getElementById("shopCart");
    animationOption.getDom = contrastAnimateOption.getContrastAnimateDom;
    animationOption.setDom = contrastAnimateOption.setChangStyle;
    animationOption.moveTime = 1150;
    const animate = new Animation(el, targetEl, animationOption);
    animate.create(() => {
      // 生成动画节点
      let dom = animationOption.getDom(el);
      document.body.appendChild(dom);
      return dom;
    });
  }
}
export default contrastAnimateAction;
