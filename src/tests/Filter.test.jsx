import { describe, test, expect } from "vitest";

describe("Department Filter", () => {
  test("filters users by department", () => {
    const users = [
      { department: "IT" },
      { department: "Finance" },
      { department: "IT" },
    ];

    const result = users.filter(
      (user) => user.department === "IT"
    );

    expect(result).toHaveLength(2);
  });
});