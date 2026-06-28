import { describe, test, expect } from "vitest";

describe("Delete User", () => {
  test("removes selected user", () => {
    const users = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ];

    const updatedUsers = users.filter(
      (user) => user.id !== 2
    );

    expect(updatedUsers).toHaveLength(2);
    expect(updatedUsers.find((u) => u.id === 2)).toBeUndefined();
  });
});