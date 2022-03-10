<template>
  <div class="box-contact">
    {{ contact.email }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Contact } from "@/models/contact.interface";

export default defineComponent({
  props: {
    contact: {
      type: Object as Contact,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
