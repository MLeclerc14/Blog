import * as TYPES from '../../vuex/types';

const state = {
  list: [],
  pagination: {},
};


const mutations = {
  [TYPES.USERS_SET_DATA](st, obj) {
    st.list = obj.list
    st.pagination = obj.pagination
  },
};

const actions = {
  usersSetData({ commit }, obj) {
    commit(TYPES.USERS_SET_DATA, obj)
  },
};

const module = {
  state,
  mutations,
  actions,
};

export default { module }
