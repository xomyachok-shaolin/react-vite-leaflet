import { Tag, Space, Menu, Slider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import React from "react";

import Avatar from "./AvatarDropdown";
// import HeaderDropdown from "../HeaderDropdown";
// import HeaderSearch from "../HeaderSearch";
// import "./index.less";
import classes from "./index.module.less";
import { useRecoilState } from "recoil";
import { userState } from "@/stores/user";

export type SiderTheme = "light" | "dark";

const ENVTagColor = {
  dev: "orange",
  test: "green",
  pre: "#87d068",
};

const GlobalHeaderRight: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);

  const { settings } = user;
  let className = classes.right;

  if (
    (settings.navTheme === "dark" && settings.layout === "top") ||
    settings.layout === "mix"
  ) {
    className = `${classes.right} ${classes.dark}`;
  }
  return (
    <Space direction="horizontal"></Space>
    // <Space className={className}>
    //   <HeaderSearch
    //     className={`${classes.action} ${classes.search}`}
    //     placeholder="站内搜索"
    //     defaultValue="Ant Design"
    //     options={[
    //       {
    //         label: <a href="next.ant.design">Ant Design</a>,
    //         value: "Ant Design",
    //       },
    //       {
    //         label: <a href="https://protable.ant.design/">Pro Table</a>,
    //         value: "Pro Table",
    //       },
    //       {
    //         label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
    //         value: "Pro Layout",
    //       },
    //     ]}
    //     onSearch={value => {
    //       console.log('input', value);
    //     }}
    //   />
      
    //   <Avatar />

      
    // </Space>
  );
};
export default GlobalHeaderRight;
