<template>
  <div>
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
      <n-button quaternary size="large" type="primary" strong="true"
        >회원가입</n-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      email: ref(null),
      password: ref(null),
    };
  },
});
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 15px;
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: bold;
}
.sub-title {
  margin: 10px 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--vt-c-black-soft);
}
.box-input {
  margin-bottom: 30px;
  .input {
    margin-bottom: 10px;
  }
}

.box-register-msg {
  font-size: 1rem;
  text-align: right;
}
</style>
