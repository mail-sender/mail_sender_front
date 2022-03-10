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

        <div class="box-popover-menu">
          <div class="item-menu" @click="clickEditBtn">수정</div>
          <div class="item-menu" @click="clickRemoveBtn">삭제</div>
        </div>
      </n-popover>
    </div>
    <div class="box-content-table">
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
  setup(_, context) {
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

.btn-change {
  padding-right: 20px;
}
</style>
