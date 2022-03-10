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
    name: "hyepago",
    company_name: "HelloFactory",
    format_info: {},
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
  },
});
