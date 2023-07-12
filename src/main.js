import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseWrapper from "./components/ui/BaseWrapper";

const app = createApp(App);

app.component("base-wrapper", BaseWrapper);

app.use(router);
app.use(store);
router.isReady().then(() => {
  app.mount("#app");
});
