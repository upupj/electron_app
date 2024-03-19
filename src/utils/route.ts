const route = {
  path: "/",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "首页",
      component: "./home",
    },
    {
      path: "/robot",
      name: "robot",
      component: "./robot",
    },
  ],
};

export default route;
