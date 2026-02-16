import { describe, it, expect } from "vitest";
import { get } from "./axiosClient";

describe("axiosClient", () => {
  it("should expose get method", () => {
    expect(get).toBeDefined();
  });
});