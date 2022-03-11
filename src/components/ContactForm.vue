<template>
  <div>
    <n-form :label-width="150" :model="contact" :rules="rules" ref="formRef">
      <n-form-item label="NAME" path="name" label-placement="left">
        <n-input v-model:value="contact.name" placeholder="Enter name" />
      </n-form-item>

      <n-form-item label="EMAIL" path="email" label-placement="left">
        <n-input
          type="email"
          v-model:value="contact.email"
          placeholder="Enter email"
        />
      </n-form-item>

      <n-form-item
        label="COMPANY NAME"
        path="company_name"
        label-placement="left"
      >
        <n-input
          v-model:value="contact.company_name"
          placeholder="Enter company name"
        />
      </n-form-item>

      <n-form-item label="FORMAT INFO"
        path="format_info" label-placement="left">
          <n-dynamic-input
            v-model:value="infoList"
            preset="pair"
            key-placeholder="Please input the key"
            value-placeholder="Please input the value"
          />
      </n-form-item>

      <n-form-item>
        <div class="box-submit">
          <n-button type="primary" strong
            block @click="onSubmit">SUBMIT</n-button>
        </div>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Contact } from "@/models/contact.interface";

export default defineComponent({
  props: ["contactData"],
  setup(props, context) {
    const formRef = ref(null);
    let contact: Contact = ref({} as Contact);
    const list = [];
    if (props.contactData !== null) {
      contact = ref(props.contactData);
      const formatInfo = props.contactData.format_info || {}
      const infoKeys = Object.keys(formatInfo);
      for (const key of infoKeys) {
        list.push({ key, value: formatInfo[key] });
      }
    }
    const infoList = ref(list);
    return {
      formRef,
      contact,
      infoList,
      onSubmit(e) {
        e.preventDefault();
        formRef.value.validate((errors) => {
          if (!errors) {
            context.emit("submit", contact.value);
          }
        });
      },
    };
  },
});

const rules = {
  name: {
    required: true,
    message: "Please input name",
    trigger: ["input"],
  },
  email: {
    required: true,
    message: "Please input email",
    trigger: ["input"],
  },
  company_name: {
    required: true,
    message: "Please input company name",
    trigger: ["input"],
  },
  // format_info
};
</script>

<style scoped lang="scss">
.box-submit {
  width: 100%;
  text-align: center;
}
</style>
