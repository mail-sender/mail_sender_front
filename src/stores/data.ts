import { defineStore } from "pinia";
import type { BodyFormat } from "@/components/bodyFormat.interface";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    bodyFormats: [
      { _id: "format_01", name: "Format_01", content: "" },
      { _id: "format_02", name: "Format_02", content: "" },
    ] as Array<BodyFormat>,
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
