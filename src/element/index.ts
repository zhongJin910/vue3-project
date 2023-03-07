import type { App } from "vue";

import Button from "./button/index.vue";
const elementArr = [Button];

const inheritElement = (app: App) => {
  elementArr.forEach((v: any) => app.component("V" + v.name, v));
};

export default inheritElement;
