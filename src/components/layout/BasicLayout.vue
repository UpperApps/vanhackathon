<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-title>My App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>
