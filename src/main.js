import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";

import { WOW } from "wowjs";
import "wowjs/css/libs/animate.css";

const app = createApp(App);
app.use(router);

document.title = "Illia Borusov - Portfolio";

app.mount("#app");
new WOW().init();
