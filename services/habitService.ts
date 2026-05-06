//get all habits

import { restApi } from "@/api/restClient";
import { Habit } from "@/types/habit";

export const getAllHabits = (): Promise<Habit[]> => {
  return restApi("/habits");
};
