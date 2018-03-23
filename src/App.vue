<template>
  <!-- <div id="app">
    <div id="nav">
       |
      <router-link to="/remarkable">Remarkable.js</router-link>
      Choose one you like
    </div>
    <router-view/>
  </div> -->
  <v-app>
    <v-layout warp>
      <v-btn fab small dark @click.stop="drawer = !drawer" color="green">
        <v-icon color="black">menu</v-icon>
      </v-btn>
      <v-navigation-drawer temporary v-model="drawer" absolute>
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                VueMark
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list dense class="pt-0">
          <v-list-tile v-for="item in items" :to="item.link" :key="item.title">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <v-container fluid>
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      drawer:  null,
      items: [
        { title: 'Remarkable', link: '/' },
        { title: 'Marked', link: '/marked' }
      ]
    }
  },
}
</script>


<style>
  v-list-tile-content {
    height: 10vh;
  }
</style>
