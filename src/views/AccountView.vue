<template>
  <main>
    <n-card class="main-card">
      <div class="container-account">
        <div
          v-for="(account, index) in accountList"
          :key="`account-item-${index}`"
        >
          <AccountItem :account="account" />
        </div>
      </div>

      <div class="buttons">
        <n-button type="info" strong @click="clickAddAccount"
          >ADD ACCOUNT</n-button
        >
      </div>
    </n-card>

    <n-modal v-model:show="showAddAccountModal" transform-origin="center">
      <n-card style="width: 550px" role="dialog" aria-modal="true">
        <AddAccountForm @submit="onSubmitAddAccount" />
      </n-card>
    </n-modal>
  </main>
</template>

<script lang="ts">
import AddAccountForm from "@/components/AddAccountForm.vue";
import AccountItem from "@/components/AccountItem.vue";
import type { Account } from "@/models/account.interface";

export default {
  data() {
    return {
      accountList: [] as Array<Account>,
      showAddAccountModal: false,
    };
  },
  components: { AddAccountForm, AccountItem },
  setup() {
    return {};
  },
  methods: {
    clickAddAccount() {
      this.showAddAccountModal = true;
    },
    onSubmitAddAccount(account) {
      this.showAddAccountModal = false;
      this.accountList.push(account);
    },
  },
};
</script>

<style scoped lang="scss">
.main-card {
  margin: 15px 25px;
  padding: 0 45px;
  width: calc(100% - 50px);
  height: calc(100vh - #{var(--app-bar-height)} - 30px);
  .n-card__content {
    padding: 0;
  }
}

.buttons {
  margin-top: 50px;
  text-align: right;
}
</style>
