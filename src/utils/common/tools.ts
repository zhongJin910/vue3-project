import * as toolArr from "./index";
import type { App } from "vue";

const toolSet: any = toolArr;
const provideTools = (app: App) => {
  const toolSetArr = Object.keys(toolSet);
  toolSetArr.forEach((v: string) => app.provide("public_" + v, toolSet[v]));
};

export default provideTools;
