/**
 *  运行顺序：会顺序先运行describe里的代码块，将test块入栈，describe的逻辑运算完毕，再统一执行test
 */

describe("describe group 11", () => {
  console.log("11");

  describe("describe group 11-11", () => {
    console.log("11-11");
    it("should 11-11-test", async () => {
      console.log("11-11-test");
    });
  });
});

describe("describe group 22", () => {
  console.log("22");
  describe("describe group 22-22", () => {
    console.log("22-22");
    it("should 22-22-test", async () => {
      console.log("22-22-test");
    });
  });
});

/**
 * 11
 * 11-11
 * 22
 * 22-22
 * 11-11-test
 * 22-22-test
 */
