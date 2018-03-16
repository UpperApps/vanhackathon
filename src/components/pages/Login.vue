<template>
  <v-container grid-list-md text-xs-center>
    <v-layout column>
      <v-flex xs12 sm6 offset-sm3>
        <v-toolbar dark color="primary">
          <v-toolbar-side-icon>
            <v-icon>account_circle</v-icon>
          </v-toolbar-side-icon>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field label="User Name" v-model="user" :rules="userRules" :counter="10" required></v-text-field>
                  <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat color="orange" @click="submit" :disabled="!valid">Submit</v-btn>
            <v-btn flat color="orange" @click="clear">Clear</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      user: '',
      userRules: [
        v => !!v || 'User name is required',
        v => (v && v.length <= 10) || 'User name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          // Chamar o serviço de autenticação.
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
