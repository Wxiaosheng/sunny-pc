import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import routers from "./routes";

createApp(App)
  .use(Antd)
  .use(routers)
  .mount("#app");
