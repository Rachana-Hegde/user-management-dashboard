import { describe, test, expect } from "vitest";

describe("Pagination", () => {
  test("returns correct number of users per page", () => {
    const users = Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
    }));

    const page = users.slice(0, 10);

    expect(page).toHaveLength(10);
    expect(page[0].id).toBe(1);
    expect(page[9].id).toBe(10);
  });
});