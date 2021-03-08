function fetchData(fn) {
  setTimeout(() => {
    fn("fetch");
  }, 2000);
}

/**
 * 模拟axios
 */
function fetchPromiseData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}

/**
 * 模拟接口一场
 */
function fetchErrorData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('1')
      reject('404');
    }, 1000);
  });
}


export { fetchData,fetchPromiseData,fetchErrorData };
