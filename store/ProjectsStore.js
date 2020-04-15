export const state = () => {
  return {
    projectsList: ''
  };
};
export const actions = {
  getAllProjects({commit}) {
    return new Promise((resolve, reject) => {
      this.$axios.get('projects-manage/index').then((resp) => {
        commit('setProjectsList', resp.data);
        resolve();
      }).catch((err) => {
        reject(err.response);
      });
    });
  },
  updateProject({dispatch}, {id, data}) {
    return new Promise((resolve, reject) => {
      this.$axios.post(`projects-manage/update?id=${id}`, data).then((resp) => {
        dispatch('getAllProjects').then(() => {
          resolve();
        });
      }).catch((err) => {
        reject(err.response || err);
      });
    });
  }
};
export const mutations = {
  setProjectsList(state, data = '') { state.projectsList = data.projects || ''; }
};
