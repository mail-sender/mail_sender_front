<template>
  <div class="input-form">
    <div class="title">회원가입</div>

    <div class="box-input">
      <n-form ref="formRef" :label-width="80" :model="user" :rules="rules">
        <n-form-item label="NAME" path="name">
          <n-input v-model:value="user.name" placeholder="Enter your name" />
        </n-form-item>
        <n-form-item label="EMAIL" path="email">
          <n-input v-model:value="user.email" placeholder="Enter your email" />
        </n-form-item>
        <n-form-item label="PASSWORD" path="password">
          <n-input
            v-model:value="user.password"
            placeholder="Enter your password"
          />
        </n-form-item>
        <n-form-item label="PASSWORD CONFIRM" path="passwordConfirm">
          <n-input
            v-model:value="user.passwordConfirm"
            placeholder="Enter your passwordConfirm"
          />
        </n-form-item>

        <n-form-item>
          <n-button type="primary" strong block size="large" @click="doSignUp"
            >회원가입</n-button
          >
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const formRef = ref(null);
    return {
      formRef,
      name: ref(null),
      email: ref(null),
      password: ref(null),
      passwordConfirm: ref(null),
      user: ref({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }),
      rules,
      doSignUp(e: MouseEvent) {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          /*
          if (!errors) {
          } else {
            console.log(errors);
          }
          */
        });
      },
    };
  },
});

const rules = {
  name: {
    required: true,
    message: "Please input your name",
    trigger: ["input"],
  },
  email: {
    required: true,
    message: "Please input your email",
    trigger: ["input"],
  },
  password: {
    required: true,
    message: "Please input your password",
    trigger: ["input"],
  },
  passwordConfirm: {
    required: true,
    message: "Please input your passwordConfirm",
    trigger: ["input"],
  },
};
</script>

<style scoped></style>
