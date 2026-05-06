import { restApi } from "@/api/restClient";
import { getAllHabits } from "./habitService";

jest.mock("../api/restClient", () => {
  return {
    restApi: jest.fn(),
  };
});

const mockRestApi = jest.mocked(restApi);

describe("habitService tests", () => {
  test("return response from getAllHabit", async () => {
    mockRestApi.mockResolvedValue([
      { title: "Wake up at 5 am", _id: "1a", isArchived: false },
      { title: "Run for 2 kms", _id: "2b", isArchived: false },
    ]);
    const res = await getAllHabits();
    expect(res).toEqual([
      { title: "Wake up at 5 am", _id: "1a", isArchived: false },
      { title: "Run for 2 kms", _id: "2b", isArchived: false },
    ]);
  });
});
