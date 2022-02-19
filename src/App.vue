<template>
  <n-config-provider :theme="lightTheme" :theme-overrides="themeOverrides">
    <n-space vertical>
      <NavBar
        @clickMenuBtn="collapsed = !collapsed"
        @showSignInModal="showSignInModal = true"
      />
      <n-layout has-sider>
        <n-layout-sider :width="300" :collapsed="collapsed">
          <div class="menu">
            <n-menu
              :value="currentTab"
              :options="menuOptions"
              @update:value="onUpdateValue"
            />
          </div>
        </n-layout-sider>
        <n-layout>
          <div class="content">
            <div class="container">
              <RouterView />
            </div>
          </div>
        </n-layout>
      </n-layout>
    </n-space>

    <n-modal v-model:show="showSignInModal" transform-origin="center">
      <n-card style="width: 450px" role="dialog" aria-modal="true">
        <LoginFrom />
      </n-card>
    </n-modal>
  </n-config-provider>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
import { lightTheme } from "naive-ui";
import LoginFrom from "@/components/LoginForm.vue";

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
  components: { RouterView, NavBar, LoginFrom },
  data() {
    return {
      currentTab: "account",
      showSignInModal: false,
      collapsed: this.$isMobile(),
    };
  },
  setup() {
    return { menuOptions: menus, themeOverrides, lightTheme };
  },
  methods: {
    onUpdateValue(key: string, item: any) {
      this.currentTab = key;
      const path: string = item.path;
      if (path == null) {
        return;
      }
      this.$router.push(path);
    },
  },
};

const menus = [
  { label: "ACCOUNT", key: "account", path: "/" },
  {
    label: "BODY FORMAT",
    key: "bodyFormat",
    children: [
      {
        label: "FORMAT 01",
        key: "format_01",
        path: "/bodyFormat",
      },
      {
        label: "FORMAT 02",
        key: "format_02",
        path: "/bodyFormat",
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

.menu {
  height: calc(100vh - #{var(--app-bar-height)});
  background-color: var(--color-background-soft);
}
</style>
