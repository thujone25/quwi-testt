import cookieparser from 'cookieparser';

export const state = () => {
  return {
    // fetcher: fetcher,
    requestInProgress: false
  };
};
export const actions = {
  nuxtServerInit({commit}, {req}) {
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        const auth = JSON.parse(parsed.authToken);
        this.$axios.setToken(auth, 'Bearer');
        commit('AuthStore/setAuth', true);
      } catch (err) {
        commit('AuthStore/setAuth', false);
      }
    }
  }
};
export const mutations = {
  setRequestProgress(state, value) { state.requestInProgress = value; }
};
