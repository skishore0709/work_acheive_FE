import { createStore } from 'vuex';

export default createStore({
  state: {
    approvalPending: 0, // Initialize with your default value
  },
  mutations: {
    setApprovalPending(state, value) {
      state.approvalPending = value;
    },
    incrementApprovalPending(state, value) {
      state.approvalPending += value;
    },
    setEmpId(state, emp_id) {
      state.emp_id = emp_id; // Define the setEmpId mutation
    },
  },
  actions: {
    updateApprovalPending({ commit }, value) {
      commit('setApprovalPending', value);
    },
    incrementApproval({ commit }, value) {
      commit('incrementApprovalPending', value);
    },
  },
  getters: {
    approvalPending: (state) => state.approvalPending,
  },
});


