export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    console.log(state);
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.userId;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
