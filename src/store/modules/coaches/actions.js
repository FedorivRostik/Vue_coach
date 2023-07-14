import axios from "axios";
export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.description,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await axios.put(
      `https://vue-http-demo-2439d-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      coachData
    );
    if (response.status !== 200) {
      const error = new Error("Failed to refresh");
      throw error;
    }
    context.commit("registerCoach", { ...coachData, id: userId });
  },
  async loadCoaches(context) {
    const response = await axios.get(
      "https://vue-http-demo-2439d-default-rtdb.firebaseio.com/coaches.json"
    );
    console.log(response);
    if (response.status !== 200) {
      const error = new Error("Failed to refresh");
      throw error;
    }
    const coaches = [];
    const { data } = response;
    for (const key in data) {
      const coach = {
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        description: data[key].description,
        hourlyRate: data[key].hourlyRate,
        areas: data[key].areas,
      };
      coaches.push(coach);
    }
    context.commit("setCoaches", coaches);
  },
};
