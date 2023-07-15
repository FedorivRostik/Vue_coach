import axios from "axios";
export default {
  logout(context) {
    context.commit("setUser", {
      token: null,
      userid: null,
      tokenExpiration: null,
    });
  },
  async login(context, payload) {
    return context.dispatch("auth", { ...payload, mode: "login" });
  },
  async signup(context, payload) {
    return context.dispatch("auth", { ...payload, mode: "signup" });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBREWKoxjj9i3BZN14Z2ehx7DamSt0UaFQ";

    if (mode === "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBREWKoxjj9i3BZN14Z2ehx7DamSt0UaFQ";
    }

    const response = await axios.post(url, {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    });
    if (response.status !== 200) {
      const error = new Error(response.statusText || "Failed sign up");
      throw error;
    }
    const { data } = response;

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userID", data.localId);
    localStorage.setItem("tokenExpiration", data.expiresIn);
    context.commit("setUser", {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userID");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    if (token && userId && tokenExpiration) {
      context.commit("setUser", {
        token,
        userId,
        tokenExpiration,
      });
    }
  },
};
