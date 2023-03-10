import type { App } from "vue";

import Button from "./button/index.vue";
import Popup from "./popup/index.vue";

const elementArr = [Button, Popup];

const inheritElement = (app: App) => {
  console.log(elementArr,'===');
  
  elementArr.forEach((v: any) => app.component("V" + v.name, v));
};

export default inheritElement;
