<template>
  <n-config-provider :theme="lightTheme" :theme-overrides="themeOverrides">
    <div class="appbar"></div>
    <div class="content">
      <div class="menu">
        <n-menu :options="menuOptions" />
      </div>
      <div class="container">
        <RouterView />
      </div>
    </div>
  </n-config-provider>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { lightTheme } from "naive-ui";

// node_modules/naive-ui/lib/_styles/common/light.js
const themeOverrides = {
  common: {
    primary: "#BF6B04",
    primaryColorHover: "#BF6B04",
    primaryColor: "#BF6B04",
    textColor: "#BF6B04",
  },
};

export default {
  name: "App",
  components: { RouterView },
  data: () => ({}),
  setup() {
    return { menuOptions: menus, themeOverrides, lightTheme };
  },
};

const menus = [
  { label: "ACCOUNT", key: "account" },
  {
    label: "BODY FORMAT",
    key: "bodyFormat",
    children: [
      {
        label: "FORMAT 01",
        key: "format_01",
      },
      {
        label: "FORMAT 02",
        key: "format_02",
      },
    ],
  },
  {
    label: "CONTACT LIST",
    key: "contactList",
    children: [],
  },
];
</script>

<style lang="scss">
@import "@/assets/base.css";

:root {
  --app-bar-height: 50px;
}

.appbar {
  height: var(--app-bar-height);
  background-color: var(--primary-color);
}

.content {
  display: flex;
  .menu {
    background-color: var(--color-background-soft);
    width: 300px;
    height: calc(100vh - #{var(--app-bar-height)});
  }
}
</style>
