// import { test01 } from "../src/demo01";
const demo01 = require("../src/01demo");

// expect 期望
// toBe 匹配器

const { test01 } = demo01;
test("test01", () => {
  expect(test01(120)).toBe("土豪");
});