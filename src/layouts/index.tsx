import { ProLayout } from "@ant-design/pro-components";
import route from "@/utils/route";
import { Link, Outlet } from "umi";

const Layout = () => {
  return (
    <ProLayout
      route={route}
      menuItemRender={(item, defaultDom) => {
        return <Link to={item.path || "/"}>{defaultDom}</Link>;
      }}
      layout="top"
      token={{
        sider: {
          colorMenuBackground: "#fff",
          colorTextMenuItemHover: "#F08300",
          colorTextMenuSelected: "#F08300",
          colorBgMenuItemSelected: "#fff8e6",
        },
      }}
    >
      <Outlet />
    </ProLayout>
  );
};

export default Layout;
