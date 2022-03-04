import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    bodyFormats: [
      { _id: "format_01", name: "Format_01" },
      { _id: "format_02", name: "Format_02" },
    ],
  }),
});
