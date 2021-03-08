import { func1 } from "../src/03es6";
/**
 * 1、安装babel
 * 2、配置.babelrc
 * 3、yarn test
 * 
 其实在Jest里有一个babel-jest组件，我们在使用yarn test的时候，它先去检测开发环境中是否安装了babel，也就是查看有没有bable-core，如果有bable-core就会去查看.babelrc配置文件，根据配置文件进行转换，转换完成，再进行测试。
 */
test('测试es6', () => {
    expect(func1(19)).toBe('成年人')
})