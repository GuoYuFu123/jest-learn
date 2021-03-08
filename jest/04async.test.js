import { fetchData, fetchPromiseData, fetchErrorData } from "../src/04async";

/**
 * 用单个参数调用 done，而不是将测试放在一个空参数的函数。 Jest会等done回调函数执行结束后，结束测试。
 */
test("测试async", (done) => {
  fetchData((data) => {
    expect(data).toBe("fetch");
    done();
  });
});

/**
 * 一定不要忘记把 promise 作为返回值⸺如果你忘了 return 语句的话，在 fetchData 返回的这个 promise 被 resolve、then() 有机会执行之前，测试就已经被视为已经完成了
 */
test("测试Promise", () => {
  return fetchPromiseData().then((res) => {
    expect(res).toBe(2);
  });
});

/**
 * 请确保添加 expect.assertions 来验证一定数量的断言被调用。
 */
test("测试Error", () => {
  expect.assertions(); // 断言，必须走一次expect
  return fetchErrorData().catch((e) => {
    expect(e.toString().includes("404")).toBe(true);
  });
});

/**
 * 通过async await
 */
test("测试async-await", () => {
  return expect(fetchPromiseData()).resolves.toBe(2);
});
test("测试async-await2", async () => {
  const data = await fetchPromiseData();
  return expect(data).toEqual(2);
});
