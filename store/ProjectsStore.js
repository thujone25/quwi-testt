export const state = () => {
  return {
    projectsList: ''
  };
};
export const actions = {
  getAllProjects({commit}, data) {
    return new Promise((resolve, reject) => {
      this.$axios.get('projects-manage/index').then((resp) => {
        commit('setProjectsList', true);
        resolve();
      }).catch((err) => {
        reject(err.response);
      });
    });
  }
};
export const mutations = {
  setProjectsList(state, data) { state.projectsList = data; }
};
