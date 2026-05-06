import { getAllHabits } from "@/services/habitService";
import { useHabitStore } from "./useHabitStore";

jest.mock("../services/habitService", () => ({
  getAllHabits: jest.fn(),
}));

const mockGetAllHabits = jest.mocked(getAllHabits);

describe("useHabitStore tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("store should have habits and fetchHabits function", () => {
    const store = useHabitStore.getState();
    expect(store.habits).toEqual([]);
    expect(store.fetchHabits).toBeInstanceOf(Function);
  });

  test("fetchHabits should populate habits in store", async () => {
    const mockHabits = [
      { title: "Wake up at 5 am", _id: "1a", isArchived: false },
    ];

    mockGetAllHabits.mockResolvedValue(mockHabits);

    await useHabitStore.getState().fetchHabits();

    expect(useHabitStore.getState().habits).toEqual(mockHabits);
    expect(mockGetAllHabits).toHaveBeenCalledTimes(1);
  });
});
