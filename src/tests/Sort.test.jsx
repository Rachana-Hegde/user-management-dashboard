import { describe, test, expect } from "vitest";

describe("Sorting Logic", () => {
  test("sorts users alphabetically", () => {
    const users = [
      { firstName: "John" },
      { firstName: "Alice" },
      { firstName: "David" },
    ];

    users.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );

    expect(users[0].firstName).toBe("Alice");
    expect(users[1].firstName).toBe("David");
    expect(users[2].firstName).toBe("John");
  });
});