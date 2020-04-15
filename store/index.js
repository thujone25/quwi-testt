import cookieparser from 'cookieparser';

export const state = () => {
  return {
    requestInProgress: false
  };
};
export const actions = {
  nuxtServerInit({commit}, {req}) {
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        const auth = parsed.authToken;
        if (auth) {
          this.$axios.setToken(auth, 'Bearer');
          commit('AuthStore/setAuth', true);
        } else {
          commit('AuthStore/setAuth', false);
        }
      } catch (err) {
        commit('AuthStore/setAuth', false);
      }
    }
  }
};
export const mutations = {
  setRequestProgress(state, value) { state.requestInProgress = value; }
};
