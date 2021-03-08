import DaBaojian from "../src/05hook";
const dabaojiao = new DaBaojian();

/**
 * beforeAll    开始之前执行一次
 * afterAll     结束之后执行一次
 * beforeEach   每次测试之前执行一次
 * afterEach    每次测试之后执行一次
 *
 * describe  进行测试分组，类似作用域
 */

beforeAll(() => {
  console.log("兄弟走起，大保健～～～");
});

beforeEach(() => {
  console.log("付钱，叫公主");
});

afterEach(() => {
  console.log("技术不错");
});

afterAll(() => {
  console.log("兄弟，撤了，干不动了～～～");
});

describe("小明相关", () => {
  test("测试按脚", () => {
    dabaojiao.xuanren(1);
    dabaojiao.anjiao();
    console.log(dabaojiao.fuwu);
    expect(dabaojiao.fuwu).toBe("小明为你按脚");
  });
  test("测试按脚1", () => {
    dabaojiao.xuanren(1);
    dabaojiao.anjiao1();
    console.log(dabaojiao.fuwu);
    expect(dabaojiao.fuwu).toBe("小明为你按脚1");
  });
});

describe("小红相关", () => {
  test("测试按摩", () => {
    dabaojiao.xuanren(2);
    dabaojiao.anmo();
    console.log(dabaojiao.fuwu);
    expect(dabaojiao.fuwu).toBe("小红为你按摩");
  });

  test("测试按摩1", () => {
    dabaojiao.xuanren(2);
    dabaojiao.anmo1();
    console.log(dabaojiao.fuwu);
    expect(dabaojiao.fuwu).toBe("小红为你按摩1");
  });
});
