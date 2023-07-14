import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      lastAxios: null,
      coaches: [],
    };
  },
  mutations,
  actions,
  getters,
};
