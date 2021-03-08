/*
@desc： jest中的匹配器
@url： https://jestjs.io/docs/zh-Hans/expect

1、toBe 严格相等,值引用 Object.is()
2、toEqual 值相等
3、toBeNull
4、toBeUndefined
5、toBeDefined
6、toBeTruthy
7、toBeFalsy

// 数字
8、toBeGreaterThan 大于
9、toBeGreaterThanOrEqual 大于等于
10、toBeLessThan 小于
11、toBeLessThanOrEqual 小于等于

//  字符串
12、toMatch 匹配 （可以是字符串，可以是正则）

//  数组
13、toContain 是否包含


// 异常
14、toThrow 异常匹配器
*/
test("toBe测试", () => {
  expect("007").toBe("007");
});

test("toEqual测试", () => {
  const a = { num: "007" };
  expect(a).toEqual({ num: "007" });
});

test("toBeNull测试", () => {
  const a = null;
  expect(a).toBeNull();
});

test("toBeUndefined测试", () => {
  const a = undefined;
  expect(a).toBeUndefined();
});

test("toBeDefined测试", () => {
  const a = 0;
  expect(a).toBeDefined();
});

test("toBeTruthy测试", () => {
  const a = 1;
  expect(a).toBeTruthy();
});

test("toBeFalsy测试", () => {
  const a = null;
  expect(a).toBeFalsy();
});

// 数字
test("two plus two", () => {
  const value = 2 + 2; // 4
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("两个浮点数字相加", () => {
  const value = 0.1 + 0.2;
  //   expect(value).toBe(0.3); //这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行
});

test("string测试", () => {
  const str = "html, css, js";
  expect(str).toMatch("html");
  expect(str).toMatch(/ht.l/);
  expect(str).not.toMatch("java");
});

test("array测试", () => {
  const arr = ["html", "css", "js"];
  expect(arr).toContain("html");

  const arrSet = new Set(arr);
  expect(arrSet).toContain("html");
});

test("array测试", () => {
  const arr = ["html", "css", "js"];
  expect(arr).toContain("html");

  const arrSet = new Set(arr);
  expect(arrSet).toContain("html");
});


function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow;
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow("you are using the wrong JDK");
  expect(compileAndroidCode).toThrow(/JDK/);
});
