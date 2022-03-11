<template>
  <main>
    <n-card class="main-card">
      <div class="container">
        <div
          v-for="(contact, index) in contacts"
          :key="`contact-item-${index}`"
        >
          <ContactItem :contact="contact"
            @edit="clickEditContactButton(contact, index)" />
        </div>
      </div>
    </n-card>

    <n-modal v-model:show="showContactModal" transform-origin="center">
      <n-card style="width: 550px" role="dialog" aria-modal="true">
        <ContactForm :contactData="modalData.contact" />
      </n-card>
    </n-modal>
  </main>
</template>

<script lang="ts">
import { useDataStore } from "@/stores/data";
import type { Contact } from "@/models/contact.interface";
import ContactItem from "@/components/ContactItem.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: { ContactItem, ContactForm },
  setup() {
    return {
      data: useDataStore(),
    };
  },
  data() {
    return {
      modalData: { contact: null, index: null },
      showContactModal: false,
    };
  },
  computed: {
    contacts(): Array<Contact> {
      return this.data.contacts;
    },
  },
  methods: {
    clickEditContactButton(contact: Contact, index: number) {
      contact = JSON.parse(JSON.stringify(contact)) as Contact;
      this.modalData = { contact, index };
      this.showContactModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 30px;
}
</style>
