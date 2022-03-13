import { defineStore } from "pinia";
import type { BodyFormat } from "@/models/bodyFormat.interface";
import type { Contact } from "@/models/contact.interface";

const defaultBodyFormats: Array<BodyFormat> = [
  { _id: "format_01", name: "Format_01", content: "" },
  { _id: "format_02", name: "Format_02", content: "" },
];

const defaultContacts: Array<Contact> = [
  {
    _id: "contact_01",
    email: "hyepago@gmail.com",
    name: "hyejin",
    format_info: {
      nickname: "chloe",
      company: "HelloFactory",
    },
  },
];

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    bodyFormats: defaultBodyFormats,
    contacts: defaultContacts,
  }),
  getters: {
    bodyFormatMenus(state): Array<any> {
      return state.bodyFormats.map((bodyFormat: any) => {
        const key: string = bodyFormat._id;
        return { label: bodyFormat.name, key, path: `/bodyFormat/${key}` };
      });
    },
  },
  actions: {
    createBodyFormat(name: string): void {
      const id = Math.random() * 9999;
      this.bodyFormats.push({
        _id: id.toString(),
        name,
        content: "",
      } as BodyFormat);
    },
    remoteBodyFormat(id: string): void {
      const index: number = this.bodyFormats.findIndex(
        (bodyFormat) => bodyFormat._id === id
      );
      if (~index) {
        this.bodyFormats.splice(index, 1);
      }
    },
    findContactIndex(id: string): number {
      return this.contacts.findIndex((c: Contact) => c._id === id);
    },
    createContact(contact: Contact): void {
      const id = Math.random() * 9999;
      contact._id = id.toString();
      this.contacts.push(contact);
    },
    updateContact(contact: Contact): void {
      const index = this.findContactIndex(contact._id);
      if (~index) {
        this.contacts[index] = contact;
        this.contacts = [...this.contacts];
      }
    },
    removeContact(contact: Contact): void {
      const index = this.findContactIndex(contact._id);
      if (~index) {
        this.contacts.splice(index, 1);
      }
    },
  },
});
