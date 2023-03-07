import { createApp } from "vue";
import type { App } from "vue";
import _App from "./App.vue";
import router from "@/router/index";

// provide 下发公共方法
import provideTools from "@/utils/common/tools";
// 注册全局指令
import directiveOrder from "@/utils/directives/directive";
// 注册全局组件
import inheritElement from "@/element";

const app: App = createApp(_App);

provideTools(app);
directiveOrder(app);
inheritElement(app);

app.use(router).mount("#root");
app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log(err, "err");
};
