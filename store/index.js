export const state = () => {
  return {
    requestInProgress: false
  };
};
export const actions = {};
export const mutations = {
  setRequestProgress(state, value) { state.requestInProgress = value; }
};
