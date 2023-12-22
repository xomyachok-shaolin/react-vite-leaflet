import React, { FC, useEffect, Suspense, useCallback, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { MenuList, MenuChild } from "@/models/menu.interface";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { userState } from "@/stores/user";
import { useRecoilState } from "recoil";

import type { MenuDataItem } from "@ant-design/pro-layout";
import ProLayout from "@ant-design/pro-layout";
import {
  SmileOutlined, HeartOutlined,
  FrownOutlined, GlobalOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import RightContent from "./components/RightContent";
import LogoIcon from "@/assets/logo/rosatom1.svg?react";
import Footer from "./components/Footer";

const history = createBrowserHistory();

const IconMap: { [key: string]: React.ReactNode } = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  frown: <FrownOutlined />,
  earth: <GlobalOutlined />,
};

const LayoutPage: FC = ({ }) => {
  // const { data: menuList, error } = useGetCurrentMenus();

  const menuList = [
    {
      path: '/projects',
      name: 'Проекты',
      icon: 'smile',
    },
    {
      path: '/viewer',
      name: 'Обозреватель',
      icon: 'earth',
    },
    {
      path: '/404',
      name: '404',
      locale: 'menu.notfound',
      icon: 'frown',
    }
  ]

  const [user, setUser] = useRecoilState(userState);
  const [pathname, setPathname] = useState("/welcome");
  const { device, collapsed, newUser, settings } = user;
  const isMobile = device === "MOBILE";
  // const { driverStart } = useGuide();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [navigate, location]);

  const toggle = () => {
    setUser({ ...user, collapsed: !collapsed });
  };

  const initMenuListAll = (menu: MenuList) => {
    const MenuListAll: MenuChild[] = [];
    menu.forEach((m) => {
      if (!m?.children?.length) {
        MenuListAll.push(m);
      } else {
        m?.children.forEach((mu) => {
          MenuListAll.push(mu);
        });
      }
    });
    return MenuListAll;
  };

  const menuDataRender = () => {
    const flattenedMenu = [];

    for (const menuItem of menuList) {
      // Add the top-level menu item
      flattenedMenu.push({
        ...menuItem,
        icon: menuItem.icon && IconMap[menuItem.icon],
      });

      if (menuItem.children && menuItem.children.length > 0) {
        // Handle submenus
        for (const subMenuItem of menuItem.children) {
          flattenedMenu.push({
            ...subMenuItem,
            icon: subMenuItem.icon && IconMap[subMenuItem.icon],
          });
        }
      }
    }

    return flattenedMenu;
  };

  return (
    <ProLayout
      collapsed={undefined}
      location={{
        pathname: location.pathname,
      }}
      {...settings}
      onCollapse={undefined}
      headerTitleRender={() => <LogoIcon />}
      menuHeaderRender={undefined}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: "/",
          breadcrumbName: "Главная",
        },
        ...routers,
      ]}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
      footerRender={() => <Footer />}
      logo={<LogoIcon width={90} height={45} />}

    >
      <Outlet />
    </ProLayout>
  );
};

export default LayoutPage;
