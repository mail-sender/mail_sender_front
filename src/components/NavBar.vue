<template>
  <div class="appbar">
    <div v-if="isMobile" class="btn-menu" @click="clickMenuButton">
      <font-awesome-icon color="#fff" icon="bars" class="icon" />
    </div>
    <div class="buttons">
      <template v-if="loggedIn">
        <n-button ghost color="#fff" @click="clickLogoutBtn">LOG-OUT</n-button>
      </template>
      <template v-else>
        <n-button ghost color="#fff" @click="clickSignInButton"
          >SIGN IN</n-button
        >
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from "@/stores/auth";

export default {
  data() {
    return {
      auth: useAuthStore(),
      isMobile: this.$isMobile(),
    };
  },
  setup() {
    return {};
  },
  computed: {
    loggedIn() {
      return this.auth.loggedIn;
    },
  },
  methods: {
    clickSignInButton() {
      this.$emit("showSignInModal");
    },
    clickMenuButton() {
      this.$emit("clickMenuBtn");
    },
    clickLogoutBtn() {
      this.auth.clear();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.appbar {
  display: flex;
  height: var(--app-bar-height);
  padding: 5px 15px;
  background-color: var(--primary-color);
  > * {
    flex: 1;
  }
  .buttons {
    text-align: right;
  }
  .btn-menu > .icon {
    margin: 12px 0;
  }
}
</style>
