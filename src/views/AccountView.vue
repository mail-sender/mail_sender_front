<template>
  <main>
    <n-card class="main-card">
      <div class="container-account">
        <div
          v-for="(account, index) in accountList"
          :key="`account-item-${index}`"
        >
          <AccountItem
            :account="account"
            @edit="showEditAccountForm(account, index)"
            @remove="removeAccount(index)"
          />
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
        <AccountForm
          :accountData="modalData.account"
          @submit="onSubmitAccountForm"
        />
      </n-card>
    </n-modal>
  </main>
</template>

<script lang="ts">
import AccountForm from "@/components/AccountForm.vue";
import AccountItem from "@/components/AccountItem.vue";
import type { Account } from "@/models/account.interface";

export default {
  data() {
    return {
      accountList: [] as Array<Account>,
      showAddAccountModal: false,
      modalData: { account: null, index: null },
    };
  },
  components: { AccountForm, AccountItem },
  setup() {
    return {};
  },
  methods: {
    clickAddAccount() {
      this.modalData = { account: null, index: null };
      this.showAddAccountModal = true;
    },
    onSubmitAccountForm(account: Account): void {
      this.showAddAccountModal = false;
      if (this.modalData.account !== null) {
        this.updateAccount(account);
      } else {
        this.addAccount(account);
      }
    },
    addAccount(account: Account): void {
      this.accountList.push(account);
    },
    updateAccount(account: Account): void {
      this.accountList[this.modalData.index] = account;
    },
    showEditAccountForm(account: Account, index: number): void {
      account = JSON.parse(JSON.stringify(account)) as Account;
      this.modalData = { account, index };
      this.showAddAccountModal = true;
    },
    removeAccount(index) {
      this.accountList.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.buttons {
  margin-top: 50px;
  text-align: right;
}
</style>
