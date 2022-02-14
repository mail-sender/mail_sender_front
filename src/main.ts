import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import naive from "naive-ui";

import "vfonts/Lato.css";
import "vfonts/FiraCode.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(naive);
app.mount("#app");
