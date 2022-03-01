<template>
  <div>
    <n-form :label-width="150" :model="account" :rules="rules" ref="formRef">
      <n-form-item
        label="ACCOUNT NAME"
        path="account_name"
        label-placement="left"
      >
        <n-input
          v-model:value="account.account_name"
          placeholder="Enter Accout Name"
        />
      </n-form-item>

      <n-form-item label="NAME" path="name" label-placement="left">
        <n-input v-model:value="account.name" placeholder="Enter your name" />
      </n-form-item>

      <n-form-item label="EMAIL" path="email" label-placement="left">
        <n-input v-model:value="account.email" placeholder="Enter your email" />
      </n-form-item>

      <n-form-item label="SMTP SERVER" path="smtp" label-placement="left">
        <n-select v-model:value="account.smtp" :options="smtpOptions" />
      </n-form-item>

      <n-form-item>
        <div class="box-submit">
          <n-button type="primary" strong @click="onSubmit">SUBMIT</n-button>
        </div>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Account } from "@/models/account.interface";

export default defineComponent({
  props: ["accountData"],
  setup(props, context) {
    const formRef = ref(null);
    let account: Account = ref({} as Account);
    if (props.accountData !== null) {
      account = ref(props.accountData);
    }
    return {
      formRef,
      account,
      rules: rules,
      smtpOptions: [
        { label: "Google", value: "google" },
        { label: "Naver", value: "naver" },
      ],
      onSubmit(e) {
        e.preventDefault();
        formRef.value.validate((errors) => {
          if (!errors) {
            context.emit("submit", account.value);
          }
        });
      },
    };
  },
});

const rules = {
  accountName: {
    required: true,
    message: "Please input your Account Name",
    trigger: ["input"],
  },
  name: {
    required: true,
    message: "Please input your Name",
    trigger: ["input"],
  },
  email: {
    required: true,
    message: "Please input your Email",
    trigger: ["input"],
  },
  smtp: {
    required: true,
    message: "Please input your SMTP Server",
    trigger: ["input"],
  },
};
</script>

<style scoped lang="scss">
.box-submit {
  width: 100%;
  text-align: center;
}
</style>
