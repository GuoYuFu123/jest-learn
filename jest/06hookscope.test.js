import DaBaojian from "../src/05hook";
const dabaojiao = new DaBaojian();

/**
 * describe  进行测试分组，类似作用域
 *
 * 作用域规则：
 * 钩子函数在父级分组可作用域子集，类似继承
 * 钩子函数同级分组作用域互不干扰，各起作用
 * 先执行外部的钩子函数，再执行内部的钩子函数
 *
 */

describe("全局作用域", () => {
  console.log("我是全局作用域");
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
    afterEach(() => {
      console.log("给了50元小费");
    });
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
    afterEach(() => {
      console.log("给了80元小费");
    });
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
});
