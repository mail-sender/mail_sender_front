import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    bodyFormats: [
      { _id: "format_01", name: "Format_01" },
      { _id: "format_02", name: "Format_02" },
    ],
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
      this.bodyFormats.push({ _id: id.toString(), name });
    },
  },
});
