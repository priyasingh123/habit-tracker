import { getAllHabits } from "@/services/habitService";
import { HabitStore } from "@/types/habit";
import { create } from "zustand";

export const useHabitStore = create<HabitStore>((set) => ({
  habits: [],
  fetchHabits: async () => {
    const habits = await getAllHabits();
    set({ habits });
  },
}));
