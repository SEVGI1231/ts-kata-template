import sum from "./skeleton";

test("sum adds two numbers", () => {
  expect(sum(4, 3)).toBe(7);
});
test("sum adds two numbers", () => {
  expect(sum(5, 5)).toBe(10);
  expect(sum(-10, 3)).toBe(-7);
});
