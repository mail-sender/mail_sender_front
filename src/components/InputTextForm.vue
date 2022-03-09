<template>
  <div class="input-form">
    <div class="title">
      <span v-if="title">{{ title }}</span>
    </div>

    <div class="container">
      <div v-if="message" class="message">
        {{ message }}
      </div>

      <n-input type="text" v-model:value="text" placeholder="Input Text" />

      <div class="box-footer">
        <n-button
          type="primary"
          strong
          block
          :disabled="!text"
          size="large"
          @click="clickSubmitBtn"
          >{{ submitText }}</n-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: String,
    message: String,
    submitText: { type: String, default: "Submit" },
  },
  setup(props, context) {
    const text = ref("");
    return {
      text,
      clickSubmitBtn() {
        context.emit("submit", text);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.title > span {
  font-weight: bold;
}
.box-footer {
  margin-top: 20px;
}
</style>
