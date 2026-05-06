export interface Habit {
  _id: string;
  title: string;
  isArchived: boolean;
}

export interface HabitStore {
  habits: Habit[];
  fetchHabits: () => Promise<void>;
}
