<template>
  <v-app>
    <v-main>
      <!-- TODO: AppBar -->
      <v-container>
        <!-- TODO: SideBar -->
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: { HelloWorld, RouterView },
  data: () => ({
    //
  }),
};
</script>

<style>
@import "@/assets/base.css";
</style>
