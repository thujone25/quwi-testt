export const state = () => {
  return {
    activeComponent: '',
    data: {},
    title: '',
    context: ''
  };
};
export const actions = {};
export const mutations = {
  setModal(state, {component = '', data = {}, title = '', context = ''}) {
    state.activeComponent = component;
    state.data = data;
    state.title = title;
    state.context = context;
  },
  unsetModal(state) {
    state.activeComponent = '';
    state.data = {};
    state.title = '';
    state.context = '';
  }
};
