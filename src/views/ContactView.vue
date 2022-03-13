<template>
  <main>
    <n-card class="main-card">
      <div class="container">
        <div
          v-for="(contact, index) in contacts"
          :key="`contact-item-${index}`"
        >
          <ContactItem
            :contact="contact"
            @edit="clickEditContactButton(contact)"
            @remove="clickRemoveButton(contact)"
          />
        </div>
      </div>
    </n-card>

    <n-modal v-model:show="showContactModal" transform-origin="center">
      <n-card style="width: 550px" role="dialog" aria-modal="true">
        <ContactForm
          :contactData="modalData.contact"
          @submit="onSubmitContactForm"
        />
      </n-card>
    </n-modal>

    <n-modal v-model:show="showDeleteConfirm" transform-origin="center">
      <n-card style="width: 450px" role="dialog" aria-model="true">
        <DeleteConfirm
          @cancel="showDeleteConfirm = false"
          @discard="removeContact"
        />
      </n-card>
    </n-modal>
  </main>
</template>

<script lang="ts">
import { useDataStore } from "@/stores/data";
import type { Contact } from "@/models/contact.interface";
import ContactItem from "@/components/ContactItem.vue";
import ContactForm from "@/components/ContactForm.vue";
import DeleteConfirm from "@/components/DeleteConfirm.vue";

export default {
  components: { ContactItem, ContactForm, DeleteConfirm },
  setup() {
    return {
      data: useDataStore(),
    };
  },
  data() {
    return {
      modalData: { contact: null },
      showContactModal: false,
      showDeleteConfirm: false,
    };
  },
  computed: {
    contacts(): Array<Contact> {
      return this.data.contacts;
    },
  },
  methods: {
    clickRemoveButton(contact: Contact): void {
      this.modalData = { contact };
      this.showDeleteConfirm = true;
    },
    clickEditContactButton(contact: Contact): void {
      contact = JSON.parse(JSON.stringify(contact)) as Contact;
      this.modalData = { contact };
      this.showContactModal = true;
    },
    onSubmitContactForm(contact: Contact): void {
      this.showContactModal = false;
      if (this.modalData.contact !== null) {
        this.updateContact(contact);
      } else {
        this.addContact(contact);
      }
    },
    addContact(contact: Contact): void {
      // TODO: Create Contact
      this.data.createContact(contact);
    },
    updateContact(contact: Contact): void {
      // TODO: Update Contact
      this.data.updateContact(contact);
    },
    removeContact(): void {
      if (!this.modalData.contact) {
        return;
      }
      // TODO: Remove Contact
      this.data.removeContact(this.modalData.contact);
      this.modalData = { contact: null };
      this.showDeleteConfirm = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 30px;
}
</style>
