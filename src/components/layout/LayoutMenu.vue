<template>
  <v-app>
    <v-toolbar app :clipped-left="clipped" dark color="primary">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator">
          <span>Menu</span>
          <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="item in items" :key="item" :to="item.link">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Nova Página',
          link: '/novapagina'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vue Seed Project'
    }
  },
  name: 'App'
}
</script>
