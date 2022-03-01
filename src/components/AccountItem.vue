<template>
  <div class="box-account">
    <div class="header">
      <div class="account-name">
        {{ account.account_name }}
      </div>

      <n-popover :overlap="menuOverlap" placement="left" trigger="click">
        <template #trigger>
          <font-awesome-icon icon="ellipsis-vertical" />
        </template>

        <div class="box-menu">
          <div class="item-menu" @click="clickEditBtn">수정</div>
          <div class="item-menu" @click="clickRemoveBtn">삭제</div>
        </div>
      </n-popover>
    </div>
    <div class="box-content">
      <div class="item">
        <div class="label">NAME</div>
        <div class="value">{{ account.name }}</div>
        <!--
        <div class="btn-change">
          <n-button quaternary type="info">Change</n-button>
        </div>
        -->
      </div>

      <div class="item">
        <div class="label">EMAIL</div>
        <div class="value">{{ account.email }}</div>
        <!--
        <div class="btn-change">
          <n-button quaternary type="info">Change</n-button>
        </div>
        -->
      </div>

      <div class="item">
        <div class="label">SMTP</div>
        <div class="value">{{ account.smtp }}</div>
        <!--
        <div class="btn-change">
          <n-button quaternary type="info">Change</n-button>
        </div>
        -->
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
    return {
      menuOverlap: ref(false),
      clickEditBtn() {
        context.emit("edit");
      },
      clickRemoveBtn() {
        context.emit("remove");
      },
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  margin: 45px 0 5px;
  .account-name {
    flex: 1;
    font-weight: bold;
  }
}

.box-menu {
  .item-menu {
    cursor: pointer;
    padding: 5px 20px;
    font-weight: 600;
    &:hover {
      color: var(--vt-c-white);
      background: var(--background-color);
    }
  }
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
