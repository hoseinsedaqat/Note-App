<template>
  <div>
    <v-app>
      <v-card class="mx-auto overflow-hidden" width="100%" height="100%">
        <v-app-bar color="deep-purple accent-4" dark prominent>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>My Note App</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item to="/">
                <v-list-item-title>Post Note</v-list-item-title>
              </v-list-item>

              <v-list-item to="/Note">
                <v-list-item-title> Note</v-list-item-title>
              </v-list-item>

              <v-list-item to="/About">
                <v-list-item-title>About App</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <router-view></router-view>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
