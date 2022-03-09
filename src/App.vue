<template>
  <n-config-provider :theme="lightTheme" :theme-overrides="themeOverrides">
    <n-space vertical class="space">
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
        <n-layout class="content">
          <RouterView />
        </n-layout>
      </n-layout>
    </n-space>

    <n-modal v-model:show="showSignInModal" transform-origin="center">
      <n-card style="width: 450px" role="dialog" aria-modal="true">
        <LoginFrom @doSignUp="doShowSignUpModal" @doLogin="doLogin" />
      </n-card>
    </n-modal>

    <n-modal v-model:show="showSignUpModal" transform-origin="center">
      <n-card style="width: 450px" role="dialog" aria-modal="true">
        <SignUpForm />
      </n-card>
    </n-modal>

    <n-modal v-model:show="showInputTextModal" transform-origin="center">
      <n-card style="width: 450px" role="dialog" aria-modal="true">
        <InputTextForm
          title="ADD BODYFORMAT"
          content="INPUT BODYFORMAT TITLE"
          submitText="CREATE"
          @submit="createBodyFormat"
        />
      </n-card>
    </n-modal>
  </n-config-provider>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
import { lightTheme } from "naive-ui";
import LoginFrom from "@/components/LoginForm.vue";
import InputTextForm from "@/components/InputTextForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import { useAuthStore } from "@/stores/auth";
import { useDataStore } from "@/stores/data";

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
  components: { RouterView, NavBar, LoginFrom, SignUpForm, InputTextForm },
  data() {
    return {
      currentTab: "account",
      showSignInModal: false,
      showSignUpModal: false,
      showInputTextModal: false,
      collapsed: this.$isMobile(),
    };
  },
  setup() {
    return {
      themeOverrides,
      lightTheme,
      data: useDataStore(),
    };
  },
  watch: {
    "$route" () {
      const name = this.$route.name; 
      const id = this.$route.params.id;
      const tab = id || name;
      if (tab && this.currentTab !== tab) {
        this.currentTab = tab.toString();
      }
    },
  },
  computed: {
    menuOptions() {
      const menuOptions: Array = [...menus];
      menuOptions[1].children = this.data.bodyFormatMenus;
      menuOptions[1].children.push({
        label: "ADD BODYFORMAT",
        key: "add_bodyformat",
      });
      return menuOptions;
    },
  },
  methods: {
    onUpdateValue(key: string, item: any) {
      if (key === "add_bodyformat") {
        this.showInputTextModal = true;
        return;
      }
      this.currentTab = key;
      const path: string = item.path;
      if (path == null) {
        return;
      }
      this.$router.push(path);
    },
    doShowSignUpModal() {
      this.showSignInModal = false;
      this.showSignUpModal = true;
    },
    doLogin(user) {
      const auth = useAuthStore();
      auth.afterLogin("newToken...", user);
      this.showSignInModal = false;
    },
    createBodyFormat(name) {
      this.showInputTextModal = false;
      this.data.createBodyFormat(name);
    },
  },
};

const menus = [
  { label: "ACCOUNT", key: "account", path: "/" },
  {
    label: "BODY FORMAT",
    key: "bodyFormat",
    children: [],
  },
  {
    label: "CONTACT LIST",
    key: "contactList",
    children: [],
  },
];
</script>

<style lang="scss">
@import "@/assets/base.scss";

:root {
  --app-bar-height: 50px;
}

.space > div {
  margin-bottom: 0 !important;
}

.appbar {
  height: var(--app-bar-height);
  background-color: var(--primary-color);
}

.menu {
  height: calc(100vh - #{var(--app-bar-height)});
  background-color: var(--color-background-soft);
}

.content {
  background: var(--background-color);
}
</style>
