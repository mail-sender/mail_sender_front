<template>
  <div>
    <div class="appbar"></div>
    <div class="content">
      <div class="menu">
        <n-menu :options="menuOptions" />
      </div>
      <div class="container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: { RouterView },
  data: () => ({}),
  setup() {
    return { menuOptions: menus };
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

.appbar {
  height: 50px;
  background-color: var(--point-color);
}

.content {
  display: flex;
  .menu {
    width: 300px;
  }
}
</style>
