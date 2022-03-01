import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import naive from "naive-ui";
import VueMobileDetection from "vue-mobile-detection";

import "vfonts/Lato.css";
import "vfonts/FiraCode.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBars);
library.add(faEllipsisVertical);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(naive);
app.use(VueMobileDetection);

app.mount("#app");
