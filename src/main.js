import { createApp, defineAsyncComponent } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseWrapper from "./components/ui/BaseWrapper";
import BaseCard from "./components/ui/BaseCard";
import BaseButton from "./components/ui/BaseButton";
import BaseBadge from "./components/ui/BaseBadge";
import BaseSpinner from "./components/ui/BaseSpinner";
// import BaseDialog from "./components/ui/BaseDialog";

const BaseDialog = defineAsyncComponent(() =>
  import("./components/ui/BaseDialog")
);

const app = createApp(App);

app.component("base-wrapper", BaseWrapper);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.use(router);
app.use(store);
router.isReady().then(() => {
  app.mount("#app");
});
