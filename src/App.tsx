import React, { Suspense, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import RenderRouter from "./routes";

import "./App.less";

import { useGetCurrentUser } from "./api";
import { createBrowserHistory } from "history";
import { useRecoilState } from "recoil";
import { userState } from "./stores/user";
import moment from "moment";

import moment from "moment";

const history = createBrowserHistory();

const App: React.FC = () => {

  return (
    <ConfigProvider locale={ru_RU} componentSize="middle">
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
