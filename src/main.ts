import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import provideTools from "@/utils/common/tools"; // provide 下发公共方法
import directiveOrder from "@/utils/directives/directive"; // 注册全局指令
import inheritElement from "@/components/element"; // 注册全局组件

const app = createApp(App);

provideTools(app);
directiveOrder(app);
inheritElement(app);

app.use(createPinia());
app.use(router);

app.mount("#app");

app.config.errorHandler = (err) => {
  console.log(err, "err"); // 处理错误
};
