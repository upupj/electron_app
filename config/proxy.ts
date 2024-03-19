/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
import { API } from "./api";

const proxySetting = {
  "/proxy": {
    // 要代理的地址
    target: API,
    pathRewrite: {
      "^/proxy": "",
    },
    changeOrigin: true,
    cookieDomainRewrite: {
      "*": "localhost", // 把相应的 cookie 域都设置成 localhost，也可以配置成自己电脑的ip，或者指定的域名
    },
  },
};
const proxy: any = {
  dev: {
    ...proxySetting,
  },
  test: {
    ...proxySetting,
  },
};

export default proxy;
