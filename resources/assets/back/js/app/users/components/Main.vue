<template>
    <page-content page-title="Utilisateurs">
        <div class="main-content">
            <md-table-card>
              <md-toolbar>
                <h1 class="md-title">Utilisateurs</h1>
             </md-toolbar>
              <md-table md-sort="users">
                <md-table-header>
                  <md-table-row>
                    <md-table-head md-sort-by="active">Active</md-table-head>
                    <md-table-head md-sort-by="name">Nom - Prénom</md-table-head>
                    <md-table-head md-sort-by="email">Email</md-table-head>
                    <md-table-head>Actions</md-table-head>
                  </md-table-row>
                </md-table-header>
                <md-table-body>
                    <md-table-row v-for="(user, index) in users" :key="index">
                        <md-table-cell>
                            <md-checkbox id="active" name="active" v-model="user.active"></md-checkbox>
                        </md-table-cell>
                        <md-table-cell>{{ user.firstname }} {{ user.lastname }}</md-table-cell>
                        <md-table-cell>{{ user.email }}</md-table-cell>
                        <md-table-cell>
                            <md-icon>remove_red_eye</md-icon>
                            <md-icon>edit</md-icon>
                            <md-icon>delete_forever</md-icon>
                        </md-table-cell>
                    </md-table-row>
                </md-table-body>
              </md-table>
              <md-table-pagination
                  md-size="5"
                  md-total="10"
                  md-page="1"
                  md-label="Nombre de lignes"
                  md-separator="sur"
                  :md-page-options="[5, 10, 25, 50]"
                  @pagination="onPagination"></md-table-pagination>
            </md-table-card>
        </div>
    </page-content>
</template>

<script>
  export default {
      name: 'Users',
      data() {
          return {
              loading : false,
              users   : [],
              user : {
                  active: '',
                  firstname: '',
                  lastname: '',
                  email: ''
              }
          }
      },
      mounted: function() {
          this.fetchUsers();
      },
      methods: {
          fetchUsers() {
              let self = this;
              axios.get('/api/user')
              .then((response) => {
                  self.users = response.data.data;
              })
              .catch((error) => {
                  console.log(error);
              });
          }
      }
  }
</script>
