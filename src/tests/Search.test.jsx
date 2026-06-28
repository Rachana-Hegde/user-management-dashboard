import { describe, test, expect } from "vitest";

describe("Search Logic", () => {
  const users = [
    { firstName: "John" },
    { firstName: "Alice" },
    { firstName: "David" },
  ];

  test("filters users by first name", () => {
    const result = users.filter((user) =>
      user.firstName.toLowerCase().includes("ali")
    );

    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });
});