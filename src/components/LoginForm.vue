<template>
  <div class="input-form">
    <div class="title">로그인</div>

    <div class="sub-title">이메일로 로그인</div>
    <div class="box-input">
      <n-input
        v-model:value="email"
        type="email"
        placeholder="이메일을 입력하세요"
        class="input"
      />
      <n-input
        v-model:value="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        class="input"
      />
      <n-button type="primary" strong block size="large">로그인</n-button>
    </div>

    <div class="sub-title">소셜 계정으로 로그인</div>

    <div class="box-register-msg">
      <span>아직 회원이 아니신가요?</span>
      <n-button quaternary size="large" type="primary"
        strong="true" @click="doSignUp">회원가입</n-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, context) {
    return {
      email: ref(null),
      password: ref(null),
      doSignUp () {
        context.emit('doSignUp');
      }
    };
  },
});
</script>

<style scoped lang="scss">
.box-register-msg {
  font-size: 1rem;
  text-align: right;
}
</style>
