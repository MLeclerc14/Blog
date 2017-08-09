<template>
    <page-content page-title="Gestion des utilisateurs">
        <div class="main-content">
            <md-card>
              <md-toolbar>
                <h1 class="md-title">Ajouter</h1>
             </md-toolbar>
             <md-card-content>
                 <form novalidate @submit.stop.prevent="submit">
                  <md-input-container>
                    <label>Nom</label>
                    <md-input v-model="firstname"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>Prénom</label>
                    <md-input v-model="lastname"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>Email</label>
                    <md-input v-model="email"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>Mot de passe</label>
                    <md-input type="password" v-model="password"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>Confirmation du mot de passe</label>
                    <md-input type="password" v-model="confirmPassword"></md-input>
                  </md-input-container>
                  <md-button class="md-raised">Retour</md-button>
                  <md-button class="md-raised md-primary">Enregistrer</md-button>
                </form>
              </md-card-content>
            </md-card>
        </div>
    </page-content>
</template>

<script>
  export default {

  }
</script>
