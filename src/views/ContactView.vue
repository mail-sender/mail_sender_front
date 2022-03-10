<template>
  <main>
    <n-card class="main-card">
      <div class="container">
        <div
          v-for="(contact, index) in contacts"
          :key="`contact-item-${index}`"
        >
          <ContactItem :contact="contact" />
        </div>
      </div>
    </n-card>
  </main>
</template>

<script lang="ts">
import { useDataStore } from "@/stores/data";
import type { Contact } from "@/models/contact.interface";
import ContactItem from "@/components/ContactItem.vue";

export default {
  components: { ContactItem },
  setup() {
    return {
      data: useDataStore(),
    };
  },
  computed: {
    contacts(): Array<Contact> {
      return this.data.contacts;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 30px;
}
</style>
