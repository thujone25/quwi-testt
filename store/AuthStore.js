import Cookie from 'js-cookie';
import axios from 'axios';

export const state = () => {
  return {
    authenticated: false
  };
};
export const actions = {
  signIn({commit}, data) {
    return new Promise((resolve, reject) => {
      this.$axios.post('auth/login', data).then((resp) => {
        if (process.client) Cookie.set('authToken', resp.data.token, {expires: 30});
        this.$axios.setToken(resp.data.token, 'Bearer');
        commit('setAuth', true);
        resolve();
      }).catch((err) => {
        reject(err.response)
      });
    });
  },
  logOut({commit}) {
    return new Promise((resolve) => {
      Cookie.set('authToken', '');
      this.$axios.setToken('', 'Bearer');
      commit('setAuth', false);
      resolve();
    });
  }
};
export const mutations = {
  setAuth(state, value) { state.authenticated = value; }
};
