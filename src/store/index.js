import { createStore } from "vuex";

import requestsModule from "./modules/requests";
import coachesModule from "./modules/coaches";
import authModule from "./modules/auth";
const store = createStore({
  modules: {
    requests: requestsModule,
    coaches: coachesModule,

    authModule,
  },
});

export default store;
