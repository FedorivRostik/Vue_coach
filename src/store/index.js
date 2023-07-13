import { createStore } from "vuex";

import requestsModule from "./modules/requests";
import coachesModule from "./modules/coaches";
const store = createStore({
  modules: { requests: requestsModule, coaches: coachesModule },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
