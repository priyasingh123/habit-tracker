import { DayRecordStore } from "@/types/days";
import { create } from "zustand";

export const useDayRecordStore = create<DayRecordStore>((set) => ({
  date: null,
  setStoreDate: (date) => set({ date }),
}));
