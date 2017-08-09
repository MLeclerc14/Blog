import { default as api } from '../api';
import * as types from '../../../vuex/mutation-types';

// initial state
const state = {
  all: []
};

// getters
const getters = {
    users: state => state.all
};

// actions
const actions = {
    all ({ commit }) {
        api.all(users => {
            commit(types.GET_USERS, { users });
        });
    },
    store ({ commit }, data) {
        api.store(data, response => {
            if (response.status === 200) {
                commit(types.STORE_USER, response);
            }
            return response;
        });
    },
    edit ({ commit }, user){
        commit(types.EDIT_USER, user);
    },
    remove ({ commit }, user) {
        let id = user.id;
        api.remove(id, user, response => {
            commit(types.DELETE_USER, user);
        });
    }
};

// mutations
const mutations = {
    [types.GET_USERS] (state, { users }) {
        state.all = users;
    },
    [types.DELETE_USER] (state, { user }) {
        let users = state.all;
        users.splice(users.indexOf(user), 1);
    },
    [types.EDIT_USER] (state, user) {
        let active = state.all.find(i => i.id == user);
        if (active) {
            state.active = active;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
