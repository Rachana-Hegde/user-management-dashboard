import { describe, test, expect } from "vitest";

describe("User Validation", () => {
  test("rejects invalid email", () => {
    const email = "abc";

    const valid = /\S+@\S+\.\S+/.test(email);

    expect(valid).toBe(false);
  });

  test("accepts valid email", () => {
    const email = "john@gmail.com";

    const valid = /\S+@\S+\.\S+/.test(email);

    expect(valid).toBe(true);
  });
});