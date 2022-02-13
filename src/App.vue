<template>
  <!-- TODO: AppBar -->
  <!-- TODO: SideBar -->
  <RouterView />
  <!--
  <v-app>
    <v-main>
      
      <v-container>
        
        
      </v-container>
    </v-main>
  </v-app>
  -->
</template>

<script>
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: { RouterView },
  data: () => ({
    //
  }),
};
</script>

<style>
@import "@/assets/base.css";
</style>
