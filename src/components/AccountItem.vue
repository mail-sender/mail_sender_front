<template>
  <div class="box-account">
    <div class="header">{{ account.account_name }}</div>
    <div class="box-content">
      <div class="item">
        <div class="label">NAME</div>
        <div class="value">{{ account.name }}</div>
        <div class="btn-change">
          <n-button quaternary type="info">Change</n-button>
        </div>
      </div>

      <div class="item">
        <div class="label">EMAIL</div>
        <div class="value">{{ account.email }}</div>
        <div class="btn-change">
          <n-button quaternary type="info">Change</n-button>
        </div>
      </div>

      <div class="item">
        <div class="label">SMTP</div>
        <div class="value">{{ account.smtp }}</div>
        <div class="btn-change">
          <n-button quaternary type="info">Change</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Account } from "@/models/account.interface";

export default defineComponent({
  props: {
    account: {
      type: Object as Account,
      required: true,
    },
  },
  setup(props, context) {
    return {};
  },
});
</script>

<style scoped lang="scss">
.header {
  margin: 45px 0 5px;
  font-weight: bold;
}

.box-content {
  border: 1px solid #e8e8e8;
  box-shadow: 4px 3px 6px #e8e8e8;
  .item + .item {
    border-top: 1px solid #e8e8e8;
  }
}

.box-content > .item {
  display: flex;
  padding: 5px 0;
  > * {
    margin: auto;
  }
  > .value {
    flex: 5;
  }
  .label {
    flex: 2;
    padding-left: 20px;
    font-weight: bold;
  }
  .btn-change {
    padding-right: 20px;
  }
}
</style>
