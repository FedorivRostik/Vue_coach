import axios from "axios";

let timer;

const setTimer = (context, expiresIn) => {
  return setTimeout(function () {
    context.dispatch("autoLogout");
  }, expiresIn);
};

export default {
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
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
    const expiresIn = data.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    timer = setTimer(context, expiresIn);

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("tokenExpiration", expirationDate);
    context.commit("setUser", {
      token: data.idToken,
      userId: data.localId,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimer(context, expiresIn);

    if (token && userId && tokenExpiration) {
      context.commit("setUser", {
        token,
        userId,
      });
    }
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
