import { useDayRecordStore } from "./useDayRecordStore";

describe("useDayRecordStore tests", () => {
  test("store consists of date and setDate function", () => {
    const store = useDayRecordStore.getState();
    expect(store.date).toEqual(null);
    expect(store.setStoreDate).toBeInstanceOf(Function);
  });

  test("setStoreDate function should set date of store", async () => {
    const d = new Date().toLocaleDateString("en-CA");
    await useDayRecordStore.getState().setStoreDate(d);
    expect(useDayRecordStore.getState().date).toBe(d);
  });
});
