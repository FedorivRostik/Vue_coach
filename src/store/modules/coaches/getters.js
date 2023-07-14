export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state, _, _2, rootGetters) {
    return state.coaches.some((coach) => coach.id === rootGetters.userId);
  },
  shouldUpdate(state) {
    const lastAxios = state.lastAxios;
    if (!lastAxios) {
      return true;
    }
    const cuurentTimestamp = new Date().getTime();

    return (cuurentTimestamp - lastAxios) / 1000 > 60;
  },
};
