<template>
    <md-sidenav class="main-sidebar md-left md-fixed" md-swipeable ref="main-sidebar">
        <md-toolbar>
            <div class="avatar-user">
                <md-avatar class="md-avatar-icon md-large">
                    <md-icon>account_circle</md-icon>
                </md-avatar>
            </div>
        </md-toolbar>
        <div class="main-sidebar-links">
            <md-list class="md-dense">
                <md-list-item>
                    <router-link exact to="/">Tableau de bord</router-link>
                </md-list-item>
                <md-list-item>
                    <router-link exact to="/users">Utilisateurs</router-link>
                </md-list-item>
                <md-list-item>
                    <span>Gestion de contenu</span>
                    <md-list-expand>
                        <md-list>
                            <md-list-item class="md-inset">
                                <router-link exact to="/pages">Pages</router-link>
                            </md-list-item>
                            <md-list-item class="md-inset">
                                <router-link exact to="/news">Actualités</router-link>
                            </md-list-item>
                        </md-list>
                    </md-list-expand>
                </md-list-item>
                <md-list-item>
                    <router-link exact to="/configuration">Configuration</router-link>
                </md-list-item>
                <md-list-item>
                    <router-link exact to="/logout">Se déconnecter</router-link>
                </md-list-item>
            </md-list>
        </div>
    </md-sidenav>
</template>

<script>
  export default {
    name: 'Sidenav',
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
      };
    },
    computed: {

    },
    methods: {
      toggleSidenav() {
        this.$refs['main-sidebar'].toggle();
      },
      closeSidenav() {
        this.$refs['main-sidebar'].close();
      }
    },
    mounted() {
    }
  };
</script>
