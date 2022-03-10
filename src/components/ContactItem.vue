<template>
  <div class="box-contact">
    <div class="header">
      <n-popover :overlap="menuOverlap" placemnet="left" trigger="click">
        <template #trigger>
          <font-awesome-icon icon="ellipsis-vertical" />
        </template>

        <div class="box-popover-menu">
          <div class="item-menu" @click="clickEditBtn">수정</div>
          <div class="item-menu" @click="clickRemoveBtn">삭제</div>
        </div>
      </n-popover>
    </div>

    <div class="box-content-table">
      <div class="item">
        <div class="label">NAME</div>
        <div class="value">{{ contact.name }}</div>
      </div>
      <div class="item">
        <div class="label">EMAIL</div>
        <div class="value">{{ contact.email }}</div>
      </div>
      <div class="item">
        <div class="label">COMPANY NAME</div>
        <div class="value">{{ contact.company_name }}</div>
      </div>

      <div
        v-for="(key, index) in infoKeys"
        :key="`contact-info-${contact._id}-${index}`"
        class="item"
      >
        <div class="label">{{ key.toUpperCase() }}</div>
        <div class="value">{{ contact.format_info[key] }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Contact } from "@/models/contact.interface";

/**
 * props : contact (type: Contact)
 * emit event: "edit", "remove"
 */

export default defineComponent({
  props: {
    contact: {
      type: Object as Contact,
      required: true,
    },
  },
  setup(_, context) {
    return {
      menuOverlap: ref(false),
      clickEditBtn() {
        context.emit("edit");
      },
      clickRemoveBtn() {
        context.emit("remove");
      },
    };
  },
  computed: {
    infoKeys() {
      return Object.keys(this.contact.format_info);
    },
  },
});
</script>

<style scoped lang="scss">
.header {
  text-align: right;
}
</style>
