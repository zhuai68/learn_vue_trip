import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "normalize.css";
import "./assets/css/index.css";

createApp(App).use(router).mount("#app");
