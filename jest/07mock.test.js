describe("test jest.fn", () => {
  it("should jest fn", () => {
    const jestFn = jest.fn((val) => {
      return val;
    });
    const pramas = 1;
    const res = jestFn(pramas);
    expect(res).toBe(1);
    expect(jestFn).toHaveBeenCalled();
    expect(jestFn).toHaveBeenCalledTimes(1);
    expect(jestFn).toHaveBeenCalledWith(pramas);
  });
});

describe("test jest.mock", () => {
 
  it("should jest.mock", () => {
    jest.mock("../src/06mock", () => {
      return 5;
    });
    const mockFn = require("../src/06mock");
    expect(mockFn).toBe(5);
  });
});

describe("test jest.spyOn.", () => {
  it("should jest.spyOn", () => {
    const obj = require("../src/07spyOn");
    const spy = jest.spyOn(obj.default, "get");
    expect(spy()).toBe("牛");
    expect(spy).toHaveBeenCalled();
  });

  it("should jest.spyOn", () => {
    const obj = require("../src/07spyOn");
    const spy = jest.spyOn(obj.default, "get").mockReturnValue("好牛");
    expect(spy()).toBe("好牛");
    expect(spy).toHaveBeenCalled();
  });
});
