<template>
  <div class="input-form">
    <div class="title">로그인</div>

    <div class="sub-title">이메일로 로그인</div>
    <div class="box-input">
      <n-form ref="formRef" :label-width="80" :model="user" :rules="rules">
        <n-form-item label="EMAIL" path="email">
          <n-input
            v-model:value="user.email"
            type="email"
            placeholder="Enter your email"
          />
        </n-form-item>
        <n-form-item label="PASSWORD" path="password">
          <n-input
            type="password"
            v-model:value="user.password"
            placeholder="Enter your password"
          />
        </n-form-item>

        <n-form-item>
          <n-button type="primary" strong block size="large" @click="doLogin"
            >로그인</n-button
          >
        </n-form-item>
      </n-form>
    </div>

    <div class="sub-title">소셜 계정으로 로그인</div>

    <div class="box-register-msg">
      <span>아직 회원이 아니신가요?</span>
      <n-button quaternary size="large" type="primary" strong @click="doSignUp"
        >회원가입</n-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, context) {
    const formRef = ref(null);
    const user = ref({
      email: "",
      password: "",
    });

    return {
      formRef,
      user,
      rules,
      doLogin(e: MouseEvent) {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          if (!errors) {
            context.emit("doLogin", user);
          }
        });
      },
      doSignUp() {
        context.emit("doSignUp");
      },
    };
  },
});

const rules = {
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
};
</script>

<style scoped lang="scss">
.box-register-msg {
  font-size: 1rem;
  text-align: right;
}
</style>
