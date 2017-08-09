
export default [
  {
    name: 'users.index',
    path: '/users',
    component: require('./pages/index.vue')
  },
  {
     name: 'users.create',
     path: '/users/create',
     component: require('./pages/create.vue')
  }
]
