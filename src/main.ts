import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import routers from "./routes";
import store from "./store";

createApp(App)
  .use(Antd)
  .use(routers)
  .use(store)
  .mount("#app");
