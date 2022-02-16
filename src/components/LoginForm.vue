<template>
  <div>
    <div class="title">로그인</div>

    <div class="sub-title">이메일로 로그인</div>
    <n-input
      v-model:value="email"
      type="email"
      placeholder="이메일을 입력하세요"
    />
    <n-button type="primary">로그인</n-button>

    <div class="sub-title">소셜 계정으로 로그인</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      email: ref(null),
    };
  },
});
</script>

<style scoped></style>
