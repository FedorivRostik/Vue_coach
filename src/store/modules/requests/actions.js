import axios from "axios";
export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await axios.post(
      `https://vue-http-demo-2439d-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      newRequest
    );
    if (response.status !== 200) {
      const error = new Error("Failed to create contact");
      throw error;
    }
    const { data } = response;
    newRequest.id = data.name;
    newRequest.coachId = payload.coachId;
    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await axios.get(
      `https://vue-http-demo-2439d-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`
    );

    if (response.status !== 200) {
      const error = new Error("Failed to get requests");
      throw error;
    }

    const { data } = response;
    const requests = [];

    for (const key in data) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: data[key].userEmail,
        message: data[key].message,
      };
      requests.push(request);
    }
    context.commit("setRequests", requests);
  },
};
