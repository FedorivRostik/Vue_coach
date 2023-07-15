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
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBREWKoxjj9i3BZN14Z2ehx7DamSt0UaFQ",
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
    );
    if (response.status !== 200) {
      const error = new Error(response.statusText || "Failed sign up");
      throw error;
    }
    const { data } = response;
    context.commit("setUser", {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },
  async signup(context, payload) {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBREWKoxjj9i3BZN14Z2ehx7DamSt0UaFQ",
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
    );
    if (response.status !== 200) {
      const error = new Error(response.statusText || "Failed sign up");
      throw error;
    }
    console.log(response);
    const { data } = response;
    console.log(data);
    context.commit("setUser", {
      token: data.idToken,
      userid: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },
};
