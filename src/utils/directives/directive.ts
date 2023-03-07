import * as directiveArr from "./index";
import type { App } from "vue";

const directiveSet: any = directiveArr;
const directiveOrder = (app: App) => {
  const directiveArr = Object.keys(directiveSet);
  directiveArr.forEach((v: string) => app.directive(v, directiveSet[v]));
};

export default directiveOrder;
