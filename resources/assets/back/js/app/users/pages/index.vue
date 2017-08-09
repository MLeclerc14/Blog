<template>
    <page-content page-title="Gestion des utilisateurs">
        <div class="main-content">
            <md-table-card>
              <md-toolbar>
                <h1 class="md-title">Liste des utilisateurs</h1>
                <md-menu md-size="4">
                    <md-button class="md-icon-button" md-menu-trigger>
                      <md-icon>more_vert</md-icon>
                    </md-button>
                    <md-menu-content>
                      <md-menu-item>
                        <router-link to="/users/create">Ajouter un utilisateur</router-link>
                      </md-menu-item>
                    </md-menu-content>
                </md-menu>
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
                            <md-checkbox id="active" name="active"></md-checkbox>
                        </md-table-cell>
                        <md-table-cell>{{ user.firstname }} {{ user.lastname }}</md-table-cell>
                        <md-table-cell>{{ user.email }}</md-table-cell>
                        <md-table-cell>
                            <md-icon>remove_red_eye</md-icon>
                            <md-icon>edit</md-icon>
                            <button  @click="openDialog('dialog5')">
                                <md-icon>delete_forever</md-icon>
                            </button>
                        </md-table-cell>
                    </md-table-row>
                </md-table-body>
              </md-table>
            </md-table-card>
        </div>
        <md-dialog-confirm
          :md-title="confirm.title"
          :md-content-html="confirm.contentHtml"
          :md-ok-text="confirm.ok"
          :md-cancel-text="confirm.cancel"
          @open="onOpen"
          @close="onClose"
          ref="dialog5">
        </md-dialog-confirm>
    </page-content>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
      data: () => ({
          confirm: {
              title: 'Etes vous sûr de vouloir supprimer cet utilisateur?',
              contentHtml: 'Vous ne pourrez pas revenir en arrière',
              ok: 'OK',
              cancel: 'Annuler'
          }
      }),
      computed: mapGetters({
          users: 'users'
      }),
      created () {
          this.$store.dispatch('all');
      },
      methods : {
        remove (user) {
            this.$store.dispatch('remove', user);
        },
        openDialog(ref) {
            this.$refs[ref].open();
        },
        closeDialog(ref) {
            this.$refs[ref].close();
        },
        onOpen() {
            console.log('Opened');
        },
        onClose(type) {
            console.log('Closed', type);
        }
      }
  }
</script>
