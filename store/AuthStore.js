export const state = () => {
  return {
    authenticated: true
  };
};
export const actions = {};
export const mutations = {
  setAuth(state, value) { state.authenticated = value; }
};
