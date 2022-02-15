<template>
  <div class="appbar">
    <div class="buttons">
      <template v-if="loggedIn">
        <n-button>Logout</n-button>
      </template>
      <template v-else>
        <n-button dashed>Login</n-button>
      </template>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  setup () {
    const auth = useAuthStore();
    return { loggedIn: auth.loggedIn }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/base.css";

.appbar {
  height: var(--app-bar-height);
  padding: 5px 15px;
  background-color: var(--primary-color);
  text-align: right;
}
</style>